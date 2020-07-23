const express = require("express")
const app = express()
const uuid = require("uuid/v4")


// middleware (for every request) //

app.use(express.json())

// fake data //

const FootBall = [
    { title:"Drew Brees", Type: "quater back", net_worth:"$5M", Number:"9", _id: uuid() },
    { title:"Patrick Mahomes", Type: "quater back", net_woth:"$15M", Number:"15", _id: uuid()},
    { title:"Aaron Rogers", Type: "quater back", new_worth:"$9M", Number:"7", _id: uuid() }
]

// Routes //

app.use("football", require("./routes/NFLRouter.js"))

app.get("/football", (req, res)=> {
    res.send(FootBall)
})

app.post("/football", (req,res) => {
    const newFootball = req.body
    newFootball._id = uuid()
    football.push(newFootball)
    res.send("Succesccfully added ${newFootball.title} to the database!")
})

// Error handler

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server Listen //
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})