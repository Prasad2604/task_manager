const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')

const getAllTasks = async (req,res)=>{
    // res.send('all items from the file')
    try {
        const task = await Task.find({})
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const createTask = async (req,res)=>{
    // res.send('create task')
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getTask = async (req,res) =>{
    // res.send('get single task')

    

    try {
        const { id: taskID } = req.params 
        console.log(taskID)
        const task = await Task.findOne({_id:taskID})

        if(!task){
            return res.status(404).json({msg:`No task with task id : ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }

    // res.json({id:req.params.id})
}

// const updateTask = (req,res)=>{
//     res.send('Update a particular task')
// }

const deleteTask = async (req,res)=>{
    // res.send('Delete a particular task')

    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        // res.status(200).json({task})
        res.status(200).send()
    } catch (error) {
        res.status(500).send({msg:error})
        
    }

}


const updateTask = async (req,res)=>{
    // res.send('Update a particular task')
    try {
        const {id:taskID} = req.params
    const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{
        new:true,runValidators:true,
    })
    if(!task){
        res.status(404).json({msg:`No task with task id :- ${taskID}`})
    }
    res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}