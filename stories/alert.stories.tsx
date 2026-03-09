import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Alert, Text } from 'testing-twigs';
import type { AlertProps } from 'testing-twigs';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'Visual status variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the alert',
    },
    closable: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
    children: {
      control: 'text',
      description: 'Alert message content',
    },
  },
  args: {
    status: 'info',
    size: 'md',
    closable: false,
    children: 'This is an alert message.',
  },
} satisfies Meta<AlertProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>Alert</Text>
      <Text style={docsStyles.description}>
        Displays a callout message to the user with contextual status styling and an optional dismiss
        button.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>
          • status — 'default' | 'info' | 'success' | 'warning' | 'error' (default: 'default')
        </Text>
        <Text style={docsStyles.prop}>• size — 'sm' | 'md' (default: 'md')</Text>
        <Text style={docsStyles.prop}>• closable — boolean (default: false)</Text>
        <Text style={docsStyles.prop}>• onClose — callback when dismiss is pressed</Text>
        <Text style={docsStyles.prop}>• children — alert message content</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <Alert status="info">This is an informational alert.</Alert>
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ gap: 8 }}>
        <Alert status="default">A FYI message here</Alert>
        <Alert status="info">An info message here</Alert>
        <Alert status="success">A success message here</Alert>
        <Alert status="warning">A cautionary message here</Alert>
        <Alert status="error">A warning message here</Alert>
      </View>
      <View style={{ gap: 8 }}>
        <Alert status="info" closable>
          Closable info alert
        </Alert>
        <Alert status="error" closable>
          Closable error alert
        </Alert>
      </View>
      <View style={{ gap: 8 }}>
        <Alert status="info" size="sm">
          Small info alert
        </Alert>
        <Alert status="info" size="md">
          Medium info alert
        </Alert>
      </View>
    </View>
  ),
};
