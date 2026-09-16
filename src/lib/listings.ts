export type RedfinListing = {
  title: string;
  price: string;
  numericPrice: number;
  specs: string;
  bedrooms: number;
  bathrooms: number;
  floorSize: number;
  image: string;
  images: string[];
  sold?: boolean;
  redfinUrl: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
};

export const redfinListings: RedfinListing[] = [
  {
    title: "30 Reef #3, Marina del Rey, CA 90292",
    price: "$1,095,000",
    numericPrice: 1095000,
    specs: "3 bd, 3 ba, 2,000 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    floorSize: 2000,
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
    address: {
      streetAddress: "30 Reef #3",
      addressLocality: "Marina del Rey",
      addressRegion: "CA",
      postalCode: "90292",
      addressCountry: "US",
    },
  },
  {
    title: "20906 Almazan, Woodland Hills, CA 91364",
    price: "$1,275,000",
    numericPrice: 1275000,
    specs: "4 bd, 2.5 bath, 2,801 sq ft",
    bedrooms: 4,
    bathrooms: 2.5,
    floorSize: 2801,
    image: "/listings/almazan/01.png",
    images: [
      "/listings/almazan/01.png",
      "/listings/almazan/02.png",
      "/listings/almazan/03.png",
      "/listings/almazan/04.png",
      "/listings/almazan/05.png",
    ],
    redfinUrl: "https://www.redfin.com/CA/Woodland-Hills/20906-Almazan-Rd-91364/home/4217236",
    address: {
      streetAddress: "20906 Almazan",
      addressLocality: "Woodland Hills",
      addressRegion: "CA",
      postalCode: "91364",
      addressCountry: "US",
    },
  },
  {
    title: "1816 Paseo Del Mar, Palos Verdes Estates, CA 90274",
    price: "$9,999,000",
    numericPrice: 9999000,
    specs: "6 bd, 9 ba, 11,000 sq ft",
    bedrooms: 6,
    bathrooms: 9,
    floorSize: 11000,
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
    sold: true,
    redfinUrl:
      "https://www.redfin.com/CA/Palos-Verdes-Estates/1816-Paseo-del-Mar-90274/home/22703092",
    address: {
      streetAddress: "1816 Paseo Del Mar",
      addressLocality: "Palos Verdes Estates",
      addressRegion: "CA",
      postalCode: "90274",
      addressCountry: "US",
    },
  },
];
