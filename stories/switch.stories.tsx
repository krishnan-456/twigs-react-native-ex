import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Switch, Text } from 'testing-twigs';
import type { SwitchProps } from 'testing-twigs';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
});

const meta = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    value: {
      control: 'boolean',
      description: 'Legacy controlled state API',
    },
    checked: {
      control: 'boolean',
      description: 'Web parity controlled state API (takes precedence over value)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Switch size variant',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Color variant',
    },
  },
  args: {
    value: false,
    disabled: false,
    size: 'md',
    color: 'primary',
  },
} satisfies Meta<SwitchProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>Switch</Text>
      <Text style={docsStyles.description}>
        A toggle switch for on/off states. Supports both legacy (value/onValueChange) and web parity
        (checked/onChange) APIs.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>• value / checked — controlled state</Text>
        <Text style={docsStyles.prop}>• onValueChange / onChange — state callback</Text>
        <Text style={docsStyles.prop}>• size — 'sm' | 'md' (default: 'md')</Text>
        <Text style={docsStyles.prop}>• color — 'primary' | 'secondary' (default: 'primary')</Text>
        <Text style={docsStyles.prop}>• disabled — boolean (default: false)</Text>
        <Text style={docsStyles.prop}>• defaultChecked — initial uncontrolled state</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <Switch defaultChecked />
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    return (
      <View style={{ gap: 16 }}>
        <Text style={docsStyles.sectionTitle}>Primary</Text>
        <View style={docsStyles.row}>
          <Switch size="sm" value={false} />
          <Switch size="sm" value={true} />
          <Switch size="sm" value={false} disabled />
          <Switch size="sm" value={true} disabled />
        </View>
        <View style={docsStyles.row}>
          <Switch size="md" value={false} />
          <Switch size="md" value={true} />
          <Switch size="md" value={false} disabled />
          <Switch size="md" value={true} disabled />
        </View>
        <Text style={docsStyles.sectionTitle}>Secondary</Text>
        <View style={docsStyles.row}>
          <Switch size="sm" color="secondary" value={false} />
          <Switch size="sm" color="secondary" value={true} />
          <Switch size="sm" color="secondary" value={false} disabled />
          <Switch size="sm" color="secondary" value={true} disabled />
        </View>
        <View style={docsStyles.row}>
          <Switch size="md" color="secondary" value={false} />
          <Switch size="md" color="secondary" value={true} />
          <Switch size="md" color="secondary" value={false} disabled />
          <Switch size="md" color="secondary" value={true} disabled />
        </View>
        <View style={docsStyles.row}>
          <Text>{value ? 'On' : 'Off'}</Text>
          <Switch value={value} onValueChange={setValue} />
        </View>
      </View>
    );
  },
};
