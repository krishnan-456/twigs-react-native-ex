import React, { useRef, useState, useCallback, forwardRef, useImperativeHandle } from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import BottomSheetLib from '@gorhom/bottom-sheet';
import { Button, Text, Flex, Box, BottomSheet, BottomSheetView, Checkbox, useTheme } from 'testing-twigs';
import { useAppTheme } from '@/context/AppThemeContext';
import { useTasks, Task } from '@/context/TaskContext';

export interface TaskDetailSheetRef {
  open: (task: Task) => void;
  close: () => void;
}

interface TaskDetailSheetProps {
  onEdit: (task: Task) => void;
}

const priorityColors = {
  high: { bg: '#FEE2E2', text: '#DC2626', darkBg: '#7F1D1D', darkText: '#FCA5A5' },
  medium: { bg: '#FEF3C7', text: '#D97706', darkBg: '#78350F', darkText: '#FCD34D' },
  low: { bg: '#DBEAFE', text: '#2563EB', darkBg: '#1E3A8A', darkText: '#93C5FD' },
};

export const TaskDetailSheet = forwardRef<TaskDetailSheetRef, TaskDetailSheetProps>(
  ({ onEdit }, ref) => {
    const sheetRef = useRef<BottomSheetLib>(null);
    const { textColor, secondaryTextColor, borderColor, isDark } = useAppTheme();
    const theme = useTheme();
    const { toggleTask, deleteTask } = useTasks();

    const [task, setTask] = useState<Task | null>(null);

    const open = useCallback((t: Task) => {
      setTask(t);
      sheetRef.current?.expand();
    }, []);

    const close = useCallback(() => {
      sheetRef.current?.close();
      setTask(null);
    }, []);

    useImperativeHandle(ref, () => ({ open, close }), [open, close]);

    const handleToggle = useCallback(() => {
      if (task) {
        toggleTask(task.id);
        setTask({ ...task, completed: !task.completed });
      }
    }, [task, toggleTask]);

    const handleEdit = useCallback(() => {
      if (task) {
        close();
        setTimeout(() => onEdit(task), 300);
      }
    }, [task, close, onEdit]);

    const handleDelete = useCallback(() => {
      if (!task) return;

      Alert.alert(
        'Delete Task',
        'Are you sure you want to delete this task?',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: () => {
              deleteTask(task.id);
              close();
            },
          },
        ]
      );
    }, [task, deleteTask, close]);

    if (!task) return null;

    const priority = priorityColors[task.priority];
    const sheetBgColor = theme.colors.white900;

    return (
      <BottomSheet
        ref={sheetRef}
        enableDynamicSizing
        title="Task Details"
      >
        <BottomSheetView style={[styles.container, { backgroundColor: sheetBgColor }]}>
          {/* Content */}
          <View style={styles.content}>
            <Flex gap={20}>
              {/* Title and Checkbox */}
              <Flex direction="row" align="flex-start" gap={12}>
                <Checkbox
                  checked={task.completed}
                  onChange={handleToggle}
                  size="md"
                />
                <Flex flex={1}>
                  <Text
                    fontSize={20}
                    fontWeight="600"
                    color={task.completed ? secondaryTextColor : textColor}
                    textDecoration={task.completed ? 'line-through' : 'none'}
                  >
                    {task.title}
                  </Text>
                </Flex>
              </Flex>

              {/* Description */}
              {task.description && (
                <Box
                  padding={12}
                  css={{
                    backgroundColor: isDark ? '#252525' : '#F9FAFB',
                    borderRadius: 8,
                  }}
                >
                  <Text fontSize={14} color={secondaryTextColor} lineHeight={22}>
                    {task.description}
                  </Text>
                </Box>
              )}

              {/* Meta Info */}
              <Flex gap={12}>
                <Flex direction="row" align="center" justify="space-between">
                  <Text fontSize={14} color={secondaryTextColor}>Priority</Text>
                  <Box
                    paddingHorizontal={10}
                    paddingVertical={4}
                    css={{
                      backgroundColor: isDark ? priority.darkBg : priority.bg,
                      borderRadius: 6,
                    }}
                  >
                    <Text
                      fontSize={13}
                      fontWeight="600"
                      color={isDark ? priority.darkText : priority.text}
                      textTransform="capitalize"
                    >
                      {task.priority}
                    </Text>
                  </Box>
                </Flex>

                <Flex direction="row" align="center" justify="space-between">
                  <Text fontSize={14} color={secondaryTextColor}>Category</Text>
                  <Text fontSize={14} fontWeight="500" color={textColor}>
                    {task.category}
                  </Text>
                </Flex>

                <Flex direction="row" align="center" justify="space-between">
                  <Text fontSize={14} color={secondaryTextColor}>Created</Text>
                  <Text fontSize={14} color={textColor}>
                    {task.createdAt}
                  </Text>
                </Flex>

                {task.dueDate && (
                  <Flex direction="row" align="center" justify="space-between">
                    <Text fontSize={14} color={secondaryTextColor}>Due Date</Text>
                    <Text fontSize={14} fontWeight="500" color={textColor}>
                      {task.dueDate}
                    </Text>
                  </Flex>
                )}

                <Flex direction="row" align="center" justify="space-between">
                  <Text fontSize={14} color={secondaryTextColor}>Status</Text>
                  <Text
                    fontSize={14}
                    fontWeight="500"
                    color={task.completed ? '#10B981' : '#F59E0B'}
                  >
                    {task.completed ? 'Completed' : 'Active'}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </View>

          {/* Bottom Actions */}
          <View style={[styles.footer, { backgroundColor: sheetBgColor, borderTopColor: borderColor }]}>
            <Flex direction="row" gap={12}>
              <Button
                variant="outline"
                color="negative"
                size="lg"
                onPress={handleDelete}
                css={{ flex: 1 }}
              >
                Delete
              </Button>
              <Button
                size="lg"
                onPress={handleEdit}
                css={{ flex: 1 }}
              >
                Edit Task
              </Button>
            </Flex>
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

TaskDetailSheet.displayName = 'TaskDetailSheet';

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
