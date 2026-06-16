import Image from "next/image";
import Link from "next/link";
import ListingCarousel from "@/components/listing-carousel";
import ContactModal from "@/components/contact-modal";
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
    redfinUrl: "https://www.redfin.com/CA/Woodland-Hills/20906-Almazan-Rd-91364/home/4217236",
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

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
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
              href="/about"
              className="rounded-full border border-cyan-300/70 px-5 py-2.5 text-base font-semibold text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/10 hover:text-cyan-100 sm:px-6 sm:text-lg"
            >
              About Us
            </Link>
            <FollowButton className="inline-flex items-center justify-center rounded-full border border-[#1877f2]/80 bg-[#1877f2] px-5 py-2.5 text-base font-semibold text-white transition hover:border-[#4e9af7] hover:bg-[#0f66d6] sm:px-6 sm:text-lg" />
            <ContactModal className="rounded-full bg-cyan-400 px-5 py-2.5 text-base font-semibold text-slate-900 transition hover:bg-cyan-300 sm:px-6 sm:text-lg" />
          </div>
        </nav>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-12 pt-1 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            Buying or selling a home or investment property is a big decision.
            <br />
            We&apos;re here to help.
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
            Count on us to be your professional real estate advocates.
          </p>
        </div>
        <div className="relative">
          <Image
            src="/realtors-photo.png"
            alt="Sun and Sand Realtors team"
            width={1024}
            height={683}
            className="w-full rounded-3xl border border-slate-700/70 object-cover shadow-2xl shadow-cyan-900/20"
            priority
          />
        </div>
      </section>

      <section id="listings" className="border-y border-slate-800 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">Explore our current listings</h2>
            </div>
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
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Start your next move
            </p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight">
              Secure expert representation tailored to your goals.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Book a confidential consultation for buying, selling, relocation,
              or investment strategy across Southern California.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/50 p-4">
                <p className="text-sm font-semibold text-cyan-300">
                  Dave Orenstein
                </p>
                <a
                  href="tel:+12134008541"
                  className="mt-2 block text-sm font-semibold text-slate-100 hover:text-cyan-300"
                >
                  213-400-8541
                </a>
                <a
                  href="mailto:dave@rykerflint.com"
                  className="mt-1 block text-sm text-slate-300 hover:text-cyan-300"
                >
                  dave@rykerflint.com
                </a>
              </div>
              <div className="rounded-2xl border border-slate-700/80 bg-slate-950/50 p-4">
                <p className="text-sm font-semibold text-cyan-300">
                  Ricky Otterstrom
                </p>
                <a
                  href="tel:+13105287187"
                  className="mt-2 block text-sm font-semibold text-slate-100 hover:text-cyan-300"
                >
                  310-528-7187
                </a>
                <a
                  href="mailto:ricky@rykerflint.com"
                  className="mt-1 block text-sm text-slate-300 hover:text-cyan-300"
                >
                  ricky@rykerflint.com
                </a>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <ContactModal className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
