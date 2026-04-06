import type { Preview } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider, TwigsProvider } from '@sparrowengg/twigs-mobile';

const customTheme = {
  fonts: {
    regular: 'DMSans_400Regular',
    medium: 'DMSans_500Medium',
    bold: 'DMSans_700Bold',
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <TwigsProvider theme={customTheme}>
          <BottomSheetModalProvider>
            <View
              style={{
                flex: 1,
                alignSelf: 'center',
                width: '100%',
                maxWidth: 600,
                padding: 16,
              }}
            >
              <Story />
            </View>
          </BottomSheetModalProvider>
        </TwigsProvider>
      </GestureHandlerRootView>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
