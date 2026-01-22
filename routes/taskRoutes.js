const express = require('express')
const router = express.Router()

const { createTask ,getTask, getTaskById ,UpdateTask,UpdateTaskPatch ,deleteTask } = require('../controllers/taskControllers')
const {protect} =require('../middleware/authmiddleware')

router.post('/create',protect, createTask)
router.get('/gettask',protect,getTask)
router.get('/getTask/:id',protect,getTaskById)
router.put('/UpdateTask/:id',protect,UpdateTask )
router.patch('/UpdateTaskPatch/:id',protect,UpdateTaskPatch )
router.delete('/deleteTask/:id',protect,deleteTask )

module.exports = router
