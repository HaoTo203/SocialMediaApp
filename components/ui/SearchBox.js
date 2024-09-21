import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function SearchBox({ style, iconContainerStyle, textStyle }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        style,
        pressed && { opacity: 0.7 },
      ]}
      android_ripple={{ color: "#ccc" }}
    >
      <Ionicons
        style={[styles.icon, iconContainerStyle]}
        name="search-sharp"
        size={24}
        color={"#rgba(0, 0, 0, 0.8)"}
      />
      <Text style={[styles.text, textStyle]}>Search</Text>
    </Pressable>
  );
}

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 32,
    backgroundColor: "#D8E4F0",
    borderRadius: 8,
  },
  icon: {
    marginHorizontal: 8,
    marginVertical: 4,
  },
  text: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: "#rgba(0, 0, 0, 0.5)",
  },
});
