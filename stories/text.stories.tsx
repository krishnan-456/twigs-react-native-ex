import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Text } from '@sparrowengg/twigs-mobile';
import type { TextProps } from '@sparrowengg/twigs-mobile';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'bold'],
      description: 'Semantic font weight — maps to theme font family',
    },
    fontSize: {
      control: 'number',
      description: 'Font size in dp (default: 14)',
    },
    color: {
      control: 'color',
      description: 'Text color (default: theme neutral900)',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    textTransform: {
      control: 'select',
      options: ['none', 'capitalize', 'uppercase', 'lowercase'],
      description: 'Text transform',
    },
    numberOfLines: {
      control: 'number',
      description: 'Max lines before truncation',
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    weight: 'regular',
    fontSize: 14,
  },
} satisfies Meta<TextProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>Text</Text>
      <Text style={docsStyles.description}>
        Themed text component with typography, spacing, and truncation props. The{' '}
        <Text style={{ fontFamily: 'DMSans_600SemiBold', fontSize: 14 }}>weight</Text> prop maps to
        theme font families (regular, medium, bold) and is the preferred way to set font weight.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>
          • weight — 'regular' | 'medium' | 'bold' (default: 'regular')
        </Text>
        <Text style={docsStyles.prop}>• fontSize — number in dp (default: 14)</Text>
        <Text style={docsStyles.prop}>• color — string color value</Text>
        <Text style={docsStyles.prop}>
          • textAlign — 'left' | 'center' | 'right' | 'justify'
        </Text>
        <Text style={docsStyles.prop}>
          • textTransform — 'none' | 'capitalize' | 'uppercase' | 'lowercase'
        </Text>
        <Text style={docsStyles.prop}>• numberOfLines — max lines before truncation</Text>
        <Text style={docsStyles.prop}>• lineHeight — number in dp</Text>
        <Text style={docsStyles.prop}>• letterSpacing — number in dp</Text>
        <Text style={docsStyles.prop}>• css / style — TextStyle overrides</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <Text weight="regular">Regular weight text</Text>
        <Text weight="medium">Medium weight text</Text>
        <Text weight="bold">Bold weight text</Text>
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', color: '#666' }}>
          Weight
        </Text>
        <Text weight="regular" fontSize={14}>
          Regular — The quick brown fox
        </Text>
        <Text weight="medium" fontSize={14}>
          Medium — The quick brown fox
        </Text>
        <Text weight="bold" fontSize={14}>
          Bold — The quick brown fox
        </Text>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', color: '#666' }}>
          Font Sizes
        </Text>
        <Text fontSize={10}>10dp — Extra Small</Text>
        <Text fontSize={12}>12dp — Small</Text>
        <Text fontSize={14}>14dp — Default</Text>
        <Text fontSize={16}>16dp — Medium</Text>
        <Text fontSize={20}>20dp — Large</Text>
        <Text fontSize={24}>24dp — XL</Text>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', color: '#666' }}>
          Colors
        </Text>
        <Text color="#111111">Default (neutral900)</Text>
        <Text color="#2E666D">Primary</Text>
        <Text color="#666666">Muted</Text>
        <Text color="#F65633">Error</Text>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', color: '#666' }}>
          Text Transform
        </Text>
        <Text textTransform="uppercase">uppercase transform</Text>
        <Text textTransform="capitalize">capitalize transform</Text>
        <Text textTransform="lowercase">LOWERCASE TRANSFORM</Text>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', color: '#666' }}>
          Truncation
        </Text>
        <Text numberOfLines={1}>
          This is a very long text that will be truncated to a single line when it exceeds the
          available width.
        </Text>
      </View>
    </View>
  ),
};
