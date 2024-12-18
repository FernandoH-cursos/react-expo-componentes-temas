import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  ThemedButton,
  ThemedText,
  ThemedView,
} from "@/presentation/components/shared";
import { router } from "expo-router";

//* 'router.push()' abre un modal con la ruta especificada 
const ModalScreen = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
      bgColor="#A52182"
    >
      <ThemedText className="text-white">Hola, Soy un modal</ThemedText>

      <ThemedButton
        className="my-4"
        onPress={() => router.push("/modal/modal-window-2")}
      >
        Otro Modal
      </ThemedButton>

      <ThemedButton onPress={() => router.dismiss()}>Cerrar</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalScreen;
