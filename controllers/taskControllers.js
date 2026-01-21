//task.ja kku inga function create pantrom
   const Task = require('../models/task')


exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status || "pending",
      user: req.body.id
    })

    res.status(201).json({
      msg: "Task created successfully",
      task
    })
  } catch (err) {
    res.status(500).send(err.message)
  }
}
