import React from 'react';
import UpdateForm from './UpdateForm';
import NavBar from './Navigation/NavBar';


export default class Friend extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            friend:[]
        }
    }
    
    render(){

    const id = this.props.match.params.id;
    const item = this.props.friends.find( 
        res => `${res.id}` === id);

        if(!item){
            return <h2>That Person doesnt exist ... </h2>
        }else{

            return(
                <>

<div className="friend-options-container">
                <div className="friend-options" >Edit</div>
                <div className="friend-options">Delete</div>
            </div>

            <hr/>

            <UpdateForm  item={item} updateFriend={this.props.updateFriend} />


           
    
                 
                     
    
                         <div>
                             <button onClick={(e) => this.props.deleteFriend(e, this.props.friend.id)} >x</button>
                             <button>edit</button>
                         </div>
                        
                         <div>{item.name}</div>
                         <div>{item.age}</div>
                         <div>{item.email}</div>
        
        
                 </>
            )
        }
        
    }
}
