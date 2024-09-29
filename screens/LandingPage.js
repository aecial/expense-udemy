import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function LandingPage() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Landing Page Romr</Text>
      <Text style={styles.text}>Landing Page Romr</Text>
      <Text style={styles.text}>Landing Page Romr</Text>
    </View>
  );
}
export default LandingPage;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.neutral,
  },
  text: {
    color: "black",
  },
});
