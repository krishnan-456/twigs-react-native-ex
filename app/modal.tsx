import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Flex } from 'testing-twigs';
import { useAppTheme } from '@/context/AppThemeContext';

export default function ModalScreen() {
  const { backgroundColor, textColor, secondaryTextColor } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Flex align="center" gap={16}>
        <Text fontSize={24} fontWeight="700" color={textColor}>
          Modal Screen
        </Text>
        <Text fontSize={14} color={secondaryTextColor} textAlign="center">
          This modal demonstrates the testing-twigs components working with expo-router.
        </Text>
        <Link href="/" dismissTo asChild>
          <Button variant="outline" size="lg">
            Go to Home
          </Button>
        </Link>
      </Flex>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
