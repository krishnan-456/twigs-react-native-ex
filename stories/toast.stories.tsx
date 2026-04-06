import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { ToastProvider, Text } from '@sparrowengg/twigs-mobile';
import { toast } from '@sparrowengg/twigs-mobile';
import { LinkButton } from '@sparrowengg/twigs-mobile';
import type { ToastVariant, ToastPosition } from '@sparrowengg/twigs-mobile';

interface ToastStoryProps {
  title: string;
  description: string;
  variant: ToastVariant;
  position: ToastPosition;
  duration: number;
  showAction: boolean;
}

const storyStyles = StyleSheet.create({
  wrapper: { flex: 1, padding: 16, gap: 12 },
  button: {
    backgroundColor: '#7158F5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  destructiveButton: {
    backgroundColor: '#E75030',
  },
  buttonText: { color: '#FFFFFF', fontWeight: '600', fontSize: 14 },
  section: { gap: 8 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#64748B',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  sectionObj: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const getActionLinkColorForVariant = (variant: ToastVariant) => {
  if (variant === 'default') return 'primary';
  if (variant === 'warning') return 'secondary';
  return 'light';
};

const ToastStory = ({
  title,
  description,
  variant,
  position,
  duration,
  showAction,
}: ToastStoryProps) => {
  const handleShow = () => {
    toast({
      title,
      description: description || undefined,
      variant,
      position,
      duration,
      action: showAction ? (
        <LinkButton
          size="sm"
          color={getActionLinkColorForVariant(variant)}
          variant="bold"
          onPress={() => toast.dismiss()}
        >
          Undo
        </LinkButton>
      ) : undefined,
    });
  };

  return (
    <View style={storyStyles.wrapper}>
      <Pressable style={storyStyles.button} onPress={handleShow}>
        <Text style={storyStyles.buttonText}>Show Toast</Text>
      </Pressable>
    </View>
  );
};

const meta = {
  title: 'Components/Toast',
  component: ToastStory,
  decorators: [
    (Story: React.FC) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'success',
        'error',
        'warning',
        'loading',
      ] as ToastVariant[],
      description: 'Visual variant that controls colors and default icon',
    },
    title: {
      control: 'text',
      description: 'Primary text shown in the toast',
    },
    description: {
      control: 'text',
      description: 'Secondary text below the title',
    },
    position: {
      control: 'select',
      options: [
        'top-center',
        'bottom-center',
      ] as ToastPosition[],
      description: 'Display position',
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss duration in ms',
    },
    showAction: {
      control: 'boolean',
      description: 'Show an action LinkButton on the right',
    },
  },
  args: {
    variant: 'success',
    title: 'Process successful!',
    description: '',
    position: 'bottom-center',
    duration: 4000,
    showAction: true,
  },
} satisfies Meta<ToastStoryProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>Toast</Text>
      <Text style={docsStyles.description}>
        Non-blocking notification messages with stacking support. Use the
        imperative toast() API or the useToast() hook. Supports top-center and
        bottom-center positions, swipe-to-dismiss, and simultaneous toasts.
      </Text>
      <View style={docsStyles.sectionObj}>
        <Text style={docsStyles.sectionTitle}>Props (toast options)</Text>
        <Text style={docsStyles.prop}>
          • variant — 'default' | 'secondary' | 'success' | 'error' | 'warning' | 'loading'
        </Text>
        <Text style={docsStyles.prop}>• title — primary text</Text>
        <Text style={docsStyles.prop}>• description — secondary text</Text>
        <Text style={docsStyles.prop}>
          • position — 'top-center' | 'bottom-center'
        </Text>
        <Text style={docsStyles.prop}>
          • duration — auto-dismiss in ms (default: 4000)
        </Text>
        <Text style={docsStyles.prop}>
          • action — ReactElement for action button
        </Text>
      </View>
      <View style={docsStyles.sectionObj}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <Pressable
          style={storyStyles.button}
          onPress={() =>
            toast({ title: 'Hello!', variant: 'success' })
          }
        >
          <Text style={storyStyles.buttonText}>Show Toast</Text>
        </Pressable>
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => {
    const variants: ToastVariant[] = [
      'default',
      'secondary',
      'success',
      'error',
      'warning',
      'loading',
    ];

    return (
      <View style={storyStyles.wrapper}>
        {variants.map((variant) => (
          <View key={variant} style={storyStyles.section}>
            <Text style={storyStyles.sectionTitle}>{variant}</Text>
            <Pressable
              style={storyStyles.button}
              onPress={() =>
                toast({
                  title:
                    variant === 'loading'
                      ? 'Processing...'
                      : `${variant} toast`,
                  variant,
                  action:
                    variant !== 'loading' ? (
                      <LinkButton
                        size="sm"
                        color={getActionLinkColorForVariant(variant)}
                        variant="bold"
                        onPress={() => toast.dismiss()}
                      >
                        Label
                      </LinkButton>
                    ) : undefined,
                })
              }
            >
              <Text style={storyStyles.buttonText}>Show {variant}</Text>
            </Pressable>
          </View>
        ))}
        <Pressable
          style={[storyStyles.button, storyStyles.destructiveButton]}
          onPress={() => toast.dismiss()}
        >
          <Text style={storyStyles.buttonText}>Dismiss all</Text>
        </Pressable>
      </View>
    );
  },
};

