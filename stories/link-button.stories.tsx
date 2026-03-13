import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { LinkButton, Text } from 'testing-twigs';
import type { LinkButtonProps } from 'testing-twigs';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
  darkBg: {
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
});

const meta = {
  title: 'Components/LinkButton',
  component: LinkButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size variant',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'light'],
      description: 'Color variant',
    },
    variant: {
      control: 'select',
      options: ['medium', 'bold'],
      description: 'Visual variant controlling font weight',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    children: {
      control: 'text',
      description: 'Link text content',
    },
  },
  args: {
    children: 'Link label',
    size: 'md',
    color: 'primary',
    variant: 'medium',
    disabled: false,
  },
} satisfies Meta<LinkButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>LinkButton</Text>
      <Text style={docsStyles.description}>
        A text-style pressable link with underline. Supports size, color, and weight variants.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>• size — 'sm' | 'md' (default: 'md')</Text>
        <Text style={docsStyles.prop}>
          • color — 'primary' | 'secondary' | 'light' (default: 'primary')
        </Text>
        <Text style={docsStyles.prop}>• variant — 'medium' | 'bold' (default: 'medium')</Text>
        <Text style={docsStyles.prop}>• disabled — boolean (default: false)</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <LinkButton color="primary">Link label</LinkButton>
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <LinkButton size="sm" color="primary" variant="medium">SM Primary</LinkButton>
        <LinkButton size="sm" color="primary" variant="bold">SM Bold</LinkButton>
        <LinkButton size="sm" color="secondary" variant="medium">SM Secondary</LinkButton>
        <LinkButton size="sm" color="secondary" variant="bold">SM Bold Secondary</LinkButton>
      </View>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <LinkButton size="md" color="primary" variant="medium">MD Primary</LinkButton>
        <LinkButton size="md" color="primary" variant="bold">MD Bold</LinkButton>
        <LinkButton size="md" color="secondary" variant="medium">MD Secondary</LinkButton>
        <LinkButton size="md" color="secondary" variant="bold">MD Bold Secondary</LinkButton>
      </View>
      <View style={docsStyles.darkBg}>
        <LinkButton size="sm" color="light" variant="medium">SM Light</LinkButton>
        <LinkButton size="sm" color="light" variant="bold">SM Bold Light</LinkButton>
        <LinkButton size="md" color="light" variant="medium">MD Light</LinkButton>
        <LinkButton size="md" color="light" variant="bold">MD Bold Light</LinkButton>
      </View>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <LinkButton disabled size="md" color="primary">Disabled Primary</LinkButton>
        <LinkButton disabled size="md" color="secondary">Disabled Secondary</LinkButton>
      </View>
      <View style={docsStyles.darkBg}>
        <LinkButton disabled size="md" color="light">Disabled Light</LinkButton>
      </View>
    </View>
  ),
};
