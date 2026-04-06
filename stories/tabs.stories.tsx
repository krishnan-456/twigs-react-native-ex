import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Tabs, TabsContent, TabsList, TabsTrigger, Text } from '@sparrowengg/twigs-mobile';
import type { TabsSize, TabsVariant } from '@sparrowengg/twigs-mobile';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const TabsExample: React.FC<{
  size: TabsSize;
  variant: TabsVariant;
  disabled: boolean;
  scrollable: boolean;
}> = ({ size, variant, disabled, scrollable }) => {
  const [value, setValue] = useState('tab1');

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList size={size} variant={variant} scrollable={scrollable} accessibilityLabel="Example tabs">
        <TabsTrigger value="tab1" disabled={disabled}>
          All 18
        </TabsTrigger>
        <TabsTrigger value="tab2">Active</TabsTrigger>
        <TabsTrigger value="tab3">Completed</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <View style={{ padding: 16 }}>
          <Text>All items content</Text>
        </View>
      </TabsContent>
      <TabsContent value="tab2">
        <View style={{ padding: 16 }}>
          <Text>Active items content</Text>
        </View>
      </TabsContent>
      <TabsContent value="tab3">
        <View style={{ padding: 16 }}>
          <Text>Completed items content</Text>
        </View>
      </TabsContent>
    </Tabs>
  );
};

const meta: Meta<typeof TabsExample> = {
  title: 'Components/Tabs',
  component: TabsExample,
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'lg'],
      description: 'Size preset',
    },
    variant: {
      control: 'select',
      options: ['primary', 'dark'],
      description: 'Color variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state for the first tab trigger',
    },
    scrollable: {
      control: 'boolean',
      description:
        'Whether tab triggers can scroll horizontally (default: true). When false, triggers share equal width.',
    },
  },
  args: {
    size: 'md',
    variant: 'primary',
    disabled: false,
    scrollable: true,
  },
};

export default meta;

type Story = StoryObj<typeof TabsExample>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>Tabs</Text>
      <Text style={docsStyles.description}>
        Compound component for tabbed content with animated indicator and configurable size and
        color variants.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>• size — 'md' | 'lg' (default: 'md')</Text>
        <Text style={docsStyles.prop}>• variant — 'primary' | 'dark' (default: 'primary')</Text>
        <Text style={docsStyles.prop}>• value — currently active tab (controlled)</Text>
        <Text style={docsStyles.prop}>• onValueChange — callback when tab changes</Text>
        <Text style={docsStyles.prop}>
          • scrollable — boolean (default: true, scrollable mode)
        </Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Sub-components</Text>
        <Text style={docsStyles.prop}>• TabsList — container for tab triggers</Text>
        <Text style={docsStyles.prop}>• TabsTrigger — individual tab button (value, disabled)</Text>
        <Text style={docsStyles.prop}>• TabsContent — content panel for a tab (value)</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <View style={{ marginTop: 8 }}>
          <Tabs defaultValue="tab1">
            <TabsList size="md">
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <Text>Content 1</Text>
            </TabsContent>
            <TabsContent value="tab2">
              <Text>Content 2</Text>
            </TabsContent>
          </Tabs>
        </View>
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Size: Medium
        </Text>
        <TabsExample size="md" variant="primary" disabled={false} scrollable />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Size: Large
        </Text>
        <TabsExample size="lg" variant="primary" disabled={false} scrollable />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Variant: Dark
        </Text>
        <TabsExample size="md" variant="dark" disabled={false} scrollable />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Disabled
        </Text>
        <TabsExample size="md" variant="primary" disabled={true} scrollable />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Fitted (non-scrollable)
        </Text>
        <TabsExample size="md" variant="primary" disabled={false} scrollable={false} />
      </View>
    </View>
  ),
};
