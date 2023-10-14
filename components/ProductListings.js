import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ProductCard from "./ProductCard";

export default function ProductListings({ products }) {
  return (
    <View style={styles.productListings}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            image={item.imageUrl}
            amount={item.amount}
            currency={item.currency}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productListings: {
    flex: 1,
    padding: 10,
    flexWrap: "wrap",
  },
});
