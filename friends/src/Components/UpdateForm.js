import React from 'react';



export default class UpdateForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            person:{
                name:'',
                age:'',
                email:''
            }
        }
    }


    handleChange = (e) =>{
        e.persist()
        let value = e.target.value
        this.setState(prevState =>({
            person:{
                ...prevState.person,
                [e.target.name]:value
            }
        }))
    }

    updatePerson = (e) =>{

        e.preventDefault();

        this.props.updateFriend(this.props.item.id, this.state.person)
    }

    render(){
        return(
            <form onSubmit={this.updatePerson}>
                <input 
                    name="name"
                    onChange={this.handleChange}
                    placeholder="name"
                    type="text"
                    value={this.state.person.name}
                  />

                <input 
                    name="age"
                    onChange={this.handleChange}
                    placeholder="age"
                    type="number"
                    value={this.state.person.age}
                  />

                <input 
                    name="email"
                    onChange={this.handleChange}
                    placeholder="email"
                    type="text"
                    value={this.state.person.email}
                  />

                  <button> update </button>
            </form>
        )
    }
}