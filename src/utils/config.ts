import 'dotenv/config'

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

export default {
  MONGODB_URI,
  PORT
}