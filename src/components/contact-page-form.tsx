"use client";

import { useState, type FormEvent } from "react";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

export default function ContactPageForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, source: "Contact page" }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(result.message || "Message could not be sent.");
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Message could not be sent. Please try again.",
      );
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-slate-700 bg-slate-900/50 p-8 sm:p-10">
        <p className="text-lg font-semibold text-cyan-300">
          Message sent successfully
        </p>
        <p className="mt-2 text-sm text-slate-300">
          Thanks for reaching out. We received your inquiry and will follow up
          soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/50 p-8 sm:p-10">
      <h2 className="text-2xl font-semibold">New Client Inquiry Form</h2>
      <p className="mt-2 text-sm text-slate-300">
        Share a few details and we&apos;ll follow up with a tailored plan.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            placeholder="Your name"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
              placeholder="123-456-7890"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="interest"
            className="mb-1.5 block text-sm font-medium"
          >
            I&apos;m interested in
          </label>
          <select
            id="interest"
            name="interest"
            className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-cyan-300 focus:outline-none"
          >
            <option value="Buying a property">Buying a property</option>
            <option value="Selling a property">Selling a property</option>
            <option value="Investment property">Investment property</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
            placeholder="Tell us your goals, timeline, and ideal neighborhoods."
          />
        </div>

        {status === "error" ? (
          <p className="text-sm font-medium text-rose-300" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}
