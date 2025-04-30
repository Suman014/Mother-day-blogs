'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const categories: Category[] = [
  {
    id: 'stories',
    name: 'Stories',
    icon: '📖',
    description: 'Heartwarming stories of love and gratitude'
  },
  {
    id: 'health',
    name: 'Health',
    icon: '❤️',
    description: 'Tips and advice for mother\'s well-being'
  },
  {
    id: 'inspiration',
    name: 'Inspiration',
    icon: '✨',
    description: 'Inspiring quotes and messages'
  },
  {
    id: 'recipes',
    name: 'Recipes',
    icon: '🍳',
    description: 'Special recipes to celebrate mom'
  }
];

interface CategorySectionProps {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export default function CategorySection({
  selectedCategory,
  onCategorySelect,
}: CategorySectionProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative cursor-pointer rounded-lg overflow-hidden ${
                selectedCategory === category.id
                  ? 'ring-2 ring-primary'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => onCategorySelect(
                selectedCategory === category.id ? null : category.id
              )}
            >
              <div className="bg-white p-6 h-full">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 