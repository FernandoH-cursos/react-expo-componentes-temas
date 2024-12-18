
import { Stack } from "expo-router";

//* En este layout se definen las rutas que se van a mostrar en modal
//* En 'presentation' se define que la pantalla se va a mostrar en modal
const ModalLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-window"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="modal-window-2"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}

export default ModalLayout;