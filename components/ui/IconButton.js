import { Pressable, StyleSheet } from "react-native";

function IconButton({ icon, style, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        style,
        pressed && styles.pressed,
      ]}
    >
      {icon}
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
