const express = require('express');
const cors = require('cors');
require('dotenv').config()
const Transaction = require('./models/Transaction')
const mongoose = require('mongoose')
const app = express()


app.use(cors());
app.use(express.json())
app.get('/api/test', (req, res) => {
    res.json({ message: 'test ok' });
});

app.post('/api/transaction', async(req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const{name,description,date,price} = req.body;
    const transaction = await Transaction.create({name, description, date, price});
    res.json(transaction);
})

app.get('/api/transactions', async(req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);


});

const PORT = 4040; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






