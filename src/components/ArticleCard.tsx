import { Article } from '@/types/article';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-card-bg rounded-lg shadow-sm overflow-hidden card-hover card-border">
      <div className="relative h-48">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="tag tag-primary">
            {article.readTime}
          </span>
          <span className="tag tag-secondary">
            {article.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-text-primary hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{article.excerpt}</p>
        <Link
          href={`/articles/${article.id}`}
          className="button-primary inline-flex items-center"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 