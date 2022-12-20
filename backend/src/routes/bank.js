const router = require('express').Router();
const Details = require("../models/user")
const History = require('../models/tranHistory')
const cors = require("cors");
//const bodyParser = require('body-parser')

// Your routing code goes here

router.get('/', async (req, res) => {
    try {
        let details = await Details.find().sort({ _id: -1 })
        res.json(details)
    } catch (e) {
        res.sendStatus(404).json({message:e.message})
    }
})   
router.post('/users', async (req, res) => {
    try {
        let details = await Details.create({
            name: req.body.name,
            email: req.body.email,
            account: req.body.account,
            balance: req.body.balance
        })
        res.json(details)
    } catch (e) {
        res.sendStatus(404).json({message:e.message})
    }
})

router.put('/transfers', async (req, res) => {
    try {
        let { sender, receiver, amount } = req.body;
        amount = parseFloat(amount)
        console.log(sender,receiver,amount);
        let send_ac = await Details.find({ account: sender })
        let receive_ac = await Details.find({ account: receiver })

        
        if(send_ac[0].account == receive_ac[0].account){
            return res.json({message:"transaction to same account is not possible"})
        }
        
        let num1 = parseFloat(send_ac[0].balance)
        let num2 = parseFloat(receive_ac[0].balance)
       
        if(send_ac.length==0 || receive_ac.length == 0) return res.json({message:"user not found"})
        if (amount > 0 && num1-amount >= 0) {
            num1 = num1 - amount
            num2 = num2 + amount

            let x = await Details.updateOne({ account: sender }, { $set: { balance: num1 } })
            let y = await Details.updateOne({ account: receiver }, { $set: { balance: num2 } })
            const date=new Date().toLocaleDateString()
            const hist=await History.create({
                statement: `${date}: A/C: ${receiver} is credited with Rs.${amount} by debit from A/C: ${sender}`
            })
            return res.json({
                message:"transaction successful",
                hist
            })
        }
        else return res.json({message:"transaction failed"})

    } catch (e) {
        res.sendStatus(404).json({message:e.message})
    }
})
router.get("/tranhistory", async (req,res)=>{
    try {
        const hist=await History.find()
        res.json(hist)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})

module.exports = router;
