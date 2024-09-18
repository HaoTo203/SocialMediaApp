import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";

function Space({ style, bannerStyle, onPress }) {
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
      <View style={styles.cover}>
        <Image
          style={[
            styles.coverBanner,
            bannerStyle,
            style?.width && { width: style.width },
          ]}
          source={require("../../assets/images/Cover.png")}
        />
        <Image
          style={styles.image}
          source={require("../../assets/images/Pic.png")}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.club}>CultFit</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text style={styles.subText}>859 members</Text>
          <View style={styles.dot}></View>
          <Text style={styles.subText}>New</Text>
        </View>
        <Text style={styles.contentText}>
          Elevate Your Fitness Goal with Cult.fit | A Space Committed to
          Fitness, and Personal Growth.
        </Text>
      </View>
    </Pressable>
  );
}

export default Space;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 8,
    width: 190,
    elevation: 4,
    backgroundColor: Colors.White,
    borderRadius: 8,
  },
  cover: {
    paddingBottom: 30,
  },
  coverBanner: {
    width: 190,
    height: 90,
  },
  image: {
    position: "absolute",
    bottom: "0%",
    left: "3%",
    width: 56,
    height: 56,
    borderColor: Colors.Black,
    borderRadius: 28,
    borderWidth: 1,
  },
  content: {
    marginHorizontal: 8,
    marginBottom: 8,
  },
  club: {
    fontSize: 14,
    fontFamily: "roboto-bold",
    letterSpacing: 0.03,
    lineHeight: 21,
    color: Colors.Black,
  },
  subText: {
    fontSize: 10,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0.03,
    color: Colors.Black,
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 4,
    borderRadius: 2,
  },
  contentText: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 21,
    letterSpacing: 0.03,
    color: Colors.Black,
  },
});
