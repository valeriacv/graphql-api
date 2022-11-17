import { gql } from 'apollo-server'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  
  type User {
    id: String
    username: String
    email: String
  }

  type BookByUser {
    user: User
    book: Book
  }

  type Post {
    id: String
    title: String
    body: String
  }

  input CreatePostInput {
    title: String
    body: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    user(userId: Int): User
    userFavBook(userId: Int): BookByUser
  }

  type Mutation {
    createPost(newPost: CreatePostInput!): Post
  }
`;

export default typeDefs

