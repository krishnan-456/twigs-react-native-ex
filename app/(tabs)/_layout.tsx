import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useAppTheme } from '@/context/AppThemeContext';

export default function TabLayout() {
  const { isDark, surfaceColor, borderColor } = useAppTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: isDark ? '#3A9DA5' : '#00828D',
        tabBarInactiveTintColor: isDark ? '#6B6B6B' : '#9E9E9E',
        tabBarStyle: {
          backgroundColor: surfaceColor,
          borderTopColor: borderColor,
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="checklist" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={26} name="gearshape.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
