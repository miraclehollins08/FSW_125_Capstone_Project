const express = require('express')
const NFLRouter = express.Router()
const uuid = require("uuid/v4")

// middleware //
NFLRouter.use(express.json())

// fake database //
const football = [
    { title:"Drew Brees", Type: "quater back", net_worth:"$5M", Number:"9", _id: uuid() },
    { title:"Patrick Mahomes", Type: "quater back", net_woth:"$15M", Number:"15", _id: uuid()},
    { title:"Aaron Rogers", Type: "quater back", new_worth:"$9M", Number:"7", _id: uuid() }
]


// Get All 
NFLRouter.get("/", (req, res) => {
    res.status(200)
    res.send(FootBall)
})

// Get One
NFLRouter.get("/:FootBallId", (req, res) => {
    const FootBallId = req.params.FootBallId
    const foundFootBall = FootBall.find(football => football._id === FootBallId)
    if(!foundFootBall){
        const err = new Error(`The item with id ${FootBallId} was not found. `)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundFootBall)
})

// Get by Type
NFLRouter.get("/search/Type", (req, res) => {
    const Type = req.query.Type
    if(!Type){
        const error = new Error("You must provide a Type")
        res.status(500)
        return next(error)
    }
    const filteredFootBall = FootBall.filter(football => football.Type === Type)
    res.status(200).send(filteredFootBall)
})

// Post One 
NFLRouter.post("/", (req, res) => {
    const newFootBall = req.body
    newFootBall._id = uuid()
    FootBall.push(newFootBall)
    res.status(201).send(newFootBall)
})

// Delete
NFLRouter.delete("/:FootBallId", (req,res) => {
    const FootBallId = req.params.FootBallId
    const FootBallIndex = FootBall.findIndex(football => football._id === FootBallId)
    FootBall.splice(FootBallIndex, 1)
    res.send("Successfully delete football!")
})

// Update one
NFLRouter.put("/:FootBallId", (req, res) => {
const FootBallId = req.params.FootBallId
const FootBallIndex = FootBall.findIndex(football => football._id === FootBallId)
const updatedfootball = Object.assign(FootBall[FootBallIndex], req.body)
res.status(201).send(updatedfootball)
})

module.exports = NFLRouter