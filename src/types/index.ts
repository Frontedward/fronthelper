export interface Article {
  id: number;
  title: string;
  content: string;
  contentMarkdown: string;
}

export interface QAPair {
  id: number;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  created_at: Date;
  updated_at: Date;
}

export interface SearchResult {
  id: number;
  title: string;
  content: string;
  contentMarkdown: string;
  relevance?: number;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface QueryResult<T = unknown> {
  rows: T[];
  rowCount: number | null;
} 