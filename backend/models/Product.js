const mongoose = require('mongoose')
const Schema = mongoose.Schema



const productSchema = new Schema({
  name: String,
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  buyer:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  track:{
    type: Boolean,
    default: false,
  },
  delivered:{
    type: Boolean,
    default: false,
  },
  bought:{
    type: Boolean,
    default: false,
  },
  type: [{
    type: String,
    enum:["Appetizers","Breakfast","Dessert","Full Meal","Healthy/Diet","Munchies","Vegan"],
  }],
  cuisine:[{
    type: String,
    enum:["American", "Argentinian","Burgers","Chinese","Cuban","Italian","Mediterranean","Mexican","Pizza","Sushi","Venezuelan"]
  }],
  ingredients: String,
  posted: Date,
  price: Number,
  quantity:Number,
  active:{
    type: Boolean,
    default: false
  },
  coordinatesTo:[Number],
  addressTo: String,
  coordinatesFrom:[Number],
  addressFrom: String,
  picture:{
    type: String,
    default: "http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552158678/kisspng-kitchen-utensil-computer-icons-plate-fork-clip-art-food-icon-5ac4b8e51272c9.1142590615228418290756.jpg"
  }
},{ timestamps: true })

module.exports = mongoose.model('Product',productSchema)