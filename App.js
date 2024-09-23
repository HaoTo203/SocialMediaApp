import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import PersonalChatScreen from "./screens/PersonalChatScreen";
import { KeyboardProvider } from "react-native-keyboard-controller";
import NotificationsScreen from "./screens/NotificationsScreen";
import Menu from "./screens/MenuScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "./constants/styles";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

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

  function BottomTabNav() {
    return (
      <BottomTab.Navigator
        screenOptions={({ route, navigation }) => {
          return {
            tabBarStyle: {
              backgroundColor: Colors.White,
              height: "8%",
              paddingTop: "2%",
              paddingBottom: "2%",
            },
            tabBarActiveTintColor: Colors.Blue,
            tabBarLabelStyle: {
              fontSize: 10,
              fontFamily: "roboto-regular",
              lineHeight: 12,
              letterSpacing: 0.03,
            },
            headerShown: false,
          };
        }}
        sceneContainerStyle={{ backgroundColor: Colors.Gray_Light }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbox" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="menu" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }

  function AuthenticatedStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Notification" component={NotificationsScreen} />
        <Stack.Screen name="PersonalChat" component={PersonalChatScreen} />
      </Stack.Navigator>
    );
  }

  function AuthStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Signup"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <KeyboardProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <AuthenticatedStack />
        </SafeAreaView>
      </NavigationContainer>
    </KeyboardProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
