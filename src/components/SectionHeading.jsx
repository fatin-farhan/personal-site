export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl space-y-2">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-7 text-slate-600">{description}</p>
      )}
    </div>
  );
}