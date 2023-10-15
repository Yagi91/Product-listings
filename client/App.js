import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
  gql,
} from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import SearchBar from "./components/searchBar";
import client from "./client";
import ProductListings from "./components/ProductListings";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Header />
        <SearchBar />
        <ProductListings/>
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
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
