import React from 'react';
// import FriendContainer from './FriendContainer';
import UpdateForm from './FriendsList'


export default class Friend extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            friend:[]
        }
    }
    render(){

       // const id = this.props.match.params.id;
       // console.log(id)
        //const friend = this.props.friends.find( res => res.id === id)
        return(
            <>
                 {/* <div>{friend.name}</div>
            <div>{friend.age}</div>
            <div>{friend.email}</div> */}
    
                <UpdateForm />
    
            </>
        )
    }
}
