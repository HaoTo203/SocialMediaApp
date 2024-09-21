import {
  Button,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import InputBox from "../components/ui/InputBox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../constants/styles";
import { useRef, useState } from "react";

function SignUpScreen() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredRePassword, setEnteredRePassword] = useState("");
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const rePasswordRef = useRef();
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Let's start here</Text>
        <InputBox
          leftIcon$={
            <Ionicons
              name="person-outline"
              size={24}
              color={Colors.Blue_Light}
            />
          }
          placeHolder={"Enter Name"}
          label={"Name"}
          inputOptions={{
            returnKeyType: "next",
            onSubmitEditing: () => emailRef.current.focus(),
            value: enteredName,
            onChangeText: (enteredText) => {
              setEnteredName(enteredText);
            },
          }}
        />
        <InputBox
          leftIcon$={
            <Ionicons name="mail-outline" size={24} color={Colors.Blue_Light} />
          }
          placeHolder={"Enter Email"}
          label={"Email"}
          inputOptions={{
            returnKeyType: "next",
            ref: emailRef,
            onSubmitEditing: () => usernameRef.current.focus(),
            value: enteredEmail,
            onChangeText: (enteredText) => {
              setEnteredEmail(enteredText);
            },
          }}
        />
        <InputBox
          leftIcon$={
            <Ionicons
              name="person-outline"
              size={24}
              color={Colors.Blue_Light}
            />
          }
          placeHolder={"Enter Username"}
          label={"Username"}
          inputOptions={{
            returnKeyType: "next",
            ref: usernameRef,
            onSubmitEditing: () => passwordRef.current.focus(),
            value: enteredUsername,
            onChangeText: (enteredText) => {
              setEnteredUsername(enteredText);
            },
          }}
        />
        <InputBox
          leftIcon$={
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color={Colors.Blue_Light}
            />
          }
          placeHolder={"Type in your password"}
          label={"Password"}
          inputOptions={{
            returnKeyType: "next",
            ref: passwordRef,
            onSubmitEditing: () => rePasswordRef.current.focus(),
            secureTextEntry: true,
            value: enteredPassword,
            onChangeText: (enteredText) => {
              setEnteredPassword(enteredText);
            },
          }}
        />
        <InputBox
          leftIcon$={
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color={Colors.Blue_Light}
            />
          }
          placeHolder={"Re-type your password"}
          label={"Re-enter Password"}
          inputOptions={{
            returnKeyType: "done",
            ref: rePasswordRef,
            secureTextEntry: true,
            value: enteredRePassword,
            onChangeText: (enteredText) => {
              setEnteredRePassword(enteredText);
            },
          }}
        />

        <View style={[styles.row, { justifyContent: "flex-end" }]}>
          <Pressable style={({ pressed }) => pressed && { opacity: 0.8 }}>
            <Text style={styles.text}>Forgot password?</Text>
          </Pressable>
        </View>

        <PrimaryButton
          style={styles.buttonStyle}
          title="Sign Up"
          onPress={() => {
            // TODO: Handle authenticate
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 50,
  },
  buttonStyle: {
    marginHorizontal: 30,
    borderRadius: 20,
  },
  row: {
    flexDirection: "row",
    marginVertical: 16,
  },
  text: {
    fontSize: 10,
    fontFamily: "roboto-regular",
    color: Colors.Black,
  },
  title: {
    fontSize: 24,
    fontFamily: "roboto-regular",
    color: Colors.Black,
    marginVertical: 20,
  },
  subText: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    color: Colors.Black,
  },
});
