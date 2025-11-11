import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'
import dotenv from 'dotenv'

dotenv.config()
await initDatabase()
const post = new Post({
  title: 'Hello from the outside!',
  author: '648a1f2b5f4c2c6d88f0e9b1', // Must be 24 char hex string
  contents: 'This post is stored in a MongoDB database using Mongoose.',
  tags: ['other'],
})

await post.save()
const posts = await Post.find()
console.log(posts)
