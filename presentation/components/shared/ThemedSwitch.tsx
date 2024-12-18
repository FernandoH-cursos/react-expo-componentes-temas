import { Platform, Pressable, Switch, View } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText } from "./ThemedText";

interface Props {
  text?: string;
  value: boolean;
  className?: string;
  onValueChange: (value: boolean) => void;
}

//* <Switch> es un componente que se utiliza para cambiar entre dos estados. Puede recibir las siguientes props:
//* - value: Indica si el switch está activado o no.
//* - onValueChange: Función que se ejecuta cuando el switch cambia de estado.
//* - thumbColor: Color del switch cuando está activado (color del circulo).
//* - trackColor: Objeto que indica el color del switch cuando está activado o desactivado. Puede recibir dos propiedades: false y true.
//* - ios_backgroundColor: Color del switch en iOS. 


const isAndroid = Platform.OS === "android";

export const ThemedSwitch = ({
  text,
  value,
  className,
  onValueChange,
}: Props) => {
  const switchActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable
      className={`flex flex-row justify-between items-center active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)}
    >
      {text ? (
        <ThemedText type="h2" className="dark:text-slate-800">
          {text}
        </ThemedText>
      ) : (
        <View />
      )}

      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? switchActiveColor : ""}
        // ios_backgroundColor={value ? 'green' : 'red'}
        trackColor={{
          false: "grey",
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
};
