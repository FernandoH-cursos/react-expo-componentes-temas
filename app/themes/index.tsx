import { useState } from "react";

// import { useColorScheme } from "nativewind";

import {
  ThemedCard,
  ThemedSwitch,
  ThemedView,
} from "@/presentation/components/shared";
import { useThemeChangerContext } from "@/presentation/context/ThemeChangerContext";

const ThemesScreen = () => {
  //* Este hook nos permite obtener el tema actual del sistema y cambiarlo
  // const {colorScheme, setColorScheme} = useColorScheme();
  const { toggleTheme, currentTheme, isSystemTheme, setSystemTheme } =
    useThemeChangerContext();

  //* Estado para controlar o modo oscuro y del sistema
  const [darkModeSttings, setDarkModeSttings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  //* Establece el modo oscuro
  const setDarkMode = (value: boolean) => {
    // setColorScheme(value ? "dark" : "light");
    toggleTheme();

    setDarkModeSttings({
      darkMode: value,
      systemMode: false,
    });
  };

  //* Establece el modo del sistema
  const setSystemMode = (value: boolean) => {
    if (value) setSystemTheme();

    setDarkModeSttings({
      darkMode: darkModeSttings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView margin>
      <ThemedCard>
        <ThemedSwitch
          text="Dark Mode"
          className="mb-5"
          value={darkModeSttings.darkMode}
          onValueChange={setDarkMode}
        />

        <ThemedSwitch
          text="System Mode"
          value={darkModeSttings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
