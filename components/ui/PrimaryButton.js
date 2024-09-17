import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/styles";

function PrimaryButton({
  title,
  style,
  textStyle,
  leftIcon$,
  rightIcon$,
  disabled,
  onPress,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        style,
        pressed && styles.pressed,
        disabled && styles.inactive,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      {leftIcon$}
      <Text style={[styles.text, textStyle]}>{title}</Text>
      {rightIcon$}
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Blue,
    paddingVertical: 8,
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    color: Colors.White,
    fontFamily: "roboto-medium",
    fontSize: 16,
  },
  pressed: {
    backgroundColor: Colors.Gray,
  },
  inactive: {
    backgroundColor: Colors.Brown,
  },
});
