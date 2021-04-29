import express from "express";
import Cors from "cors";
import mongoose from "mongoose";
import dbCards from "./dbCards.js";
import card from "./dbCards.js";


//app config
const app = express();
const port = process.env.PORT || 8001;  
const connection_url = 'mongodb+srv://admin:2ipC8amm9cJSrn5i@cluster0.jefcy.mongodb.net/tinderdb?retryWrites=true&w=majority'

//middlewares
app.use(express.json());
app.use(Cors());
// db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API endpoints
app.get('/', (req, res) => res.status(200).send("Hello Super Clever Programmer!!!"));
app.post('/tinder/card', (req, res) => {
    const dbCards = req.body;

    card.create(dbCards, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/card', (req, res) => {

    card.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));