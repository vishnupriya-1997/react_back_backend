/*const express=require('express')
const router=express.Router()
const {createTask}=require('../controllers/taskControllers')//exports la multuple export use pantrathunala {register} athe modules.exports la irukarathu single expports so no {} brackets
//const {register}=require('../controllers/authControllers')
router.post('/newTask',createTask)
module.exports=router
const express = require('express')
const router = express.Router()
const { createTask } = require('../controllers/taskControllers')

router.post('/create', createTask)

module.exports = router
*/
const express = require('express')
const router = express.Router()

const { createTask } = require('../controllers/taskControllers')

router.post('/create', createTask)

module.exports = router
