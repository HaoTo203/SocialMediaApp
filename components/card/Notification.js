import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function Notification() {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.7 }]}
      android_ripple={{ color: "#ccc" }}
    >
      <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
        <Image
          style={styles.image}
          source={require("../../assets/images/Avatar_1.png")}
        />
        <Text style={styles.content} numberOfLines={3} ellipsizeMode="tail">
          New in UX Rescue! An interesting article on the Impact of Color in UX
          Design. Engage and share your insights.
        </Text>
      </View>
      <Text style={styles.time}>Time</Text>
    </Pressable>
  );
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 16,
  },
  image: {
    width: 56,
    height: 56,
  },
  content: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 14,
    fontFamily: "roboto-medium",
    lineHeight: 21,
    letterSpacing: 0.03,
    color: "rgba(0, 0, 0, 0.75)",
  },
  time: {
    fontSize: 10,
    fontFamily: "roboto-regular",
    lineHeight: 12,
    letterSpacing: 0.03,
    color: "rgba(0, 0, 0, 0.6)",
  },
});
