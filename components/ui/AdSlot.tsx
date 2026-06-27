export function AdSlot({ slot = 'default' }: { slot?: string }) {
  return (
    <div
      className="flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 text-sm text-slate-400"
      data-ad-slot={slot}
    >
      Advertisement
    </div>
  );
}
