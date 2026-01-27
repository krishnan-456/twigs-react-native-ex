import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, Keyboard, View } from 'react-native';
import BottomSheetLib from '@gorhom/bottom-sheet';
import { Button, Text, Flex, TextInput, Radio, BottomSheet, BottomSheetView, useTheme } from 'testing-twigs';
import { useAppTheme } from '@/context/AppThemeContext';
import { useTasks, Task } from '@/context/TaskContext';

export interface AddTaskSheetRef {
  open: (task?: Task) => void;
  close: () => void;
}

interface AddTaskSheetProps {
  onComplete?: () => void;
}

const categories = ['Work', 'Personal', 'Health', 'Finance', 'Other'];

export const AddTaskSheet = forwardRef<AddTaskSheetRef, AddTaskSheetProps>(
  ({ onComplete }, ref) => {
    const sheetRef = useRef<BottomSheetLib>(null);
    const { textColor, borderColor } = useAppTheme();
    const theme = useTheme();
    const { addTask, updateTask } = useTasks();

    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
    const [category, setCategory] = useState('Personal');

    const resetForm = useCallback(() => {
      setTitle('');
      setDescription('');
      setPriority('medium');
      setCategory('Personal');
      setEditingTask(null);
    }, []);

    const open = useCallback((task?: Task) => {
      if (task) {
        setEditingTask(task);
        setTitle(task.title);
        setDescription(task.description || '');
        setPriority(task.priority);
        setCategory(task.category);
      } else {
        resetForm();
      }
      sheetRef.current?.expand();
    }, [resetForm]);

    const close = useCallback(() => {
      Keyboard.dismiss();
      sheetRef.current?.close();
      resetForm();
    }, [resetForm]);

    useImperativeHandle(ref, () => ({ open, close }), [open, close]);

    const handleSubmit = useCallback(() => {
      if (!title.trim()) return;

      if (editingTask) {
        updateTask(editingTask.id, {
          title: title.trim(),
          description: description.trim() || undefined,
          priority,
          category,
        });
      } else {
        addTask({
          title: title.trim(),
          description: description.trim() || undefined,
          completed: false,
          priority,
          category,
        });
      }

      close();
      onComplete?.();
    }, [title, description, priority, category, editingTask, addTask, updateTask, close, onComplete]);

    const sheetBgColor = theme.colors.white900;

    return (
      <BottomSheet
        ref={sheetRef}
        enableDynamicSizing
        title={editingTask ? 'Edit Task' : 'New Task'}
        keyboardBehavior="interactive"
        android_keyboardInputMode="adjustResize"
      >
        <BottomSheetView style={[styles.container, { backgroundColor: sheetBgColor }]}>
          {/* Content */}
          <View style={styles.content}>
            <Flex gap={20}>
              {/* Title */}
              <Flex gap={6}>
                <Text fontSize={14} fontWeight="600" color={textColor}>
                  Title *
                </Text>
                <TextInput
                  placeholder="What needs to be done?"
                  value={title}
                  onChangeText={setTitle}
                  size="lg"
                  autoFocus
                />
              </Flex>

              {/* Description */}
              <Flex gap={6}>
                <Text fontSize={14} fontWeight="600" color={textColor}>
                  Description
                </Text>
                <TextInput
                  placeholder="Add more details..."
                  value={description}
                  onChangeText={setDescription}
                  size="lg"
                  multiline
                  numberOfLines={3}
                  css={{ height: 80 }}
                />
              </Flex>

              {/* Priority */}
              <Flex gap={8}>
                <Text fontSize={14} fontWeight="600" color={textColor}>
                  Priority
                </Text>
                <Flex direction="row" gap={16}>
                  <Radio
                    selected={priority === 'low'}
                    onSelect={() => setPriority('low')}
                    size="md"
                  >
                    <Text color={textColor}>Low</Text>
                  </Radio>
                  <Radio
                    selected={priority === 'medium'}
                    onSelect={() => setPriority('medium')}
                    size="md"
                  >
                    <Text color={textColor}>Medium</Text>
                  </Radio>
                  <Radio
                    selected={priority === 'high'}
                    onSelect={() => setPriority('high')}
                    size="md"
                  >
                    <Text color={textColor}>High</Text>
                  </Radio>
                </Flex>
              </Flex>

              {/* Category */}
              <Flex gap={8}>
                <Text fontSize={14} fontWeight="600" color={textColor}>
                  Category
                </Text>
                <Flex direction="row" gap={8} wrap="wrap">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={category === cat ? 'solid' : 'outline'}
                      color={category === cat ? 'primary' : 'default'}
                      size="sm"
                      onPress={() => setCategory(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </View>

          {/* Bottom Actions */}
          <View style={[styles.footer, { backgroundColor: sheetBgColor, borderTopColor: borderColor }]}>
            <Flex direction="row" gap={12}>
              <Button
                variant="outline"
                color="default"
                size="lg"
                onPress={close}
                css={{ flex: 1 }}
              >
                Cancel
              </Button>
              <Button
                size="lg"
                onPress={handleSubmit}
                disabled={!title.trim()}
                css={{ flex: 1 }}
              >
                {editingTask ? 'Save Changes' : 'Add Task'}
              </Button>
            </Flex>
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

AddTaskSheet.displayName = 'AddTaskSheet';

const styles = StyleSheet.create({
  container: {},
  content: {
    padding: 20,
  },
  footer: {
    padding: 20,
    paddingBottom: 24,
    borderTopWidth: 1,
  },
});
