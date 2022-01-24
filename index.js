const express = require('express')
const app = express()

app.use((req, res) => {
    res.send("Estou Bem!")    
})

app.listen(3000, () => {
    console.log('Backend executando...')
})

