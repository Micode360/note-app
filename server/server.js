const express = require('express');
const cors = require('cors');
const path = require('path')
const app = express();


app.use(express.json());
app.use(cors());
require('dotenv').config();

const mongoose = require('mongoose');
const connection = process.env.ATLAS;
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));



// app.use(express.static(path.join(__dirname, '../build')))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build'))
// })

app.get('/input', (req, res) => {
    const store =  {
            title: 'My app is life',
            date: new Date()
        }
    
    res.json(store)
    })

    app.get('/', (req, res)=>{
        res.send('hello');
    })

//process.env.PORT ||
const port = 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});