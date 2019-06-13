import React from 'react';


const Friend = (props) =>{
    return(
        <div className="friend-container">

            <div><button onClick={(e) => props.deleteFriend(e, props.friend.id)} >x</button></div>
            <div>{props.friend.name}</div>
            <div>{props.friend.age}</div>
            <div>{props.friend.email}</div>
        </div>
    )
}


export default Friend