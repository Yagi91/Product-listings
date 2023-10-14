import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

//ProductCard component should contain a name, an image, amount  and currency.

export default function ProductCard({ name, image, amount, currency }) {
  return (
    <TouchableOpacity style={styles.productCard}>
      <Image style={styles.productCardImage} source={{ uri: image }} />
      <Text style={styles.productCardText}>{name}</Text>
      <Text style={styles.productCardText}>
        {currency} {amount}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: "#171717",
    padding: 5,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "45%",
  },
  productCardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  productCardText: {
    color: "white",
    fontSize: 16,
    padding: 5,
    marginTop: 5,
    borderTopColor: "#393939",
    borderTopWidth: 1,
  },
});
