import express from 'express';
import dotenv  from 'dotenv'


//dotenv config
dotenv.config();
const app = express();

// In the dev environment
// the server listens on 4000 instead of 5001
const port = process.env.PORT || 5001

app.get('/', async (req,res) => {
    res.send("howdy")

})

const start = async () => {
    app.listen(port , ()=>{
        console.log(`Server is listening on port ${port} ...`)
        console.log("howdy")

    })

}

start();
