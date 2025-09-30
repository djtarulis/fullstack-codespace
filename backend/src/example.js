import { initDatabase } from './db/init.js'

import { Post } from './db/models/post.js'

await initDatabase()

const post = new Post({
  title: 'Hello Again Mongoose!',
  author: 'Huseyin Ergin',
  contents: 'This test post is stored in a MongoDB database using Mongoose.',
  tags: ['mongoose', 'mongodb'],
})

await post.save()

const posts = await Post.find()
console.log(posts)
