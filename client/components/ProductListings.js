import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query Products {
    products {
      title
      id
      amount
      currency
      imageUrl
    }
  }
`;

export default function ProductListings() {
  const {data, loading, error} = useQuery(GET_PRODUCTS)
  if(loading){
    return <View><Text>Loading products....</Text></View>
  }
  if(error){
    return <View><Text>Could'nt load products, please configure the right URI in client.js especially if USB debugging</Text></View>
  }
  return (
    <View style={styles.productListings}>
      <FlatList
        data={data.products}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
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
