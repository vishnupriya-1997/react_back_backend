/*const mongoose=requit('mongoose')
const taskSchema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true,
        },
        description:{
            type:String,

        },
        statuss:{
            type:String,
            default:"pending"
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Users'//user.js la module.exports=mongoose.model('===Users===',userSchema) so ref la users podu irukom because relationship connected
        }

    }
)
module.exports=mongoose.model('Task',taskSchema)
*/
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
