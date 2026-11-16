const STEPS = [
  "SetupIntent and signed authorization.",
  "Itemized invoice per appointment.",
  "Appointment records.",
];

export function LogoStrip() {
  return (
    <section aria-label="The three setup steps" className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-16">
      <p className="text-base text-slate-600">
        The three steps in the checklist, in order.
      </p>
      <ol className="mt-6 flex flex-col gap-y-4 text-base text-slate-900 sm:flex-row sm:gap-x-10">
        {STEPS.map((step, i) => (
          <li key={step} className="font-semibold">
            {i + 1}. {step}
          </li>
        ))}
      </ol>
    </section>
  );
}
