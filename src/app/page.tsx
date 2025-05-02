'use client';

import Search from './components/Search';

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center m-8 text-gray-900 dark:text-white">
        Поиск по документам
      </h1>
      <Search />
    </main>
  );
}
