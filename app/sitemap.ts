import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseurl = "https://darulqiroahlampung.id";
  return [
    {
      url: baseurl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseurl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseurl}/book`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseurl}/donasi`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];
}
