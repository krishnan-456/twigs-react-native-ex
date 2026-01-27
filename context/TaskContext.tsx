import React, { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  category: string;
  dueDate?: string;
  createdAt: string;
}

export type TaskFilter = 'all' | 'active' | 'completed';
export type TaskSort = 'date' | 'priority' | 'alphabetical';

interface TaskContextValue {
  tasks: Task[];
  filter: TaskFilter;
  sort: TaskSort;
  setFilter: (filter: TaskFilter) => void;
  setSort: (sort: TaskSort) => void;
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  filteredTasks: Task[];
  stats: {
    total: number;
    completed: number;
    active: number;
  };
}

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

// Sample tasks for demo
const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Review project proposal',
    description: 'Go through the Q1 project proposal and provide feedback',
    completed: false,
    priority: 'high',
    category: 'Work',
    dueDate: '2026-01-28',
    createdAt: '2026-01-25',
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Milk, eggs, bread, fruits',
    completed: true,
    priority: 'medium',
    category: 'Personal',
    createdAt: '2026-01-24',
  },
  {
    id: '3',
    title: 'Schedule dentist appointment',
    completed: false,
    priority: 'low',
    category: 'Health',
    createdAt: '2026-01-23',
  },
  {
    id: '4',
    title: 'Prepare presentation slides',
    description: 'Create slides for the team meeting on Friday',
    completed: false,
    priority: 'high',
    category: 'Work',
    dueDate: '2026-01-31',
    createdAt: '2026-01-26',
  },
  {
    id: '5',
    title: 'Call mom',
    completed: true,
    priority: 'medium',
    category: 'Personal',
    createdAt: '2026-01-22',
  },
  {
    id: '6',
    title: 'Update app dependencies',
    description: 'Run npm update and test for breaking changes',
    completed: false,
    priority: 'medium',
    category: 'Work',
    createdAt: '2026-01-27',
  },
];

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<TaskFilter>('all');
  const [sort, setSort] = useState<TaskSort>('date');

  const addTask = useCallback((task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    setTasks((prev) => [newTask, ...prev]);
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<Task>) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updates } : task))
    );
  }, []);

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const toggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    // Apply filter
    if (filter === 'active') {
      result = result.filter((task) => !task.completed);
    } else if (filter === 'completed') {
      result = result.filter((task) => task.completed);
    }

    // Apply sort
    result.sort((a, b) => {
      if (sort === 'date') {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else if (sort === 'priority') {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    return result;
  }, [tasks, filter, sort]);

  const stats = useMemo(() => ({
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    active: tasks.filter((t) => !t.completed).length,
  }), [tasks]);

  const value = useMemo(
    () => ({
      tasks,
      filter,
      sort,
      setFilter,
      setSort,
      addTask,
      updateTask,
      deleteTask,
      toggleTask,
      filteredTasks,
      stats,
    }),
    [tasks, filter, sort, addTask, updateTask, deleteTask, toggleTask, filteredTasks, stats]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks(): TaskContextValue {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
