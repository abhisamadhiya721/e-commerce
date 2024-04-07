import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import Stripe from 'stripe'
import bodyParser from 'body-parser'

dotenv.config({
    path:".env"
})

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);




const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Hello World")
})


app.post("/pay",async(req,res)=>{
    console.log(req.body.token);
    await stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "inr"
    })
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on Port ${process.env.PORT}`);
})