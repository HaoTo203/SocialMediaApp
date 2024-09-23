import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Colors } from "../constants/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import PrimaryButton from "../components/ui/PrimaryButton";
import {
  KeyboardAwareScrollView,
  KeyboardToolbar,
} from "react-native-keyboard-controller";
import { useRef } from "react";

function ChangeProfileScreen() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const inputRef6 = useRef();
  const inputRef7 = useRef();
  return (
    <>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.image}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/images/Avatar_1.png")}
            />
            <Pressable
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                alignItems: "center",
                paddingVertical: 4,
                width: "100%",
              }}
            >
              <Ionicons name="pencil-outline" size={14} color={Colors.White} />
            </Pressable>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Name</Text>
          <TextInput
            keyboard
            style={styles.input}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => {
              inputRef1.current.focus();
            }}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Gender</Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            blurOnSubmit={false}
            ref={inputRef1}
            onSubmitEditing={() => {
              inputRef2.current.focus();
            }}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Birthday</Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            blurOnSubmit={false}
            ref={inputRef2}
            onSubmitEditing={() => {
              inputRef3.current.focus();
            }}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Job Title</Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            blurOnSubmit={false}
            ref={inputRef3}
            onSubmitEditing={() => {
              inputRef4.current.focus();
            }}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Company</Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            blurOnSubmit={false}
            ref={inputRef4}
            onSubmitEditing={() => {
              inputRef5.current.focus();
            }}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Location</Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            blurOnSubmit={false}
            ref={inputRef5}
            onSubmitEditing={() => {
              inputRef6.current.focus();
            }}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Headline</Text>
          <TextInput
            style={styles.input}
            returnKeyType="next"
            blurOnSubmit={false}
            ref={inputRef6}
            onSubmitEditing={() => {
              inputRef7.current.focus();
            }}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>About</Text>
          <TextInput
            style={[styles.input, { textAlign: "auto" }]}
            returnKeyType="done"
            numberOfLines={10}
            textAlignVertical="top"
            ref={inputRef7}
          />
        </View>
        <PrimaryButton
          title={"Save"}
          style={{ paddingVertical: 12, marginTop: 16 }}
        />
      </KeyboardAwareScrollView>
    </>
  );
}

export default ChangeProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: Colors.Black,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  section: {
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    letterSpacing: 0.03,
    color: Colors.Black,
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: Colors.Black,
    backgroundColor: "#E1ECEB",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
