import { useState, useEffect } from 'react';
import { Article } from '@/types';
import { articles } from '@/lib/mockData';
import ReactMarkdown from 'react-markdown';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults = articles.filter(article => {
      const searchString = query.toLowerCase();
      return (
        article.title.toLowerCase().includes(searchString) ||
        article.content.toLowerCase().includes(searchString)
      );
    });

    setResults(searchResults);
  }, [query]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl mb-8 mt-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="что ищем?"
          className="w-full px-5 py-3 text-lg border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 shadow-md"
        />
      </div>

      <div className="w-full max-w-2xl space-y-8">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="p-6 border-2 rounded-2xl shadow-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-200 hover:shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-400">{result.title}</h3>
              {result.contentMarkdown ? (
                <div className="prose dark:prose-invert max-w-none">
                  <ReactMarkdown>{result.contentMarkdown}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">{result.content}</p>
              )}
            </div>
          ))
        ) : (
          query && (
            <div className="text-gray-500 dark:text-gray-400 text-center p-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl">
              Ничего не найдено
            </div>
          )
        )}
      </div>
    </div>
  );
} 