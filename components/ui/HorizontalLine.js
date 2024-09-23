import { StyleSheet, View } from "react-native";

function HorizontalLine({ style }) {
  return <View style={[styles.container, style]} />;
}

export default HorizontalLine;

const styles = StyleSheet.create({
  container: {
    height: 2,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    marginVertical: 16,
    marginHorizontal: 16,
  },
});
