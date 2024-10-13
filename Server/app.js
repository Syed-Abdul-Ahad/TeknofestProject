const express = require('express')
const authRouter = require('./Routes/authRouter')
const competitionRoute = require('./Routes/competitionRoute')
const GlobalErrorHandler = require("./Controller/ErrorController")
const customError = require('./utils/customError')
const app = express()

app.use(express.json())


app.use("/api/v1/users",authRouter)
app.use('/api/v1/competitions',competitionRoute)

app.all('*',(req,res,next)=>{
    
    // error class approach
    const err = new customError(`can't find ${req.originalUrl} on the server`,404)
    next(err)
})


// Global error handler

app.use(GlobalErrorHandler)

module.exports = app;