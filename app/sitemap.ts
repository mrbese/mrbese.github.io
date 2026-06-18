import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";

export const dynamic = "force-static";

const BASE = "https://mrbese.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/retera", "/blog", "/projects", "/services", "/applying"];
  const pages = routes.map((r) => ({
    url: `${BASE}${r}`,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
  const posts = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
