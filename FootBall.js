import React, { useState } from 'react'
import AddFootBallForm from './AddFootBallForm.js'

export default function FootBall(props){
    const { title, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="football">
            { !editToggle ?
            <>
                <h1>Title: { title }</h1> 
                <p>Type: { type }</p>
                <button
                        onClick={() => props.deleteFootBall(_id)}>
                        Delete
                        </button>
                        <button
                        className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                        </button>
                    </>
                    :
                    <>
                        <AddFootBallForm 
                        title={title}
                        type={type}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editFootBall}
                        />
                        <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                        </button>
                    </>
            }
        </div>
    )
}