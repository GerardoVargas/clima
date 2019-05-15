import React, {Component} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Error from './componentes/Error';
import Clima from './componentes/Clima';

class App extends Component {

  state = {
    error : false,
    consulta : {},
    resultado : {}
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi();
    }
  }

  componentDidMount() {
    this.setState({
      error : false
    })
  }

  consultarApi = () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null;

    //LEER URL Y AGREGAR EL API KEY
    const appId = '6332001b71edb2c05fb176e368030776';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    
    //CONSULTAR QUERY CON FETCH API
    fetch(url).then(respuesta => {
        return respuesta.json();
      }).then(datos => {
        this.setState({
          resultado : datos
        })
      }).catch(error =>{
        console.log(error);
      })    

  }

  datosConsulta = respuesta => {
      if(respuesta.ciudad === '' || respuesta.pais === '')
      {
        this.setState({
          error : true
        }) 
      }else{
        this.setState({
          consulta : respuesta,
          error : false
        })
      }
  }

  render() {

    const {error} = this.state,
          {cod} = this.state.resultado;
    
    let resultado;

    if(error){
        resultado = <Error mensaje='Ambos campos son obligatorios' />;
    }else if(cod === '404'){
        resultado = <Error mensaje='Ciudad no encontrada'/>
    }
    else{
        resultado = <Clima resultado = {this.state.resultado} />
    }

    return (
      <div className="app">
        <Header 
          titulo = 'Pronostico del clima con React'
        />

        <Formulario
          datosConsulta = {this.datosConsulta}
        />
        {resultado}
      </div>
    );
  }
}

export default App;
