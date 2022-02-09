"use strict"

var express = require("express")
var app = express()
var handlers = require("./getData")

app.use(express.json())

app.get("/author/:author", handlers.__getAuthorPhrases)

app.listen(process.env.PORT || 5000)
