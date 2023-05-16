// console.log("hehehehehhe")

// const fs = require("fs");

// fs.readdir("./", (err, dir) => {
//     console.log(dir)
// })

// fs.readFile("./ab.txt", "utf-8", (err, file) => {
//     console.log(file)
// })

// fs.writeFile("./ab.txt", "Bisma Shahzad", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("Write done")
//     }
// })

// fs.appendFile('./ab.txt', "Ali", (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("file append done")
//     }
// })

// let a = [
//     {
//         id: 1,
//         course: 'abc',
//     },
//     {
//         id: 2,
//         course: 'def',
//     },
//     {
//         id: 3,
//         course: 'xyz',
//     },
// ]


// const http = require('http')

// const server = http.createServer((req, res) => {
//     console.log("server is listening on the port 5000")
//     console.log("request URL", req.url)
//     if (req.url == "/cources") {

// res.write(JSON.stringify(a))
// console.log(a)

// if (req.method == "GET") {
//     res.write(JSON.stringify(a))
// }
//         res.end();
//     }
// })

// server.listen(5000)

const express = require("express")
require("dotenv").config()
const cors = require('cors')
const mongoose = require("mongoose")

const courceRoute = require("./router/courceRoute");
const studentRoute = require("./router/studentRoute");
const teacherRoute = require("./router/teacherRouter");

const app = express();
app.use(express.json());
app.use(cors())
              
app.use("/api/cources", courceRoute)

mongoose.connect(process.env.MONGO_URI).then((res) => {
    app.listen(process.env.PORT, () => {
        console.log("Database connected successfully and server is listenining on this port 5000")
    })
}).catch((err) => console.log(err))

//app.listen(5000, () => {
//     console.log("server is running")
// })