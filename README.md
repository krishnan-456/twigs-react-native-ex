# Twigs React Native Example App

Standalone Storybook showcase for the `testing-twigs` React Native component library.

## Overview

This app is a pure Storybook implementation that loads all Twigs mobile components directly, without any routing layer. It's designed to be:
- **Simple** - Direct Storybook loading, no navigation complexity
- **Interactive** - Full on-device Storybook with controls
- **Clean** - No UnhandledLinkingContext or expo-router issues

## Features

- 📖 **Storybook Integration** - Interactive component playground with controls
- 🎨 **All Components** - 20+ component stories with variants
- 🔤 **DM Sans Typography** - Beautiful, consistent fonts throughout
- 📱 **Minimal Setup** - Just Expo + Storybook, no routing
- ✅ **Production Ready** - Based on twigs-mobile example pattern

## Installation

```bash
# Install dependencies
npm install

# Run on Android
npm run android

# Run on iOS
npm run ios

# Start development server
npm start
```

## Structure

```
twigs-react-native-ex/
├── .rnstorybook/          # Storybook configuration
│   ├── main.ts            # Story file discovery config
│   ├── preview.tsx        # Global decorators and providers
│   └── index.tsx          # Storybook UI initialization
├── stories/               # Component stories (20+ files)
│   ├── alert.stories.tsx
│   ├── button.stories.tsx
│   ├── text-input.stories.tsx
│   └── ...
├── assets/                # Images and static assets
│   └── images/
├── App.tsx                # Entry point with font loading
├── index.js               # Expo registration
├── app.json               # Expo configuration
├── metro.config.js        # Metro bundler with Storybook integration
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript configuration
```

## Available Components

The app includes interactive stories for all Twigs components:

### Actions
- Button - Primary action triggers
- IconButton - Icon-only buttons
- LinkButton - Text-style links

### Form Controls
- Checkbox - Multi-select toggles
- Radio - Single-select options
- Switch - On/off toggles
- TextInput - Text entry fields
- SegmentedButton - Grouped option selector

### Data Display
- Avatar - User profile images
- AvatarGroup - Multiple avatars
- Badge - Status indicators
- Chip - Compact labels

### Feedback
- Alert - Status messages
- Loader - Loading indicators (Line & Circle)
- Toast - Temporary messages
- Tooltip - Contextual help

### Overlay
- Modal - Dialog overlays
- BottomSheet - Sliding panels

### Layout
- Separator - Visual dividers
- Text - Typography

## How It Works

This app uses the same pattern as the main `twigs-mobile/example` app:

1. **App.tsx** exports Storybook UI directly
2. **index.js** registers the app with Expo
3. **No routing layer** - avoids navigation context issues
4. **Stories in `/stories`** - discovered by Storybook's main.ts config

This approach completely eliminates the `UnhandledLinkingContext` error that occurs when running Storybook inside expo-router.

## Fonts

The app uses **DM Sans** font family with custom weights configured in the Twigs theme:

```typescript
{
  fonts: {
    regular: 'DMSans_400Regular',
    medium: 'DMSans_500Medium',
    semiBold: 'DMSans_600SemiBold',
    bold: 'DMSans_700Bold',
  }
}
```

Fonts are loaded in `App.tsx` before Storybook renders, ensuring all components display with the correct typography.

## Deployment

```bash
# EAS Build
npm install -g eas-cli
eas build --platform android
eas build --platform ios

# Development Build
npm run android  # or npm run ios
```

## Dependencies

- `testing-twigs` - Main component library
- `@storybook/react-native` - Interactive component viewer
- `@expo-google-fonts/dm-sans` - DM Sans font family
- `expo` - React Native platform
- `@gorhom/bottom-sheet` - Bottom sheet components

## License

MIT
