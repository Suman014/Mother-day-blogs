'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RecentArticlesProps } from '@/types/props';
import LoadingSpinner from './LoadingSpinner';

export default function RecentArticles({
  articles,
  selectedCategory,
  isLoading = false
}: RecentArticlesProps) {
  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
        <p className="text-gray-600">
          {selectedCategory
            ? `No articles found in the "${selectedCategory}" category.`
            : 'Try adjusting your search or category filter.'}
        </p>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          {selectedCategory ? `${selectedCategory} Articles` : 'Recent Articles'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <Link href={`/articles/${article.id}`}>
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={article.featured}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-gray-600">{article.readTime}</span>
                    <span className="text-sm text-gray-600">•</span>
                    <span className="text-sm text-primary font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
                    Read More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 