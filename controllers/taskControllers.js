//task.ja kku inga function create pantrom
   const Task = require('../models/task')

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || "pending",
      user: req.user.id
    })

    res.status(201).json({
      msg: "Task created successfully",
      task
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
}
exports.getTask = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id })
    res.status(200).json(tasks)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getTaskById=async(req ,res)=>{
  try{
    const task=await Task.findOne({
      _id:req.params.id,
      user:req.user.id
    })
    res.json(task)
  }
  catch(err)
  {
    res.status(500).json({message:err.message})
  }
}

exports.UpdateTask=async(req ,res)=>{
  try{
    const task=await Task.findOneAndUpdate({
      _id:req.params.id,
      user:req.user.id
    },
    {
    title : req.body.title,
    description : req.body.description,
    status: req.body.status
    },{new:true})
  if(!task)
  {
   res.json({msg:"No task Existed"})
  }
  res.json(task);
  }
  catch(err)
  {
   res.status(500).json(error)
  }
}


exports.UpdateTaskPatch=async(req ,res)=>{
  try{
    const task=await Task.findOneAndUpdate({
      _id:req.params.id,
      user:req.user.id
    },
    req.body,
   {new:true})
  if(!task)
  {
   res.json({msg:"No task Existed"})
  }
  res.json(task);
  }
  catch(err)
  {
   res.status(500).json(error)
  }
}




exports.deleteTask=async(req ,res)=>{
  try{
    const task=await Task.findOneAndDelete({
      _id:req.params.id,
      user:req.user.id
    })
  if(!task)
  {
   res.json({msg:"No task Existed"})
  }
  res.json(task);
  }
  catch(err)
  {
   res.status(500).json(error)
  }
}

