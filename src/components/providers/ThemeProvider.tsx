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

  useEffect(() => {
    setMounted(true);

    // Função para aplicar tema
    const applyTheme = (newTheme: Theme) => {
      const root = document.documentElement;

      // Remove ambas as classes primeiro
      root.classList.remove('light', 'dark');

      // Adiciona a classe correta
      root.classList.add(newTheme);

      // Define data attribute (para iOS)
      root.setAttribute('data-theme', newTheme);

      // Define color-scheme CSS
      root.style.colorScheme = newTheme;

      // Atualiza meta theme-color
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute(
          'content',
          newTheme === 'dark' ? '#0a0a0a' : '#ffffff'
        );
      }

      // Atualiza variáveis CSS para iOS
      if (newTheme === 'dark') {
        root.style.setProperty('--background', '#0a0a0a');
        root.style.setProperty('--foreground', '#ededed');
      } else {
        root.style.setProperty('--background', '#ffffff');
        root.style.setProperty('--foreground', '#171717');
      }
    };

    // Recuperar tema salvo ou detectar preferência
    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Detectar preferência do sistema
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const defaultTheme = prefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);
      applyTheme(defaultTheme);
      localStorage.setItem('theme', defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    // Salvar no localStorage
    localStorage.setItem('theme', newTheme);

    // Atualizar estado
    setTheme(newTheme);

    // Aplicar mudanças no DOM
    const root = document.documentElement;

    // Remove ambas as classes
    root.classList.remove('light', 'dark');

    // Força reflow
    void root.offsetHeight;

    // Adiciona nova classe
    root.classList.add(newTheme);

    // Atributos adicionais para iOS
    root.setAttribute('data-theme', newTheme);
    root.style.colorScheme = newTheme;

    // Atualiza variáveis CSS
    if (newTheme === 'dark') {
      root.style.setProperty('--background', '#0a0a0a');
      root.style.setProperty('--foreground', '#ededed');
    } else {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#171717');
    }

    // Meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        newTheme === 'dark' ? '#0a0a0a' : '#ffffff'
      );
    }

    // Força repaint no iOS
    const body = document.body;
    const display = body.style.display;
    body.style.display = 'none';
    void body.offsetHeight; // Trigger reflow
    body.style.display = display;
  };

  // Previne flash de conteúdo não estilizado
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
