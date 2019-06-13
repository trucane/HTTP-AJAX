import React from 'react';
import FriendContainer from './FriendContainer';

// import Form from './Form'





const FriendsList = (props) =>{

    console.log(props)

    return(
        <>
            {props.friends.map( friend =>(
                <FriendContainer
                    key={friend.id} 
                    friend={friend} 
                    deleteFriend={props.deleteFriend}
                    updateFriend={props.updateFriend}
                />
            ))}
            {/* <Form addFriend={props.addFriend}/> */}
        </>
    )
}

export default FriendsList;