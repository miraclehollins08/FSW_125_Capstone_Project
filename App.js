import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FootBall from './components/FootBall.js'
import AddFootBallForm from './components/AddFootBallForm.js'


export default function App(){
    const [football, setFootBall] = useState([])

    function getfootball(){
        axios.get("/football")
        .then(res => setFootBall(res.data))
        .catch(err => console.log(err))
    }

    function addFootBall(newFootBall){
        axios.post("/football", newFootBall)
        .then(res => {
            setFootBall(preFootBall => [...preFootBall, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteFootBall(FootBallId){
        axios.delete(`/football/${FootBallId}`)
        .then(res => {
            setFootBall(preFootBall => preFootBall.filter(FootBall => FootBall._id !== FootBallId))
        })
        .catch(err => console.log(err))
    }

    function editFootBall(updates, FootBallId){
        axios.put(`/football/${FootBallId}`, updates)
        .then(res => {
            setFootBall(preFootBall => preFootBall.map(FootBall => FootBall._id !== FootBallId ? FootBall : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getfootball()
    }, [])

    return (
        <div>
            <div className="football-container">
                <AddFootBallForm 
                submit={addFootBall}
                btnText="Add FootBall"
                />
            { 
            football.map(football => 
                <FootBall 
                    {...football} 
                    key={football.title}
                    deleteFootBall={deleteFootBall}
                    editFootBall={editFootBall}/>)
            }
        </div>
        </div>
    )
}