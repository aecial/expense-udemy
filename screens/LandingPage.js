import { View, Text, StyleSheet, ScrollView } from "react-native";
import Colors from "../constants/colors";
import ExpenseItem from "../components/ExpenseItem";

function LandingPage() {
  // const expenseItems = Array(50).fill(null);
  return (
    <View style={styles.screen}>
      <View style={styles.box}>
        <Text style={styles.text}>Last 7 days</Text>
        <Text style={[styles.text, styles.highlightText]}>$10.16</Text>
      </View>
      <ScrollView>
        {/* {expenseItems.map((_, index) => (
          <ExpenseItem key={index} />
        ))} */}
        <ExpenseItem />
      </ScrollView>
    </View>
  );
}
export default LandingPage;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.neutral,
    padding: 8,
  },
  text: {
    color: Colors.neutral,
    fontSize: 18,
  },
  highlightText: {
    color: Colors.primary,
    backgroundColor: Colors.neutral,
    padding: 2,
  },
  box: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: Colors.primary,
  },
});
