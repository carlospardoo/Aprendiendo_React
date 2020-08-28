import React from 'react';
/* 
Ciclo de Vida

https://medium.com/@simonhoyos/ciclos-de-vida-de-los-componentes-de-react-e1bf48a5ff73
https://desarrolloweb.com/articulos/ciclo-vida-componentes-react.html

Cada componente en react tiene un cilo de vida compuesto por cuatro etapas que son:
1. Creado
2. Montado
3. Actualizado
4. Desmontado

1. Creado
Ocurre cuando se intancia el componente. Se define en el constructor.
En esta etapa se define el estado (inicial) del componente y posibles llamados a funciones.

constructor(props) {
  super(props);
  
  this.state = {
    initialState: true,
  };  
  this.method = this.method.bind(this);
}

2. Montado
Ocurre cuando el componente va a ser generado por primera vez. Tiene los siguientes métodos:

2.1. componentWillMount
Se ejecuta justo antes de renderizar el componente por primera vez. Usado para hacer cambios previos al estado inicial.

componentWillMount() {
  let answer;
  if(this.props.number % 3 === 0 && this.props.number % 5 === 0) {
    answer = 'fizzbuzz';
  } else if(this.props.number % 3 === 0) {
    answer = 'buzz';
  } else if(this.props.number % 5 === 0) {
    answer = 'fizz';
  } else {
    answer = this.props.number
  }
  
  this.setState({
    answer: answer
  });
}

2.2. componentDidMount
Se ejecuta justo después de que el componente ha sido renderizado. Solo se ejecuta una vez. Se usa para trabajar con código asíncrono (tareas que se ejecutan sin esperar a que tareas previas terminen), llamados a APIs y código temporales como setTimeout.

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

2.3. render
Método donde se genera la interfaz gráfica inicial del componente. No se debe hacer modificaciones del estado aquí.

render() {
  return (
    <h1>Hello world</h1>
  );
}

3. Actualizado
Ocurre cuando el componente ya renderizado se está modificando. El componente se puede modificar más de una vez. Las actualizaciones son causadas por cambios en el estado o en las propiedades. Tiene los siguientes métodos:

3.1. componentWillReceiveProps
Permite hacer cambios en el componente, según los cambios que se van a realizar sobre las propiedades del componente. Recibe como parámetro nextProps, el cual contiene el valor futuro de las propiedades del componente. No se ejecuta antes del montado (primer renderizado). Se ejecuta antes de que los valores en las propiedades cambien. Las propiedades actuales aquí se llaman this.props.

componentWillReceiveProps(nextProps) {
  if(this.props.num1 !== nextProps.num1 || this.props.num2 !== nextProps.num2) {
    this.setState({
      sum: nextProps.num1 + nextProps.num2,
    })
  }
}

3.2. shouldComponentUpdate

Permite validar si el componente se debe volver a renderizar luego de que ocurra un cambio en las propiedades o en el estado. Retorna un valor booleano. Si retorna True, el componente se volverá a renderizar; si retorna False el componente no se renderizará. Por defecto retorna True. Sirve para optimización, para evitar el coste de volver a renderizar el componente si no es necesario.

shouldComponentUpdate(nextProps, nextState) {
  return nextProps.name !== this.props.name
}

3.3. componentWillUpdate
Se ejecuta cuando souldComponentUpdate retorna verdadero, es decir, justo antes de que el comonente se vaya a actualizar. Se usa para hacer los últimos cambios antes de actualizar el componente.

componentWillUpdate(nextProps, nextState) {
  if(this.state.age !== nextStage.age) {
    this.onGrow();
  }
}

3.4. componentDidUpdate
Se ejecuta justo después de que el componente se haya renderizado con los nuevos valores. Los cambios ya están en el DOM del navegador. Se usa para interactuar con el DOM, para producir nuevos cambios. Tiene dos atributos prevProps y prevState, que contienen las propiedades y el estado previos a la actualización.

componentDidUpdate(prevProps, prevState) {
  this.createCard();
}

4. Desmontado
Ocurre cuando el componente se va a eliminar del DOM. Posee un solo método.

4.1. componentWillUnmount
Se ejecuta cuando el componente se va a desmontar del DOM (interfaz). Se usa para limpiar cualquier cosa que el componente pueda seguir ejecutando después de desmontarse como temporizadores, manejadores de eventos o peticiones HTTP.

componentWillUnmount() {
  window.removeEventListener(anyEvent, anyEventHandler());
}

*/
export class CicloVida extends React.Component{
  
  constructor(props){
      super(props);
    this.state={
      comentarios:[],
      tiempo:0
    }
  }
  nuevaFrase(){
    
  }
  incremento(){
    this.setState((state) => ({tiempo : this.state.tiempo+1}));
  }

  componentDidMount(){
      //this.conteo es un props?
      this.conteo=setInterval(() => this.incremento(),1000);
  }

  componentWillUnmount(){
      clearInterval(this.conteo);
  }
  
  render(){
      //onClick="nuevaFrase()"
    return(
      <form>
        <div>Hola {this.props.nombre}, esto es: {this.props.descripcion}</div>
        <div>Tiempo actual: {this.state.tiempo}</div>
        <input type="text" name="txtFrase"/>
        <button >Agregar Frase</button>
      </form>
    );
  }
}
export default CicloVida;