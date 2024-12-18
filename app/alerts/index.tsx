import { Alert } from 'react-native';
import { ThemedButton, ThemedView } from '@/presentation/components/shared';


//* 'Alert' es un componente de React Native que muestra un mensaje en una ventana emergente. Puede ser usado para mostrar mensajes 
//* de error, advertencia, confirmación, etc.Recibe un objeto de configuración con las siguientes propiedades:
//* - title: Título del mensaje.  
//* - message: Mensaje a mostrar.
//* - buttons: Array de botones. Cada botón es un objeto con las siguientes propiedades:
//*   - text: Texto del botón.
//*   - onPress: Función que se ejecuta al presionar el botón.
//*   - style: Estilo del botón. Puede ser 'default', 'cancel' o 'destructive'.
 
const AlertsScreen = () => {


  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  
  return (
    <ThemedView margin>
      <ThemedButton className="my-5" onPress={createTwoButtonAlert}>2-Button Alert</ThemedButton>
      <ThemedButton className="my-5" onPress={createThreeButtonAlert}>3-Button Alert</ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
