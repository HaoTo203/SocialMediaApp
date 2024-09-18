import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import Ionicons from "@expo/vector-icons/Ionicons";

function Event({ style, imageStyle, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        style,
        pressed && { opacity: 0.7 },
      ]}
      android_ripple={{ color: "#ccc" }}
    >
      <Text style={styles.name}>Culinary Club</Text>
      <Image
        style={[styles.image, imageStyle]}
        source={require("../../assets/images/Img.png")}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Cooking Extravaganza with Culinary Celeb
        </Text>
        <View style={[styles.row, { marginVertical: 8 }]}>
          <Ionicons size={16} color={"#000000B3"} name="calendar-outline" />
          <Text style={styles.date}>21 Dec, 23 | Wed | 7:00 to 9:00 AM</Text>
        </View>
        <View style={styles.row}>
          <Ionicons size={16} color={"#17002F"} name="location-outline" />
          <Text style={styles.location}>Live in Vaulture</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default Event;

const styles = StyleSheet.create({
  container: {
    width: 288,
    borderRadius: 8,
    elevation: 4,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  name: {
    fontSize: 14,
    fontFamily: "roboto-medium",
    lineHeight: 16,
    letterSpacing: 0.03,
    color: Colors.Black,
    backgroundColor: "#E5EBF1",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingTop: 10,
    paddingLeft: 8,
    paddingBottom: 6,
  },
  image: {},
  content: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: Colors.White,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: "roboto-medium",
    lineHeight: 23,
    letterSpacing: 0.03,
    color: Colors.Black,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    fontSize: 12,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0.03,
    color: Colors.Black,
    opacity: 0.7,
    marginLeft: 4,
  },
  location: {
    fontSize: 12,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0.03,
    color: Colors.Black,
    marginLeft: 4,
  },
});
