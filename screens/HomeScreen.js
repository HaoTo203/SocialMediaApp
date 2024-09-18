import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors } from "../constants/styles";
import { useState } from "react";
import Space from "../components/card/Space";
import Event from "../components/card/Event";

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

function HomeScreen() {
  const [hasData, setHasData] = useState(false);

  function NoneDataView() {
    return (
      <View style={styles.noneDataView}>
        <Image source={require("../assets/images/home.png")} />
        <Text style={styles.noneDataMessage}>
          You have not joined any space yet!{"\n"}
          Browse through our recommended options or go to discover tab to search
          spaces by setting preferences.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!hasData && <NoneDataView />}
      <View style={styles.sectionView}>
        <Text style={styles.sectionTitle}>Trending Nows</Text>
        <FlatList
          style={styles.sectionContent}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={() => <Space />}
        />
      </View>
      <View style={styles.sectionView}>
        <Text style={styles.sectionTitle}>Explore by Events</Text>
        <FlatList
          style={styles.sectionContent}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={() => <Event />}
        />
      </View>
      <View style={styles.sectionView}>
        <Text style={styles.sectionTitle}>Join Growth Clubs</Text>
        <FlatList
          style={styles.sectionContent}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={() => <Space />}
        />
      </View>
      <View style={styles.sectionView}>
        <Text style={styles.sectionTitle}>Recommend for You</Text>
        <FlatList
          style={styles.sectionContent}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={() => <Space />}
        />
      </View>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Gray_Light,
  },
  noneDataView: {
    alignItems: "center",
    marginHorizontal: 18,
  },
  noneDataMessage: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    color: Colors.Black_Light,
    opacity: 0.8,
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0.03,
  },
  sectionView: {},
  sectionTitle: {
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 24,
    letterSpacing: 0.03,
    color: Colors.Black,
    marginHorizontal: 14,
  },
  sectionContent: {
    paddingLeft: 4,
  },
});
