import { useRef } from "react";
import { Animated, Easing } from "react-native";

//* new Animated permite crear animaciones en React Native. Value() es un método que crea un nuevo valor animado.

//* Animated.timing() es un método que permite animar un valor a lo largo del tiempo. Recibe los siguientes parámetros:
//* - animatedOpacity: el valor animado que se va a animar.
//* - toValue: el valor al que se va a animar.
//* - duration: la duración de la animación.
//* - useNativeDriver: habilita el uso del driver nativo para la animación.

//* Además, el método start() inicia la animación. Opcionalmente puede recibir un callback que se ejecuta al finalizar la animación.
//* resetAnimation() es un método que reinicia la animación. 
//* setValue() es un método que establece o actualiza el valor del valor animado

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 300,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
  };

  const fadeOut = ({
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver,
      easing,
    }).start(callback);
    // .start(() => animatedTop.resetAnimation());
    // .start(() => animatedTop.setValue(0));
  };

  const startMovingTop = ({
    initialPosition = -100,
    duration = 300,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue,
      duration,
      useNativeDriver,
      // easing: Easing.elastic(3),
      easing,
    }).start(callback);
  };

  return {
    animatedOpacity,
    animatedTop,

    // Methods
    fadeIn,
    fadeOut,
    startMovingTop
  };
};
