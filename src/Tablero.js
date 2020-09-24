import React from 'react';
import Cuadro from './Cuadro';

export class Tablero extends React.Component{
    constructor(){
        super();
        const tabl=this.crearTablero();
        this.state = {
            tablero: tabl
        }
        //this.crearTablero();
    }
    crearTablero(){
        let tabler=[];
        //console.log(tabler);
        let j=0;
        for (let i=0;i<64;i++){
            //tabler[i]=[];
            //for(let j=0;j<8;j++){
            
            if(i%8===0 & i>0){
                j++;
            }
                tabler[i] = {
                    x: i%8,
                    y: j,
                    color: 'white',
                    pieza: 0
                }
            //}
            //j++;
        }
        //console.log(tabler);
        //this.state.tablero = tabler;
        //console.log(this.state.tablero);
        return tabler;
    }
    render(){
        return(
            <div>
                {
                    this.state.tablero.map((i,index)=>
                        <Cuadro key={index} x={i.x} y={i.y} color={i.color} pieza={i.pieza} />
                    )
                }
            </div>
        );
    }
}
export default Tablero;