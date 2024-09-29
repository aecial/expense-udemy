import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function AllExpenses() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>All Expenses Page Romr</Text>
    </View>
  );
}
export default AllExpenses;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.neutral,
  },
  text: {
    color: "black",
  },
});
