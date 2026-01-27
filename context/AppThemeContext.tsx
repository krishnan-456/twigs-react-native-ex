import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { useColorScheme as useSystemColorScheme } from 'react-native';
import { lightTheme, darkTheme, appBackgroundColors, surfaceColors, borderColors } from '@/constants/twigs-themes';

export type ColorMode = 'light' | 'dark' | 'system';

interface AppThemeContextValue {
  colorMode: ColorMode;
  setColorMode: (mode: ColorMode) => void;
  isDark: boolean;
  backgroundColor: string;
  surfaceColor: string;
  borderColor: string;
  textColor: string;
  secondaryTextColor: string;
}

const AppThemeContext = createContext<AppThemeContextValue | undefined>(undefined);

interface AppThemeProviderProps {
  children: ReactNode;
}

export function AppThemeProvider({ children }: AppThemeProviderProps) {
  const systemColorScheme = useSystemColorScheme();
  const [colorMode, setColorMode] = useState<ColorMode>('system');

  const isDark = useMemo(() => {
    if (colorMode === 'system') {
      return systemColorScheme === 'dark';
    }
    return colorMode === 'dark';
  }, [colorMode, systemColorScheme]);

  const backgroundColor = useMemo(() => {
    return isDark ? appBackgroundColors.dark : appBackgroundColors.light;
  }, [isDark]);

  const surfaceColor = useMemo(() => {
    return isDark ? surfaceColors.dark : surfaceColors.light;
  }, [isDark]);

  const borderColor = useMemo(() => {
    return isDark ? borderColors.dark : borderColors.light;
  }, [isDark]);

  const textColor = useMemo(() => {
    return isDark ? '#F5F5F5' : '#111111';
  }, [isDark]);

  const secondaryTextColor = useMemo(() => {
    return isDark ? '#A0A0A0' : '#6B6B6B';
  }, [isDark]);

  const value = useMemo(
    () => ({
      colorMode,
      setColorMode,
      isDark,
      backgroundColor,
      surfaceColor,
      borderColor,
      textColor,
      secondaryTextColor,
    }),
    [colorMode, isDark, backgroundColor, surfaceColor, borderColor, textColor, secondaryTextColor]
  );

  return <AppThemeContext.Provider value={value}>{children}</AppThemeContext.Provider>;
}

export function useAppTheme(): AppThemeContextValue {
  const context = useContext(AppThemeContext);
  if (context === undefined) {
    throw new Error('useAppTheme must be used within an AppThemeProvider');
  }
  return context;
}

// Helper to get the twigs theme based on dark mode
export function getTwigsTheme(isDark: boolean) {
  return isDark ? darkTheme : lightTheme;
}
