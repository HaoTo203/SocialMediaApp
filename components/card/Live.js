import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import IconButton from "../ui/IconButton";
import Ionicons from "@expo/vector-icons/Ionicons";

function Live() {
  return (
    <Pressable style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.dot}></View>
        <View style={[styles.dot, { marginHorizontal: 4 }]}></View>
        <View style={styles.dot}></View>
        <Text style={styles.text}>Live</Text>
        <IconButton
          icon={
            <Ionicons
              name="ellipsis-vertical"
              size={24}
              color={"rgba(0, 0, 0, 0.75)"}
            />
          }
        ></IconButton>
      </View>
      <View style={styles.horizontalLine} />
      <Text style={styles.title}>
        Navigating Dietary Trends: Keto, Paleo, Vegan, and More
      </Text>
      <View style={[styles.headerRow, { marginTop: 8 }]}>
        <View style={{ width: 50 }}>
          <Image
            style={styles.avatarSize}
            source={require("../../assets/images/E1.png")}
          />
          <Image
            style={[
              styles.avatarSize,
              { position: "absolute", left: 15, zIndex: -1 },
            ]}
            source={require("../../assets/images/E2.png")}
          />
          <Image
            style={[
              styles.avatarSize,
              { position: "absolute", left: 30, zIndex: -2 },
            ]}
            source={require("../../assets/images/E3.png")}
          />
        </View>
        <Text style={styles.text}>and 52 others are listening</Text>
      </View>
      <View style={styles.horizontalLine} />
      <View style={[styles.headerRow, { marginBottom: 8 }]}>
        <Image
          style={[styles.avatarSize, { marginRight: 4 }]}
          source={require("../../assets/images/E1.png")}
        />
        <Text style={styles.hostName}>Anamika Jain</Text>
        <Text style={styles.tag}>Host</Text>
      </View>
      <Text style={styles.liveContent} ellipsizeMode="tail" numberOfLines={3}>
        Passionate Fitness Enthusiast and Vegan Advocate | Achieving My Health
      </Text>
    </Pressable>
  );
}

export default Live;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(217, 232, 247, 0.5)",
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1E60A2",
  },
  text: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 21,
    letterSpacing: 0.03,
    color: Colors.Black,
    flex: 1,
    marginHorizontal: 8,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: "#1E60A2",
    marginVertical: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: "roboto-medium",
    letterSpacing: 0.03,
    lineHeight: 24,
    color: Colors.Black,
    marginHorizontal: 1,
  },
  tag: {
    fontSize: 12,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    letterSpacing: 0.03,
    color: "#004385",
    backgroundColor: "rgba(0, 128, 255, 0.2)",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  hostName: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 21,
    letterSpacing: 0.03,
    color: "rgba(0, 0, 0, 0.8)",
  },
  avatarSize: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  liveContent: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: 0.03,
    color: "rgba(0, 0, 0, 0.6)",
  },
});
