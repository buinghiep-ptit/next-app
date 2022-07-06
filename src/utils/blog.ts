import path from 'node:path'
import fs from 'node:fs'
import matter from 'gray-matter'
import { IBlog } from '@/models/blog'

const BLOG_FOLDER = path.join(process.cwd(), 'src/assets/blog-markdown')

export async function getBlogList(): Promise<IBlog[]> {
  //read all markdown
  const fileNameList = fs.readdirSync(BLOG_FOLDER)
  const blogs: IBlog[] = []
  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')

    const { data, excerpt, content } = matter(fileContents, {
      excerpt_separator: '<!-- truncate-->',
    })
    blogs.push({
      id: fileName,
      slug: data.slug,
      title: data.title,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      tagList: data.tags,
      publishedDate: 1656990666,
      description: excerpt,
      mdContent: content,
    })
  }
  return blogs
}
