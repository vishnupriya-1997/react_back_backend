const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    default: "pending"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'   // MUST match User model name
  }
})

//module.exports = mongoose.model('Task', taskSchema)
module.exports = mongoose.model('Task', taskSchema)
