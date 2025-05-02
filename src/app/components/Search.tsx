import { useState, useEffect } from 'react';
import { articles, Article } from '@/lib/mockData';
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
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="что ищем?"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      {results.length > 0 ? (
        <div className="space-y-8">
          {results.map((result) => (
            <div key={result.id} className="p-4 border rounded-lg shadow border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-400">{result.title}</h3>
              {result.contentMarkdown ? (
                <div className="prose dark:prose-invert max-w-none">
                  <ReactMarkdown>{result.contentMarkdown}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">{result.content}</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        query && (
          <div className="text-gray-500 dark:text-gray-400 text-center">
            Ничего не найдено
          </div>
        )
      )}
    </div>
  );
} 