const mongoose = require('mongoose')
const Schema = mongoose.Schema



const productSchema = new Schema({
  name: String,
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  type: [{
    type: String,
    enum:["Appetizers","Breakfast","Dessert","Full Meal","Healthy/Diet","Munchies","Vegan"],
  }],
  cuisine:[{
    type: String,
    enum:["American", "Argentinian","Burgers","Chinese","Cuban","Italian","Mediterranean","Mexican","Pizza","Sushi"]
  }],
  posted: Date,
  price: Number,
  quantity:Number,
  picture:{
    type: String,
    default: "http://res.cloudinary.com/dpt8pbi8n/image/upload/v1550853621/user.png"
  }
},{ timestamps: true })

module.exports = mongoose.model('Product',productSchema)