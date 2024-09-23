import { FlatList, Keyboard, StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../constants/styles";
import Message from "../components/card/Message";
import IconButton from "../components/ui/IconButton";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useKeyboardHandler } from "react-native-keyboard-controller";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const dummyData = [
  {
    id: 0,
    senderId: "xx",
    message:
      "Message Message Message Message Messssage Message Messsssage Messagesssssss Message Message Message Messasssge Messssage Message Message Message",
  },
  {
    id: 1,
    senderId: "xx",
    message: "Message Message Message Message Messssage Message Messsssage",
  },
  {
    id: 2,
    senderId: "yy",
    message: "Message Message",
  },
  {
    id: 3,
    senderId: "yy",
    message:
      "Message Message Message Message Messssage Message Messsssage Messagesssssss Message Message Message Messasssge Messssage Message Message Message",
  },
  {
    id: 4,
    senderId: "yy",
    message:
      "Message Message Message Message Messssage Message Messsssage Messagesssssss Message Message Message Messasssge Messssage Message Message Message",
  },
  {
    id: 5,
    senderId: "xx",
    message:
      "Message Message Message Message Messssage Message Messsssage Messagesssssss Message Message Message Messasssge Messssage Message Message Message",
  },
  {
    id: 6,
    senderId: "xx",
    message:
      "Message Message Message Message Messssage Message Messsssage Messagesssssss Message Message Message Messasssge Messssage Message Message Message",
  },
];

const useGradualAnimation = () => {
  const height = useSharedValue(0);

  useKeyboardHandler(
    {
      onMove: (event) => {
        "worklet";
        height.value = Math.max(event.height, 0);
      },
    },
    []
  );
  return { height };
};

function PersonalChatScreen({ navigation }) {
  const { height } = useGradualAnimation();

  const fakeView = useAnimatedStyle(() => {
    return {
      height: Math.abs(height.value),
    };
  }, []);
  return (
    <>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Message key={item.id} data={{ ...item }} />}
        inverted
      />
      <View style={styles.row}>
        <IconButton
          style={styles.attachedButton}
          icon={<FontAwesome5 name="paperclip" size={24} color="black" />}
        />
        <TextInput style={styles.input} placeholder="Type here" multiline />
        <IconButton
          onPress={() => {
            Keyboard.dismiss();
          }}
          style={styles.sendButton}
          icon={
            <FontAwesome5 name="paper-plane" size={24} color={Colors.White} />
          }
        />
      </View>
      <Animated.View style={fakeView} />
    </>
  );
}

export default PersonalChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Gray_Light,
    justifyContent: "flex-end",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "flex-end",
    marginBottom: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: "#D8E4F0",
    maxHeight: 120,
  },
  sendButton: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "#0080FF",
    marginVertical: 0,
    marginHorizontal: 4,
  },
  attachedButton: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: Colors.White,
    marginVertical: 0,
    marginHorizontal: 4,
  },
});
