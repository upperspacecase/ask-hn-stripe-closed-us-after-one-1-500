"use client";

import { useState, type FormEvent } from "react";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setState("sending");
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) {
      setState("error");
      return;
    }
    localStorage.setItem("stripe_setup_signup", JSON.stringify({ email }));
    setState("done");
  }

  if (state === "done") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(30,41,59,0.08)]"
      >
        <p className="text-base font-semibold">You are on the list.</p>
        <p className="mt-1 text-base text-slate-600">
          The setup check is not live yet. We will email {email} the checklist as soon as it is: SetupIntent and signed authorization first, itemized invoice second, appointment records third.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@agency.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-900 shadow-[inset_0_1px_2px_rgba(30,41,59,0.06)] transition-colors duration-200 placeholder:text-slate-500 hover:border-slate-500 sm:flex-1"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="h-12 cursor-pointer rounded-xl bg-accent px-6 text-base font-bold text-slate-900 shadow-[0_6px_16px_rgba(249,115,22,0.3)] transition-colors duration-200 hover:bg-orange-400 disabled:cursor-wait disabled:opacity-70"
        >
          {state === "sending" ? "Saving" : "Email me the setup checklist"}
        </button>
      </div>

      {state === "error" && (
        <p role="alert" className="mt-3 text-base text-red-700">
          That did not save. Check the email address and try again.
        </p>
      )}
      <p className="mt-3 text-base text-slate-600">
        Not live yet. You get the 3-step checklist by email when it is. No Stripe login, no card, no phone number.
      </p>
    </form>
  );
}
