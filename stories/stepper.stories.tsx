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
  numberOfSteps: number;
  step1Label: string;
  step2Label: string;
  step3Label: string;
  step4Label: string;
  step5Label: string;
}> = ({
  activeStep: initialStep,
  allowClick,
  scrollable,
  numberOfSteps,
  step1Label,
  step2Label,
  step3Label,
  step4Label,
  step5Label,
}) => {
  const allLabels = [step1Label, step2Label, step3Label, step4Label, step5Label];
  const labels = allLabels.slice(0, numberOfSteps);
  const clampedStep = Math.min(initialStep, numberOfSteps - 1);
  const [step, setStep] = useState(clampedStep);

  return (
    <Stepper activeStep={step} onStepChange={setStep} scrollable={scrollable}>
      {labels.map((label, index) => (
        <StepperItem key={index} label={label} allowClick={allowClick}>
          <View style={{ padding: 16 }}>
            <Text>{label} content</Text>
          </View>
        </StepperItem>
      ))}
    </Stepper>
  );
};

const meta: Meta<typeof StepperExample> = {
  title: 'Components/Stepper',
  component: StepperExample,
  argTypes: {
    numberOfSteps: {
      control: 'select',
      options: [2, 3, 5],
      description: 'Number of steps to display',
    },
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
    step1Label: {
      control: 'text',
      description: 'Label for step 1',
    },
    step2Label: {
      control: 'text',
      description: 'Label for step 2',
    },
    step3Label: {
      control: 'text',
      description: 'Label for step 3',
      if: { arg: 'numberOfSteps', neq: 2 },
    },
    step4Label: {
      control: 'text',
      description: 'Label for step 4',
      if: { arg: 'numberOfSteps', eq: 5 },
    },
    step5Label: {
      control: 'text',
      description: 'Label for step 5',
      if: { arg: 'numberOfSteps', eq: 5 },
    },
  },
  args: {
    numberOfSteps: 2,
    activeStep: 0,
    allowClick: true,
    scrollable: true,
    step1Label: 'Recipients',
    step2Label: 'Message',
    step3Label: 'Review',
    step4Label: 'Confirm',
    step5Label: 'Done',
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
          <StepperExample
            numberOfSteps={3}
            activeStep={1}
            allowClick
            step1Label="Recipients"
            step2Label="Message"
            step3Label="Review"
            step4Label="Confirm"
            step5Label="Done"
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
          Step 1 Active
        </Text>
        <StepperExample
          numberOfSteps={2}
          activeStep={0}
          allowClick
          step1Label="Recipients"
          step2Label="Message"
          step3Label="Review"
          step4Label="Confirm"
          step5Label="Done"
        />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Step 2 Active (Step 1 completed)
        </Text>
        <StepperExample
          numberOfSteps={2}
          activeStep={1}
          allowClick
          step1Label="Recipients"
          step2Label="Message"
          step3Label="Review"
          step4Label="Confirm"
          step5Label="Done"
        />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Non-clickable Steps
        </Text>
        <StepperExample
          numberOfSteps={2}
          activeStep={1}
          allowClick={false}
          step1Label="Recipients"
          step2Label="Message"
          step3Label="Review"
          step4Label="Confirm"
          step5Label="Done"
        />
      </View>
      <View>
        <Text
          style={{ fontSize: 12, fontFamily: 'DMSans_600SemiBold', marginBottom: 8, color: '#666' }}
        >
          Fitted (non-scrollable)
        </Text>
        <StepperExample
          numberOfSteps={3}
          activeStep={0}
          allowClick
          scrollable={false}
          step1Label="Recipients"
          step2Label="Message"
          step3Label="Review"
          step4Label="Confirm"
          step5Label="Done"
        />
      </View>
    </View>
  ),
};
