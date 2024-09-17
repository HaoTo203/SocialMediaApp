import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/styles";

function InputBox({ leftIcon$, placeHolder, label, inputOptions }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {leftIcon$}
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          {...inputOptions}
        />
      </View>
    </View>
  );
}

export default InputBox;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: Colors.Black,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontFamily: "roboto-medium",
    color: Colors.Black,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 8,
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    color: Colors.Black,
    opacity: 0.8,
    fontSize: 16,
    fontFamily: "roboto-regular",
  },
});
