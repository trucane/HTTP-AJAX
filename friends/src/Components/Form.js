import React from 'react';





export default class Form extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            friend:{

                name:'',
                age:'',
                email:''
            }
        }
    }

    changeHandler = (ev) =>{
        ev.persist();
    let value = ev.target.value;
    if (ev.target.name === 'age') {
      value = parseInt(value);
    }

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [ev.target.name]: value
      }
    }));
    }

    handleSubmit = (e) =>{

         e.preventDefault();
         
        this.props.addFriend(this.state.friend);
        this.setState({
            friend:{

                name:'',
                age:'',
                email:''
            }
        })
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-container">
                    <label> Name:</label>
                    <input  
                        type="text" 
                        name="name"
                        onChange={this.changeHandler}  
                        placeholder="enter name"
                        value={this.state.friend.name} />
                </div>
    
                <div className="form-container">
                    <label> Age:</label>
                    <input  type="number" name="age"  placeholder="enter age"
                    onChange={this.changeHandler}  
                    value={this.state.friend.age} />
                </div>
    
                <div className="form-container">
                    <label> Email:</label>
                    <input  type="email" name="email"  placeholder="enter email"
                    onChange={this.changeHandler}  
                    value={this.state.friend.email} />
                </div>
                <button>Add Friends</button>
            </form>
        )
    }


}