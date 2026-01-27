import React, { useRef, useCallback } from 'react';
import { ScrollView, StyleSheet, View, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, Flex, Button, Box, Avatar } from 'testing-twigs';

import { useAppTheme } from '@/context/AppThemeContext';
import { useTasks, TaskFilter, Task } from '@/context/TaskContext';
import { TaskItem } from '@/components/TaskItem';
import { AddTaskSheet, AddTaskSheetRef } from '@/components/AddTaskSheet';
import { TaskDetailSheet, TaskDetailSheetRef } from '@/components/TaskDetailSheet';

const filters: { key: TaskFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Done' },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { backgroundColor, textColor, secondaryTextColor, surfaceColor, borderColor, isDark } = useAppTheme();
  const { filteredTasks, filter, setFilter, stats, toggleTask } = useTasks();

  const addTaskSheetRef = useRef<AddTaskSheetRef>(null);
  const taskDetailSheetRef = useRef<TaskDetailSheetRef>(null);

  const handleAddTask = useCallback(() => {
    addTaskSheetRef.current?.open();
  }, []);

  const handleTaskPress = useCallback((task: Task) => {
    taskDetailSheetRef.current?.open(task);
  }, []);

  const handleEditTask = useCallback((task: Task) => {
    addTaskSheetRef.current?.open(task);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 12, backgroundColor }]}>
        <Flex direction="row" align="center" justify="space-between">
          <Flex gap={4}>
            <Text fontSize={28} fontWeight="700" color={textColor}>
              My Tasks
            </Text>
            <Text fontSize={14} color={secondaryTextColor}>
              {stats.active} active, {stats.completed} completed
            </Text>
          </Flex>
          <Avatar name="John Doe" width={44} height={44} />
        </Flex>

        {/* Stats Cards */}
        <Flex direction="row" gap={12} marginTop={20}>
          <Box
            flex={1}
            padding={16}
            css={{
              backgroundColor: isDark ? '#1E3A5F' : '#EFF6FF',
              borderRadius: 12,
            }}
          >
            <Text fontSize={24} fontWeight="700" color={isDark ? '#93C5FD' : '#2563EB'}>
              {stats.total}
            </Text>
            <Text fontSize={13} color={isDark ? '#93C5FD' : '#3B82F6'}>
              Total Tasks
            </Text>
          </Box>
          <Box
            flex={1}
            padding={16}
            css={{
              backgroundColor: isDark ? '#14532D' : '#F0FDF4',
              borderRadius: 12,
            }}
          >
            <Text fontSize={24} fontWeight="700" color={isDark ? '#86EFAC' : '#16A34A'}>
              {stats.completed}
            </Text>
            <Text fontSize={13} color={isDark ? '#86EFAC' : '#22C55E'}>
              Completed
            </Text>
          </Box>
          <Box
            flex={1}
            padding={16}
            css={{
              backgroundColor: isDark ? '#713F12' : '#FFFBEB',
              borderRadius: 12,
            }}
          >
            <Text fontSize={24} fontWeight="700" color={isDark ? '#FCD34D' : '#D97706'}>
              {stats.active}
            </Text>
            <Text fontSize={13} color={isDark ? '#FCD34D' : '#F59E0B'}>
              In Progress
            </Text>
          </Box>
        </Flex>

        {/* Filter Tabs */}
        <Flex direction="row" gap={8} marginTop={20}>
          {filters.map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? 'solid' : 'ghost'}
              color={filter === f.key ? 'primary' : 'default'}
              size="md"
              onPress={() => setFilter(f.key)}
            >
              {f.label}
            </Button>
          ))}
        </Flex>
      </View>

      {/* Task List */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.contentContainer,
          { paddingBottom: insets.bottom + 100 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {filteredTasks.length === 0 ? (
          <Flex align="center" justify="center" padding={40}>
            <Text fontSize={48} marginBottom={16}>
              {filter === 'completed' ? '🎉' : '📝'}
            </Text>
            <Text fontSize={18} fontWeight="600" color={textColor} textAlign="center">
              {filter === 'completed' ? 'No completed tasks yet' : 'No tasks found'}
            </Text>
            <Text fontSize={14} color={secondaryTextColor} textAlign="center" marginTop={8}>
              {filter === 'completed'
                ? 'Complete some tasks to see them here'
                : 'Tap the button below to add your first task'}
            </Text>
          </Flex>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => toggleTask(task.id)}
              onPress={() => handleTaskPress(task)}
            />
          ))
        )}
      </ScrollView>

      {/* FAB */}
      <Pressable
        onPress={handleAddTask}
        style={({ pressed }) => [
          styles.fab,
          {
            backgroundColor: isDark ? '#3A9DA5' : '#00828D',
            bottom: insets.bottom + 24,
            opacity: pressed ? 0.9 : 1,
            transform: [{ scale: pressed ? 0.95 : 1 }],
          },
        ]}
      >
        <Text fontSize={28} color="#FFFFFF" fontWeight="300">
          +
        </Text>
      </Pressable>

      {/* Bottom Sheets */}
      <AddTaskSheet ref={addTaskSheetRef} />
      <TaskDetailSheet ref={taskDetailSheetRef} onEdit={handleEditTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  fab: {
    position: 'absolute',
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
