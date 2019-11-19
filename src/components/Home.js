import React, { Component } from 'react';
import '../components/main.css'
import './home.css';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
class Home extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:""
        }
    };
    handleClick= () =>
    {
        recognition.start();
    recognition.onresult = (e) => {
    const current = e.resultIndex
    const transcript = e.results[current][0].transcript
    document.getElementById('userquery').value=transcript;
    this.handleInitialReq();
    console.log(transcript);
    recognition.stop();
    }
    
}
handleStop=()=>
    {
        recognition.stop();

    }
    handleInitialReq = async () =>{
        let value = document.getElementById("userquery").value;

        console.log(value);

        const api_call1 = await fetch(`http://127.0.0.1:8001/api/${value}`);

        const res= await api_call1.json();

        console.log(res.value);
        
        const value1=res.value;
        var data=value1.slice(0,value1.length-1)

        console.log(data);


        const api_call = await fetch(`http://127.0.0.1:8000/api/speechtosign/?description=${data}`);
    
        const response=await api_call.json();
    
        console.log(response[0].title);
        this.setState({
          imageUrl:"./ISL_Gifs/"+response[0].title
        })


    }
    render() {
        return (
            <div>
                <h1>speech to sign converter</h1>
                <center><div className="search_box">
               
                <input type="text" placeholder="Enter value" id="userquery"></input><br/>
                <br/>
                <div id="row">
               <input type="button" onClick={this.handleClick} className="button" value="Speak"/>&nbsp;&nbsp;&nbsp;
               <input type="button" onClick={this.handleInitialReq} className="button" value="Manual Search"/>&nbsp;&nbsp;&nbsp;
               <input type="button" onClick={this.handleStop} className="button" value="Stop"/>
                </div>
                <br/>
                <br/>
                <div className="render-imag">
                <img src={this.state.imageUrl} alt="output" width="300" height="250"/>
                </div>
                </div></center>
            </div>
        )
    }
}

export default Home;
