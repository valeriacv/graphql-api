import fetch from "node-fetch";

const user = async (userId) => {
  const response = await fetch("https://graphqlzero.almansi.me/api", {
    "method": "POST",
    "headers": { "content-type": "application/json" },
    "body": JSON.stringify({
      query: `query ($id: ID!){
        user(id: $id) {
          id
          username
          email
        }
      }`,
      variables: {
        id: userId,
      },
    })
  })
  const result = await response.json()
  return result.data.user
}

const createPost = async (newPost) => {
  const response = await fetch("https://graphqlzero.almansi.me/api", {
    "method": "POST",
    "headers": { "content-type": "application/json" },
    "body": JSON.stringify({
      query: `mutation ($input: CreatePostInput!){
        createPost(input: $input) {
          id
          title
          body
        }
      }`,
      variables: {
        input: newPost,
      },
    })
  })
  const result = await response.json()
  return result.data.createPost
}

export {
  user,
  createPost
}