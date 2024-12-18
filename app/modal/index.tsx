import { Text } from 'react-native';
import { Link, router } from 'expo-router';

import { ThemedButton, ThemedView } from '@/presentation/components/shared';

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link href="/modal/modal-window" className="mx-4" asChild>
        <Text className="text-light-text dark:text-dark-text my-2 text-xl">
          Abrir Modal
        </Text>
      </Link>

      <ThemedButton onPress={() => router.push("/modal/modal-window")} className="mx-4">
        Abrir Modal
      </ThemedButton>
    </ThemedView>
  );
};

export default ModalScreen;