export const StackedToasts: Story = {
  render: () => {
    const showStacked = () => {
      toast.success('File uploaded');
      setTimeout(() => toast.success('Processing complete'), 300);
      setTimeout(() => toast.success('Email sent'), 600);
    };

    return (
      <View style={storyStyles.wrapper}>
        <View style={storyStyles.section}>
          <Text style={storyStyles.sectionTitle}>Stacking</Text>
          <Pressable style={storyStyles.button} onPress={showStacked}>
            <Text style={storyStyles.buttonText}>
              Show 3 stacked toasts
            </Text>
          </Pressable>
        </View>
        <Pressable
          style={[storyStyles.button, storyStyles.destructiveButton]}
          onPress={() => toast.dismiss()}
        >
          <Text style={storyStyles.buttonText}>Dismiss all</Text>
        </Pressable>
      </View>
    );
  },
};

export const AllPositions: Story = {
  render: () => {
    const positions: ToastPosition[] = [
      'top-center',
      'bottom-center',
    ];

    return (
      <View style={storyStyles.wrapper}>
        {positions.map((position) => (
          <View key={position} style={storyStyles.section}>
            <Pressable
              style={storyStyles.button}
              onPress={() =>
                toast({
                  title: position,
                  variant: 'default',
                  position,
                })
              }
            >
              <Text style={storyStyles.buttonText}>{position}</Text>
            </Pressable>
          </View>
        ))}
        <Pressable
          style={[storyStyles.button, storyStyles.destructiveButton]}
          onPress={() => toast.dismiss()}
        >
          <Text style={storyStyles.buttonText}>Dismiss all</Text>
        </Pressable>
      </View>
    );
  },
};

export const LoadingToUpdate: Story = {
  render: () => {
    const handleLoadingFlow = () => {
      const { id } = toast.loading('Uploading file...');

      setTimeout(() => {
        toast.update(id, {
          title: 'Upload complete!',
          variant: 'success',
          duration: 3000,
        });
      }, 2000);
    };

    return (
      <View style={storyStyles.wrapper}>
        <View style={storyStyles.section}>
          <Text style={storyStyles.sectionTitle}>
            Loading → Success
          </Text>
          <Pressable style={storyStyles.button} onPress={handleLoadingFlow}>
            <Text style={storyStyles.buttonText}>
              Start upload flow
            </Text>
          </Pressable>
        </View>
      </View>
    );
  },
};
