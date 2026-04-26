import { useCallback, useEffect, useRef, useState } from 'react';
import { storage } from './utils/storage';
import { AnaSayfa } from './screens/AnaSayfa';
import { BosDurum } from './screens/BosDurum';
import { HataDurumu } from './screens/HataDurumu';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [storageAvailable, setStorageAvailable] = useState<boolean>(true);
  const skipNextPersist = useRef(false);

  // Initialize from localStorage on mount
  useEffect(() => {
    const available = storage.available;
    setStorageAvailable(available);
    if (available) {
      setCount(storage.getCount());
    }
  }, []);

  // Persist to localStorage whenever count changes
  useEffect(() => {
    if (!storageAvailable) return;
    if (skipNextPersist.current) {
      skipNextPersist.current = false;
      return;
    }
    storage.setCount(count);
  }, [count, storageAvailable]);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const handleReset = useCallback(() => {
    skipNextPersist.current = true;
    setCount(0);
    if (storageAvailable) {
      storage.reset();
    }
  }, [storageAvailable]);

  // Choose screen based on state
  const screen = !storageAvailable
    ? 'error'
    : count === 0
      ? 'empty'
      : 'home';

  const sharedProps = {
    count,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {screen === 'home' && <AnaSayfa {...sharedProps} />}
      {screen === 'empty' && <BosDurum {...sharedProps} />}
      {screen === 'error' && <HataDurumu {...sharedProps} />}
    </div>
  );
}
