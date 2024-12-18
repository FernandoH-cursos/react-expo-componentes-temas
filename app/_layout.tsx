import { useEffect } from "react";

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import { useThemeColor } from "@/hooks/useThemeColor";
import { allRoutes } from "@/constants/Routes";

import { ThemeChangerProvider } from "@/presentation/context/ThemeChangerContext";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import "react-native-reanimated";
import "./global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //* Si le especifica un 'light' o 'dark' en el objeto como 1er argumento de useThemeColor, permite sobreescribir el color del tema,
  //* ya sea en modo claro o oscuro.
  const backgroundColor = useThemeColor(
    // { light: "red", dark: "indigo" },
    {},
    "background"
  );
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgroundColor, flex: 1 }}
    >
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "",
            }}
          />

          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
                headerShown: !route.title.includes("Slides"),
              }}
            />
          ))}
        </Stack>
        <StatusBar style="auto" />
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
