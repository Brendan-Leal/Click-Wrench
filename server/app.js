require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()

const authRouter = require('./src/routes/auth')

app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
