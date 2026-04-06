import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { SegmentedButton, Text } from '@sparrowengg/twigs-mobile';
import type { SegmentedButtonProps } from '@sparrowengg/twigs-mobile';

const DEFAULT_OPTIONS = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
];

const THREE_OPTIONS = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
];

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta = {
  title: 'Components/SegmentedButton',
  component: SegmentedButton,
  argTypes: {
    rounded: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
      description: 'Border radius of the container and segments',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the entire segmented button is disabled',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the component stretches to fill parent width',
    },
    value: {
      control: 'text',
      description: 'Currently selected value (controlled)',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value (uncontrolled)',
    },
  },
  args: {
    options: DEFAULT_OPTIONS,
    defaultValue: 'option1',
    rounded: 'full',
    disabled: false,
    fullWidth: true,
  },
} satisfies Meta<SegmentedButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>SegmentedButton</Text>
      <Text style={docsStyles.description}>
        A segmented control for switching between 2-3 options. Supports controlled and uncontrolled
        modes, rounded variants, and per-option disabled state.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>
          • options — array of {'{ value, label, disabled? }'}
        </Text>
        <Text style={docsStyles.prop}>• value / defaultValue — controlled or uncontrolled</Text>
        <Text style={docsStyles.prop}>• onChange — (value: string) callback</Text>
        <Text style={docsStyles.prop}>
          • rounded — 'xs' ... '3xl' | 'full' (default: 'full')
        </Text>
        <Text style={docsStyles.prop}>• fullWidth — boolean (default: true)</Text>
        <Text style={docsStyles.prop}>• disabled — boolean (default: false)</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <SegmentedButton options={DEFAULT_OPTIONS} defaultValue="option1" />
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    const [threeValue, setThreeValue] = useState('daily');
    return (
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 13, color: '#64748B' }}>Selected: {value}</Text>
        <SegmentedButton options={DEFAULT_OPTIONS} value={value} onChange={setValue} />
        <SegmentedButton options={DEFAULT_OPTIONS} value={value} onChange={setValue} rounded="md" />
        <Text style={{ fontSize: 13, color: '#64748B' }}>Three options: {threeValue}</Text>
        <SegmentedButton options={THREE_OPTIONS} value={threeValue} onChange={setThreeValue} />
        <SegmentedButton options={DEFAULT_OPTIONS} defaultValue="option1" disabled />
        <SegmentedButton
          options={[
            { value: 'option1', label: 'Enabled' },
            { value: 'option2', label: 'Disabled', disabled: true },
          ]}
          defaultValue="option1"
        />
      </View>
    );
  },
};
