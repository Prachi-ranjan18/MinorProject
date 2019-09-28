import React, { Component } from 'react';
export class Home extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:""
        }
    }
    handleChange = async (e) =>{
        let value = document.getElementById("userquery").value;

        console.log(value);

        const api_call = await fetch(`http://127.0.0.1:8000/api/speechtosign/?description=${value}`);
    
        const response=await api_call.json();
    
        console.log(response[0].title)
    
        this.setState({
          imageUrl:response[0].title
        })

    }
    render() {
        return (
            <div>
                <h1>speech to sign conveter</h1>
                <center><div className="search_box">
                <input type="text" placeholder="Enter value" id="userquery"></input><br/>
                <button onClick={this.handleChange}><i className="fal fa-search"></i>Search</button>
                </div></center>
            </div>
        )
    }
}

export default Home
