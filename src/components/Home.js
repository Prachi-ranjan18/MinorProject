import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>speech to sign conveter</h1>
                <div className="search_box">
                <input></input>
                <button><i class="fal fa-search"></i>Search</button>
                </div>
            </div>
        )
    }
}

export default Home
