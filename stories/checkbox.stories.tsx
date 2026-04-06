import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Checkbox, Text } from '@sparrowengg/twigs-mobile';
import type { CheckboxProps } from '@sparrowengg/twigs-mobile';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: 'radio',
      options: [false, true, 'indeterminate'],
      description: 'Checked state (false/true/indeterminate)',
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
  },
  args: {
    checked: false,
    disabled: false,
    size: 'sm',
  },
} satisfies Meta<CheckboxProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>Checkbox</Text>
      <Text style={docsStyles.description}>
        A toggleable checkbox supporting checked, unchecked, and indeterminate states. Can be
        controlled or uncontrolled.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>
          • checked — false | true | 'indeterminate' (default: false)
        </Text>
        <Text style={docsStyles.prop}>• size — 'sm' | 'md' (default: 'sm')</Text>
        <Text style={docsStyles.prop}>• disabled — boolean (default: false)</Text>
        <Text style={docsStyles.prop}>• onChange — (checked: boolean) callback</Text>
        <Text style={docsStyles.prop}>• children — label content</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <Checkbox checked={true}>
          <Text>Accept terms</Text>
        </Checkbox>
      </View>
    </View>
  ),
};

export const Default: Story = {
  args: {
    children: <Text>Accept terms and conditions</Text>,
  },
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 12 }}>
        <Checkbox checked={false}>
          <Text>Unchecked</Text>
        </Checkbox>
        <Checkbox checked={true}>
          <Text>Checked</Text>
        </Checkbox>
        <Checkbox checked="indeterminate">
          <Text>Indeterminate</Text>
        </Checkbox>
        <Checkbox checked={false} disabled>
          <Text>Disabled unchecked</Text>
        </Checkbox>
        <Checkbox checked={true} disabled>
          <Text>Disabled checked</Text>
        </Checkbox>
        <Checkbox checked="indeterminate" disabled>
          <Text>Disabled indeterminate</Text>
        </Checkbox>
      </View>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <Checkbox size="sm" checked={true} />
        <Checkbox size="md" checked={true} />
        <Checkbox size="sm" checked="indeterminate" />
        <Checkbox size="md" checked="indeterminate" />
      </View>
    </View>
  ),
};
