import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'Omer Bese',
    description: 'Energy engineering, primary-source research, and productively frustrated observations.',
    site: context.site,
    items: blog
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((p) => ({
        title: p.data.title,
        pubDate: p.data.date,
        description: p.data.description,
        link: `/writing/${p.id}/`,
      })),
  });
}
