import { portfolioData } from "@/data/portfolio";

export default function StructuredData() {
  const { personal, contact } = portfolioData;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.title,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://om-mistry-portfolio.vercel.app",
    email: personal.email,
    telephone: personal.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: contact.social.map((social) => social.href),
    knowsAbout: ["React", "TypeScript", "Next.js", "Frontend Development"],
    image: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://om-mistry-portfolio.vercel.app"
    }/og-image.png`,
    description: portfolioData.about.description[0],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
