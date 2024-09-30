import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const ExpenseItem = () => {
  return (
    <View style={styles.box}>
      <View>
        <Text style={styles.text}>Expense Item</Text>
        <Text style={styles.text}>9-30-2024</Text>
      </View>
      <Text style={[styles.text, styles.highlightText]}>$50.25</Text>
    </View>
  );
};

export default ExpenseItem;
const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.primary,
    marginTop: 8,
    padding: 8,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
  },
  text: {
    color: Colors.neutral,
    fontSize: 16,
  },
  highlightText: {
    color: Colors.primary,
    backgroundColor: Colors.neutral,
    padding: 4,
  },
});
