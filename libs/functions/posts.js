import { readdir, readFile } from 'node:fs/promises'
import matter from 'gray-matter'
import { marked } from 'marked'

export async function getFeaturedPosts() {
  const posts = await getPosts()
  return posts[0]
}

export async function getPost(slug) {
  const text = await readFile(`./content/reviews/${slug}.d`, 'utf8')
  const {
    content,
    data: { title, date, image },
  } = matter(text)
  const body = marked(content)
  return { slug, title, date, image, body }
}

export async function getPosts() {
  const slugs = await getSlugs()
  const reviews = []
  for (const slug of slugs) {
    const review = await getReview(slug)
    reviews.push(review)
  }
  reviews.sort((a, b) => b.date.localeCompare(a.date))
  return reviews
}

export async function getSlugs() {
  const files = await readdir('./content/posts')
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length))
}
