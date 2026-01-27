# testing-twigs Example App

A Task Manager app demonstrating all components from the [testing-twigs](https://www.npmjs.com/package/testing-twigs) React Native component library.

## Features

- **Task Management**: Create, edit, delete, and complete tasks
- **Dark/Light Mode**: Theme toggle with system preference support
- **All Components Used**: Button, Text, TextInput, Checkbox, Switch, Radio, Avatar, Flex, Box, BottomSheet

## Components Showcase

| Component | Usage in App |
|-----------|-------------|
| `TwigsProvider` | Root theme provider with light/dark themes |
| `Text` | All text throughout the app |
| `Button` | Filters, actions, form submissions |
| `TextInput` | Task title, description inputs |
| `Checkbox` | Task completion toggle |
| `Switch` | Settings toggles |
| `Radio` | Priority selection, sort order |
| `Avatar` | User profile display |
| `Flex` | Layout arrangements |
| `Box` | Cards, containers |
| `BottomSheet` | Task details, add/edit forms |

## Getting Started

```bash
# Install dependencies
npm install

# Start the app
npm start
```

## Theme Integration

The app demonstrates how to pass custom themes to `TwigsProvider`:

```tsx
import { TwigsProvider } from 'testing-twigs';
import { lightTheme, darkTheme } from './constants/twigs-themes';

<TwigsProvider theme={isDark ? darkTheme : lightTheme}>
  {/* App */}
</TwigsProvider>
```

## Project Structure

```
├── app/
│   ├── _layout.tsx          # Root layout with TwigsProvider
│   ├── (tabs)/
│   │   ├── index.tsx        # Tasks screen
│   │   └── explore.tsx      # Settings screen
│   └── modal.tsx            # Modal example
├── components/
│   ├── TaskItem.tsx         # Task list item
│   ├── AddTaskSheet.tsx     # Add/Edit task bottom sheet
│   └── TaskDetailSheet.tsx  # Task detail bottom sheet
├── context/
│   ├── AppThemeContext.tsx  # Theme management
│   └── TaskContext.tsx      # Task state management
└── constants/
    └── twigs-themes.ts      # Light and dark theme definitions
```

## Dependencies

- `testing-twigs` - UI component library
- `@gorhom/bottom-sheet` - Bottom sheet (peer dependency)
- `react-native-reanimated` - Animations (peer dependency)
- `react-native-gesture-handler` - Gestures (peer dependency)
- `react-native-svg` - SVG support (peer dependency)

## License

MIT
