import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconButton from "../components/ui/IconButton";
import { Colors } from "../constants/styles";
import SpaceItem from "../components/card/SpaceItem";
import Post from "../components/card/Post";
import { useState } from "react";

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

function SpaceSetting({ isModalVisible, onRequestClose, data }) {
  const [modeState, setModeState] = useState({
    public: true,
    private: true,
    membersOnly: true,
  });
  return (
    <>
      {/* This modal use for change user avatar */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={onRequestClose}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
          activeOpacity={1}
          onPressOut={onRequestClose}
        >
          <TouchableWithoutFeedback>
            <View
              style={{
                marginTop: "auto",
                paddingTop: 10,
                backgroundColor: Colors.Gray_Light,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                overflow: "hidden",
              }}
            >
              <View style={{ marginHorizontal: 8 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.sectionTitle}>Public mode</Text>
                  <Switch
                    value={modeState.public}
                    onValueChange={() => {
                      setModeState((prev) => {
                        const newState = { ...prev };
                        newState.public = !newState.public;
                        return { ...newState };
                      });
                    }}
                  />
                </View>
                <Text style={styles.sectionContent}>
                  Visible to anyone who visits your profile.
                </Text>
              </View>
              <View style={{ marginHorizontal: 8 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.sectionTitle}>Private mode</Text>
                  <Switch
                    value={modeState.private}
                    onValueChange={() => {
                      setModeState((prev) => {
                        const newState = { ...prev };
                        newState.private = !newState.private;
                        return { ...newState };
                      });
                    }}
                  />
                </View>
                <Text style={styles.sectionContent}>
                  Visible to your connects and members of the said community.
                </Text>
              </View>
              <View style={{ marginHorizontal: 8 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.sectionTitle}>Members only mode</Text>
                  <Switch
                    value={modeState.membersOnly}
                    onValueChange={() => {
                      setModeState((prev) => {
                        const newState = { ...prev };
                        newState.membersOnly = !newState.membersOnly;
                        return { ...newState };
                      });
                    }}
                  />
                </View>
                <Text style={styles.sectionContent}>
                  Visible to only the members of the said community.
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

function ProfileScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <SpaceSetting
        isModalVisible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      />
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.image}
          source={require("../assets/images/Avatar_1.png")}
        />
        <View style={{ flex: 1, marginHorizontal: 8 }}>
          <Text style={styles.name}>Sarah Johnson</Text>
          <Text style={styles.gender}>She / Her</Text>
          <Text style={styles.connections}>500+ Connections</Text>
        </View>
        <IconButton
          onPress={() => {
            navigation.navigate("ChangeProfile");
          }}
          icon={
            <Ionicons name="pencil-outline" size={24} color={Colors.Black} />
          }
        />
        <IconButton
          icon={
            <Ionicons name="ellipsis-vertical" size={24} color={Colors.Black} />
          }
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Headline</Text>
        <Text style={styles.sectionContent}>
          UX Designer | Crafting Intuitive Experiences for Seamless User
          Journeys | Bridging Design and Functionality for Digital Excellence
          🎨💻
        </Text>
      </View>
      <View
        style={[
          styles.sectionContainer,
          { flexDirection: "row", alignItems: "center" },
        ]}
      >
        <Ionicons
          name="location-outline"
          size={16}
          color={"rgba(0, 0, 0, 0.7)"}
        />
        <Text>Mumbai, India</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Work as</Text>
        <Text style={styles.sectionContent}>Product Designer</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionContent}>
          Passionate and results-driven Strategic Marketing Professional with a
          keen eye for brand development and a penchant for blending creativity.
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Space Joined</Text>
        <FlatList
          contentContainerStyle={{ gap: 8 }}
          scrollEnabled={false}
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={() => (
            <SpaceItem
              onSettingPress={() => {
                setIsModalVisible(true);
              }}
            />
          )}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Post</Text>
        <FlatList
          contentContainerStyle={{ gap: 8 }}
          scrollEnabled={false}
          data={dummyData}
          keyExtractor={(item) => item.id}
          renderItem={() => <Post style={{ marginHorizontal: 0 }} />}
        />
      </View>
    </ScrollView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    letterSpacing: 0.03,
    color: Colors.Black,
  },
  gender: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 21,
    letterSpacing: 0.03,
    color: Colors.Black,
  },
  locations: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 21,
    letterSpacing: 0.03,
    color: "rgba(0, 0, 0, 0.7)",
  },
  sectionContainer: {
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "roboto-regular",
    letterSpacing: 0.03,
    lineHeight: 30,
    color: Colors.Black,
  },
  sectionContent: {
    fontSize: 14,
    fontFamily: "roboto-regular",
    letterSpacing: 0.03,
    lineHeight: 21,
    color: "rgba(0, 0, 0, 0.75)",
  },
});
