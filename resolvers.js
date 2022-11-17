import { books } from './data.js'
import { user, createPost } from './externalGraph.js'

const resolvers = {
  Query: {
    books: () => books,
    user: (_, { userId }) => user(userId),
    userFavBook(_, { userId }) {
      const randomIdNumber = Math.floor(Math.random() * 7) + 1;
      const book = books.find(book => book.id = randomIdNumber)
      const selectedUser = user(userId)
      return {
        user: selectedUser,
        book
      }
    }
  },
  Mutation: {
    createPost: (_, { newPost }) => createPost(newPost)
  }

};

export default resolvers