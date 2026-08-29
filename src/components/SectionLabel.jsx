export default function SectionLabel({ index, children }) {
  return (
    <span className="eyebrow inline-flex items-center gap-3 align-middle text-[#666] dark:text-[#9a9a9a]">
      <span className="tabular-nums opacity-70">{index}</span>
      <span className="w-8 h-px bg-[#9a9a9a] dark:bg-white/25" aria-hidden="true" />
      {children}
    </span>
  );
}