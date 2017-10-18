var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PostSchema = new Schema({
  key: {
    type: String,
    required: true
  },
  executedOn: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('updates', PostSchema)
