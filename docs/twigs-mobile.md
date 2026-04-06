# Twigs Mobile

React Native component library by [SurveySparrow](https://surveysparrow.com). Mobile counterpart of [@sparrowengg/twigs-react](https://github.com/surveysparrow/twigs).

---

## Installation

```bash
npm install @sparrowengg/twigs-mobile
```

### Peer Dependencies

```bash
npm install react-native-reanimated react-native-gesture-handler react-native-svg @gorhom/bottom-sheet react-native-safe-area-context react-native-screens
```

### Requirements

- React >= 18.0.0
- React Native >= 0.71.0
- Node >= 18.20.1

---

## Setup

Wrap your app with `TwigsProvider`:

```tsx
import { TwigsProvider } from "@sparrowengg/twigs-mobile";

export default function App() {
  return <TwigsProvider>{/* Your app */}</TwigsProvider>;
}
```

### Custom Theme

```tsx
const customTheme = {
  colors: {
    primary500: "#1A73E8",
    primary600: "#1565C0",
  },
  fonts: {
    regular: "Inter-Regular",
    medium: "Inter-Medium",
    bold: "Inter-Bold",
  },
};

<TwigsProvider theme={customTheme}>{/* Your app */}</TwigsProvider>;
```

### useTheme

Access theme tokens inside any component:

```tsx
import { useTheme } from "@sparrowengg/twigs-mobile";

function MyComponent() {
  const theme = useTheme();
  return <View style={{ backgroundColor: theme.colors.primary500 }} />;
}
```

---

## Default Theme

Complete default theme object with all token values. All dimensions are in dp (density-independent pixels).

```ts
const defaultTheme = {
  colors: {
    primary: "#2E666D",
    secondary: "#363A43",
    accent50: "#F3F3FF",
    accent100: "#EAE9FE",
    accent200: "#D7D6FE",
    accent300: "#B9B5FD",
    accent400: "#978CF9",
    accent500: "#7158F5",
    accent600: "#623BEC",
    accent700: "#5329D8",
    accent800: "#4622B5",
    accent900: "#3B1E94",
    primary50: "#E6F5F6",
    primary100: "#B8E1E5",
    primary200: "#8ACCD2",
    primary300: "#5CB5BD",
    primary400: "#2E9CA6",
    primary500: "#00828D",
    primary600: "#006B74",
    primary700: "#00555C",
    primary800: "#003E43",
    primary900: "#00272A",
    warning50: "#FFF6EF",
    warning100: "#FEEAC7",
    warning200: "#FDD28A",
    warning300: "#FCBD4F",
    warning400: "#FBAB24",
    warning500: "#F59E0B",
    warning600: "#DB8D06",
    warning700: "#B47409",
    warning800: "#92610E",
    warning900: "#78510F",
    highlight50: "#FFFCDA",
    highlight100: "#FFF7AD",
    highlight200: "#FFF27D",
    highlight300: "#FFED4B",
    highlight400: "#FFE81A",
    highlight500: "#E6CF00",
    highlight600: "#B3A100",
    highlight700: "#807300",
    highlight800: "#786B03",
    highlight900: "#6A5F00",
    positive50: "#F4FAF1",
    positive100: "#E8F4E3",
    positive200: "#D4E8CA",
    positive300: "#A8D291",
    positive400: "#67B034",
    positive500: "#5EA130",
    positive600: "#55932A",
    positive700: "#4C8425",
    positive800: "#437720",
    positive900: "#3C691C",
    secondary50: "#F4F6F7",
    secondary100: "#E2E6EB",
    secondary200: "#C9CFD8",
    secondary300: "#A3AEBD",
    secondary400: "#76859A",
    secondary500: "#64748B",
    secondary600: "#4E596C",
    secondary700: "#444B5A",
    secondary800: "#3D424D",
    secondary900: "#363A43",
    negative50: "#FFF6F3",
    negative100: "#FDEDE8",
    negative200: "#FFDAD0",
    negative300: "#FFB4A1",
    negative400: "#FA7659",
    negative500: "#F65633",
    negative600: "#E75030",
    negative700: "#D14729",
    negative800: "#BC4024",
    negative900: "#A9371E",
    neutral50: "#F8F8F8",
    neutral100: "#F1F1F1",
    neutral200: "#E2E2E2",
    neutral300: "#C6C6C6",
    neutral400: "#9E9E9E",
    neutral500: "#919191",
    neutral600: "#848484",
    neutral700: "#757575",
    neutral800: "#575757",
    neutral900: "#111111",
    black50: "#0000000A",
    black100: "#00000014",
    black200: "#0000001A",
    black300: "#00000026",
    black400: "#00000033",
    black500: "#0000004D",
    black600: "#00000080",
    black700: "#000000B2",
    black800: "#000000CC",
    black900: "#000000",
    white50: "#FFFFFF0D",
    white100: "#FFFFFF14",
    white200: "#FFFFFF1A",
    white300: "#FFFFFF26",
    white400: "#FFFFFF33",
    white500: "#FFFFFF4D",
    white600: "#FFFFFF80",
    white700: "#FFFFFFB2",
    white800: "#FFFFFFCC",
    white900: "#FFFFFF",
  },

  space: {
    "1": 2,
    "2": 4,
    "3": 6,
    "4": 8,
    "5": 10,
    "6": 12,
    "7": 14,
    "8": 16,
    "9": 18,
    "10": 20,
    "11": 22,
    "12": 24,
    "13": 26,
    "14": 28,
    "15": 30,
    "16": 32,
    "17": 34,
    "18": 36,
    "19": 38,
    "20": 40,
    "21": 42,
    "22": 44,
    "23": 46,
    "24": 48,
    "25": 50,
    "26": 52,
    "27": 54,
    "28": 56,
    "29": 58,
    "30": 60,
    "31": 62,
    "32": 64,
    "33": 66,
    "34": 68,
    "35": 70,
    "36": 72,
    "37": 74,
    "38": 76,
    "39": 78,
    "40": 80,
    "41": 82,
    "42": 84,
    "43": 86,
    "44": 88,
    "45": 90,
    "46": 92,
    "47": 94,
    "48": 96,
    "49": 98,
    "50": 100,
  },

  fontSizes: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 19.2,
    xl: 23.04,
    "2xl": 27.65,
    "3xl": 33.18,
    "4xl": 39.81,
    "5xl": 47.78,
  },

  fonts: {
    regular: "System",
    medium: "System",
    bold: "System",
  },

  fontWeights: {
    "1": "100",
    "2": "200",
    "3": "300",
    "4": "400",
    "5": "500",
    "6": "600",
    "7": "700",
    "8": "800",
    "9": "900",
  },

  lineHeights: {
    xxs: 12,
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    "2xl": 40,
    "3xl": 48,
    "4xl": 64,
  },

  sizes: {
    "1": 4,
    "2": 8,
    "3": 12,
    "4": 16,
    "5": 20,
    "6": 24,
    "7": 28,
    "8": 32,
    "9": 36,
    "10": 40,
    "11": 44,
    "12": 48,
    "13": 52,
    "14": 56,
    "15": 60,
    "16": 64,
    "17": 68,
    "18": 72,
    "19": 76,
    "20": 80,
    "21": 84,
    "22": 88,
    "23": 92,
    "24": 96,
    "25": 100,
    "26": 104,
    "27": 108,
    "28": 112,
    "29": 116,
    "30": 120,
    "31": 124,
    "32": 128,
    "33": 132,
    "34": 136,
  },

  borderWidths: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  },

  radii: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    "2xl": 16,
    "3xl": 20,
    "4xl": 24,
    round: 9999,
    pill: 9999,
  },

  shadows: {
    sm: "0px 5px 15px rgba(0, 0, 0, 0.04)",
  },

  // Transition durations in milliseconds
  transitions: {
    "1": 100,
    "2": 200,
    "3": 300,
  },
};
```

---

## Components

### Button

Pressable button with variants, sizes, icons, and loading state.

```tsx
import { Button } from '@sparrowengg/twigs-mobile';

<Button color="primary" size="md" onPress={() => {}}>
  Save changes
</Button>

// With icon and loading
<Button variant="outline" loading leftIcon={<SaveIcon />}>
  Saving
</Button>
```

| Prop        | Type                                                          | Default     |
| ----------- | ------------------------------------------------------------- | ----------- |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'`                       | `'sm'`      |
| `color`     | `'default' \| 'primary' \| 'secondary' \| 'light' \| 'error'` | `'primary'` |
| `variant`   | `'solid' \| 'ghost' \| 'outline'`                             | `'solid'`   |
| `disabled`  | `boolean`                                                     | `false`     |
| `loading`   | `boolean`                                                     | `false`     |
| `leftIcon`  | `ReactElement`                                                | —           |
| `rightIcon` | `ReactElement`                                                | —           |
| `icon`      | `ReactElement`                                                | —           |
| `loader`    | `ReactElement \| 'line' \| 'circle'`                          | `'line'`    |
| `textStyle` | `TextStyle`                                                   | —           |

---

### IconButton

Icon-only button with rounded border radius control.

```tsx
import { IconButton } from '@sparrowengg/twigs-mobile';

<IconButton icon={<PlusIcon />} onPress={() => {}} />

<IconButton icon={<SettingsIcon />} rounded="md" variant="ghost" onPress={() => {}} />
```

| Prop       | Type                                                               | Default        |
| ---------- | ------------------------------------------------------------------ | -------------- |
| `icon`     | `ReactElement`                                                     | **(required)** |
| `size`     | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'`                            | `'md'`         |
| `color`    | `'default' \| 'primary' \| 'secondary' \| 'light' \| 'error'`      | `'primary'`    |
| `variant`  | `'solid' \| 'ghost' \| 'outline'`                                  | `'solid'`      |
| `rounded`  | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| 'full'` | `'full'`       |
| `disabled` | `boolean`                                                          | `false`        |
| `loading`  | `boolean`                                                          | `false`        |
| `loader`   | `ReactElement \| 'line' \| 'circle'`                               | `'line'`       |

---

### LinkButton

Text-only pressable styled as a link with underline.

```tsx
import { LinkButton } from "@sparrowengg/twigs-mobile";

<LinkButton color="primary" onPress={() => {}}>
  Learn more
</LinkButton>;
```

| Prop        | Type                                  | Default     |
| ----------- | ------------------------------------- | ----------- |
| `size`      | `'sm' \| 'md'`                        | `'md'`      |
| `color`     | `'primary' \| 'secondary' \| 'light'` | `'primary'` |
| `variant`   | `'medium' \| 'bold'`                  | `'medium'`  |
| `disabled`  | `boolean`                             | `false`     |
| `textStyle` | `TextStyle`                           | —           |

---

### TextInput

Text field with size variants, icon/element slots, error states, label, helper text, and character count.

```tsx
import { TextInput } from '@sparrowengg/twigs-mobile';

<TextInput placeholder="Email" value={email} onChangeText={setEmail} size="lg" />

// With label and error
<TextInput label="Email" placeholder="you@example.com" errorMessage="Invalid email" />

// With icons and helper text
<TextInput leftIcon={<SearchIcon />} helperText="Search by name or email" />
```

| Prop                | Type                                         | Default     |
| ------------------- | -------------------------------------------- | ----------- |
| `size`              | `'lg' \| 'xl'`                               | `'lg'`      |
| `variant`           | `'default' \| 'filled'`                      | `'default'` |
| `leftIcon`          | `ReactElement`                               | —           |
| `rightIcon`         | `ReactElement`                               | —           |
| `leftElement`       | `ReactElement`                               | —           |
| `rightElement`      | `ReactElement`                               | —           |
| `disabled`          | `boolean`                                    | `false`     |
| `errorMessage`      | `string`                                     | —           |
| `label`             | `string`                                     | —           |
| `helperText`        | `string`                                     | —           |
| `showCount`         | `boolean`                                    | `false`     |
| `requiredIndicator` | `boolean \| ReactElement`                    | `false`     |
| `renderCounter`     | `(info: { length, maxLength }) => ReactNode` | —           |

Also accepts all standard React Native `TextInput` props.

---

### TextArea

Multi-line text area with auto-grow, label, error state, and character count.

```tsx
import { TextArea } from '@sparrowengg/twigs-mobile';

<TextArea placeholder="Write a message..." rows={4} />

// With label and character count
<TextArea label="Description" showCount maxLength={500} />

// With max rows and error
<TextArea rows={3} maxRows={8} errorMessage="Too short" />
```

| Prop                | Type                                         | Default     |
| ------------------- | -------------------------------------------- | ----------- |
| `size`              | `'lg' \| 'xl'`                               | `'lg'`      |
| `variant`           | `'default' \| 'filled'`                      | `'default'` |
| `rows`              | `number`                                     | `3`         |
| `maxRows`           | `number`                                     | —           |
| `autoGrow`          | `boolean`                                    | `true`      |
| `disabled`          | `boolean`                                    | `false`     |
| `errorMessage`      | `string`                                     | —           |
| `label`             | `string`                                     | —           |
| `helperText`        | `string`                                     | —           |
| `showCount`         | `boolean`                                    | `false`     |
| `requiredIndicator` | `boolean \| ReactElement`                    | `false`     |
| `renderCounter`     | `(info: { length, maxLength }) => ReactNode` | —           |

Also accepts all standard React Native `TextInput` props (except `multiline`).

---

### Checkbox

Checkbox with checked, unchecked, and indeterminate states.

```tsx
import { Checkbox, Text } from "@sparrowengg/twigs-mobile";

<Checkbox checked={value} onChange={setValue}>
  <Text>Accept terms</Text>
</Checkbox>;
```

| Prop            | Type                         | Default |
| --------------- | ---------------------------- | ------- |
| `checked`       | `boolean \| 'indeterminate'` | `false` |
| `onChange`      | `(checked: boolean) => void` | —       |
| `disabled`      | `boolean`                    | `false` |
| `size`          | `'sm' \| 'md'`               | `'sm'`  |
| `children`      | `ReactNode`                  | —       |
| `containerRef`  | `RefObject<View>`            | —       |
| `labelStyle`    | `StyleProp<ViewStyle>`       | —       |
| `checkboxStyle` | `StyleProp<ViewStyle>`       | —       |

---

### Radio

Radio button for single-choice selections.

```tsx
import { Radio, Text } from "@sparrowengg/twigs-mobile";

<Radio selected={selected} onSelect={setSelected}>
  <Text>Email updates</Text>
</Radio>;
```

| Prop           | Type                          | Default |
| -------------- | ----------------------------- | ------- |
| `selected`     | `boolean`                     | `false` |
| `onSelect`     | `(selected: boolean) => void` | —       |
| `disabled`     | `boolean`                     | `false` |
| `size`         | `'sm' \| 'md'`                | `'sm'`  |
| `children`     | `ReactNode`                   | —       |
| `containerRef` | `RefObject<View>`             | —       |
| `labelStyle`   | `ViewStyle`                   | —       |
| `radioStyle`   | `ViewStyle`                   | —       |

---

### Switch

Toggle switch for on/off states.

```tsx
import { Switch } from '@sparrowengg/twigs-mobile';

// Legacy API
<Switch value={value} onValueChange={setValue} />

// Web-parity API
<Switch checked={checked} onChange={setChecked} />

// Uncontrolled
<Switch defaultChecked onChange={(v) => console.log(v)} />
```

| Prop             | Type                         | Default     |
| ---------------- | ---------------------------- | ----------- |
| `value`          | `boolean`                    | —           |
| `onValueChange`  | `(value: boolean) => void`   | —           |
| `checked`        | `boolean`                    | —           |
| `onChange`       | `(checked: boolean) => void` | —           |
| `defaultChecked` | `boolean`                    | `false`     |
| `disabled`       | `boolean`                    | `false`     |
| `size`           | `'sm' \| 'md'`               | `'md'`      |
| `color`          | `'primary' \| 'secondary'`   | `'primary'` |

---

### SegmentedButton

Single-select toggle button group.

```tsx
import { SegmentedButton } from "@sparrowengg/twigs-mobile";

<SegmentedButton
  options={[
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
  ]}
  value={value}
  onChange={setValue}
/>;
```

| Prop           | Type                                                               | Default        |
| -------------- | ------------------------------------------------------------------ | -------------- |
| `options`      | `{ value: string; label: string; disabled?: boolean }[]`           | **(required)** |
| `value`        | `string`                                                           | —              |
| `defaultValue` | `string`                                                           | —              |
| `onChange`     | `(value: string) => void`                                          | —              |
| `rounded`      | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| 'full'` | `'full'`       |
| `disabled`     | `boolean`                                                          | `false`        |
| `fullWidth`    | `boolean`                                                          | `true`         |

---

### Tabs

Compound tabbed interface with animated active indicator. Uses a context-based compound component pattern (Tabs, TabsList, TabsTrigger, TabsContent).

```tsx
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Text,
} from "@sparrowengg/twigs-mobile";

<Tabs value={value} onValueChange={setValue}>
  <TabsList size="sm" variant="primary">
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <Text>Overview content</Text>
  </TabsContent>
  <TabsContent value="tab2">
    <Text>Details content</Text>
  </TabsContent>
</Tabs>;
```

**Tabs (Root)**

| Prop            | Type                      | Default |
| --------------- | ------------------------- | ------- |
| `value`         | `string`                  | --      |
| `defaultValue`  | `string`                  | --      |
| `onValueChange` | `(value: string) => void` | --      |

**TabsList**

| Prop         | Type                  | Default     |
| ------------ | --------------------- | ----------- |
| `size`       | `'md' \| 'lg'`        | `'md'`      |
| `variant`    | `'primary' \| 'dark'` | `'primary'` |
| `scrollable` | `boolean`             | `true`      |

**TabsTrigger**

| Prop       | Type        | Default        |
| ---------- | ----------- | -------------- |
| `value`    | `string`    | **(required)** |
| `disabled` | `boolean`   | `false`        |
| `children` | `ReactNode` | **(required)** |

**TabsContent**

| Prop         | Type        | Default        |
| ------------ | ----------- | -------------- |
| `value`      | `string`    | **(required)** |
| `forceMount` | `boolean`   | `false`        |
| `children`   | `ReactNode` | **(required)** |

All sub-components accept `css`, `style`, `accessibilityLabel`, and `accessibilityHint`.

---

### Stepper

Multi-step wizard/progress component with numbered steps, connectors, and an active content area.

```tsx
import { Stepper, StepperItem, Text } from "@sparrowengg/twigs-mobile";

<Stepper activeStep={step} onStepChange={setStep}>
  <StepperItem label="Details">
    <Text>Enter your details</Text>
  </StepperItem>
  <StepperItem label="Review">
    <Text>Review your information</Text>
  </StepperItem>
  <StepperItem label="Confirm">
    <Text>Confirm and submit</Text>
  </StepperItem>
</Stepper>;
```

**Stepper (Root)**

| Prop              | Type                     | Default        |
| ----------------- | ------------------------ | -------------- |
| `activeStep`      | `number`                 | **(required)** |
| `onStepChange`    | `(step: number) => void` | --             |
| `renderConnector` | `() => ReactNode`        | --             |
| `scrollable`      | `boolean`                | `true`         |
| `children`        | `ReactNode`              | **(required)** |

**StepperItem**

| Prop         | Type        | Default        |
| ------------ | ----------- | -------------- |
| `label`      | `string`    | **(required)** |
| `allowClick` | `boolean`   | `true`         |
| `children`   | `ReactNode` | --             |

All sub-components accept `css`, `style`, `accessibilityLabel`, and `accessibilityHint`. `StepperConnector` is also exported for use as a reference when building custom connectors.

---

### Chip

Selectable pill for filters, tags, and selections.

```tsx
import { Chip } from '@sparrowengg/twigs-mobile';

<Chip>Label</Chip>

<Chip color="primary" active={isActive} onActiveStateChange={setIsActive}>
  Filter
</Chip>
```

| Prop                  | Type                             | Default       |
| --------------------- | -------------------------------- | ------------- |
| `size`                | `'sm' \| 'md' \| 'lg'`           | `'sm'`        |
| `color`               | `'secondary' \| 'primary'`       | `'secondary'` |
| `rounded`             | `'xxs' \| 'xs' \| ... \| 'full'` | `'xs'`        |
| `active`              | `boolean`                        | —             |
| `defaultActive`       | `boolean`                        | `false`       |
| `onActiveStateChange` | `(active: boolean) => void`      | —             |
| `disabled`            | `boolean`                        | `false`       |
| `leftElement`         | `ReactNode`                      | —             |
| `rightElement`        | `ReactNode`                      | —             |

---

### Badge

Compact pill-shaped label for status indicators and tags.

```tsx
import { Badge } from '@sparrowengg/twigs-mobile';

<Badge color="primary" size="md">Active</Badge>

<Badge leftElement={<DotIcon />}>Status</Badge>
```

| Prop           | Type                                                                                                      | Default     |
| -------------- | --------------------------------------------------------------------------------------------------------- | ----------- |
| `size`         | `'sm' \| 'md'`                                                                                            | `'sm'`      |
| `color`        | `'default' \| 'white' \| 'primary' \| 'secondary' \| 'accent' \| 'positive' \| 'negative' \| 'attention'` | `'default'` |
| `rounded`      | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| 'full'`                                        | `'full'`    |
| `leftElement`  | `ReactNode`                                                                                               | —           |
| `rightElement` | `ReactNode`                                                                                               | —           |

---

### Alert

Contextual feedback banner with status variants and optional dismiss.

```tsx
import { Alert } from '@sparrowengg/twigs-mobile';

<Alert status="success">Operation completed!</Alert>

<Alert status="error" closable onClose={() => {}}>
  Something went wrong
</Alert>
```

| Prop       | Type                                                       | Default        |
| ---------- | ---------------------------------------------------------- | -------------- |
| `status`   | `'default' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'info'`       |
| `icon`     | `ReactElement`                                             | auto by status |
| `closable` | `boolean`                                                  | `false`        |
| `onClose`  | `() => void`                                               | —              |
| `children` | `ReactNode`                                                | **(required)** |

---

### Avatar

User avatar with image, initials fallback, or anonymous placeholder.

```tsx
import { Avatar } from '@sparrowengg/twigs-mobile';

<Avatar imageSrc="https://example.com/user.jpg" name="Jane Doe" size="lg" />

<Avatar isAnonymous size="md" />
```

| Prop              | Type                                                              | Default     |
| ----------------- | ----------------------------------------------------------------- | ----------- |
| `imageSrc`        | `string`                                                          | —           |
| `name`            | `string`                                                          | `'?'`       |
| `isAnonymous`     | `boolean`                                                         | `false`     |
| `size`            | `'xxs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl'` | —           |
| `rounded`         | `'xxs' \| ... \| 'full'`                                          | `'full'`    |
| `width`           | `number`                                                          | `32`        |
| `height`          | `number`                                                          | `32`        |
| `backgroundColor` | `string`                                                          | token-based |
| `textColor`       | `string`                                                          | token-based |

---

### AvatarGroup

Overlapping avatar stack with overflow indicator.

```tsx
import { Avatar, AvatarGroup } from "@sparrowengg/twigs-mobile";

<AvatarGroup size="md" limit={3}>
  <Avatar name="Alice" imageSrc="..." />
  <Avatar name="Bob" imageSrc="..." />
  <Avatar name="Charlie" imageSrc="..." />
  <Avatar name="Diana" imageSrc="..." />
</AvatarGroup>;
```

| Prop                 | Type              | Default        |
| -------------------- | ----------------- | -------------- |
| `children`           | `Avatar elements` | **(required)** |
| `limit`              | `number \| null`  | `0`            |
| `limitExceededLabel` | `string`          | auto `+N`      |
| `size`               | same as Avatar    | `'xs'`         |
| `rounded`            | same as Avatar    | `'full'`       |

---

### Text

Themed typography component.

```tsx
import { Text } from '@sparrowengg/twigs-mobile';

<Text fontSize={16} weight="bold" color={theme.colors.primary600}>
  Hello world
</Text>

<Text numberOfLines={2} ellipsizeMode="tail">
  Long text that truncates...
</Text>
```

| Prop             | Type                                                                  | Default                   |
| ---------------- | --------------------------------------------------------------------- | ------------------------- |
| `fontSize`       | `number`                                                              | `14`                      |
| `weight`         | `'regular' \| 'medium' \| 'bold'`                                     | `'regular'`               |
| `fontFamily`     | `string`                                                              | `theme.fonts.regular`     |
| `fontWeight`     | `string`                                                              | `'400'` _(deprecated)_    |
| `color`          | `string`                                                              | `theme.colors.neutral900` |
| `textAlign`      | `'left' \| 'center' \| 'right' \| 'justify'`                          | —                         |
| `textDecoration` | `'none' \| 'underline' \| 'line-through' \| 'underline line-through'` | —                         |
| `textTransform`  | `'none' \| 'capitalize' \| 'uppercase' \| 'lowercase'`                | —                         |
| `fontStyle`      | `'normal' \| 'italic'`                                                | —                         |
| `numberOfLines`  | `number`                                                              | —                         |
| `ellipsizeMode`  | `'head' \| 'middle' \| 'tail' \| 'clip'`                              | —                         |
| `lineHeight`     | `number`                                                              | —                         |
| `letterSpacing`  | `number`                                                              | —                         |

---

### Box

Basic layout container with margin/padding shorthand props.

```tsx
import { Box } from "@sparrowengg/twigs-mobile";

<Box margin={16} padding={24}>
  <Text>Content</Text>
</Box>;
```

| Prop                                                            | Type     | Default |
| --------------------------------------------------------------- | -------- | ------- |
| `margin`                                                        | `number` | —       |
| `marginTop` / `marginBottom` / `marginLeft` / `marginRight`     | `number` | —       |
| `marginHorizontal` / `marginVertical`                           | `number` | —       |
| `padding`                                                       | `number` | —       |
| `paddingTop` / `paddingBottom` / `paddingLeft` / `paddingRight` | `number` | —       |
| `paddingHorizontal` / `paddingVertical`                         | `number` | —       |

Also accepts all React Native `ViewProps`.

---

### Flex

Flexbox container with direction, alignment, and gap.

```tsx
import { Flex, Text } from '@sparrowengg/twigs-mobile';

<Flex direction="row" align="center" justify="space-between" gap={16}>
  <Text>Left</Text>
  <Text>Right</Text>
</Flex>

<Flex gap={12} padding={24}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Flex>
```

| Prop         | Type                                                                                            | Default    |
| ------------ | ----------------------------------------------------------------------------------------------- | ---------- |
| `direction`  | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'`                                        | `'column'` |
| `align`      | `'flex-start' \| 'flex-end' \| 'center' \| 'stretch' \| 'baseline'`                             | —          |
| `justify`    | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly'` | —          |
| `wrap`       | `'nowrap' \| 'wrap' \| 'wrap-reverse'`                                                          | —          |
| `gap`        | `number`                                                                                        | —          |
| `flex`       | `number`                                                                                        | —          |
| `flexGrow`   | `number`                                                                                        | —          |
| `flexShrink` | `number`                                                                                        | —          |
| `flexBasis`  | `DimensionValue`                                                                                | —          |
| `alignSelf`  | `'auto' \| 'flex-start' \| 'flex-end' \| 'center' \| 'stretch' \| 'baseline'`                   | —          |

Also accepts all `Box` props (margin/padding shorthands) and `ViewProps`.

---

### Separator

Visual divider line.

```tsx
import { Separator } from '@sparrowengg/twigs-mobile';

<Separator />

<Flex direction="row" align="center" gap={8}>
  <Text>A</Text>
  <Separator orientation="vertical" />
  <Text>B</Text>
</Flex>
```

| Prop          | Type                         | Default                   |
| ------------- | ---------------------------- | ------------------------- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'`            |
| `color`       | `string`                     | `theme.colors.neutral200` |
| `decorative`  | `boolean`                    | `false`                   |

---

### Loader

Two loader components: `LineLoader` (horizontal bar) and `CircleLoader` (spinning circle).

```tsx
import { LineLoader, CircleLoader } from '@sparrowengg/twigs-mobile';

<LineLoader size="md" color="primary" />
<CircleLoader size="lg" color="secondary" />
```

**LineLoader**

| Prop    | Type                                                             | Default     |
| ------- | ---------------------------------------------------------------- | ----------- |
| `size`  | `'sm' \| 'md' \| 'lg' \| 'xl'`                                   | `'sm'`      |
| `color` | `'primary' \| 'secondary' \| 'bright' \| 'negative' \| 'accent'` | `'primary'` |

**CircleLoader**

| Prop    | Type                                                             | Default     |
| ------- | ---------------------------------------------------------------- | ----------- |
| `size`  | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl'`         | `'md'`      |
| `color` | `'primary' \| 'secondary' \| 'bright' \| 'negative' \| 'accent'` | `'primary'` |

---

### Modal

Composable modal dialog with sub-components.

```tsx
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  Button,
} from "@sparrowengg/twigs-mobile";

<Modal visible={visible} onClose={() => setVisible(false)}>
  <ModalContent size="md">
    <ModalHeader>
      <ModalTitle>Delete item?</ModalTitle>
      <ModalDescription>This cannot be undone.</ModalDescription>
    </ModalHeader>
    <ModalBody scrollable>{/* content */}</ModalBody>
    <ModalFooter>
      <Button variant="outline" onPress={() => setVisible(false)}>
        Cancel
      </Button>
      <Button color="error" onPress={handleDelete}>
        Delete
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>;
```

**Modal**

| Prop                   | Type                          | Default        |
| ---------------------- | ----------------------------- | -------------- |
| `visible`              | `boolean`                     | **(required)** |
| `onClose`              | `() => void`                  | —              |
| `closeOnBackdropPress` | `boolean`                     | `true`         |
| `animationType`        | `'none' \| 'fade' \| 'slide'` | `'fade'`       |

**ModalContent**

| Prop   | Type                             | Default |
| ------ | -------------------------------- | ------- |
| `size` | `'sm' \| 'md' \| 'lg' \| 'full'` | `'md'`  |

**ModalBody**

| Prop         | Type      | Default |
| ------------ | --------- | ------- |
| `scrollable` | `boolean` | `false` |

`ModalHeader`, `ModalTitle`, `ModalDescription`, `ModalFooter` accept `children`, `css`, and `style`.

---

### Toast

Stackable notification messages with imperative API and swipe-to-dismiss.

**Setup** — mount `ToastProvider` inside `TwigsProvider`:

```tsx
import { TwigsProvider, ToastProvider } from "@sparrowengg/twigs-mobile";

<TwigsProvider>
  <ToastProvider defaultPosition="bottom-center" maxToasts={3}>
    <App />
  </ToastProvider>
</TwigsProvider>;
```

**Usage:**

```tsx
import { toast } from "@sparrowengg/twigs-mobile";

// Basic
toast({ title: "Saved!", variant: "success" });

// Convenience methods
toast.success("Saved!");
toast.error("Failed");
toast.warning("Check input");
toast.loading("Processing...");

// With description and action
toast({
  title: "Item deleted",
  description: "The item was removed.",
  variant: "error",
  action: (
    <LinkButton size="sm" color="light" onPress={undo}>
      Undo
    </LinkButton>
  ),
});

// Update existing toast
const { id } = toast.loading("Uploading...");
toast.update(id, { title: "Done!", variant: "success" });

// Dismiss
toast.dismiss(); // all
toast.dismiss(id); // specific
```

**useToast hook:**

```tsx
import { useToast } from "@sparrowengg/twigs-mobile";

const { show, secondary, success, error, warning, loading, dismiss, update } =
  useToast();
```

**ToastProvider Props**

| Prop              | Type                              | Default           |
| ----------------- | --------------------------------- | ----------------- |
| `defaultPosition` | `'top-center' \| 'bottom-center'` | `'bottom-center'` |
| `defaultDuration` | `number` (ms)                     | `4000`            |
| `maxToasts`       | `number`                          | `3`               |
| `gap`             | `number` (dp)                     | `8`               |
| `offset`          | `number` (dp)                     | `40`              |

**toast() Options**

| Option        | Type                                                                         | Default           |
| ------------- | ---------------------------------------------------------------------------- | ----------------- |
| `title`       | `string`                                                                     | **(required)**    |
| `description` | `string`                                                                     | —                 |
| `variant`     | `'default' \| 'secondary' \| 'success' \| 'error' \| 'warning' \| 'loading'` | `'default'`       |
| `icon`        | `ReactElement`                                                               | auto by variant   |
| `action`      | `ReactElement`                                                               | —                 |
| `duration`    | `number` (ms)                                                                | `4000`            |
| `position`    | `'top-center' \| 'bottom-center'`                                            | `'bottom-center'` |
| `onPress`     | `() => void`                                                                 | —                 |
| `onShow`      | `() => void`                                                                 | —                 |
| `onDismiss`   | `() => void`                                                                 | —                 |

---

### Tooltip

Floating content bubble anchored to a trigger element.

```tsx
import { Tooltip, Button } from '@sparrowengg/twigs-mobile';

<Tooltip content="Helpful tip" side="top">
  <Button>Tap me</Button>
</Tooltip>

// Auto-dismiss after 3s
<Tooltip content="Disappears soon" autoHideDuration={3000}>
  <Button>Info</Button>
</Tooltip>
```

| Prop               | Type                                     | Default               |
| ------------------ | ---------------------------------------- | --------------------- |
| `content`          | `ReactNode`                              | **(required)**        |
| `children`         | `ReactNode`                              | **(required)**        |
| `side`             | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'`               |
| `align`            | `'start' \| 'center' \| 'end'`           | `'center'`            |
| `open`             | `boolean`                                | —                     |
| `defaultOpen`      | `boolean`                                | `false`               |
| `onOpenChange`     | `(open: boolean) => void`                | —                     |
| `sideOffset`       | `number` (dp)                            | `6`                   |
| `autoHideDuration` | `number` (ms)                            | `0` (no auto-dismiss) |
| `hasArrow`         | `boolean`                                | `true`                |
| `triggerAction`    | `'press' \| 'longPress'`                 | `'press'`             |

---

### DropdownMenu

Compound dropdown menu for displaying actions or options anchored to a trigger. Uses a context-based compound component pattern (DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator).

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
} from "@sparrowengg/twigs-mobile";

