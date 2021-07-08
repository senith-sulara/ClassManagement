const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userAPI = require("./src/api/Registration.api");
const olSubjectRoute = require('./src/controllers/olSubject.controller')
const alSubjectRoute = require('./src/controllers/alSubject.controller')



dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 8090;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false
},(error) =>{
    if(error){
        console.log('DataBase ERROR: ',error.message);
    }
});


mongoose.connection.once('open', () => {
    console.log('Database Synced');
});


app.use('/user', userAPI());
app.use('/olSub', olSubjectRoute);
app.use('/alSub', alSubjectRoute);
 
app.listen(PORT, () =>{
    console.log(`Server is up and running on PORT ${PORT}`);
});