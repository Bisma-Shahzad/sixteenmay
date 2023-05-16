const mongoose = require('mongoose')

// here we made todo schema
// here we define entities etc and only these entities will be used nad also we define types for every entities and only
// that type will be used
const TodoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    }
})

// here inside bracket 'todo' is name of node which we give in firebase and it convert it into plural

const TodoModel = mongoose.model('todo', TodoSchema)

module.exports = TodoModel