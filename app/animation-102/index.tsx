import { useRef } from "react";
import { Animated, PanResponder, StyleSheet } from "react-native";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

//* new Animated.ValueXY() permite mover el objeto en dos dimensiones (x, y) al mismo tiempo y de forma independiente 
//* (por ejemplo, moverlo solo en x o solo en y). Es decir, animar el objeto en dos dimensiones al mismo tiempo.

//* 'PanResponder' es una API que proporciona un sistema de gestos de bajo nivel para que los componentes respondan a los toques del 
//* usuario. 'PanResponder' se utiliza para reconocer los gestos de arrastre en la pantalla táctil. Tiene el método create() que 
//* permite crear un objeto 'PanResponder' que se puede utilizar para reconocer los gestos de arrastre en la pantalla táctil. Recibe
//* las siguientes propiedades y métodos:

//* - onStartShouldSetPanResponder: se llama cuando el usuario toca el componente por primera vez. Debe devolver un valor booleano
//*   que indica si el componente debe convertirse en el manejador de panResponder. 

//* - onPanResponderMove: se llama cuando el usuario arrastra el dedo por la pantalla. Se utiliza para actualizar la posición del
//*   componente en la pantalla. 'Animated.event' se utiliza para actualizar la posición del componente en la pantalla. Donde recibe
//*   un array con dos elementos: el primero es null y el segundo es un objeto con las propiedades 'dx' y 'dy' que se actualizan con la 
//*   posición del dedo en la pantalla. Además, recibe un objeto con la propiedad 'useNativeDriver' que se establece en 'false' para
//*   que la animación se ejecute en el hilo principal.

//* - onPanResponderRelease: se llama cuando el usuario levanta el dedo de la pantalla. Se utiliza para devolver el componente a su
//*   posición original. 'Animated.spring' se utiliza para devolver el componente a su posición original. Recibe dos argumentos: el
//*   primero es el objeto 'pan' que se anima y el segundo es un objeto con la propiedad 'toValue' que se establece en { x: 0, y: 0 }
//*   para devolver el componente a su posición original. Además, recibe un objeto con la propiedad 'useNativeDriver' que se establece
//*   en 'false' para que la animación se ejecute en el hilo principal.


//* - 'panResponder.panHandlers' se utiliza para obtener los manejadores de eventos de 'PanResponder' que se deben adjuntar al componente
//*   para que pueda responder a los gestos de arrastre en la pantalla táctil.
//* - 'pan.getLayout()' se utiliza para obtener la posición actual del componente en la pantalla.


const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      },
    ], 
    {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
      ).start();
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), styles.box]}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#61dafb",
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});

export default Animation102Screen;
