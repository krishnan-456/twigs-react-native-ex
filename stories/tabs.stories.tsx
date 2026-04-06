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
  numberOfTabs: number | string;
  tab1Label: string;
  tab2Label: string;
  tab3Label: string;
  tab4Label: string;
  tab5Label: string;
}> = ({
  size,
  variant,
  disabled,
  scrollable,
  numberOfTabs,
  tab1Label,
  tab2Label,
  tab3Label,
  tab4Label,
  tab5Label,
}) => {
  const count = Number(numberOfTabs);
  const allLabels = [tab1Label, tab2Label, tab3Label, tab4Label, tab5Label];
  const labels = allLabels.slice(0, count);
  const tabKeys = labels.map((_, i) => `tab${i + 1}`);
  const [value, setValue] = useState(tabKeys[0]);

  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabsList size={size} variant={variant} scrollable={scrollable} accessibilityLabel="Example tabs">
        {labels.map((label, i) => (
          <TabsTrigger key={tabKeys[i]} value={tabKeys[i]} disabled={i === 0 ? disabled : false}>
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {labels.map((label, i) => (
        <TabsContent key={tabKeys[i]} value={tabKeys[i]}>
          <View style={{ padding: 16 }}>
            <Text>{label} content</Text>
          </View>
        </TabsContent>
      ))}
    </Tabs>
  );
};

const meta: Meta<typeof TabsExample> = {
  title: 'Components/Tabs',
  component: TabsExample,
  argTypes: {
    numberOfTabs: {
      control: 'select',
      options: ['2', '3', '5'],
      description: 'Number of tabs to display',
    },
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
    tab1Label: {
      control: 'text',
      description: 'Label for tab 1',
    },
    tab2Label: {
      control: 'text',
      description: 'Label for tab 2',
    },
    tab3Label: {
      control: 'text',
      description: 'Label for tab 3',
      if: { arg: 'numberOfTabs', neq: '2' },
    },
    tab4Label: {
      control: 'text',
      description: 'Label for tab 4',
      if: { arg: 'numberOfTabs', eq: '5' },
    },
    tab5Label: {
      control: 'text',
      description: 'Label for tab 5',
      if: { arg: 'numberOfTabs', eq: '5' },
    },
  },
  args: {
    numberOfTabs: '3',
    size: 'md',
    variant: 'primary',
    disabled: false,
    scrollable: true,
    tab1Label: 'All 18',
    tab2Label: 'Active',
    tab3Label: 'Completed',
    tab4Label: 'Archived',
    tab5Label: 'Deleted',
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
          <TabsExample
            numberOfTabs={2}
            size="md"
            variant="primary"
            disabled={false}
            scrollable
            tab1Label="Tab 1"
            tab2Label="Tab 2"
            tab3Label="Tab 3"
            tab4Label="Tab 4"
            tab5Label="Tab 5"
          />
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
        <TabsExample
          numberOfTabs={3}
          size="md"
          variant="primary"
          disabled={false}
          scrollable
          tab1Label="All 18"
          tab2Label="Active"
          tab3Label="Completed"
          tab4Label="Archived"
          tab5Label="Deleted"
        />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Size: Large
        </Text>
        <TabsExample
          numberOfTabs={3}
          size="lg"
          variant="primary"
          disabled={false}
          scrollable
          tab1Label="All 18"
          tab2Label="Active"
          tab3Label="Completed"
          tab4Label="Archived"
          tab5Label="Deleted"
        />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Variant: Dark
        </Text>
        <TabsExample
          numberOfTabs={3}
          size="md"
          variant="dark"
          disabled={false}
          scrollable
          tab1Label="All 18"
          tab2Label="Active"
          tab3Label="Completed"
          tab4Label="Archived"
          tab5Label="Deleted"
        />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Disabled (first tab)
        </Text>
        <TabsExample
          numberOfTabs={3}
          size="md"
          variant="primary"
          disabled={true}
          scrollable
          tab1Label="All 18"
          tab2Label="Active"
          tab3Label="Completed"
          tab4Label="Archived"
          tab5Label="Deleted"
        />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Fitted (non-scrollable)
        </Text>
        <TabsExample
          numberOfTabs={3}
          size="md"
          variant="primary"
          disabled={false}
          scrollable={false}
          tab1Label="All 18"
          tab2Label="Active"
          tab3Label="Completed"
          tab4Label="Archived"
          tab5Label="Deleted"
        />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          5 Tabs
        </Text>
        <TabsExample
          numberOfTabs={5}
          size="md"
          variant="primary"
          disabled={false}
          scrollable
          tab1Label="All"
          tab2Label="Active"
          tab3Label="Completed"
          tab4Label="Archived"
          tab5Label="Deleted"
        />
      </View>
    </View>
  ),
};
