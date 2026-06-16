"use client";

import { useState, type FormEvent } from "react";
import { createPortal } from "react-dom";

type ContactModalProps = {
  label?: string;
  className?: string;
};

type SubmitStatus = "idle" | "sending" | "sent" | "error";

export default function ContactModal({
  label = "Contact Us",
  className = "rounded-full border border-slate-500 px-5 py-2 text-sm font-semibold transition hover:border-slate-300",
}: ContactModalProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpen = () => {
    setSubmitted(false);
    setStatus("idle");
    setErrorMessage("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSubmitted(false);
    setStatus("idle");
    setErrorMessage("");
  };

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
        body: JSON.stringify({ ...payload, source: "Contact modal" }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(result.message || "Message could not be sent.");
      }

      form.reset();
      setSubmitted(true);
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

  const modal = open ? (
    <div
      className="fixed inset-0 z-[100] bg-slate-950/80 p-4 sm:p-6"
      onClick={handleClose}
    >
      <div className="flex min-h-full items-center justify-center">
        <div
          className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-slate-100">Let&apos;s connect</h3>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="rounded-full border border-slate-600 px-3 py-1 text-xs font-semibold text-slate-300 transition hover:border-slate-400"
            >
              Close
            </button>
          </div>

          {submitted ? (
            <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-5">
              <p className="text-lg font-semibold text-cyan-300">
                Message sent successfully
              </p>
              <p className="mt-2 text-sm text-slate-300">
                Thanks for reaching out. We received your inquiry and will
                follow up soon.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-5 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
              >
                Close
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="hidden" aria-hidden="true">
                <label htmlFor="modal-company">Company</label>
                <input
                  id="modal-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-name"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Your name
                </label>
                <input
                  id="modal-name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="modal-email"
                    className="mb-1.5 block text-sm font-medium text-slate-200"
                  >
                    Email
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="modal-phone"
                    className="mb-1.5 block text-sm font-medium text-slate-200"
                  >
                    Phone
                  </label>
                  <input
                    id="modal-phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                    placeholder="123-456-7890"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="modal-message"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Message
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                  placeholder="Tell us what you are looking for."
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
                {status === "sending" ? "Sending..." : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={className}
      >
        {label}
      </button>

      {typeof document !== "undefined" ? createPortal(modal, document.body) : null}
    </>
  );
}
