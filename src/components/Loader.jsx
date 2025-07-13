// src/components/Loader.jsx
export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20">
      <svg className="animate-spin h-12 w-12 text-cyan-600" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a10 10 0 1010 10h-2a8 8 0 01-8 8v-4l-3 3 3 3v-4a10 10 0 00-10-10z"
        />
      </svg>
      <p className="mt-4 text-cyan-700 dark:text-cyan-300 text-sm animate-pulse">
        Growing your garden...
      </p>
    </div>
  );
}
