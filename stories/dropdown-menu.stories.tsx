import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Text,
} from '@sparrowengg/twigs-mobile';
import type { DropdownMenuSize } from '@sparrowengg/twigs-mobile';

interface DropdownMenuStoryProps {
  size?: DropdownMenuSize;
}

const DropdownMenuExample: React.FC<DropdownMenuStoryProps> = ({ size }) => (
  <DropdownMenu size={size}>
    <DropdownMenuTrigger>
      <Button size="md">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem onSelect={() => {}}>Option A</DropdownMenuItem>
      <DropdownMenuItem onSelect={() => {}}>Option B</DropdownMenuItem>
      <DropdownMenuItem onSelect={() => {}}>Option C</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onSelect={() => {}}>Option D</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta: Meta<typeof DropdownMenuExample> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenuExample,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size preset for menu items',
    },
  },
  args: { size: 'md' },
};

export default meta;

type Story = StoryObj<typeof DropdownMenuExample>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>DropdownMenu</Text>
      <Text style={docsStyles.description}>
        A compound dropdown menu component anchored to a trigger element. Supports items, labels,
        and separators.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>• size — 'sm' | 'md' (default: 'md')</Text>
        <Text style={docsStyles.prop}>• open — boolean (controlled open state)</Text>
        <Text style={docsStyles.prop}>• defaultOpen — boolean (default: false)</Text>
        <Text style={docsStyles.prop}>• onOpenChange — (open: boolean) =&gt; void</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Sub-components</Text>
        <Text style={docsStyles.prop}>• DropdownMenuTrigger — wraps the trigger element</Text>
        <Text style={docsStyles.prop}>
          • DropdownMenuContent — floating container for menu items
        </Text>
        <Text style={docsStyles.prop}>
          • DropdownMenuItem — individual action item (onSelect, disabled, leftElement,
          rightElement)
        </Text>
        <Text style={docsStyles.prop}>• DropdownMenuLabel — section header label</Text>
        <Text style={docsStyles.prop}>• DropdownMenuSeparator — horizontal divider</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button size="md">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Option A</DropdownMenuItem>
            <DropdownMenuItem>Option B</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Option C</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 32 }}>
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 14, fontFamily: 'DMSans_600SemiBold' }}>Size: sm</Text>
        <DropdownMenu size="sm">
          <DropdownMenuTrigger>
            <Button size="sm">Small Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onSelect={() => {}}>Edit</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => {}}>Duplicate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={() => {}}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 14, fontFamily: 'DMSans_600SemiBold' }}>Size: md</Text>
        <DropdownMenu size="md">
          <DropdownMenuTrigger>
            <Button size="md">Medium Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onSelect={() => {}}>Edit</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => {}}>Duplicate</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </View>
    </View>
  ),
};
