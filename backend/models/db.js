const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb+srv://root:root@todo-app.ixna93t.mongodb.net/todo-app?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify: false
}, err => {
    if (err) console.log(`Error in DB Connection ${err}`)
    console.log(`MongoDB Connection Suceeded...`)
})