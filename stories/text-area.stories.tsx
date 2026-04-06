import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Text, TextArea } from '@sparrowengg/twigs-mobile';
import type { TextAreaProps } from '@sparrowengg/twigs-mobile';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'xl'],
      description: 'Size preset',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled'],
      description: 'Visual variant',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text rows',
    },
    maxRows: {
      control: 'number',
      description: 'Maximum rows before scrolling',
    },
    autoGrow: {
      control: 'boolean',
      description: 'Auto-grow with content',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed below textarea',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
    label: {
      control: 'text',
      description: 'Label text above the textarea',
    },
    helperText: {
      control: 'text',
      description: 'Helper text below the textarea',
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count (requires maxLength)',
    },
    requiredIndicator: {
      control: 'boolean',
      description: 'Show required indicator on label',
    },
  },
  args: {
    placeholder: 'Placeholder Text',
    size: 'lg',
    variant: 'default',
    rows: 3,
    autoGrow: true,
    disabled: false,
    showCount: false,
    requiredIndicator: false,
  },
} satisfies Meta<TextAreaProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>TextArea</Text>
      <Text style={docsStyles.description}>
        A multi-line text area with auto-grow, label, error state, and character count support.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>• size — 'lg' | 'xl' (default: 'lg')</Text>
        <Text style={docsStyles.prop}>• variant — 'default' | 'filled' (default: 'default')</Text>
        <Text style={docsStyles.prop}>• rows — number of visible lines (default: 3)</Text>
        <Text style={docsStyles.prop}>• maxRows — max rows before scrolling</Text>
        <Text style={docsStyles.prop}>• autoGrow — auto-grow with content (default: true)</Text>
        <Text style={docsStyles.prop}>• errorMessage — error state with message</Text>
        <Text style={docsStyles.prop}>• disabled — boolean (default: false)</Text>
        <Text style={docsStyles.prop}>• label — label text above the textarea</Text>
        <Text style={docsStyles.prop}>• helperText — helper text below the textarea</Text>
        <Text style={docsStyles.prop}>
          • showCount — show character count (requires maxLength)
        </Text>
        <Text style={docsStyles.prop}>• requiredIndicator — required indicator on label</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <TextArea placeholder="Placeholder Text" label="Label" />
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <TextArea size="lg" placeholder="Large (default)" label="Label" />
      <TextArea size="xl" placeholder="Extra Large" label="Label" />
      <TextArea variant="filled" placeholder="Filled variant" label="Label" />
      <TextArea errorMessage="This field is required" placeholder="Error state" label="Label" />
      <TextArea disabled placeholder="Disabled" label="Label" />
      <TextArea rows={5} placeholder="5 rows" label="Label" />
    </View>
  ),
};
