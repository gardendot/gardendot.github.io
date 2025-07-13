import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import blogs from '../data/blogs.json';

export default function BlogIndex() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : prefersDark;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-cyan-50 dark:bg-gray-900 dark:text-white flex flex-col">
      <Helmet>
        <title>Garden dot Blog</title>
        <meta name="description" content="Explore garden and plant care tips at the Garden dot blog." />
        <link rel="canonical" href="https://yourusername.github.io/blogs" />
      </Helmet>
      <Header count={0} onCartClick={() => {}} />
      <div className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-cyan-800 dark:text-cyan-300">Garden dot Blog</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="space-y-6">
          {blogs.map((blog, i) => (
            <Link
              key={i}
              to={`/blogs/${blog.slug}`}
              className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-cyan-700 dark:text-cyan-400 mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Read more →</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}