<DropdownMenu>
  <DropdownMenuTrigger>
    <Button>Actions</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>File</DropdownMenuLabel>
    <DropdownMenuItem onSelect={() => {}}>New</DropdownMenuItem>
    <DropdownMenuItem onSelect={() => {}}>Open</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem onSelect={() => {}} disabled>
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>;
```

**DropdownMenu (Root)**

| Prop           | Type                      | Default |
| -------------- | ------------------------- | ------- |
| `size`         | `'sm' \| 'md'`            | `'md'`  |
| `open`         | `boolean`                 | --      |
| `defaultOpen`  | `boolean`                 | `false` |
| `onOpenChange` | `(open: boolean) => void` | --      |

**DropdownMenuContent**

| Prop         | Type     | Default |
| ------------ | -------- | ------- |
| `sideOffset` | `number` | `4`     |

**DropdownMenuItem**

| Prop           | Type           | Default |
| -------------- | -------------- | ------- |
| `disabled`     | `boolean`      | `false` |
| `onSelect`     | `() => void`   | --      |
| `leftElement`  | `ReactElement` | --      |
| `rightElement` | `ReactElement` | --      |
| `textValue`    | `string`       | --      |

**DropdownMenuSeparator**

| Prop    | Type     | Default |
| ------- | -------- | ------- |
| `color` | `string` | --      |

All sub-components accept `css`, `style`, `accessibilityLabel`, and `accessibilityHint`.

---

### BottomSheet

Themed wrapper around `@gorhom/bottom-sheet` with drag handle and optional title.

```tsx
import { BottomSheet } from "@sparrowengg/twigs-mobile";

