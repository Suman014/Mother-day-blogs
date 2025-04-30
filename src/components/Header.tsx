'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#CCFFFF] backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 rounded-b-2xl">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-primary drop-shadow-md">
            Mother&apos;s Day Blog
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-primary hover:text-accent font-medium px-3 py-2 rounded transition-colors duration-200">
              Home
            </Link>
            <Link href="/articles" className="text-primary hover:text-accent font-medium px-3 py-2 rounded transition-colors duration-200">
              Articles
            </Link>
            <Link href="/about" className="text-primary hover:text-accent font-medium px-3 py-2 rounded transition-colors duration-200">
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary/20 bg-[#CCFFFF] rounded-b-2xl shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-primary hover:text-accent font-medium px-3 py-2 rounded transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/articles"
                className="text-primary hover:text-accent font-medium px-3 py-2 rounded transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
              <Link
                href="/about"
                className="text-primary hover:text-accent font-medium px-3 py-2 rounded transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 