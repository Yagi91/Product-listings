import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function SearchBar({ search, setSearch }) {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchBarInput}
        placeholder="Search..."
        onChangeText={setSearch}
        value={search}
      />
      <TouchableOpacity style={styles.searchBarButton}>
        <Text style={styles.searchBarButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#171717",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  searchBarInput: {
    backgroundColor: "white",
    height: 40,
    width: "80%",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  searchBarButton: {
    backgroundColor: "white",
    padding: 9,
    margin: 5,
    borderRadius: 10,
  },
  searchBarButtonText: {
    color: "#171717",
    fontSize: 20,
    textAlign: "center",
  },
});
