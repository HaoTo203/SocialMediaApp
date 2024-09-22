import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors } from "../constants/styles";
import { useEffect, useState } from "react";
import Notification from "../components/card/Notification";

const dummyData = [
  {
    id: 0,
    title: "Title",
  },
  {
    id: 1,
    title: "Title",
  },
  {
    id: 2,
    title: "Title",
  },
];

function NotificationsScreen() {
  const [selectedTab, setSelectedTab] = useState("all");
  return (
    <>
      <View style={styles.row}>
        <Pressable
          onPress={() => {
            setSelectedTab("all");
          }}
          style={styles.button}
        >
          <Text
            style={
              selectedTab == "all"
                ? styles.buttonTextSelected
                : styles.buttonText
            }
          >
            All
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedTab("messages");
          }}
          style={styles.button}
        >
          <Text
            style={
              selectedTab == "messages"
                ? styles.buttonTextSelected
                : styles.buttonText
            }
          >
            Messages
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedTab("reminders");
          }}
          style={styles.button}
        >
          <Text
            style={
              selectedTab == "reminders"
                ? styles.buttonTextSelected
                : styles.buttonText
            }
          >
            Reminders
          </Text>
        </Pressable>
      </View>
      <FlatList
        contentContainerStyle={{ gap: 8 }}
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Notification />}
      />
    </>
  );
}

export default NotificationsScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: "#50555C",
  },
  buttonTextSelected: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: Colors.Black,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.5)",
  },
});
