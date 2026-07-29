import { redfinListings } from "./listings";

export const siteUrl = "https://sunandsandrealtor.com";
export const siteName = "Sun & Sand Realtor";
export const siteDescription =
  "Sun & Sand Realtor helps buyers, sellers, and investors across coastal Southern California with local market expertise and responsive real estate guidance.";

export function realEstateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${siteUrl}/#real-estate-agent`,
        name: siteName,
        url: siteUrl,
        image: `${siteUrl}/realtors-photo.png`,
        logo: `${siteUrl}/sun-and-sand-logo.png`,
        description: siteDescription,
        contactPoint: [
          {
            "@type": "ContactPoint",
            name: "Dave Orenstein",
            telephone: "+1-213-400-8541",
            email: "dave@rykerflint.com",
            contactType: "sales",
            areaServed: "Southern California",
          },
          {
            "@type": "ContactPoint",
            name: "Ricky Otterstrom",
            telephone: "+1-310-528-7187",
            email: "ricky@rykerflint.com",
            contactType: "sales",
            areaServed: "Southern California",
          },
        ],
        areaServed: [
          "Marina del Rey",
          "Woodland Hills",
          "Palos Verdes Estates",
          "Los Angeles County",
          "Southern California",
        ],
        knowsAbout: [
          "Southern California real estate",
          "Marina del Rey homes",
          "Woodland Hills homes",
          "Palos Verdes Estates luxury homes",
          "buyer representation",
          "seller representation",
          "investment property",
        ],
        sameAs: ["https://www.facebook.com/sunandsandrealtor"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        publisher: {
          "@id": `${siteUrl}/#real-estate-agent`,
        },
      },
      ...redfinListings.map((listing) => ({
        "@type": "Residence",
        "@id": `${siteUrl}/#${listing.address.streetAddress
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}`,
        name: listing.title,
        url: siteUrl,
        image: listing.images.map((image) => `${siteUrl}${image}`),
        address: {
          "@type": "PostalAddress",
          ...listing.address,
        },
        numberOfBedrooms: listing.bedrooms,
        numberOfBathroomsTotal: listing.bathrooms,
        floorSize: {
          "@type": "QuantitativeValue",
          value: listing.floorSize,
          unitText: "SQFT",
        },
        offers: {
          "@type": "Offer",
          price: listing.numericPrice,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: listing.redfinUrl,
          seller: {
            "@id": `${siteUrl}/#real-estate-agent`,
          },
        },
      })),
    ],
  };
}
