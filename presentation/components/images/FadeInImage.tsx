import { useAnimation } from "@/hooks/useAnimation";
import { useState } from "react";
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from "react-native";

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
}

//* 'onLoadEnd' es un evento que se dispara cuando la imagen ha sido cargada.
export const FadeInImage = ({ uri, style }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading && (
        <ActivityIndicator
          style={{ position: "absolute" }}
          color="grey"
          size={30}
        />
      )}

      <Animated.Image
        style={[style, { opacity: animatedOpacity }]}
        source={{ uri }}
        onLoadEnd={() => {
          fadeIn({
            duration: 1000,
          });
          setIsLoading(false);
        }}
      />
    </View>
  );
};
