import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";

function Story({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.7 }]}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/Pic_1.png")}
        />
      </View>
      <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
        UX Rescues
      </Text>
    </Pressable>
  );
}

export default Story;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 8,
  },
  imageContainer: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 28,
    borderColor: "rgba(132, 154, 152, 0.67)",
    elevation: 8,
    margin: 8,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  name: {
    fontSize: 12,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0.03,
    color: Colors.Black,
    maxWidth: 70,
  },
});
