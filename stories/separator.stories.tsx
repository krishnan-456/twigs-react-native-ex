import type { Meta, StoryObj } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { SeparatorProps } from 'testing-twigs';
import { Separator, Text } from 'testing-twigs';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta = {
  title: 'Components/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of the separator line',
    },
    color: {
      control: 'color',
      description: 'Custom color for the separator line',
    },
    decorative: {
      control: 'boolean',
      description: 'When true, hidden from assistive technologies',
    },
    margin: {
      control: 'number',
      description: 'Margin around the separator',
    },
  },
  args: {
    orientation: 'horizontal',
    decorative: false,
  },
} satisfies Meta<SeparatorProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>Separator</Text>
      <Text style={docsStyles.description}>
        A visual divider between content sections. Supports horizontal and vertical orientations.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>
          • orientation — 'horizontal' | 'vertical' (default: 'horizontal')
        </Text>
        <Text style={docsStyles.prop}>• color — custom color string</Text>
        <Text style={docsStyles.prop}>
          • decorative — hides from screen readers (default: false)
        </Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <Text>Content above</Text>
        <Separator css={{ marginVertical: 8 }} />
        <Text>Content below</Text>
      </View>
    </View>
  ),
};

export const Default: Story = {
  render: (args) => (
    <View style={{ padding: 16 }}>
      <Text>Content above</Text>
      <Separator {...args} css={{ marginVertical: 12 }} />
      <Text>Content below</Text>
    </View>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 24, padding: 16 }}>
      <View>
        <Text>Horizontal (default)</Text>
        <Separator css={{ marginVertical: 8 }} />
        <Text>Content below</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Text>Left</Text>
        <Separator orientation="vertical" css={{ height: 24 }} />
        <Text>Right</Text>
      </View>
      <View>
        <Text>Custom color</Text>
        <Separator color="#6366f1" css={{ marginVertical: 8 }} />
        <Text>Content below</Text>
      </View>
    </View>
  ),
};
