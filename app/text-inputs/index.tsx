import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

import {
  ThemedCard,
  ThemedText,
  ThemedTextInput,
  ThemedView,
} from "@/presentation/components/shared";


//* <KeyboardAvoidingView> es un componente que se utiliza para ajustar la posición de los elementos de la interfaz de usuario cuando 
//* el teclado virtual se muestra o se oculta. Es útil para evitar que el teclado cubra los elementos de la interfaz de usuario,
//* especialmente cuando se trata de formularios. Recibe una prop 'behavior' que indica cómo se debe ajustar la posición de los elementos
//* cuando el teclado se muestra. En este caso, se utiliza 'height' para ajustar la posición de los elementos en función de la altura 
//* del teclado. Tambien puede recibir 'padding' para ajustar la posición de los elementos agregando un relleno en la parte inferior de
//* la pantalla.

//* <ScrollView> es un componente que se utiliza para agregar desplazamiento a los elementos de la interfaz de usuario. Es útil cuando
//* se tienen muchos elementos que no caben en la pantalla y se necesita agregar desplazamiento para poder ver todos los elementos.  


//* <TextInput> es un componente que se utiliza para agregar un campo de texto en la interfaz de usuario. Recibe varias props para
//* personalizar su comportamiento y apariencia. En este caso, se utiliza 'placeholder' para agregar un texto de ayuda en el campo de
//* texto, 'autoCapitalize' para indicar si el texto debe ser capitalizado automáticamente, 'autoCorrect' para indicar si el texto debe
//* ser corregido automáticamente, 'keyboardType' para indicar el tipo de teclado que se debe mostrar y 'onChangeText' para manejar el
//* evento de cambio de texto en el campo de texto.  

const isIOS = Platform.OS === "ios";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior={isIOS ? 'height' : undefined}>
      <ScrollView>
        <ThemedView margin>
          <ThemedCard>
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize="words"
              autoCorrect={false}
              // keyboardType="numeric"
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder="Correo electrónico"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder="Teléfono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard>
            <ThemedTextInput
              placeholder="Teléfono"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
        </ThemedView>

        {isIOS && <View style={{marginBottom: 100}} />}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
