const express = require('express')
const app = express()
const PORT = 8001
app.get('/', (req, res) => {
    res.send('BACKEND SERVER STARTED SUCCESSFULLY!!')
})
app.get('/api', (req, res) => {
    res.json({ ["name"]:"Radha",["age"]:18,["college"]: "sece" }) 
})
app.get('/json',(req,res)=>{
    res.json({
        "college":"sece","dept":"cys"
    })
})

app.get('static',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

