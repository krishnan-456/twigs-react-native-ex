import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text, Flex, Checkbox, Box } from 'testing-twigs';
import { useAppTheme } from '@/context/AppThemeContext';
import { Task } from '@/context/TaskContext';

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onPress: () => void;
}

const priorityColors = {
  high: { bg: '#FEE2E2', text: '#DC2626', darkBg: '#7F1D1D', darkText: '#FCA5A5' },
  medium: { bg: '#FEF3C7', text: '#D97706', darkBg: '#78350F', darkText: '#FCD34D' },
  low: { bg: '#DBEAFE', text: '#2563EB', darkBg: '#1E3A8A', darkText: '#93C5FD' },
};

export function TaskItem({ task, onToggle, onPress }: TaskItemProps) {
  const { surfaceColor, borderColor, textColor, secondaryTextColor, isDark } = useAppTheme();
  const priority = priorityColors[task.priority];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: surfaceColor,
          borderColor: borderColor,
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >
      <Flex direction="row" align="flex-start" gap={12}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            checked={task.completed}
            onChange={onToggle}
            size="md"
          />
        </View>

        <Flex flex={1} gap={6}>
          <Text
            fontSize={16}
            fontWeight="500"
            color={task.completed ? secondaryTextColor : textColor}
            textDecoration={task.completed ? 'line-through' : 'none'}
            numberOfLines={2}
          >
            {task.title}
          </Text>

          {task.description && (
            <Text
              fontSize={13}
              color={secondaryTextColor}
              numberOfLines={1}
              textDecoration={task.completed ? 'line-through' : 'none'}
            >
              {task.description}
            </Text>
          )}

          <Flex direction="row" align="center" gap={8} marginTop={4}>
            <Box
              paddingHorizontal={8}
              paddingVertical={4}
              css={{
                backgroundColor: isDark ? priority.darkBg : priority.bg,
                borderRadius: 4,
              }}
            >
              <Text
                fontSize={11}
                fontWeight="600"
                color={isDark ? priority.darkText : priority.text}
                textTransform="capitalize"
              >
                {task.priority}
              </Text>
            </Box>

            <Box
              paddingHorizontal={8}
              paddingVertical={4}
              css={{
                backgroundColor: isDark ? '#374151' : '#F3F4F6',
                borderRadius: 4,
              }}
            >
              <Text fontSize={11} color={secondaryTextColor}>
                {task.category}
              </Text>
            </Box>

            {task.dueDate && (
              <Text fontSize={11} color={secondaryTextColor}>
                Due: {task.dueDate}
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  checkboxContainer: {
    paddingTop: 2,
  },
});
