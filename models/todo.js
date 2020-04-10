const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var todoSchema = new Schema({
    item: {type: String, required: true},
    price: {type: Number},
    purchased: {type: Boolean, default: false}
  },{
    timestamps: true
  });

module.exports = mongoose.model('Todo', todoSchema);