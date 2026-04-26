// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

interface BosDurumProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export function BosDurum({ count, onIncrement, onDecrement, onReset }: BosDurumProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="bg-[#F8F9FF] dark:bg-[#0B1C30] text-[#004AC6] dark:text-[#2563EB] font-['Inter'] font-bold tracking-tight text-[1.75rem] text-[#0B1C30] dark:text-[#FFFFFF] docked full-width top-0 bg-[#EFF4FF] dark:bg-[#1A2B40] h-[1px] flat no shadows flex justify-between items-center w-full px-6 py-4 sticky z-10">
      <div className="flex items-center gap-4">
      <h1 className="text-on-surface text-[1.75rem] font-bold tracking-tight">Günlük Sayaç</h1>
      </div>
      <div className="flex items-center gap-4">
      <button aria-label="Ayarlar" className="p-2 text-[#5A6C80] hover:bg-[#EFF4FF] dark:hover:bg-[#1A2B40] transition-colors rounded-full scale-95 active:scale-90 transition-transform flex items-center justify-center cursor-pointer">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </header>
      {/*  Main Canvas  */}
      <main className="flex-grow flex items-center justify-center p-6 sm:p-8 md:p-12 pb-32">
      <div className="w-full max-w-md flex flex-col items-center">
      {/*  Context Text  */}
      <p className="text-on-surface-variant font-body text-[1rem] text-center mb-8 opacity-80">Henüz hiçbir kayıt yok. Başlamak için butona dokunun.</p>
      {/*  Counter Card  */}
      <div className="bg-surface-container-lowest rounded-[1.5rem] w-full max-w-[320px] aspect-square flex flex-col items-center justify-center mb-12 relative overflow-hidden ring-1 ring-outline-variant/20">
      <div className="absolute inset-0 bg-gradient-to-br from-surface-container-lowest to-surface-container-low opacity-50 pointer-events-none"></div>
      <div className="relative z-10 flex flex-col items-center">
      <span className="font-display font-[800] text-[5rem] leading-none text-on-surface tracking-tighter opacity-40 tabular-nums">{count}</span>
      </div>
      </div>
      {/*  Controls  */}
      <div className="w-full flex gap-4 justify-center items-center">
      <button onClick={onDecrement} className="bg-secondary-container text-on-secondary-container w-[72px] h-[72px] rounded-[1rem] flex items-center justify-center hover:bg-surface-variant transition-colors group cursor-pointer" aria-label="Azalt">
      <span className="material-symbols-outlined text-[2rem] group-active:scale-90 transition-transform" data-icon="remove">remove</span>
      </button>
      <button onClick={onIncrement} className="bg-gradient-to-br from-primary to-primary-container text-on-primary w-[96px] h-[96px] rounded-[1rem] flex items-center justify-center shadow-[0_8px_32px_-12px_rgba(0,74,198,0.4)] hover:opacity-90 transition-opacity group cursor-pointer" aria-label="Artır">
      <span className="material-symbols-outlined text-[3rem] group-active:scale-95 transition-transform" data-icon="add" style={{fontVariationSettings: "'wght' 600"}}>add</span>
      </button>
      <button onClick={onReset} className="bg-tertiary text-on-tertiary w-[72px] h-[72px] rounded-[1rem] flex items-center justify-center hover:opacity-90 transition-opacity group cursor-pointer" aria-label="Sıfırla">
      <span className="material-symbols-outlined text-[2rem] group-active:scale-90 transition-transform" data-icon="refresh">refresh</span>
      </button>
      </div>
      <div className="w-full flex justify-center gap-12 mt-4 px-2">
      <span className="font-label text-[0.75rem] uppercase tracking-wider text-on-surface-variant w-[72px] text-center">Azalt</span>
      <span className="font-label text-[0.75rem] uppercase tracking-wider text-primary font-bold w-[96px] text-center">ARTIR</span>
      <span className="font-label text-[0.75rem] uppercase tracking-wider text-on-surface-variant w-[72px] text-center">Sıfırla</span>
      </div>
      </div>
      </main>
      {/*  BottomNavBar (Mobile Only)  */}
      <nav className="md:hidden bg-[#FFFFFF] dark:bg-[#0B1C30] text-[#004AC6] dark:text-[#2563EB] font-['Inter'] font-medium text-[0.75rem] uppercase tracking-wider fixed bottom-0 w-full z-50 rounded-t-3xl shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)] fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4">
      <a className="flex flex-col items-center justify-center bg-[#EFF4FF] dark:bg-[#2563EB]/20 text-[#004AC6] dark:text-[#2563EB] rounded-2xl px-5 py-2 hover:opacity-80 transition-opacity scale-98 active:scale-95 transition-all w-1/3 cursor-pointer" href="#" aria-label="Sayaç">
      <span className="material-symbols-outlined mb-1" data-icon="counter_4" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>counter_4</span>
      <span className="text-[0.65rem] tracking-[0.05em]">Sayaç</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5A6C80] dark:text-[#C3C6D7] px-5 py-2 hover:opacity-80 transition-opacity scale-98 active:scale-95 transition-all w-1/3 cursor-pointer" href="#" aria-label="Geçmiş">
      <span className="material-symbols-outlined mb-1" data-icon="history">history</span>
      <span className="text-[0.65rem] tracking-[0.05em]">Geçmiş</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5A6C80] dark:text-[#C3C6D7] px-5 py-2 hover:opacity-80 transition-opacity scale-98 active:scale-95 transition-all w-1/3 cursor-pointer" href="#" aria-label="Ayarlar">
      <span className="material-symbols-outlined mb-1" data-icon="settings">settings</span>
      <span className="text-[0.65rem] tracking-[0.05em]">Ayarlar</span>
      </a>
      </nav>
    </>
  );
}
