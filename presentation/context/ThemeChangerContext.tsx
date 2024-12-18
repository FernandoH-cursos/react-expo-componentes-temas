import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

import { Colors } from "@/constants/Colors";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useColorScheme } from "nativewind";

interface ThemeChangerContextType {
  currentTheme: "light" | "dark";
  isSystemTheme: boolean;
  bgColor: string;

  toggleTheme: () => void;
  setSystemTheme: () => void;
}

//* Contexto para cambiar el tema de la aplicación
const ThemeChangerContext = createContext<ThemeChangerContextType>(
  {} as ThemeChangerContextType
);

//* Custom hook para obtener el contexto de cambio de tema
export const useThemeChangerContext = () => {
  const themeChanger = useContext(ThemeChangerContext);

  return themeChanger;
};

//* Provider para cambiar el tema de la aplicación
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

  const currentTheme = isSystemThemeEnabled
    ? colorScheme!
    : isDarkMode ? "dark" : "light";
  
  //* Establecer el color de fondo de la aplicación según el tema seleccionado 
  const backgroundColor = isDarkMode ? Colors.dark.background : Colors.light.background;
  
  useEffect(() => {
    (async () => {
      //* Obtener tema seleccionado del local storage
      const theme = await AsyncStorage.getItem("selected-theme");
      if (!theme) return;
      
      //* Establecer el tema seleccionado del local storage para persistirlo 
      setIsDarkMode(theme === "dark");
      setIsSystemThemeEnabled(theme === "system");
      setColorScheme(theme as "light" | "dark");
    })();
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider
        value={{
          currentTheme: currentTheme,
          isSystemTheme: isSystemThemeEnabled,
          bgColor: backgroundColor,

          toggleTheme: async () => {
            setIsDarkMode(!isDarkMode);
            setColorScheme(isDarkMode ? "light" : "dark");
            setIsSystemThemeEnabled(false);

            //* Guardar tema en local storage
            await AsyncStorage.setItem("selected-theme", isDarkMode ? "light" : "dark");
          },
          setSystemTheme: async () => {
            setIsSystemThemeEnabled(true);
            setColorScheme("system");

            //* Guardar tema del sistema en local storage
            await AsyncStorage.setItem("selected-theme", "system");
          },
        }}
      >
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
};
