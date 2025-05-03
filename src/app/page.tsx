'use client';

import Search from './components/Search';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen p-4 bg-gray-50 dark:bg-gray-900 relative">
      <ThemeToggle />
      <h1 className="text-3xl md:text-4xl font-bold text-center my-8 pt-4 text-gray-900 dark:text-white drop-shadow">
        Поиск по документам
      </h1>
      <Search />
    </main>
  );
}
