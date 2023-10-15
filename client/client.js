import { ApolloClient, InMemoryCache } from "@apollo/client";
/* 
When working with expo desktop with backend running locally
const URI = "http://localhost:4000/
Configure accordingly when USB debugging, use port forwarding on chrome to enable access to localhost on mobile device
*/
const URI = 'http://localhost:4000'

const client = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache(),
})

export default client
