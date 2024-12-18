import React from "react";
import { Text, Pressable, PressableProps } from "react-native";

interface Props extends PressableProps {
  children: React.ReactNode;
  className?: string;
}

export const ThemedButton = ({
  children,
  className,
  onPress,
  ...rest
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      className={[
        "bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80",
        className,
      ].join(" ")}
      {...rest}
    >
      <Text className="text-white text-2xl">{children}</Text>
    </Pressable>
  );
};
