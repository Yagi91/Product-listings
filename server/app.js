import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const typeDefs = `#graphql
    type Product{
        id: ID!
        title: String
        imageUrl: String
        amount: Int
        currency: String
    }
    type Query{
      "Returns a list of all products found in the database"
        products: [Product]
        "Reads a product with a specified id"
        product(id: ID!): Product
        
    }

    type AddProductResponse{
      success: Boolean,
      product: Product,
      message: String
    }
    type DeleteProductResponse{
      success: Boolean,
      product: Product,
      message: String
    }

    input AddProductInput{
      title: String!,
      imageUrl: String!,
      amount: Int!,
      currency: String!
    }

    type Mutation{
        "Adds a product to the database"
        addProduct(values: AddProductInput): AddProductResponse
        "Deletes a product and returns its object"
        deleteProduct(id:ID!): DeleteProductResponse
    }
   
`;

const resolvers = {
  Query: {
    products: async () => await prisma.product.findMany(),
    product: async (parent, args) =>
      await prisma.product.findUnique({ where: { id: args.id } }),
  },
  Mutation: {
    addProduct: async (parent, {values}) => {
      const product = await prisma.product.create({
        data: { ...values, amount: Number(values.amount) },
      });
      let message;
      let success;
      if (product) {
        message = "Successfully added a new product";
        success = true;
      }else{
        message = "Error adding a new product",
        success = false 
      }
      return {
        message,
        success,
        product,
      };
    },
    deleteProduct: async (parent, args) => {
      const product = await prisma.product.delete({ where: { id: args.id } });
      if(!product){
        return {
          message: "An error occured while deleting the product",
          success: false,
          product: null
        }
      }
      return {
        success: 200,
        product,
      };
    },
  },
};
export { typeDefs, resolvers };
