import {
  Button,
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
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useRef, useState } from "react";
import IconButton from "../components/ui/IconButton";

function LoginScreen() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const passwordRef = useRef();
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Discover your favorite spaces with us!</Text>
      <InputBox
        leftIcon$={
          <Ionicons name="person-outline" size={24} color={Colors.Blue_Light} />
        }
        placeHolder={"Type your username/email"}
        label={"Username"}
        inputOptions={{
          returnKeyType: "next",
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
        placeHolder={"Type your password"}
        label={"Password"}
        inputOptions={{
          returnKeyType: "done",
          ref: passwordRef,
          secureTextEntry: true,
          value: enteredPassword,
          onChangeText: (enteredText) => {
            setEnteredPassword(enteredText);
          },
        }}
      />

      <View style={styles.row}>
        <BouncyCheckbox
          onPress={(isChecked) => {}}
          text="Remember me"
          style={{ flex: 1 }}
          textStyle={[styles.text, { textDecorationLine: "none" }]}
          size={20}
          fillColor={Colors.Blue_Light}
        />
        <Pressable style={({ pressed }) => pressed && { opacity: 0.8 }}>
          <Text style={styles.text}>Forgot password?</Text>
        </Pressable>
      </View>

      <PrimaryButton
        style={styles.buttonStyle}
        title="Login"
        onPress={() => {
          // TODO: Handle authenticate
        }}
      />
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Pressable style={({ pressed }) => pressed && { opacity: 0.8 }}>
          <Text style={[styles.subText, { color: Colors.Blue_Light }]}>
            Create account
          </Text>
        </Pressable>
        <Text style={styles.subText}>or</Text>
        <Text style={styles.subText}>Signup using</Text>
        <View style={styles.row}>
          <IconButton
            onPress={() => {
              // TODO: Handle authenticate with facebook
            }}
            icon={
              <Ionicons name="logo-facebook" size={24} color={Colors.Black} />
            }
          />
          <IconButton
            onPress={() => {
              // TODO: Handle authenticate with google
            }}
            icon={
              <Ionicons name="logo-google" size={24} color={Colors.Black} />
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;

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
