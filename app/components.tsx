import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Flex, Separator, Text } from '@sparrowengg/twigs-mobile';

interface ComponentItem {
  name: string;
  category: string;
  description: string;
}

const COMPONENTS: ComponentItem[] = [
  { name: 'Alert', category: 'Feedback', description: 'Status messages and notifications' },
  { name: 'Avatar', category: 'Data Display', description: 'User profile images and initials' },
  { name: 'Badge', category: 'Data Display', description: 'Status indicators and counts' },
  { name: 'BottomSheet', category: 'Overlay', description: 'Sliding panels from the bottom' },
  { name: 'Button', category: 'Actions', description: 'Primary action triggers' },
  { name: 'Checkbox', category: 'Form Controls', description: 'Multi-select toggles' },
  { name: 'Chip', category: 'Data Display', description: 'Compact labels and filters' },
  { name: 'DropdownMenu', category: 'Overlay', description: 'Anchored dropdown menus' },
  { name: 'IconButton', category: 'Actions', description: 'Icon-only action buttons' },
  { name: 'LinkButton', category: 'Actions', description: 'Text-style link buttons' },
  { name: 'Loader', category: 'Feedback', description: 'Loading indicators' },
  { name: 'Modal', category: 'Overlay', description: 'Dialog overlays' },
  { name: 'Radio', category: 'Form Controls', description: 'Single-select options' },
  { name: 'SegmentedButton', category: 'Form Controls', description: 'Grouped option selector' },
  { name: 'Separator', category: 'Layout', description: 'Visual divider lines' },
  { name: 'Stepper', category: 'Navigation', description: 'Multi-step wizard progress' },
  { name: 'Switch', category: 'Form Controls', description: 'On/off toggles' },
  { name: 'Tabs', category: 'Navigation', description: 'Tabbed content panels' },
  { name: 'Text', category: 'Typography', description: 'Text rendering with theme styles' },
  { name: 'TextArea', category: 'Form Controls', description: 'Multi-line text input' },
  { name: 'TextInput', category: 'Form Controls', description: 'Text entry fields' },
  { name: 'Toast', category: 'Feedback', description: 'Temporary popup messages' },
  { name: 'Tooltip', category: 'Overlay', description: 'Contextual help popups' },
];

export default function ComponentsList() {
  const router = useRouter();

  const handlePress = useCallback(
    (name: string) => {
      router.push(`/component/${name}`);
    },
    [router]
  );

  const renderItem = useCallback(
    ({ item, index }: { item: ComponentItem; index: number }) => (
      <>
        <TouchableOpacity
          onPress={() => handlePress(item.name)}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel={`View ${item.name} examples`}
          style={styles.row}
        >
          <Flex css={styles.rowContent}>
            <Flex css={styles.rowText}>
              <Text fontSize={16} weight="medium" css={styles.name}>
                {item.name}
              </Text>
              <Text fontSize={13} css={styles.description}>
                {item.description}
              </Text>
            </Flex>
            <Flex css={styles.categoryBadge}>
              <Text fontSize={11} weight="medium" css={styles.categoryText}>
                {item.category}
              </Text>
            </Flex>
          </Flex>
        </TouchableOpacity>
        {index < COMPONENTS.length - 1 && <Separator />}
      </>
    ),
    [handlePress]
  );

  const keyExtractor = useCallback((item: ComponentItem) => item.name, []);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <Flex css={styles.header}>
        <Text fontSize={24} weight="bold">
          Components
        </Text>
      </Flex>
      <FlatList
        data={COMPONENTS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowText: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    color: '#000000',
    marginBottom: 4,
  },
  description: {
    color: '#666666',
  },
  categoryBadge: {
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  categoryText: {
    color: '#666666',
  },
});
