import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/styles";
import { useState } from "react";

function TextButton({ onPress, children, style, textStyle }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonContainer,
        style,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </Pressable>
  );
}

export default TextButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 16,
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
    alignSelf: "flex-start",
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: Colors.Black,
  },
  pressed: {
    borderBottomColor: Colors.Black,
  },
});
