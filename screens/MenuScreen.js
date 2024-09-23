import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/styles";
import HorizontalLine from "../components/ui/HorizontalLine";
import TextButton from "../components/ui/TextButton";

function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require("../assets/images/Avatar_1.png")}
        />
        <Text style={styles.name}>Name</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Profile");
          }}
          style={styles.profileContainer}
        >
          <Text style={styles.profileText}>View Profile</Text>
        </Pressable>
      </View>
      <HorizontalLine />
      <View>
        <TextButton>Create Community</TextButton>
        <TextButton>My Connections</TextButton>
        <TextButton>Interests</TextButton>
      </View>
      <HorizontalLine />
      <View>
        <TextButton>Manage Account</TextButton>
        <TextButton>Setting</TextButton>
        <TextButton>Support</TextButton>
        <TextButton
          onPress={() => {
            // TODO: handle logout
            console.log("Logout");
          }}
        >
          Logout
        </TextButton>
      </View>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 56,
  },
  avatar: {
    width: 64,
    height: 64,
  },
  name: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: Colors.Black,
  },
  profileContainer: {
    marginTop: 16,
    borderWidth: 2,
    borderColor: Colors.Blue,
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  profileText: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    letterSpacing: 0.03,
    color: Colors.Blue,
  },
});
