import Image from "next/image";
import Link from "next/link";
import ContactPageForm from "@/components/contact-page-form";
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
            Form submissions are delivered directly to Dave and Ricky.
          </p>
        </div>

        <ContactPageForm />
      </section>
    </main>
  );
}
