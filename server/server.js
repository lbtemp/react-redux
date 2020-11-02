const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 3000;
const public = path.join(__dirname, '..', 'public')

const app = express()

app.use(express.static(public))

app.get('*', (req, res) => {
    res.sendFile(path.join(public, 'index.html'))
})

app.listen(PORT, () => {
    console.log('RUNNING ON ', PORT)
})