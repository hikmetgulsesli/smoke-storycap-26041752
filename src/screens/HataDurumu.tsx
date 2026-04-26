// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Durumu
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

interface HataDurumuProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export function HataDurumu({ count, onIncrement, onDecrement, onReset }: HataDurumuProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="bg-[#F8F9FF] fixed top-0 w-full z-40">
      <div className="flex justify-between items-center w-full px-6 py-4">
      <h1 className="text-[1.75rem] font-bold text-[#0B1C30] tracking-tight font-['Inter']">Günlük Sayaç</h1>
      <div className="flex gap-4 items-center">
      <button aria-label="Ayarlar" className="text-[#004AC6] scale-95 active:scale-90 transition-transform hover:bg-[#EFF4FF] rounded-full p-2 cursor-pointer">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </div>
      <div className="bg-[#EFF4FF] h-[1px] w-full"></div>
      </header>
      {/*  Main Content Canvas  */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-32">
      {/*  Nested Depth Architecture: Low Container  */}
      <div className="bg-surface-container-low rounded-[1.5rem] p-4 w-full max-w-sm relative">
      {/*  Lowest Container: The Hero Card  */}
      <div className="bg-surface-container-lowest rounded-[1rem] p-8 flex flex-col items-center relative shadow-sm">
      {/*  Subtle Error Indicator  */}
      <div className="absolute top-4 right-4 flex items-center gap-1 text-outline-variant" title="Yerel bellek erişilemiyor, geçici oturum">
      <span className="material-symbols-outlined text-[1rem]" data-icon="cloud_off">cloud_off</span>
      </div>
      <div className="text-center mb-8 mt-4">
      <span className="text-label-md uppercase tracking-[0.05em] text-on-surface-variant font-medium">Günlük Sayaç</span>
      </div>
      {/*  Display Value  */}
      <div className="font-display text-[3.5rem] font-[800] text-on-surface leading-none mb-12 tracking-tighter tabular-nums">
                          {count}
                      </div>
      {/*  Controls  */}
      <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-4 justify-between w-full">
      <button onClick={onDecrement} className="flex-1 bg-secondary-container text-on-secondary-container rounded-xl py-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-95 cursor-pointer" aria-label="Azalt">
      <span className="material-symbols-outlined text-[1.25rem]" data-icon="remove">remove</span>
      <span className="font-label text-[0.75rem] font-medium uppercase tracking-[0.05em]">Azalt</span>
      </button>
      <button onClick={onIncrement} className="flex-[1.5] bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl py-4 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(0,74,198,0.2)] hover:opacity-95 transition-all active:scale-95 cursor-pointer" aria-label="Artır">
      <span className="material-symbols-outlined text-[1.25rem]" data-icon="add">add</span>
      <span className="font-label text-[0.75rem] font-medium uppercase tracking-[0.05em]">Artır</span>
      </button>
      </div>
      <button onClick={onReset} className="w-full bg-surface text-tertiary-container rounded-xl py-3 mt-2 flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors active:scale-95 border border-outline-variant/20 cursor-pointer" aria-label="Sıfırla">
      <span className="material-symbols-outlined text-[1.125rem]" data-icon="restart_alt">restart_alt</span>
      <span className="font-label text-[0.75rem] font-medium uppercase tracking-[0.05em]">Sıfırla</span>
      </button>
      </div>
      </div>
      </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="bg-[#FFFFFF] fixed bottom-0 left-0 w-full z-50 rounded-t-3xl shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)] md:hidden">
      <div className="flex justify-around items-center px-4 pb-8 pt-4 w-full">
      {/*  Active Item: Sayaç  */}
      <button className="flex flex-col items-center justify-center bg-[#EFF4FF] text-[#004AC6] rounded-2xl px-5 py-2 scale-98 active:scale-95 transition-all hover:opacity-80 cursor-pointer" aria-label="Sayaç">
      <span className="material-symbols-outlined icon-fill" data-icon="counter_4" data-weight="fill">counter_4</span>
      <span className="font-['Inter'] font-medium text-[0.75rem] uppercase tracking-wider mt-1">Sayaç</span>
      </button>
      {/*  Inactive Item: Geçmiş  */}
      <button className="flex flex-col items-center justify-center text-[#5A6C80] px-5 py-2 scale-98 active:scale-95 transition-all hover:opacity-80 cursor-pointer" aria-label="Geçmiş">
      <span className="material-symbols-outlined" data-icon="history">history</span>
      <span className="font-['Inter'] font-medium text-[0.75rem] uppercase tracking-wider mt-1">Geçmiş</span>
      </button>
      {/*  Inactive Item: Ayarlar  */}
      <button className="flex flex-col items-center justify-center text-[#5A6C80] px-5 py-2 scale-98 active:scale-95 transition-all hover:opacity-80 cursor-pointer" aria-label="Ayarlar">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-['Inter'] font-medium text-[0.75rem] uppercase tracking-wider mt-1">Ayarlar</span>
      </button>
      </div>
      </nav>
    </>
  );
}
