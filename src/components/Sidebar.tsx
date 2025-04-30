'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-80 space-y-8">
      {/* Author Profile */}
      <div className="bg-white rounded-lg shadow-sm p-6 card-border">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60"
              alt="Author"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Sarah Johnson</h3>
            <p className="text-gray-600 text-sm">Editor & Writer</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Passionate about sharing inspiring stories of motherhood and celebrating the incredible women who shape our lives.
        </p>
        <div className="flex space-x-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Highlights */}
      <div className="bg-white rounded-lg shadow-sm p-6 card-border">
        <h3 className="font-semibold text-lg mb-4">Highlights</h3>
        <div className="space-y-4">
          <Link
            href="/articles/1"
            className="block group"
          >
            <div className="relative h-32 rounded-lg overflow-hidden mb-2">
              <Image
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=300&auto=format&fit=crop&q=60"
                alt="Featured Story"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
              A Mother's Love: The Greatest Gift
            </h4>
          </Link>
          <Link
            href="/articles/2"
            className="block group"
          >
            <div className="relative h-32 rounded-lg overflow-hidden mb-2">
              <Image
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=300&auto=format&fit=crop&q=60"
                alt="Featured Story"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">
              Healthy Living: A Mother's Guide
            </h4>
          </Link>
        </div>
      </div>
    </aside>
  );
} 