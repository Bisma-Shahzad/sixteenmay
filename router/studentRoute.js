const express = require("express")

const route = express.Router()

route.get("/", (req, res) => {
    res.send("Get All Student Data")
})

route.get("/", (req, res) => {
    res.send("Get Single Student Data")
})

route.put("/", (req, res) => {
    res.send("Edit Student Data")
})

route.post("/", (req, res) => {
    res.send("Post single Student Data")
})

route.delete("/", (req, res) => {
    res.send("Delete Student ")
})

module.exports = route;