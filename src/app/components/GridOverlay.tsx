"use client";

interface GridOverlayProps {
  show: boolean;
}

export default function GridOverlay({ show }: GridOverlayProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-30 pointer-events-none max-w-[1400px] mx-auto px-4 sm:px-8 grid grid-cols-12 h-full">
      {Array.from({ length: 12 }).map((_, idx) => (
        <div key={idx} className="swiss-grid-line h-full flex flex-col justify-between py-2 text-[9px] font-mono text-red-500/40 select-none">
          <span>C{idx + 1}</span>
          <span>C{idx + 1}</span>
        </div>
      ))}
    </div>
  );
}
