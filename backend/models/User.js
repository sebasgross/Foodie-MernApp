const mongoose = require('mongoose')
const Schema = mongoose.Schema
let passportLocalMongoose = require('passport-local-mongoose')

let userSchema = new Schema({
  username: String,
  email: String,
  chef:{
    type: Boolean,
    default: false
  },
  products:[{
    type: Schema.Types.ObjectId,
    ref: "Product"
  }],
  address: String,
  coordinates:[Number],
  profilePic:{
    type: String,
    default: "http://res.cloudinary.com/dpt8pbi8n/image/upload/v1550853621/user.png"
  }
}, { timestamps: true })

userSchema.plugin(passportLocalMongoose, { usernameField: "email" })

module.exports = mongoose.model('User', userSchema)