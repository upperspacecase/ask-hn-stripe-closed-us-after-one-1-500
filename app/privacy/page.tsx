import Link from "next/link";

export default function Privacy() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Privacy</h1>
      <p className="mt-6 text-base text-slate-600">
        The form collects one email address. It is used to send you the Stripe setup checklist for per-appointment billing and nothing else. It is not sold or shared. No card details or Stripe credentials are collected.
      </p>
      <Link href="/" className="mt-8 inline-block cursor-pointer text-base underline transition-colors duration-200 hover:text-slate-600">
        Back
      </Link>
    </main>
  );
}
