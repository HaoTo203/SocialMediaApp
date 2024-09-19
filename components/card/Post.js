import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

function Post() {
  return (
    <View style={styles.container}>
      <Text style={styles.spaceName}>Space Name</Text>

      <View style={[styles.row, { marginHorizontal: 8, marginVertical: 4 }]}>
        <Image
          style={styles.userAvatar}
          source={require("../../assets/images/avatar.png")}
        />
        <View>
          <Text style={styles.userName}>User name</Text>
          <View style={styles.row}>
            <Text style={styles.title}>Title</Text>
            <View style={styles.dot}></View>
            <Text style={styles.time}>Time</Text>
          </View>
        </View>
      </View>

      <Text style={styles.content}>Content</Text>

      <Image
        style={styles.image}
        source={require("../../assets/images/Img_1.png")}
      />

      <View style={[styles.row, styles.status]}>
        <View style={[styles.row, styles.statusItem]}>
          <View
            style={{
              width: 16,
              height: 16,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#0696FF",
            }}
          >
            <FontAwesome name="thumbs-up" size={10} color="#ffffff" />
          </View>
          <Text style={styles.text}>10 Likes</Text>
        </View>
        <View style={[styles.row, styles.statusItem]}>
          <Feather name="message-circle" size={16} color="rgba(0, 0, 0, 0.8)" />
          <Text style={styles.text}>3 Comments</Text>
        </View>
      </View>

      <View style={[styles.row, styles.actions]}>
        <Pressable
          style={({ pressed }) => [
            styles.actionItem,
            pressed && { opacity: 0.7 },
          ]}
          android_ripple={{ color: "#ccc" }}
        >
          <FontAwesome
            name="thumbs-o-up"
            size={24}
            color="rgba(0, 0, 0, 0.8)"
          />
          <Text style={styles.text}>Like</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.actionItem,
            pressed && { opacity: 0.7 },
          ]}
          android_ripple={{ color: "#ccc" }}
        >
          <FontAwesome
            name="thumbs-o-down"
            size={24}
            color="rgba(0, 0, 0, 0.8)"
          />
          <Text style={styles.text}>Dislike</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.actionItem,
            pressed && { opacity: 0.7 },
          ]}
          android_ripple={{ color: "#ccc" }}
        >
          <Feather name="message-circle" size={24} color="rgba(0, 0, 0, 0.8)" />
          <Text style={styles.text}>Comment</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.actionItem,
            pressed && { opacity: 0.7 },
          ]}
          android_ripple={{ color: "#ccc" }}
        >
          <FontAwesome
            name="paper-plane-o"
            size={24}
            color="rgba(0, 0, 0, 0.8)"
          />
          <Text style={styles.text}>Share</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Post;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    backgroundColor: Colors.White,
    borderRadius: 16,
    elevation: 8,
    marginVertical: 8,
  },
  spaceName: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: 0.03,
    color: "rgba(0, 0, 0, 0.8)",
    marginTop: 8,
    marginHorizontal: 8,
    marginBottom: 4,
  },
  userAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "auto",
    height: 328,
    marginVertical: 4,
  },
  userName: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
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
  title: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: 0.03,
    color: "rgba(0,0,0,0.7)",
  },
  time: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: 0.03,
    color: "rgba(0,0,0,0.7)",
  },
  content: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: "rgba(0, 0, 0, 0.8)",
    marginHorizontal: 8,
    marginVertical: 4,
  },
  status: {
    justifyContent: "space-between",
  },
  actions: {
    marginHorizontal: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: 0.03,
    color: "rgba(0, 0, 0, 0.8)",
  },
  statusItem: {
    margin: 8,
  },
  actionItem: {
    alignItems: "center",
    padding: 8,
    flex: 1,
  },
});
