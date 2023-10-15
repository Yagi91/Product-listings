import { Text, View, StyleSheet } from "react-native";
import { FontAwesome5, Entypo } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <Entypo name="menu" size={24} color="white" />
      <Text style={styles.headerText}>Product Listings</Text>
      <FontAwesome5 name="shopping-bag" size={24} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#171717",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
