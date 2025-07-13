// src/pages/InfoPage.jsx
import { Helmet } from 'react-helmet';

export default function InfoPage({ title, content }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-100">
      <Helmet>
        <title>{title} – Garden dot</title>
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-cyan-700 dark:text-cyan-300">{title}</h1>
      <div className="space-y-4 leading-relaxed text-lg">
        {content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
