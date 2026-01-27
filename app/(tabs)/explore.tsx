import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Pressable, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, Flex, Box, Avatar, Switch, Radio, Button } from 'testing-twigs';

import { useAppTheme, ColorMode } from '@/context/AppThemeContext';

interface SettingRowProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

function SettingRow({ title, subtitle, children }: SettingRowProps) {
  const { textColor, secondaryTextColor } = useAppTheme();

  return (
    <Flex direction="row" align="center" justify="space-between" paddingVertical={14}>
      <Flex flex={1} gap={2} marginRight={16}>
        <Text fontSize={15} fontWeight="500" color={textColor}>
          {title}
        </Text>
        {subtitle && (
          <Text fontSize={13} color={secondaryTextColor}>
            {subtitle}
          </Text>
        )}
      </Flex>
      {children}
    </Flex>
  );
}

interface SettingSectionProps {
  title: string;
  children: React.ReactNode;
}

function SettingSection({ title, children }: SettingSectionProps) {
  const { surfaceColor, borderColor, secondaryTextColor } = useAppTheme();

  return (
    <Flex marginBottom={24}>
      <Text
        fontSize={13}
        fontWeight="600"
        color={secondaryTextColor}
        marginBottom={8}
        marginLeft={4}
        textTransform="uppercase"
        letterSpacing={0.5}
      >
        {title}
      </Text>
      <Box
        css={{
          backgroundColor: surfaceColor,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: borderColor,
          overflow: 'hidden',
        }}
      >
        <Box paddingHorizontal={16}>{children}</Box>
      </Box>
    </Flex>
  );
}

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const {
    backgroundColor,
    textColor,
    secondaryTextColor,
    surfaceColor,
    borderColor,
    colorMode,
    setColorMode,
    isDark,
  } = useAppTheme();

  // Settings state
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hapticFeedback, setHapticFeedback] = useState(true);
  const [autoSync, setAutoSync] = useState(true);
  const [sortOrder, setSortOrder] = useState<'date' | 'priority' | 'alphabetical'>('date');

  const themeOptions: { key: ColorMode; label: string }[] = [
    { key: 'light', label: 'Light' },
    { key: 'dark', label: 'Dark' },
    { key: 'system', label: 'System' },
  ];

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.contentContainer,
          { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 100 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Flex marginBottom={24}>
          <Text fontSize={28} fontWeight="700" color={textColor}>
            Settings
          </Text>
        </Flex>

        {/* Profile Section */}
        <Pressable>
          <Box
            padding={16}
            marginBottom={24}
            css={{
              backgroundColor: surfaceColor,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: borderColor,
            }}
          >
            <Flex direction="row" align="center" gap={16}>
              <Avatar
                name="John Doe"
                width={64}
                height={64}
                backgroundColor={isDark ? '#3A9DA5' : '#00828D'}
                textColor="#FFFFFF"
                textSize={24}
              />
              <Flex flex={1} gap={4}>
                <Text fontSize={18} fontWeight="600" color={textColor}>
                  John Doe
                </Text>
                <Text fontSize={14} color={secondaryTextColor}>
                  john.doe@example.com
                </Text>
                <Text fontSize={13} color={isDark ? '#3A9DA5' : '#00828D'}>
                  Pro Member
                </Text>
              </Flex>
              <Text fontSize={20} color={secondaryTextColor}>›</Text>
            </Flex>
          </Box>
        </Pressable>

        {/* Appearance */}
        <SettingSection title="Appearance">
          <Flex paddingVertical={14}>
            <Text fontSize={15} fontWeight="500" color={textColor} marginBottom={12}>
              Theme
            </Text>
            <Flex direction="row" gap={12}>
              {themeOptions.map((option) => (
                <Pressable
                  key={option.key}
                  onPress={() => setColorMode(option.key)}
                  style={[
                    styles.themeOption,
                    {
                      backgroundColor:
                        colorMode === option.key
                          ? isDark
                            ? '#3A9DA5'
                            : '#00828D'
                          : isDark
                          ? '#374151'
                          : '#F3F4F6',
                      borderColor:
                        colorMode === option.key
                          ? 'transparent'
                          : borderColor,
                    },
                  ]}
                >
                  <Text
                    fontSize={13}
                    fontWeight="500"
                    color={colorMode === option.key ? '#FFFFFF' : secondaryTextColor}
                  >
                    {option.label}
                  </Text>
                </Pressable>
              ))}
            </Flex>
          </Flex>
        </SettingSection>

        {/* Notifications */}
        <SettingSection title="Notifications">
          <SettingRow
            title="Push Notifications"
            subtitle="Receive reminders for tasks"
          >
            <Switch value={notifications} onValueChange={setNotifications} />
          </SettingRow>
          <Box css={{ height: 1, backgroundColor: borderColor, marginLeft: -16, marginRight: -16 }} />
          <SettingRow
            title="Email Notifications"
            subtitle="Daily digest of your tasks"
          >
            <Switch value={emailNotifications} onValueChange={setEmailNotifications} />
          </SettingRow>
          <Box css={{ height: 1, backgroundColor: borderColor, marginLeft: -16, marginRight: -16 }} />
          <SettingRow
            title="Sound"
            subtitle="Play sound on completion"
          >
            <Switch value={soundEnabled} onValueChange={setSoundEnabled} />
          </SettingRow>
          <Box css={{ height: 1, backgroundColor: borderColor, marginLeft: -16, marginRight: -16 }} />
          <SettingRow
            title="Haptic Feedback"
            subtitle="Vibrate on interactions"
          >
            <Switch value={hapticFeedback} onValueChange={setHapticFeedback} />
          </SettingRow>
        </SettingSection>

        {/* Task Preferences */}
        <SettingSection title="Task Preferences">
          <SettingRow title="Auto Sync" subtitle="Sync tasks across devices">
            <Switch value={autoSync} onValueChange={setAutoSync} />
          </SettingRow>
          <Box css={{ height: 1, backgroundColor: borderColor, marginLeft: -16, marginRight: -16 }} />
          <Flex paddingVertical={14}>
            <Text fontSize={15} fontWeight="500" color={textColor} marginBottom={12}>
              Default Sort Order
            </Text>
            <Flex gap={12}>
              <Radio
                selected={sortOrder === 'date'}
                onSelect={() => setSortOrder('date')}
                size="md"
              >
                <Text color={textColor}>By Date (newest first)</Text>
              </Radio>
              <Radio
                selected={sortOrder === 'priority'}
                onSelect={() => setSortOrder('priority')}
                size="md"
              >
                <Text color={textColor}>By Priority (high to low)</Text>
              </Radio>
              <Radio
                selected={sortOrder === 'alphabetical'}
                onSelect={() => setSortOrder('alphabetical')}
                size="md"
              >
                <Text color={textColor}>Alphabetically (A to Z)</Text>
              </Radio>
            </Flex>
          </Flex>
        </SettingSection>

        {/* About */}
        <SettingSection title="About">
          <SettingRow title="Version" subtitle="Built with testing-twigs">
            <Text fontSize={14} color={secondaryTextColor}>1.0.0</Text>
          </SettingRow>
          <Box css={{ height: 1, backgroundColor: borderColor, marginLeft: -16, marginRight: -16 }} />
          <Pressable onPress={() => Linking.openURL('https://www.npmjs.com/package/testing-twigs')}>
            <SettingRow title="View Package" subtitle="testing-twigs on npm">
              <Text fontSize={20} color={secondaryTextColor}>›</Text>
            </SettingRow>
          </Pressable>
        </SettingSection>

        {/* Danger Zone */}
        <SettingSection title="Danger Zone">
          <Flex paddingVertical={14} gap={12}>
            <Button variant="outline" color="negative" size="lg" css={{ width: '100%' }}>
              Clear All Tasks
            </Button>
            <Button variant="ghost" color="negative" size="md" css={{ width: '100%' }}>
              Delete Account
            </Button>
          </Flex>
        </SettingSection>

        {/* Footer */}
        <Flex align="center" marginTop={8} marginBottom={16}>
          <Text fontSize={12} color={secondaryTextColor} textAlign="center">
            Task Manager Example App
          </Text>
          <Text fontSize={12} color={secondaryTextColor} textAlign="center">
            Powered by testing-twigs v0.1.9
          </Text>
        </Flex>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  themeOption: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
});
