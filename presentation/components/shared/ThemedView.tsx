import { View, ViewProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useSafeAreaInsets } from "react-native-safe-area-context";

//* El 'safe' es para que el contenido no se superponga con la barra de estado (usar el <SafeAreaView> de react-native). 
interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}

export const ThemedView = ({
  style,
  className,
  margin = false,
  safe = false,
  bgColor = "white",
  children,
}: Props) => {
  const backgroundColor = bgColor ?? useThemeColor({}, "background");
  const safeArea = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
          backgroundColor: backgroundColor,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
};
