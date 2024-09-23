import { Image, StyleSheet, Text, View } from "react-native";
import IconButton from "../ui/IconButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/styles";

function SpaceItem({ onSettingPress }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/Pic.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Name</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.content}>Type</Text>
          <View style={styles.dot}></View>
          <Text style={styles.content}>Date</Text>
        </View>
      </View>
      <IconButton
        onPress={onSettingPress}
        icon={
          <Ionicons
            name="settings-outline"
            size={24}
            color={"rgba(0, 0, 0, 0.7)"}
          />
        }
      />
    </View>
  );
}

export default SpaceItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: Colors.Black,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  name: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: Colors.Black,
  },
  content: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 21,
    letterSpacing: 0.03,
    color: "rgba(0, 0, 0, 0.5)",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    marginHorizontal: 4,
  },
});
