'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Article } from '@/types/article';
import { articles } from '@/data/articles';
import LoadingSpinner from '@/components/LoadingSpinner';

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = () => {
      try {
        setIsLoading(true);
        const foundArticle = articles.find((a) => a.id === params.id);
        
        if (!foundArticle) {
          notFound();
        }

        setArticle(foundArticle);
        setError(null);
      } catch (err) {
        setError('Failed to load article');
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link
            href="/"
            className="text-primary hover:text-primary-dark transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  if (!article) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {article.title}
              </h1>
              <div className="flex items-center text-white/80 space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={article.author.image}
                      alt={article.author.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <span>{article.author.name}</span>
                </div>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Author Bio */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={article.author.image}
                  alt={article.author.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{article.author.name}</h3>
                <p className="text-gray-600">{article.author.role}</p>
              </div>
            </div>
          </div>

          {/* Back to Articles */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Articles
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 