// src/pages/BlogPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function BlogPage() {
  const { slug } = useParams();
  const [html, setHtml] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/blogs/${slug}.html`)
      .then((res) => {
        if (!res.ok) throw new Error('Blog not found');
        return res.text();
      })
      .then(setHtml)
      .catch((err) => setError(err.message));
  }, [slug]);

  return (
    <div className="min-h-screen bg-cyan-50 dark:bg-gray-900 dark:text-white">
      <Header count={0} onCartClick={() => {}} />
      <div className="max-w-3xl mx-auto p-6 prose prose-cyan dark:prose-invert">
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: html }} />
        )}
      </div>
    </div>
  );
}
