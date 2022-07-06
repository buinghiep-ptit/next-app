import { IPost } from './post'

export interface IBlog extends IPost {
  slug?: string
  author?: Author
  mdContent?: string
  htmlContent?: string
}

export interface Author {
  name?: string
  title?: string
  profileUrl?: string
  avatarUrl?: string
}
