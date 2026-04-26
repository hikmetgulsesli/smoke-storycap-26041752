/**
 * localStorage wrapper with silent fallback for private/incognito mode.
 * Returns { available: boolean } to signal whether persistence works.
 */

const STORAGE_KEY = 'daily-counter';

function isStorageAvailable(): boolean {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

export const storage = {
  available: isStorageAvailable(),

  getCount(): number {
    if (!this.available) return 0;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === null) return 0;
      const parsed = parseInt(raw, 10);
      return Number.isNaN(parsed) ? 0 : parsed;
    } catch {
      return 0;
    }
  },

  setCount(value: number): void {
    if (!this.available) return;
    try {
      localStorage.setItem(STORAGE_KEY, String(value));
    } catch {
      // Ignore quota exceeded or other errors
    }
  },

  reset(): void {
    if (!this.available) return;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  },
};
