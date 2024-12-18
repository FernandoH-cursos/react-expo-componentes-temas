import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ThemedText, ThemedView } from "@/presentation/components/shared";


//* La proopiedad 'refreshControl' de <ScrollView> permite agregar un control de actualización a la vista de desplazamiento.
//* El componente <RefreshControl> se utiliza para agregar un indicador de actividad de actualización a una vista de desplazamiento.
//* Puede recibir las siguientes propiedades:
//* - refreshing: Un booleano que indica si el control de actualización está en estado de actualización.
//* - onRefresh: Una función que se llama cuando el usuario realiza un gesto de deslizamiento hacia abajo.
//* - colors: Un array de colores que se utilizan para el indicador de actividad de actualización.
//* - progressBackgroundColor: El color de fondo del indicador de actividad de actualización. 
const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor(
    {
      dark: "black",
      light: "white",
    },
    "background"
  );

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, "red", "orange", "green"]}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
