import { Article, Category } from './article';

export interface HeroProps {
  featuredArticles: Article[];
}

export interface CategorySectionProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export interface RecentArticlesProps {
  articles: Article[];
  selectedCategory: string | null;
  isLoading?: boolean;
}

export interface SearchProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export interface SidebarProps {
  author?: {
    name: string;
    role: string;
    image: string;
    bio: string;
  };
  highlights?: {
    title: string;
    link: string;
  }[];
}

export interface ArticleCardProps {
  article: Article;
}

export interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
} 