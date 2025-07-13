export default function BlogSidebar({ blogs }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-3 text-cyan-700 dark:text-cyan-300">From the Blog</h2>
      <ul className="space-y-2">
        {blogs.map((b, i) => (
          <li key={i}>
            <a href={b.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline text-cyan-600 dark:text-cyan-400">
              {b.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}