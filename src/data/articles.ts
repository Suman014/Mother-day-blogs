import { Article, Author } from '@/types/article';

const authors: Author[] = [
  {
    id: 'author-1',
    name: 'Sarah Johnson',
    role: 'Family Counselor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
    bio: 'Sarah is a certified family counselor with over 10 years of experience helping families strengthen their bonds.'
  },
  {
    id: 'author-2',
    name: 'Emily Chen',
    role: 'Lifestyle Writer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
    bio: 'Emily is a lifestyle writer passionate about sharing heartwarming stories and practical advice for modern families.'
  },
  {
    id: 'author-3',
    name: 'Maria Rodriguez',
    role: 'Chef & Food Blogger',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&h=300',
    bio: 'Maria is a professional chef and food blogger specializing in family recipes and cooking traditions.'
  }
];

export const articles: Article[] = [
  {
    id: 'mothers-love-through-generations',
    title: 'A Mother\'s Love Through Generations',
    excerpt: 'Exploring the timeless bond between mothers and children across different generations.',
    content: `
      <p>The love between a mother and child is a force that transcends time, culture, and circumstance. It's a bond that shapes who we are and influences how we view the world.</p>
      
      <h2>The Early Years</h2>
      <p>From the moment of birth, mothers begin a journey of unconditional love and sacrifice. Those sleepless nights, constant worry, and endless support create the foundation of our emotional well-being.</p>
      
      <h2>Lessons Passed Down</h2>
      <p>Through generations, mothers pass down not just genetic traits, but wisdom, values, and traditions that keep families connected and cultures alive.</p>
      
      <h2>Modern Motherhood</h2>
      <p>Today's mothers face unique challenges, balancing career ambitions with family life while maintaining the same depth of love and care that has defined motherhood for generations.</p>
    `,
    image: 'https://img.pikbest.com/origin/10/49/93/82dpIkbEsTj2x.jpg!w700wp',
    category: 'stories',
    author: authors[0],
    date: 'May 1, 2024',
    readTime: '5 min read',
    featured: true,
    tags: ['family', 'relationships', 'traditions']
  },
  {
    id: 'self-care-tips-for-moms',
    title: 'Essential Self-Care Tips for Busy Moms',
    excerpt: 'Practical ways for mothers to maintain their well-being while managing family responsibilities.',
    content: `
      <p>Self-care isn't selfish—it's essential for being the best mother you can be. Here are practical ways to incorporate self-care into your busy schedule.</p>
      
      <h2>Make Time for Yourself</h2>
      <p>Even 15 minutes of quiet time can make a difference. Whether it's early morning meditation or an evening bath, find moments that are just for you.</p>
      
      <h2>Physical Health Matters</h2>
      <p>Regular exercise, proper nutrition, and adequate sleep are fundamental to maintaining your energy and mood. Small changes can lead to significant improvements.</p>
      
      <h2>Mental Well-being</h2>
      <p>Don't hesitate to seek support when needed. Whether through friends, family, or professional counseling, taking care of your mental health benefits the whole family.</p>
    `,
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&h=800',
    category: 'health',
    author: authors[1],
    date: 'May 3, 2024',
    readTime: '4 min read',
    featured: true,
    tags: ['self-care', 'health', 'wellness']
  },
  {
    id: 'mothers-day-recipes',
    title: 'Special Mother\'s Day Recipes',
    excerpt: 'Delicious recipes to make Mother\'s Day extra special with homemade treats.',
    content: `
      <p>Show your love through food with these specially curated recipes perfect for Mother's Day celebrations.</p>
      
      <h2>Breakfast in Bed</h2>
      <p>Start her day with a beautiful breakfast spread including fluffy pancakes, fresh fruit, and her favorite coffee or tea.</p>
      
      <h2>Family Lunch Ideas</h2>
      <p>Gather the family for a special lunch with recipes that can be prepared together, creating both a delicious meal and precious memories.</p>
      
      <h2>Sweet Treats</h2>
      <p>End the day on a sweet note with homemade desserts that show your appreciation and love.</p>
    `,
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1200&h=800',
    category: 'recipes',
    author: authors[2],
    date: 'May 5, 2024',
    readTime: '6 min read',
    featured: true,
    tags: ['cooking', 'recipes', 'celebration']
  },
  {
    id: 'inspiring-mom-quotes',
    title: 'Inspiring Quotes About Motherhood',
    excerpt: 'A collection of touching and inspiring quotes that celebrate the beauty of motherhood.',
    content: `
      <p>Words have the power to capture the essence of motherhood and remind us of its profound impact on our lives.</p>
      
      <h2>Wisdom from Notable Figures</h2>
      <p>Throughout history, writers, leaders, and thinkers have shared their insights about the importance of mothers in shaping our world.</p>
      
      <h2>Modern Perspectives</h2>
      <p>Contemporary voices add their own understanding to the timeless theme of maternal love and sacrifice.</p>
      
      <h2>Personal Stories</h2>
      <p>Real mothers share their experiences and the quotes that have inspired their journey through motherhood.</p>
    `,
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=1200&h=800',
    category: 'inspiration',
    author: authors[1],
    date: 'May 7, 2024',
    readTime: '3 min read',
    featured: false,
    tags: ['quotes', 'inspiration', 'motherhood']
  }
];

export const categories = [
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