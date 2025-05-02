import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const data = [
  {
    question: 'Что такое React Hooks?',
    answer: 'React Hooks - это функции, которые позволяют использовать состояние и другие возможности React в функциональных компонентах. Они были добавлены в React 16.8 и позволяют использовать состояние без написания классов.',
    category: 'React',
    tags: ['hooks', 'react', 'state']
  },
  {
    question: 'Как работает useEffect?',
    answer: 'useEffect - это хук, который позволяет выполнять побочные эффекты в функциональных компонентах. Он принимает функцию, которая будет выполнена после каждого рендера, и массив зависимостей, который определяет, когда эффект должен быть выполнен заново.',
    category: 'React',
    tags: ['hooks', 'react', 'useEffect']
  },
  {
    question: 'Что такое TypeScript?',
    answer: 'TypeScript - это типизированное надмножество JavaScript, которое компилируется в обычный JavaScript. Он добавляет статическую типизацию, что помогает находить ошибки на этапе разработки и улучшает поддержку IDE.',
    category: 'TypeScript',
    tags: ['typescript', 'javascript', 'types']
  }
];

async function importData() {
  try {
    for (const item of data) {
      await pool.query(
        `INSERT INTO qa_pairs (question, answer, category, tags)
         VALUES ($1, $2, $3, $4)`,
        [item.question, item.answer, item.category, item.tags]
      );
    }
    console.log('Данные успешно импортированы');
  } catch (error) {
    console.error('Ошибка при импорте данных:', error);
  } finally {
    await pool.end();
  }
}

importData(); 