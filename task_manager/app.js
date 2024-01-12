
const express = require('express')
// const path = require('path')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')


app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./public/index.html'))
// })

//middleware

app.use(express.json())


//routes

app.use('/api/v1/tasks',tasks)

app.use(notFound)

//app.get('/api/v1/tasks') ---->get all the tasks
//app.post('/api/v1/tasks') ---->create a new task
//app.get('api/v1/tasks/:id') --->get a particular task
//app.patch('api/v1/tasks/:id')--->update task
//app.delete('api/v1/tasks/:id')--->delete task

const port = process.env.PORT||3000


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start()
