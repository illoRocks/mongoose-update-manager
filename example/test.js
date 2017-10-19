var path = require('path')
var mongoose = require('mongoose')
var updates = require('../index')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mongoose-update-manager', {
  useMongoClient: true
})

updates(path.join(__dirname, 'updates'))

console.log('finish');
