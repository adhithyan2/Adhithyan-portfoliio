export default function SectionLabel({ index, children }) {
  return (
    <span className="inline-flex items-center gap-3 align-middle">
      <span className="opacity-60 tabular-nums">{index}</span>
      <span className="w-8 h-px bg-primary/50" aria-hidden="true" />
      {children}
    </span>
  );
}