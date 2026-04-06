import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react-native';
import { Stepper, StepperItem, Text } from '@sparrowengg/twigs-mobile';

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const StepperExample: React.FC<{
  activeStep: number;
  allowClick: boolean;
  scrollable?: boolean;
}> = ({ activeStep: initialStep, allowClick, scrollable }) => {
  const [step, setStep] = useState(initialStep);

  return (
    <Stepper activeStep={step} onStepChange={setStep} scrollable={scrollable}>
      <StepperItem label="Recipients" allowClick={allowClick}>
        <View style={{ padding: 16 }}>
          <Text>Recipients content</Text>
        </View>
      </StepperItem>
      <StepperItem label="Message" allowClick={allowClick}>
        <View style={{ padding: 16 }}>
          <Text>Message content</Text>
        </View>
      </StepperItem>
    </Stepper>
  );
};

const ThreeTriggerStepperExample: React.FC<{
  activeStep: number;
  allowClick: boolean;
  scrollable?: boolean;
}> = ({ activeStep: initialStep, allowClick, scrollable }) => {
  const [step, setStep] = useState(initialStep);

  return (
    <Stepper activeStep={step} onStepChange={setStep} scrollable={scrollable}>
      <StepperItem label="Recipients Recipients Recipients Recipients" allowClick={allowClick}>
        <View style={{ padding: 16 }}>
          <Text>Recipients content</Text>
        </View>
      </StepperItem>
      <StepperItem label="Message" allowClick={allowClick}>
        <View style={{ padding: 16 }}>
          <Text>Message content</Text>
        </View>
      </StepperItem>
      <StepperItem label="Review" allowClick={allowClick}>
        <View style={{ padding: 16 }}>
          <Text>Review content</Text>
        </View>
      </StepperItem>
    </Stepper>
  );
};

const meta: Meta<typeof StepperExample> = {
  title: 'Components/Stepper',
  component: StepperExample,
  argTypes: {
    activeStep: {
      control: 'number',
      description: 'Active step index (0-based)',
    },
    allowClick: {
      control: 'boolean',
      description: 'Whether step triggers are clickable',
    },
    scrollable: {
      control: 'boolean',
      description:
        'Whether step triggers can scroll horizontally (default: true). When false, steps share equal width and labels truncate.',
    },
  },
  args: {
    activeStep: 0,
    allowClick: true,
  },
};

export default meta;

type Story = StoryObj<typeof StepperExample>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>Stepper</Text>
      <Text style={docsStyles.description}>
        Multi-step wizard/progress component with numbered step triggers, connectors, and content
        panels. Steps display as active, completed, or inactive based on the current step index.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props (Stepper)</Text>
        <Text style={docsStyles.prop}>• activeStep — number (required, 0-based index)</Text>
        <Text style={docsStyles.prop}>• onStepChange — (step: number) =&gt; void</Text>
        <Text style={docsStyles.prop}>
          • renderConnector — () =&gt; ReactNode (custom connector)
        </Text>
        <Text style={docsStyles.prop}>
          • scrollable — boolean (default: true, scrollable mode)
        </Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props (StepperItem)</Text>
        <Text style={docsStyles.prop}>• label — string (required)</Text>
        <Text style={docsStyles.prop}>• allowClick — boolean (default: true)</Text>
        <Text style={docsStyles.prop}>• children — ReactNode (content for active step)</Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <View style={{ marginTop: 8 }}>
          <StepperExample activeStep={1} allowClick />
        </View>
      </View>
    </View>
  ),
};

export const Default: Story = {};

export const ThreeTriggers: Story = {
  render: () => <ThreeTriggerStepperExample activeStep={1} allowClick />,
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 20 }}>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Step 1 Active
        </Text>
        <StepperExample activeStep={0} allowClick />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Step 2 Active (Step 1 completed)
        </Text>
        <StepperExample activeStep={1} allowClick />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          3 Triggers Example
        </Text>
        <ThreeTriggerStepperExample activeStep={2} allowClick />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Non-clickable Steps
        </Text>
        <StepperExample activeStep={1} allowClick={false} />
      </View>
    </View>
  ),
};
