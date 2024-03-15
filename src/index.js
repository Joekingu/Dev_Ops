const express = require("express")

const app = express(); 
const port = 3000 ; 

app.get('/', (req , res) => {
    res.send('<h2>Test Number 10</h2>')
})

app.listen(port , () => {
    console.log (`j'écoute sur le port ${port}`)
})

