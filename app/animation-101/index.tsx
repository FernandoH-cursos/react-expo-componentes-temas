import { Animated, Easing } from "react-native";

import { useAnimation } from "@/hooks/useAnimation";
import { ThemedButton, ThemedView } from "@/presentation/components/shared";

//* <Animated.View> es un componente que permite animar propiedades de estilo de un componente hijo. Es decir, podemos animar el ancho, 
//* alto, opacidad, posición, etc.de un componente hijo.

const Animation101Screen = () => {
  const { animatedOpacity, animatedTop, fadeIn, fadeOut,startMovingTop } = useAnimation();

  return (
    <ThemedView className="flex-1 justify-center items-center" margin>
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />

      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeIn({});
          startMovingTop({
            easing: Easing.bounce,
            duration: 700,
          });
        }}
      >
        FadeIn
      </ThemedButton>
      <ThemedButton className="my-5" onPress={() => fadeOut({})}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
