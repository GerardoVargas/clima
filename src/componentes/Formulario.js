import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {
    
    ciudadRef = React.createRef();
    paisRef = React.createRef();


    buscarClima = e => {
        e.preventDefault();

        const respuesta = {
            ciudad : this.ciudadRef.current.value,
            pais : this.paisRef.current.value
        }

        this.props.datosConsulta(respuesta);

        //console.log(respuesta);

    }

    render() { 
        return ( 
            <div className='contenedor-form'>
                <div className='container'>
                    <div className='row'>
                        <form onSubmit={this.buscarClima}>
                            <div className='input-field col s12 m8 l4 offset-2'>
                                <input ref={this.ciudadRef} id='ciudad' type='text' />
                                <label htmlFor='ciudad'>Ciudad: </label>
                            </div>
                            <div className='input-field col s12 m8 l4 offset-2'>
                                <select ref={this.paisRef} id='pais' type='text'>
                                    <option value='' defaultValue=''>Elije un pais</option>
                                    <option value='MX'>Mexico</option>
                                    <option value='AR'>Argentina</option>
                                    <option value='CO'>Colombia</option>
                                    <option value='GB'>Londres</option>
                                    <option value='CR'>Costa Rica</option>
                                    <option value='ES'>España</option>
                                    <option value='US'>Estados Unidos</option>

                                </select>
                                <label htmlFor='pais'>Pais: </label>
                            </div>
                            <div className='input-field col s12 m8 l4 offset-2 buscados'>
                                <input type='submit' className='waves-effect waves-light btn-large yellow accent-4' value='Buscar...'/>
                            </div>
                        </form>
                    </div>
                </div>
            
            </div>
         );
    }
}

Formulario.propTypes = {
    datosConsulta : PropTypes.func.isRequired
}

export default Formulario;