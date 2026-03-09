import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { LineLoader, Text } from 'testing-twigs';
import type { LineLoaderProps } from 'testing-twigs';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta = {
  title: 'Components/LineLoader',
  component: LineLoader,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size preset (width x height)',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'bright', 'negative', 'accent'],
      description: 'Color variant',
    },
  },
  args: {
    size: 'sm',
    color: 'primary',
  },
} satisfies Meta<LineLoaderProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>LineLoader</Text>
      <Text style={docsStyles.description}>
        A horizontal animated loading bar. Commonly used inside buttons or at the top of containers.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>• size — 'sm' | 'md' | 'lg' | 'xl' (default: 'sm')</Text>
        <Text style={docsStyles.prop}>
          • color — 'primary' | 'secondary' | 'bright' | 'negative' | 'accent'
        </Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <LineLoader size="sm" color="primary" />
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <LineLoader size="sm" />
      <LineLoader size="md" />
      <LineLoader size="lg" />
      <LineLoader size="xl" />
      <LineLoader size="md" color="secondary" />
      <LineLoader size="md" color="negative" />
      <LineLoader size="md" color="accent" />
    </View>
  ),
};
