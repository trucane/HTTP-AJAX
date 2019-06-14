import React from 'react';
import {Link} from 'react-router-dom';




const FriendContainer = (props) =>{
    return (
        <div className="friend-container">

            <div>
                <button onClick={(e) => props.deleteFriend(e, props.friend.id)} >x</button>
            </div>

            <Link to={`/friends/${props.friend.id}`}> <div>{props.friend.name}</div> </Link>
            <div>{props.friend.age}</div>
            <div>{props.friend.email}</div>
        </div>
    )
}


export default FriendContainer;