import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Essay URL -> frontmatter date, so the sitemap carries the same date the page
// and the RSS feed show (frontmatter `date` is the single source of truth).
const blogDir = new URL('./src/content/blog/', import.meta.url);
const postDates = Object.fromEntries(
  readdirSync(blogDir)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => {
      const m = readFileSync(new URL(f, blogDir), 'utf8').match(/^date:\s*['"]?(\d{4}-\d{2}-\d{2})/m);
      return [`https://mrbese.com/writing/${f.replace(/\.mdx?$/, '')}/`, m ? m[1] : null];
    })
    .filter(([, d]) => d),
);

export default defineConfig({
  site: 'https://mrbese.com',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const d = postDates[item.url];
        if (d) item.lastmod = new Date(`${d}T00:00:00Z`).toISOString();
        return item;
      },
    }),
  ],
  trailingSlash: 'ignore',
});
