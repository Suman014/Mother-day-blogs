export interface Author {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
} 