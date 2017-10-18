var path = require('path')
var mongoose = require('mongoose')
var updates = require('../index')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mongoose-update-manager', {
  useMongoClient: true
})
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))

updates(path.join(__dirname, 'updates'))
