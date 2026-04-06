import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Radio, Text } from '@sparrowengg/twigs-mobile';
import type { RadioProps } from '@sparrowengg/twigs-mobile';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
  stack: { gap: 16 },
  row: { flexDirection: 'row', gap: 16, alignItems: 'center' },
});

const meta = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Selected state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size preset',
    },
    children: {
      control: 'text',
      description: 'Radio label content',
    },
  },
  args: {
    selected: false,
    disabled: false,
    size: 'sm',
    children: 'Radio option',
  },
} satisfies Meta<RadioProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>Radio</Text>
      <Text style={docsStyles.description}>
        Single-selection control used in a radio group. Supports selected and disabled states with
        size variants.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>• selected — boolean (default: false)</Text>
        <Text style={docsStyles.prop}>• size — 'sm' | 'md' (default: 'sm')</Text>
        <Text style={docsStyles.prop}>• disabled — boolean (default: false)</Text>
        <Text style={docsStyles.prop}>• onSelect — (selected: boolean) callback</Text>
        <Text style={docsStyles.prop}>• children — label content</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <Radio selected>
          <Text>Selected option</Text>
        </Radio>
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => {
    const [selected, setSelected] = useState(0);

    return (
      <View style={docsStyles.stack}>
        <View style={docsStyles.row}>
          <Radio size="sm" />
          <Radio size="sm" selected />
          <Radio size="sm" disabled />
          <Radio size="sm" selected disabled />
        </View>
        <View style={docsStyles.row}>
          <Radio size="md" />
          <Radio size="md" selected />
          <Radio size="md" disabled />
          <Radio size="md" selected disabled />
        </View>

        <View style={docsStyles.section}>
          <Text style={docsStyles.sectionTitle}>Group example</Text>
          <Radio selected={selected === 0} onSelect={() => setSelected(0)}>
            <Text>Option A</Text>
          </Radio>
          <Radio selected={selected === 1} onSelect={() => setSelected(1)}>
            <Text>Option B</Text>
          </Radio>
          <Radio selected={selected === 2} onSelect={() => setSelected(2)}>
            <Text>Option C</Text>
          </Radio>
        </View>
      </View>
    );
  },
};
