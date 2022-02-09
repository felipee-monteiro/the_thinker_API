"use strict"

var request = require("request-promise")
var {load} = require("cheerio")

function getData(body){
    var arr = []
    var $ = load(body)
    $(".frase").each(function(_, element){
        arr.push($(element).text())
    })
    return arr
}

exports.__getAuthorPhrases = async (req, res) => {
    let {author } = req.params
    author = author.replace(/ /g, "_")
    var body = await request("https://www.pensador.com/autor/" + author + "/")
    return res.json(getData(body))
}