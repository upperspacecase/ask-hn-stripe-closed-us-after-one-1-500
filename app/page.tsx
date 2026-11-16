import { DemoPlayer } from "@/components/DemoPlayer";
import { Footer } from "@/components/Footer";
import { LogoStrip } from "@/components/LogoStrip";
import { SignupForm } from "@/components/SignupForm";
import { HN_THREAD } from "@/lib/links";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 10%, rgba(30,41,59,0.07) 0%, rgba(30,41,59,0) 70%), radial-gradient(50% 45% at 90% 80%, rgba(30,41,59,0.05) 0%, rgba(30,41,59,0) 70%)",
          }}
        />
        <div className="mx-auto w-full max-w-5xl px-6 pb-10 pt-16 sm:pt-24">
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl">
            Set up Stripe before you bill your first contractor.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-600">
            One new account was closed after a single $1,500 charge for 3 booked appointments. For pay-per-appointment agencies with fewer than 5 contractor clients: go from charging a card on file and hoping, to a saved-card authorization, an itemized invoice and a paper trail behind every $500 appointment.
          </p>
          <div className="mt-8 max-w-2xl">
            <SignupForm />
          </div>
        </div>
      </section>

      <section aria-label="Product demo" className="mx-auto w-full max-w-5xl px-6 pb-6 pt-2">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_10px_30px_rgba(30,41,59,0.08),0_2px_6px_rgba(30,41,59,0.05)]">
          <div className="overflow-hidden rounded-xl">
            <DemoPlayer />
          </div>
        </div>
        <p className="mt-3 text-base text-slate-600">
          Simulation with example dates. The left side is the incident as told in the{" "}
          <a
            href={HN_THREAD}
            className="cursor-pointer underline transition-colors duration-200 hover:text-slate-900"
            target="_blank"
            rel="noreferrer"
          >
            HN thread
          </a>
          : 3 appointments booked, the card on file charged $1,500, the account closed, no evidence requested. Stripe decides which accounts stay open; nobody outside Stripe can promise that.
        </p>
      </section>

      <LogoStrip />
      <Footer />
    </main>
  );
}
