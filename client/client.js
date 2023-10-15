import { ApolloClient, InMemoryCache } from "@apollo/client";
/* 
When working with expo desktop with backend running locally
CONST URI = "http://localhost:4000/
Configure accordingly when USB debugging
*/
const URI = 'http://192.168.184.38:4000'

const client = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache(),
})

export default client
