import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { CircleLoader, Text } from '@sparrowengg/twigs-mobile';
import type { CircleLoaderProps } from '@sparrowengg/twigs-mobile';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta = {
  title: 'Components/CircleLoader',
  component: CircleLoader,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Diameter preset',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'bright', 'negative', 'accent'],
      description: 'Color variant',
    },
  },
  args: {
    size: 'md',
    color: 'primary',
  },
} satisfies Meta<CircleLoaderProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>CircleLoader</Text>
      <Text style={docsStyles.description}>
        A spinning circular loading indicator. Uses SVG arcs for cross-platform consistency.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>
          • size — 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' (default: 'md')
        </Text>
        <Text style={docsStyles.prop}>
          • color — 'primary' | 'secondary' | 'bright' | 'negative' | 'accent'
        </Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <CircleLoader size="md" color="primary" />
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <CircleLoader size="xs" />
        <CircleLoader size="sm" />
        <CircleLoader size="md" />
        <CircleLoader size="lg" />
        <CircleLoader size="xl" />
      </View>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <CircleLoader color="primary" />
        <CircleLoader color="secondary" />
        <CircleLoader color="bright" />
        <CircleLoader color="negative" />
        <CircleLoader color="accent" />
      </View>
    </View>
  ),
};
