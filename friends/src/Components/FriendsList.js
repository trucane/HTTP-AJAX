import React from 'react';
import Friend from './Friend';
import Form from './Form'





const FriendsList = (props) =>{
    return(
        <>
            {props.friends.map( friend =>(
                <Friend key={friend.id} friend={friend} />
            ))}
            <Form addItem={props.addFriend}/>
        </>
    )
}

export default FriendsList;