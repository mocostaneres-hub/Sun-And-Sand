import Image from "next/image";
import Link from "next/link";
import FollowButton from "@/components/follow-button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <nav className="flex items-start justify-between gap-4 py-1">
          <div className="shrink-0">
            <Image
              src="/sun-and-sand-logo.png"
              alt="Sun and Sand Realtor logo"
              width={128}
              height={128}
              className="h-24 w-24 rounded-lg bg-white p-1.5"
            />
          </div>
          <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4">
            <Link
              href="/"
              className="rounded-full border border-cyan-300/70 px-5 py-2.5 text-base font-semibold text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/10 hover:text-cyan-100 sm:px-6 sm:text-lg"
            >
              Back to Home
            </Link>
            <FollowButton className="inline-flex items-center justify-center rounded-full border border-[#1877f2]/80 bg-[#1877f2] px-5 py-2.5 text-base font-semibold text-white transition hover:border-[#4e9af7] hover:bg-[#0f66d6] sm:px-6 sm:text-lg" />
          </div>
        </nav>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 pt-4 lg:grid-cols-2 lg:px-8">
        <div className="rounded-3xl border border-slate-700 bg-slate-900/50 p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Contact Sun & Sand Realtor
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight">
            Let&apos;s discuss your next move.
          </h1>
          <p className="mt-4 text-slate-300">
            Buying or selling a home or investment property is a big decision.
            We&apos;re here to help. Count on us to be your professional real
            estate advocates.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="tel:+12134008541"
              className="block rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 text-sm font-semibold transition hover:border-slate-400"
            >
              Dave Orenstein - 213-400-8541
            </a>
            <a
              href="tel:+13105287187"
              className="block rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 text-sm font-semibold transition hover:border-slate-400"
            >
              Ricky Otterstrom - 310-528-7187
            </a>
            <a
              href="mailto:dave@rykerflint.com"
              className="block rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 text-sm transition hover:border-slate-400"
            >
              dave@rykerflint.com
            </a>
            <a
              href="mailto:ricky@rykerflint.com"
              className="block rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-3 text-sm transition hover:border-slate-400"
            >
              ricky@rykerflint.com
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Email forwarding will be connected once your email service is set
            up.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-900/50 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold">New Client Inquiry Form</h2>
          <p className="mt-2 text-sm text-slate-300">
            Share a few details and we&apos;ll follow up with a tailored plan.
          </p>

          <form className="mt-6 space-y-4">
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
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium"
                >
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
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium"
                >
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
                <option value="buying">Buying a property</option>
                <option value="selling">Selling a property</option>
                <option value="investment">Investment property</option>
                <option value="other">Other</option>
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
                className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                placeholder="Tell us your goals, timeline, and ideal neighborhoods."
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
