import { getBlogPosts } from './getBlogPosts';

export async function getArticle(slug) {
  let posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
