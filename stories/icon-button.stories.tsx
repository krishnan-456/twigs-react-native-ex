import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Svg, Line } from 'react-native-svg';
import { IconButton, Text } from '@sparrowengg/twigs-mobile';

const PlusIcon = ({ size = 16, color = '#FFFFFF' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Line x1="12" y1="5" x2="12" y2="19" stroke={color} strokeWidth={2} strokeLinecap="round" />
    <Line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth={2} strokeLinecap="round" />
  </Svg>
);

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
  row: { flexDirection: 'row', gap: 12, alignItems: 'center', flexWrap: 'wrap' },
  darkRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#363A43',
    padding: 12,
    borderRadius: 8,
  },
  label: { fontSize: 12, color: '#666', marginBottom: 4 },
});

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size preset',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'light', 'error'],
      description: 'Color preset',
    },
    variant: {
      control: 'select',
      options: ['solid', 'ghost', 'outline'],
      description: 'Visual variant',
    },
    rounded: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
      description: 'Border radius of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
  },
  args: {
    size: 'md',
    color: 'primary',
    variant: 'solid',
    rounded: 'full',
    disabled: false,
    loading: false,
    icon: <PlusIcon />,
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>IconButton</Text>
      <Text style={docsStyles.description}>
        A button that renders only an icon with dedicated size and color presets.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>• icon — ReactElement (required)</Text>
        <Text style={docsStyles.prop}>
          • size — 'sm' | 'md' | 'lg' | 'xl' | '2xl' (default: 'md')
        </Text>
        <Text style={docsStyles.prop}>
          • variant — 'solid' | 'ghost' | 'outline' (default: 'solid')
        </Text>
        <Text style={docsStyles.prop}>
          • color — 'default' | 'primary' | 'secondary' | 'light' | 'error'
        </Text>
        <Text style={docsStyles.prop}>
          • rounded — 'xs' ... '3xl' | 'full' (default: 'full')
        </Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <IconButton icon={<PlusIcon />} color="primary" />
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllSizes: Story = {
  render: (args) => (
    <View style={{ gap: 16 }}>
      <Text style={docsStyles.label}>All Sizes (sm → 2xl)</Text>
      <View style={docsStyles.row}>
        {(['sm', 'md', 'lg', 'xl', '2xl'] as const).map((s) => (
          <IconButton key={s} {...args} size={s} icon={<PlusIcon />} />
        ))}
      </View>
    </View>
  ),
};

export const AllVariants: Story = {
  render: (args) => (
    <View style={{ gap: 16 }}>
      <Text style={docsStyles.label}>Solid</Text>
      <View style={docsStyles.row}>
        {(['primary', 'secondary', 'default', 'error'] as const).map((c) => (
          <IconButton key={c} {...args} variant="solid" color={c} icon={<PlusIcon />} />
        ))}
      </View>
      <View style={docsStyles.darkRow}>
        {(['light'] as const).map((c) => (
          <IconButton key={c} {...args} variant="solid" color={c} icon={<PlusIcon />} />
        ))}
      </View>

      <Text style={docsStyles.label}>Ghost</Text>
      <View style={docsStyles.row}>
        {(['primary', 'secondary', 'default', 'error'] as const).map((c) => (
          <IconButton key={c} {...args} variant="ghost" color={c} icon={<PlusIcon />} />
        ))}
      </View>
      <View style={docsStyles.darkRow}>
        {(['light'] as const).map((c) => (
          <IconButton key={c} {...args} variant="ghost" color={c} icon={<PlusIcon />} />
        ))}
      </View>

      <Text style={docsStyles.label}>Outline</Text>
      <View style={docsStyles.row}>
        {(['primary', 'secondary', 'error'] as const).map((c) => (
          <IconButton key={c} {...args} variant="outline" color={c} icon={<PlusIcon />} />
        ))}
      </View>

      <Text style={docsStyles.label}>Disabled</Text>
      <View style={docsStyles.row}>
        <IconButton {...args} disabled icon={<PlusIcon />} />
        <IconButton {...args} disabled variant="ghost" icon={<PlusIcon />} />
        <IconButton {...args} disabled variant="outline" icon={<PlusIcon />} />
      </View>

      <Text style={docsStyles.label}>Loading</Text>
      <View style={docsStyles.row}>
        <IconButton {...args} loading icon={<PlusIcon />} />
        <IconButton {...args} loading loader="circle" icon={<PlusIcon />} />
      </View>
    </View>
  ),
};