<BottomSheet snapPoints={["25%", "50%", "90%"]} title="Settings">
  {/* content */}
</BottomSheet>;
```

**BottomSheetModal** — modal variant that opens/closes programmatically:

```tsx
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@sparrowengg/twigs-mobile";

<BottomSheetModalProvider>
  <Button onPress={() => ref.current?.present()}>Open</Button>
  <BottomSheetModal ref={ref} snapPoints={["50%"]} title="Modal Sheet">
    {/* content */}
  </BottomSheetModal>
</BottomSheetModalProvider>;
```

| Prop                         | Type                                        | Default        |
| ---------------------------- | ------------------------------------------- | -------------- |
| `snapPoints`                 | `(string \| number)[]`                      | **(required)** |
| `title`                      | `string`                                    | —              |
| `pressBehavior` (modal only) | `'none' \| 'close' \| 'collapse' \| number` | `'close'`      |

Also accepts all `@gorhom/bottom-sheet` props.

**Re-exported helpers:** `BottomSheetView`, `BottomSheetScrollView`, `BottomSheetFlatList`, `BottomSheetSectionList`, `BottomSheetTextInput`, `BottomSheetHandle`, `BottomSheetBackdrop`, `BottomSheetFooter`, `BottomSheetFooterContainer`.

---

## Utilities

```tsx
import {
  colorOpacity,
  AnimatedView,
  createTextStyle,
} from "@sparrowengg/twigs-mobile";

// Alpha overlay on any hex color
colorOpacity("#00828D", 0.1); // → '#00828D1A'

// Reanimated-powered View
<AnimatedView style={animatedStyle} />;

// Platform-safe text style
createTextStyle("Inter-Bold", "700");
```

---

## Accessibility

All interactive components include `accessibilityRole`, `accessibilityState`, and `accessibilityLabel` out of the box. Pass `accessibilityLabel` and `accessibilityHint` to any component for custom screen reader context.

---

## Links

| Resource | URL                                                     |
| -------- | ------------------------------------------------------- |
| GitHub   | https://github.com/surveysparrow/twigs-mobile           |
| Npm      | https://www.npmjs.com/package/@sparrowengg/twigs-mobile |
