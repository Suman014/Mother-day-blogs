'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import RecentArticles from '@/components/RecentArticles';
import Search from '@/components/Search';
import Sidebar from '@/components/Sidebar';
import { articles } from '@/data/articles';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero featuredArticles={articles.slice(0, 3)} />
      
      <div className="container mx-auto px-4 py-8">
        <Search onSearch={setSearchQuery} />
      </div>

      <CategorySection
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <RecentArticles
              articles={filteredArticles}
              selectedCategory={selectedCategory}
            />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
} 