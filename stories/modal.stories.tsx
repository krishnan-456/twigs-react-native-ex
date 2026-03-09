import type { Meta, StoryObj } from '@storybook/react-native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import type { ModalProps } from 'testing-twigs';
import { Button, Modal, ModalBody, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle, Text } from 'testing-twigs';

const ModalDemo = (args: ModalProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button onPress={() => setVisible(true)}>Open Modal</Button>
      <Modal {...args} visible={visible} onClose={() => setVisible(false)}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Delete?</ModalTitle>
            <ModalDescription>
              This action cannot be undone. This will permanently delete your account and remove your
              data from our servers.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <Button size="lg" color="default" variant="solid" onPress={() => setVisible(false)}>
              Cancel
            </Button>
            <Button size="lg" color="error" variant="solid" onPress={() => setVisible(false)}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </View>
  );
};

const docsStyles = StyleSheet.create({
  container: { gap: 16 },
  title: { fontSize: 24, fontFamily: 'DMSans_700Bold' },
  description: { fontSize: 14, color: '#666', lineHeight: 20, fontFamily: 'DMSans_400Regular' },
  section: { gap: 8 },
  sectionTitle: { fontSize: 16, fontFamily: 'DMSans_600SemiBold' },
  prop: { fontSize: 13, color: '#444', lineHeight: 18, fontFamily: 'DMSans_400Regular' },
});

const meta = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    closeOnBackdropPress: {
      control: 'boolean',
      description: 'Whether pressing the backdrop closes the modal',
    },
    animationType: {
      control: 'select',
      options: ['none', 'fade', 'slide'],
      description: 'Animation type for the modal',
    },
  },
  args: {
    closeOnBackdropPress: true,
    animationType: 'fade',
  },
} satisfies Meta<ModalProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Docs: Story = {
  render: () => (
    <View style={docsStyles.container}>
      <Text style={docsStyles.title}>Modal</Text>
      <Text style={docsStyles.description}>
        A dialog overlay with backdrop. Composed of ModalContent, ModalHeader, ModalTitle,
        ModalDescription, ModalBody, and ModalFooter sub-components.
      </Text>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Props</Text>
        <Text style={docsStyles.prop}>• visible — boolean (controlled)</Text>
        <Text style={docsStyles.prop}>• onClose — callback when dismissed</Text>
        <Text style={docsStyles.prop}>
          • closeOnBackdropPress — boolean (default: true)
        </Text>
        <Text style={docsStyles.prop}>
          • animationType — 'none' | 'fade' | 'slide' (default: 'fade')
        </Text>
      </View>
      <View style={docsStyles.section}>
        <Text style={docsStyles.sectionTitle}>Usage</Text>
        <Text style={docsStyles.prop}>Tap the button below to open a modal.</Text>
        <ModalDemo closeOnBackdropPress animationType="fade" />
      </View>
    </View>
  ),
};

export const Default: Story = {
  render: (args) => <ModalDemo {...args} />,
};

export const AllVariants: Story = {
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    return (
      <View style={{ gap: 12 }}>
        <Button onPress={() => setActiveModal('confirm')}>Confirmation Modal</Button>
        <Button onPress={() => setActiveModal('body')}>Modal with Body</Button>
        <Button onPress={() => setActiveModal('slide')}>Slide Animation</Button>

        <Modal
          visible={activeModal === 'confirm'}
          onClose={() => setActiveModal(null)}
          animationType="fade"
        >
          <ModalContent size="sm">
            <ModalHeader>
              <ModalTitle>Confirm</ModalTitle>
              <ModalDescription>Are you sure?</ModalDescription>
            </ModalHeader>
            <ModalFooter>
              <Button size="xl" color="default" onPress={() => setActiveModal(null)}>No</Button>
              <Button size="xl" color="primary" onPress={() => setActiveModal(null)}>Yes</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal
          visible={activeModal === 'body'}
          onClose={() => setActiveModal(null)}
          animationType="fade"
        >
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Edit Profile</ModalTitle>
              <ModalDescription>Make changes to your profile here.</ModalDescription>
            </ModalHeader>
            <ModalBody>
              <Text>Form fields would go here.</Text>
            </ModalBody>
            <ModalFooter>
              <Button size="lg" color="default" onPress={() => setActiveModal(null)}>Cancel</Button>
              <Button size="lg" color="primary" onPress={() => setActiveModal(null)}>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal
          visible={activeModal === 'slide'}
          onClose={() => setActiveModal(null)}
          animationType="slide"
        >
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Slide In</ModalTitle>
              <ModalDescription>This modal slides up from the bottom.</ModalDescription>
            </ModalHeader>
            <ModalFooter>
              <Button size="lg" color="primary" onPress={() => setActiveModal(null)}>
                Got it
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </View>
    );
  },
};
