# mongoose-update-manager


## Installation

```sh
$ npm install mongoose-update-manager
```

## Usage

```js
// index.js
var path = require('path')
var mongoose = require('mongoose')
var updates = require('mongoose-update-manager')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mongoose-update-manager', {
  useMongoClient: true
})

updates(path.join(__dirname, 'updates'))
```

create a new file: `updates/example-0.0.1.js`

```js
// example-0.0.1.js
var User = require('../user-model')

new User({
  username: 'myname',
  password: 'mypassword'
}).save()
```
`example-0.0.1.js` execude only one time.
a new update could have the name `example-0.0.2.js` or `other-example-0.0.1.js`



[https://github.com/illoRocks/mongoose-update-manager](https://github.com/illoRocks/mongoose-update-manager)