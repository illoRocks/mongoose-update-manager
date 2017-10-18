var User = require('../user-model')

new User({
  username: 'myname',
  password: 'mypassword'
}).save(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Post has been updated')
  }
})
