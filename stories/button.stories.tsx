import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Button, Text } from 'testing-twigs';
import type { ButtonProps } from 'testing-twigs';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label text',
    },
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Size preset',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
      description: 'Visual variant',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'bright', 'light', 'error'],
      description: 'Color preset',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with loader indicator',
    },
    loader: {
      control: 'select',
      options: ['line', 'circle'],
      description: 'Loader type when loading is true',
    },
  },
  args: {
    children: 'Button',
    size: 'sm',
    variant: 'solid',
    color: 'primary',
    disabled: false,
    loading: false,
    loader: 'line',
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>Button</Text>
      <Text style={docsStyles.description}>
        Primary action component with multiple variants, sizes, colors, and loading states.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>
          • size — 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' (default: 'sm')
        </Text>
        <Text style={docsStyles.prop}>
          • variant — 'solid' | 'outline' | 'ghost' (default: 'solid')
        </Text>
        <Text style={docsStyles.prop}>
          • color — 'default' | 'primary' | 'secondary' | 'bright' | 'light' | 'error'
        </Text>
        <Text style={docsStyles.prop}>• disabled — boolean (default: false)</Text>
        <Text style={docsStyles.prop}>• loading — boolean (default: false)</Text>
        <Text style={docsStyles.prop}>• loader — 'line' | 'circle' (default: 'line')</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <Button size="sm" color="primary">
          Button
        </Button>
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <Button size="xxs">XXS</Button>
        <Button size="xs">XS</Button>
        <Button size="sm">SM</Button>
        <Button size="md">MD</Button>
        <Button size="lg">LG</Button>
        <Button size="xl">XL</Button>
        <Button size="2xl">2XL</Button>
      </View>
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="bright">Bright</Button>
        <Button color="light">Light</Button>
        <Button color="error">Error</Button>
      </View>
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
        <Button variant="solid" color="primary">Solid</Button>
        <Button variant="outline" color="primary">Outline</Button>
        <Button variant="ghost" color="primary">Ghost</Button>
      </View>
      <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button loading loader="circle">Circle</Button>
      </View>
    </View>
  ),
};
