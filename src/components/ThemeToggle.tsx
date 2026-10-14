import { useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() => document.documentElement.classList.contains('dark'));

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <div className="absolute right-4 top-4 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
      <span>{dark ? 'Dark' : 'Light'}</span>
      <button
        role="switch"
        aria-checked={dark}
        aria-label="Dark mode"
        onClick={toggle}
        className={`relative h-7 w-12 rounded-full transition-colors ${dark ? 'bg-amber-300' : 'bg-slate-300'}`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
            dark ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
