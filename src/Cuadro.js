import React from 'react';

export class Cuadro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            x: this.props.x,
            y: this.props.y,
            color: this.props.color,
            pieza: this.props.pieza
        }
    }
    render(){
        return(
            <div>
                {this.props.x} {this.props.y} {this.props.color} {this.props.pieza} 
            </div>
        );
    }
}

export default Cuadro;