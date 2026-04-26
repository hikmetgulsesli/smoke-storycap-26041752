// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaProps {}

export function AnaSayfa(props: AnaSayfaProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="bg-[#F8F9FF] dark:bg-[#0B1C30] text-[#004AC6] dark:text-[#2563EB] font-['Inter'] font-bold tracking-tight text-[1.75rem] font-bold text-[#0B1C30] dark:text-[#FFFFFF] docked full-width top-0 bg-[#EFF4FF] dark:bg-[#1A2B40] h-[1px] flat no shadows text-[#004AC6] font-bold text-[#5A6C80] hover:bg-[#EFF4FF] dark:hover:bg-[#1A2B40] transition-colors scale-95 active:scale-90 transition-transform flex justify-between items-center w-full px-6 py-4 sticky z-50">
      <div className="flex items-center gap-4">
      <span className="text-[1.75rem] font-bold text-[#0B1C30] dark:text-[#FFFFFF]">Smoke-storycap</span>
      </div>
      <div className="flex items-center gap-4">
      <button className="hover:bg-[#EFF4FF] dark:hover:bg-[#1A2B40] transition-colors rounded-full p-2 flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </header>
      {/*  Main Content Area  */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 bg-surface-container-low mb-24 md:mb-0">
      {/*  The Precision Ledger Counter Card  */}
      <div className="bg-surface-container-lowest rounded-[1.5rem] w-full max-w-md p-10 flex flex-col items-center gap-12">
      {/*  Display Header  */}
      <h1 className="text-title-md font-medium text-on-surface">Günlük Sayaç</h1>
      {/*  The Counter Digit  */}
      <div className="text-[4rem] font-extrabold text-on-surface leading-none tracking-tighter">
                      42
                  </div>
      {/*  Action Buttons Group  */}
      <div className="flex flex-col w-full gap-4">
      {/*  Primary Action: Artır  */}
      <button className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-medium text-label-md uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all">
      <span className="material-symbols-outlined" data-icon="add" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>add</span>
                          ARTIR
                      </button>
      {/*  Secondary Action: Azalt  */}
      <button className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-secondary-container text-on-secondary-container font-medium text-label-md uppercase tracking-wider hover:bg-surface-dim active:scale-[0.98] transition-all">
      <span className="material-symbols-outlined" data-icon="remove" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>remove</span>
                          AZALT
                      </button>
      {/*  Tertiary Action: Sıfırla  */}
      <button className="flex items-center justify-center gap-2 w-full mt-4 py-4 px-6 rounded-xl bg-tertiary text-on-tertiary font-medium text-label-md uppercase tracking-wider hover:opacity-90 active:scale-[0.98] transition-all">
      <span className="material-symbols-outlined" data-icon="refresh" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>refresh</span>
                          SIFIRLA
                      </button>
      </div>
      </div>
      </main>
      {/*  BottomNavBar (Mobile Only)  */}
      <nav className="md:hidden bg-[#FFFFFF] dark:bg-[#0B1C30] text-[#004AC6] dark:text-[#2563EB] font-['Inter'] font-medium text-[0.75rem] uppercase tracking-wider hidden fixed bottom-0 w-full z-50 rounded-t-3xl tonal-shift-from-background shadow-[0_-4px_20px_0_rgba(0,0,0,0.05)] flex flex-col items-center justify-center bg-[#EFF4FF] dark:bg-[#2563EB]/20 text-[#004AC6] dark:text-[#2563EB] rounded-2xl px-5 py-2 flex flex-col items-center justify-center text-[#5A6C80] dark:text-[#C3C6D7] px-5 py-2 hover:opacity-80 transition-opacity scale-98 active:scale-95 transition-all fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-8 pt-4">
      <button className="flex flex-col items-center justify-center bg-[#EFF4FF] dark:bg-[#2563EB]/20 text-[#004AC6] dark:text-[#2563EB] rounded-2xl px-5 py-2 hover:opacity-80 transition-opacity scale-98 active:scale-95 transition-all">
      <span className="material-symbols-outlined mb-1" data-icon="counter_4">counter_4</span>
      <span className="text-[0.75rem] uppercase tracking-wider font-medium">Sayaç</span>
      </button>
      <button className="flex flex-col items-center justify-center text-[#5A6C80] dark:text-[#C3C6D7] px-5 py-2 hover:opacity-80 transition-opacity scale-98 active:scale-95 transition-all">
      <span className="material-symbols-outlined mb-1" data-icon="history">history</span>
      <span className="text-[0.75rem] uppercase tracking-wider font-medium">Geçmiş</span>
      </button>
      <button className="flex flex-col items-center justify-center text-[#5A6C80] dark:text-[#C3C6D7] px-5 py-2 hover:opacity-80 transition-opacity scale-98 active:scale-95 transition-all">
      <span className="material-symbols-outlined mb-1" data-icon="settings">settings</span>
      <span className="text-[0.75rem] uppercase tracking-wider font-medium">Ayarlar</span>
      </button>
      </nav>
    </>
  );
}
