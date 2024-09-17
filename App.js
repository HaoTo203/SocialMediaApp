import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignupScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    // Show splash screen
    return <View></View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <SignUpScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
