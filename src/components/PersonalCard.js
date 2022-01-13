import { Component } from "react";


class PersonalCard extends Component{

    constructor(props){
        super(props);
        // this.state mira el estado o el valor de val
        // para luego cambiarlo en la funcion sumEdad
        
        this.state = {
            val: this.props.age
        }
    }
    
    render(){
        // const contador;
        return(
            
            <div>

                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <p>Age: {this.state.val}</p>
                <p>Hair Color: {this.props.hColor}</p>
                <button onClick={this.sumEdad}>Botón de cumpleaños de {this.props.lastName} {this.props.firstName}</button>
                
               
            </div>
        );
    }

    sumEdad = () =>{
        let contador = this.state.val + 1;
        this.setState({val: contador})
    }
}

export default PersonalCard;