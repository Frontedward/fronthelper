'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{
      position: 'fixed', 
      top: '20px', 
      left: '20px', 
      zIndex: 999999,
      width: 'auto',
      height: 'auto'
    }}>
      <button
        onClick={toggleTheme}
        className="theme-toggle-btn"
        aria-label="Переключить тему"
      >
        {theme === 'dark' ? (
          // Луна
          <svg className="theme-toggle-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            />
          </svg>
        ) : (
          // Солнце
          <svg className="theme-toggle-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="5" strokeWidth="2" fill="currentColor" />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" 
            />
          </svg>
        )}
      </button>
    </div>
  );
} 