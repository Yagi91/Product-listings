import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import SearchBar from "./components/searchBar";
import ProductListings from "./components/ProductListings";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      imageUrl: "https://picsum.photos/151",
      amount: 10.99,
      currency: "USD",
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: "https://via.placeholder.com/150",
      amount: 20.99,
      currency: "USD",
    },
    {
      id: 3,
      name: "Product 3",
      imageUrl: "https://via.placeholder.com/150",
      amount: 30.99,
      currency: "USD",
    },
    {
      id: 4,
      name: "Product 4",
      imageUrl: "https://via.placeholder.com/150",
      amount: 40.99,
      currency: "USD",
    },
    {
      id: 5,
      name: "Product 5",
      imageUrl: "https://via.placeholder.com/150",
      amount: 50.99,
      currency: "USD",
    },
    {
      id: 6,
      name: "Product 6",
      imageUrl: "https://via.placeholder.com/150",
      amount: 60.99,
      currency: "USD",
    },
    {
      id: 7,
      name: "Product 7",
      imageUrl: "https://via.placeholder.com/150",
      amount: 70.99,
      currency: "USD",
    },
    {
      id: 8,
      name: "Product 8",
      imageUrl: "https://via.placeholder.com/150",
      amount: 80.99,
      currency: "USD",
    },
    {
      id: 9,
      name: "Product 9",
      imageUrl: "https://via.placeholder.com/150",
      amount: 90.99,
      currency: "USD",
    },
    {
      id: 10,
      name: "Product 10",
      imageUrl: "https://via.placeholder.com/150",
      amount: 100.99,
      currency: "USD",
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <ProductListings products={products} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
