import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/styles";
import SearchBox from "../components/ui/SearchBox";
import Chat from "../components/card/Chat";

const dummyData = [
  {
    id: 0,
    title: "title",
  },
  {
    id: 1,
    title: "title",
  },
  {
    id: 2,
    title: "title",
  },
  {
    id: 3,
    title: "title",
  },
  {
    id: 4,
    title: "title",
  },
];

function ChatScreen({ navigation }) {
  return (
    <>
      <SearchBox />
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Chat
            onPress={() => {
              navigation.navigate("PersonalChat");
            }}
            key={item.id}
            seenNumber={0}
          />
        )}
      />
    </>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {},
});
