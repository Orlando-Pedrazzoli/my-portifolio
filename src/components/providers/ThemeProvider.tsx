'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Apply theme to DOM
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const body = document.body;

    // Remove both classes first
    root.classList.remove('light', 'dark');

    // Add the correct class
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
      body.style.backgroundColor = '#0a0a0a';
      body.style.color = '#ededed';
    } else {
      // Explicitly don't add 'light' class - we use :not(.dark)
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#171717';

      // iOS-specific fix for light mode
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // Force Safari to properly render text colors
        setTimeout(() => {
          // Clear any webkit text fill color that might be cached
          const allTextElements = document.querySelectorAll('*');
          allTextElements.forEach(element => {
            if (element instanceof HTMLElement) {
              const styles = window.getComputedStyle(element);
              if (
                styles.webkitTextFillColor &&
                styles.webkitTextFillColor !== 'transparent'
              ) {
                element.style.webkitTextFillColor = '';
              }
            }
          });

          // Force repaint
          document.body.style.display = 'none';
          document.body.offsetHeight; // trigger reflow
          document.body.style.display = '';
        }, 0);
      }
    }

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        newTheme === 'dark' ? '#0a0a0a' : '#ffffff'
      );
    }

    // Force repaint on mobile devices
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      // Force a reflow
      void body.offsetHeight;

      // For iOS specifically
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        body.style.display = 'none';
        void body.offsetHeight;
        body.style.display = '';
      }
    }
  };

  useEffect(() => {
    setMounted(true);

    // Get saved theme or detect preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Default to light theme if no preference is saved
      const defaultTheme = 'light';
      setTheme(defaultTheme);
      applyTheme(defaultTheme);
      localStorage.setItem('theme', defaultTheme);
    }

    // Listen for storage changes (for syncing between tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme' && e.newValue) {
        const newTheme = e.newValue as Theme;
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    // Save to localStorage first
    localStorage.setItem('theme', newTheme);

    // Update state
    setTheme(newTheme);

    // Apply theme changes
    applyTheme(newTheme);

    // Additional check for mobile devices
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      // Small delay to ensure changes are applied
      setTimeout(() => {
        applyTheme(newTheme);
      }, 10);
    }
  };

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
