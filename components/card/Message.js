import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Colors } from "../../constants/styles";
import { useState } from "react";

function Message({ data }) {
  const [showTime, setShowTime] = useState(false);
  const { width } = useWindowDimensions();
  return (
    <View>
      {showTime && <Text style={{ textAlign: "center" }}>Time</Text>}
      <View
        // This style use to handle message layout
        style={[
          { flexDirection: "row", alignItems: "flex-end" },
          data.senderId === "xx"
            ? { justifyContent: "flex-start" }
            : { justifyContent: "flex-end" },
        ]}
      >
        {data.senderId === "xx" && (
          <Image
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 20,
              marginLeft: 4,
              marginBottom: 4,
            }}
            source={require("../../assets/images/avatar.png")}
          />
        )}
        <Pressable
          onPress={() => {
            setShowTime((prev) => !prev);
          }}
          style={[
            styles.messageContainer,
            data.senderId === "xx" ? styles.sender : styles.receiver,
            { maxWidth: width - 100 },
          ]}
        >
          <Text style={styles.messageText}>{data.message}</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Message;

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: 500,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    margin: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  messageText: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: Colors.Black,
  },
  sender: {
    backgroundColor: "#D3E1F0",
  },
  receiver: {
    backgroundColor: "#dcdafa",
  },
});
