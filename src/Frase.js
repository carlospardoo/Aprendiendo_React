import React from 'react';

class Frase extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         frase : []
    //     }
    // }

    render(){
        return(
        <li key={this.props.id}>{this.props.comentarios} Llave {this.props.id}</li>
        );
    }
}

export default Frase;