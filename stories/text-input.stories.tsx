import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { TextInputProps } from '@sparrowengg/twigs-mobile';
import { Text, TextInput } from '@sparrowengg/twigs-mobile';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
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
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    editable: {
      control: 'boolean',
      description: 'Whether the input is editable',
    },
    secureTextEntry: {
      control: 'boolean',
      description: 'Password mode (dots)',
    },
    errorBorder: {
      control: 'boolean',
      description: 'Show error border styling',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed below input',
    },
    multiline: {
      control: 'boolean',
      description: 'Multi-line text input',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
  },
  args: {
    placeholder: 'Type something...',
    size: 'md',
    variant: 'default',
    disabled: false,
    editable: true,
    secureTextEntry: false,
    errorBorder: false,
    multiline: false,
  },
} satisfies Meta<TextInputProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>TextInput</Text>
      <Text style={docsStyles.description}>
        A styled text input with size and variant presets, error states, password toggle, and
        multiline support.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>
          • size — 'sm' | 'md' | 'lg' | 'xl' | '2xl' (default: 'md')
        </Text>
        <Text style={docsStyles.prop}>• variant — 'default' | 'filled' (default: 'default')</Text>
        <Text style={docsStyles.prop}>• errorBorder / errorMessage — error state</Text>
        <Text style={docsStyles.prop}>• secureTextEntry — password mode</Text>
        <Text style={docsStyles.prop}>• multiline / numberOfLines — multiline support</Text>
        <Text style={docsStyles.prop}>• disabled — boolean (default: false)</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <TextInput placeholder="Type something..." />
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <TextInput size="sm" placeholder="Small" />
      <TextInput size="md" placeholder="Medium (default)" />
      <TextInput size="lg" placeholder="Large" />
      <TextInput size="xl" placeholder="Extra Large" />
      <TextInput variant="filled" placeholder="Filled variant" />
      <TextInput errorBorder errorMessage="This field is required" placeholder="Error state" />
      <TextInput secureTextEntry placeholder="Password" />
      <TextInput multiline numberOfLines={3} placeholder="Multiline..." />
      <TextInput disabled editable={false} placeholder="Disabled" />
    </View>
  ),
};
