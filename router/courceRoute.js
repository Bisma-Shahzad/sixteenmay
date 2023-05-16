const express = require("express")

const route = express.Router();

let a = [
    {
        id: 1,
        course: 'abc',
    },
    {
        id: 2,
        course: 'def',
    },
    {
        id: 3,
        course: 'xyz',
    },
]


route.get('/', (req, res) => {
    res.send(JSON.stringify(a))
})

route.get('/:id', (req, res) => {
    let id = req.params.id;

    let i = a.findIndex((x) => x.id == id)

    if (i > -1) {
        res.send(a[i]).status(200)
    } else {
        res.send("No data found").status(404)
    }
})

route.post('/', (req, res) => {
    let { course } = req.body;
    let errArr = []

    if (!course || course == " ") {
        errArr.push("Required course name");
    }
    if (errArr.length > 0) {
        res.send(errArr).status(400)
        return
    } else {
        let obj = {
            course: course,
            id: a.length + 1
        }
        a.push(obj)
        res.send(obj).status(200)
    }
})

route.delete('/:id', (req, res) => {
    let id = req.params.id;

    let i = a.findIndex((x) => x.id == id)
    if (i > -1) {
        a.splice(i, 1)
        res.send({ message: "Data Deleted Successfully", data: a }).status(200)
    } else {
        res.send("No data found on that id").status(404)
    }
})

route.put('/:id', (req, res) => {
    let id = req.params.id;
    let { course } = req.body;

    let i = a.findIndex((x) => x.id == id)

    if (i > -1) {
        a[i].course = course;
        res.send(a[i]).status(200)
    } else {
        res.send("No Data Found").status(404)
    }
})

module.exports = route;