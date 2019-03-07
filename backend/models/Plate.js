const mongoose = require('mongoose')
const Schema = mongoose.Schema



const plateSchema = new Schema({
  buyer: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  product:{
    type: Schema.Types.ObjectId,
    ref:"Product"
  },
  quantity: Number,
  price: Number,

},{ timestamps: true });

module.exports = mongoose.model('Plate', plateSchema)