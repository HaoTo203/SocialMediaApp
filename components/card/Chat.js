import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";

function Chat({ onPress, isSender, seenNumber }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.7 }]}
      android_ripple={{ color: "#ccc" }}
    >
      <View style={styles.row}>
        <Image
          style={styles.avatar}
          source={require("../../assets/images/Avatar_1.png")}
        />
        <View style={{ flex: 1 }}>
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.time}>Time</Text>
          </View>
          <View style={[styles.row]}>
            {isSender && <Text style={styles.sender}>You:</Text>}
            <Text style={styles.message} numberOfLines={1} ellipsizeMode="tail">
              Messagemessagemessageaaaaaaaaaaaaa
            </Text>
            {
              <View
                style={[
                  styles.notSeenContainer,
                  seenNumber === 0 ? { opacity: 0 } : { opacity: 1 },
                ]}
              >
                <Text style={styles.notSeenNumber}>{seenNumber}</Text>
              </View>
            }
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default Chat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    padding: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 8,
  },
  name: {
    fontSize: 16,
    fontFamily: "roboto-medium",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: Colors.Black,
  },
  time: {
    fontSize: 10,
    fontFamily: "roboto-regular",
    lineHeight: 12,
    letterSpacing: 0.03,
    color: "#898A8D",
  },
  sender: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: "#000000",
    marginRight: 4,
  },
  message: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: "rgba(0, 0, 0, 0.7)",
    flex: 1,
    marginRight: 24,
  },
  notSeenContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#0080FF",
    alignItems: "center",
    justifyContent: "center",
  },
  notSeenNumber: {
    fontSize: 10,
    fontFamily: "roboto-regular",
    lineHeight: 12,
    letterSpacing: 0.03,
    color: Colors.White,
  },
});
