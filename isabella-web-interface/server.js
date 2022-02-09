const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(function(req, res, next){
    if (req.body.batteryLevel) {
        res.partials.batteryLevel = req.body.batteryLevel
        delete req.body
        next()
    }
})
app.post('/data', (req, res) => {
    const {batteryLevel} = req.body
})

app.listen(3001, console.info('server is listening'))