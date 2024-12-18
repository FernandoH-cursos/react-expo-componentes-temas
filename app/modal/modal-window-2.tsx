import { Platform } from "react-native";

import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import {
  ThemedButton,
  ThemedText,
  ThemedView,
} from "@/presentation/components/shared";


//* 'router.dismiss()' cierra el modal actual y regresa al anterior 
const ModalScreen = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
    >
      <ThemedText>Hola, Soy otro modal</ThemedText>

      <ThemedButton onPress={() => router.dismiss()}>Cerrar</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </ThemedView>
  );
};

export default ModalScreen;
