# Product-Listings
React native application which displays 500 products from a graphql endpoint
## Client
- The client application is based on **Expo React native**, and all necessary dependencies are installed using the command `npm install`
- Start the client application using `npm start` or `expo start`
- You can then use any emulator or use live USB debugging to test the application live on a physical device (android)
## Server
- Install all necessary dependencies for the server using `npm install`
- The server serves 500 product listings with pseudo random values. The sqlite database can be seeded with new data using the `npx prisma db seed`
- Run the graphql server with `npm start`. This server start on http://localhost:4000 but can edited in code a different port.
- To ensure that all connection go through when using USB debugging make sure to enable port forwarding on your desktop browser.
- You can also interact with the apollo grahql sandbox by visiting http://localhost:4000
