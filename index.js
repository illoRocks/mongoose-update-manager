var updates = require('./models/updates')
var fs = require('fs')

module.exports = function (path) {
  fs.readdirSync(path).forEach(filename => {

    var isDir = fs.lstatSync(path + '/' + filename).isDirectory()
    if (isDir) {
      return
    }

    var query = {
      key: filename
    }
    var update = {
      expire: new Date()
    }
    var options = {
      upsert: true,
      setDefaultsOnInsert: true
    }

    updates.findOneAndUpdate(query, update, options, function (error, result) {
      if (error) {
        console.error(error)
      }

      if (!result) {
        require(path + '/' + filename)
      }
    })
  })
}
