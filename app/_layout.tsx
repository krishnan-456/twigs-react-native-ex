import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { TwigsProvider, BottomSheetModalProvider } from 'testing-twigs';
import { AppThemeProvider, useAppTheme } from '@/context/AppThemeContext';
import { TaskProvider } from '@/context/TaskContext';
import { lightTheme, darkTheme } from '@/constants/twigs-themes';

export const unstable_settings = {
  anchor: '(tabs)',
};

function RootLayoutContent() {
  const { isDark } = useAppTheme();

  // Pass the theme directly to TwigsProvider based on dark mode
  // TwigsProvider will deep merge this with the default theme
  return (
    <TwigsProvider theme={isDark ? darkTheme : lightTheme}>
      <BottomSheetModalProvider>
        <TaskProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          </Stack>
        </TaskProvider>
        <StatusBar style={isDark ? 'light' : 'dark'} />
      </BottomSheetModalProvider>
    </TwigsProvider>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppThemeProvider>
        <RootLayoutContent />
      </AppThemeProvider>
    </GestureHandlerRootView>
  );
}
