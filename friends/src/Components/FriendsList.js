import React from 'react';
import FriendContainer from './FriendContainer';
import NavBar from './Navigation/NavBar';

 import Form from './Form'





const FriendsList = (props) =>{

    return(
        <>
        <NavBar />
            {props.friends.map( friend =>(
                <FriendContainer
                    key={friend.id} 
                    friend={friend} 
                    deleteFriend={props.deleteFriend}
                    updateFriend={props.updateFriend}
                />
            ))}
            <Form addFriend={props.addFriend}/>
        </>
    )
}

export default FriendsList;