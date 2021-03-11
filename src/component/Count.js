import React from 'react'


const Count = ({plus,mines}) => {
    return (
        <div>
            <h1>helllo from the count</h1>
            <button onClick={plus}>click to ++</button>
         <button  onClick={mines}>click to --</button>

        </div>
    )
}

export default Count
