import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

//ProductCard component should contain a title, an image, amount and currency.

export default function ProductCard({ title, imageUrl, amount, currency }) {
  return (
    <TouchableOpacity style={styles.productCard}>
      <Image style={styles.productCardImage} source={{ uri: imageUrl }} />
      <Text style={styles.productCardText}>{title}</Text>
      <Text style={styles.productCardText}>
        {currency} {amount}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: "#171717",
    padding: 1,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "45%",
  },
  productCardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
