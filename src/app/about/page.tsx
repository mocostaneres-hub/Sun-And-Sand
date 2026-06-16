import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/contact-modal";
import ListingCarousel from "@/components/listing-carousel";
import FollowButton from "@/components/follow-button";

type RedfinListing = {
  title: string;
  price: string;
  image: string;
  redfinUrl: string;
  images?: string[];
  specs?: string;
};

const redfinListings: RedfinListing[] = [
  {
    title: "30 Reef #3, Marina del Rey, CA 90292",
    price: "$2,250,000",
    specs: "3 bd, 3 ba, 2,000 sq ft",
    image: "/listings/reef/01.png",
    images: [
      "/listings/reef/01.png",
      "/listings/reef/02.png",
      "/listings/reef/03.png",
      "/listings/reef/04.png",
      "/listings/reef/05.png",
      "/listings/reef/06.png",
    ],
    redfinUrl:
      "https://www.redfin.com/CA/Marina-del-Rey/30-Reef-St-90292/unit-3/home/6782760",
  },
  {
    title: "20906 Almazan, Woodland Hills, CA 91364",
    price: "$1,275,000",
    specs: "4 bd, 2.5 bath, 2,801 sq ft",
    image: "/listings/almazan/01.png",
    images: [
      "/listings/almazan/01.png",
      "/listings/almazan/02.png",
      "/listings/almazan/03.png",
      "/listings/almazan/04.png",
      "/listings/almazan/05.png",
    ],
    redfinUrl:
      "https://www.redfin.com/CA/Woodland-Hills/20906-Almazan-Rd-91364/home/4217236",
  },
  {
    title: "1816 Paseo Del Mar, Palos Verdes Estates, CA 90274",
    price: "$10,900,000",
    specs: "6 bd, 9 ba, 11,000 sq ft",
    image: "/listings/paseo/03.png",
    images: [
      "/listings/paseo/03.png",
      "/listings/paseo/04.png",
      "/listings/paseo/05.png",
      "/listings/paseo/06.png",
      "/listings/paseo/07.png",
      "/listings/paseo/08.png",
      "/listings/paseo/09.png",
      "/listings/paseo/10.png",
      "/listings/paseo/11.png",
    ],
    redfinUrl:
      "https://www.redfin.com/CA/Palos-Verdes-Estates/1816-Paseo-del-Mar-90274/home/22703092",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <nav className="flex items-start justify-between gap-4 py-1">
          <div className="shrink-0">
            <Image
              src="/sun-and-sand-logo.png"
              alt="Sun and Sand Realtor logo"
              width={176}
              height={176}
              className="h-32 w-32 rounded-lg bg-white p-1.5"
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
            <ContactModal className="rounded-full bg-cyan-400 px-5 py-2.5 text-base font-semibold text-slate-900 transition hover:bg-cyan-300 sm:px-6 sm:text-lg" />
          </div>
        </nav>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-3 lg:px-8">
        <p className="text-2xl font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-3xl">
          About Us
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
          Southern California locals with deep roots and proven experience.
        </h1>
        <p className="mt-6 max-w-4xl text-base text-slate-300 sm:text-lg">
          Dave Orenstein and Ricky Otterstrom are SoCal natives who bring more
          than 35 years of combined real estate experience. They pair local
          market knowledge with modern strategy to guide clients through buying,
          selling, and investing with clarity and confidence.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-700/80 bg-slate-900/60 p-6">
            <Image
              src="/ricky-otterstrom.png"
              alt="Ricky Otterstrom"
              width={768}
              height={768}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
            <h2 className="mt-5 text-2xl font-semibold">Ricky Otterstrom</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
              A Venice Beach native, Ricky comes from generations of real estate
              professionals and brings that legacy of service to every client
              relationship. He is an active member of the Venice Canals
              Association and offers authentic local insight with a
              relationship-first approach.
            </p>
            <div className="mt-4 space-y-2 text-base sm:text-lg">
              <a
                href="tel:+13105287187"
                className="block font-semibold text-cyan-300 hover:text-cyan-200"
              >
                310-528-7187
              </a>
              <a
                href="mailto:ricky@rykerflint.com"
                className="block text-slate-200 hover:text-cyan-300"
              >
                ricky@rykerflint.com
              </a>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-700/80 bg-slate-900/60 p-6">
            <Image
              src="/dave-orenstein.png"
              alt="Dave Orenstein"
              width={768}
              height={768}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
            <h2 className="mt-5 text-2xl font-semibold">Dave Orenstein</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
              Dave is a Southern California native, dedicated husband, and
              father who blends a strong technology background with high-touch
              client service. Now focused full-time on real estate, he brings
              data-driven strategy, responsive communication, and disciplined
              execution to every transaction.
            </p>
            <div className="mt-4 space-y-2 text-base sm:text-lg">
              <a
                href="tel:+12134008541"
                className="block font-semibold text-cyan-300 hover:text-cyan-200"
              >
                213-400-8541
              </a>
              <a
                href="mailto:dave@rykerflint.com"
                className="block text-slate-200 hover:text-cyan-300"
              >
                dave@rykerflint.com
              </a>
            </div>
          </article>
        </div>

        <section className="mt-14 border-t border-slate-800 pt-12">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
            <h2 className="text-3xl font-semibold">Explore our current listings</h2>
            <div className="text-2xl font-semibold text-cyan-300">
              Call us:{" "}
              <a href="tel:+12134008541" className="hover:text-cyan-200">
                213-400-8541
              </a>{" "}
              or{" "}
              <a href="tel:+13105287187" className="hover:text-cyan-200">
                310-528-7187
              </a>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {redfinListings.map((listing) => (
              <article
                key={listing.title}
                className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/80"
              >
                {listing.images ? (
                  <ListingCarousel images={listing.images} alt={listing.title} />
                ) : (
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    width={1024}
                    height={683}
                    className="h-44 w-full object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{listing.title}</h3>
                  <p className="mt-2 text-lg font-semibold text-cyan-300">
                    {listing.price}
                  </p>
                  {listing.specs ? (
                    <p className="mt-1 text-sm text-slate-300">{listing.specs}</p>
                  ) : null}
                  <a
                    href={listing.redfinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                  >
                    View on Redfin
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-8 flex justify-center">
          <ContactModal className="rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-cyan-300" />
        </div>
      </section>
    </main>
  );
}
