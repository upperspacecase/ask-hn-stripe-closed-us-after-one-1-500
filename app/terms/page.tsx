import Link from "next/link";

export default function Terms() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Terms</h1>
      <p className="mt-6 text-base text-slate-600">
        This is an early product. The checklist is general setup guidance for per-appointment billing with Stripe SetupIntents and Stripe Invoicing. It is not legal or financial advice, it is not affiliated with Stripe, and it does not guarantee that Stripe or any processor will keep an account open.
      </p>
      <Link href="/" className="mt-8 inline-block cursor-pointer text-base underline transition-colors duration-200 hover:text-slate-600">
        Back
      </Link>
    </main>
  );
}
