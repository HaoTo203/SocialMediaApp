import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/styles";
import { useState } from "react";

function TextButton({ children, style, textStyle }) {
  const [isPress, setIsPress] = useState(false);
  return (
    <Pressable
      style={({ pressed }) => {
        setIsPress(pressed);
        return [styles.buttonContainer, style];
      }}
    >
      <Text style={[styles.buttonText, textStyle, isPress && styles.pressed]}>
        {children}
      </Text>
    </Pressable>
  );
}

export default TextButton;

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: Colors.Black,
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
    alignSelf: "flex-start",
  },
  pressed: {
    borderBottomColor: Colors.Black,
  },
});
