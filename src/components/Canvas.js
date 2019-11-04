import React, { Component } from 'react'


export class Canvas extends Component {
    UNSAFE_componentWillMount(){
        this.setState({
            canvasSize:{canvasWidth:700, canvasHeight:500}
        })
    }
    componentDidMount(){
        const {canvasWidth,canvasHeight} = this.state.canvasSize;
        this.canvasHex.width=canvasWidth;
        this.canvasHex.height=canvasHeight;                     
    }
    render() {
        return (
            <div>
                <canvas ref ={canvasHex=>this.canvasHex=canvasHex}></canvas>
            </div>
        )
    }
}

export default Canvas
