
const mongoose = require('mongoose')






// const encodedUsername = encodeURIComponent('prasad');
// const encodedPassword = encodeURIComponent('Prasad0409');
// const connectionString = `mongodb://${encodedUsername}:${encodedPassword}@ac-dmpagmr-shard-00-01.jv0pmhy.mongodb.net:27017,ac-dmpagmr-shard-00-00.jv0pmhy.mongodb.net:27017,ac-dmpagmr-shard-00-02.jv0pmhy.mongodb.net:27017/Task?authSource=admin&replicaSet=atlas-12nm5c-shard-0&retryWrites=true&w=majority&ssl=true`;


const connectDB = (url)=>{
   return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}



module.exports = connectDB
