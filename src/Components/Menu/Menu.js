import React  from 'react';

import "./Menu.css";

class Menu extends React.Component{

    render() {

        return(
            <div className="Container">
            <nav id="Navbar" className="navbar navbar-expand-lg navbar-light " >


                <a className="navbar-brand" href="#">
                    <img className="Image__Buscar1" src={require('../../Assets/Images/logo.png')} alt="logo arcadia" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-5 mt-1">
                        <li id="text" className="nav-item active pb-1">
                            <a className="nav-link" href="#">
                                <img className="Image__Buscar mr-2" src={require('../../Assets/Images/vuelos.png')} alt="logo arcadia" width="40px" height="40px" />

                                Vuelos

                                <span className="sr-only">(current)</span></a>

                        </li>

                        <li id="text" className="nav-item pt-1">
                            <a className="nav-link" href="#">
                                <img className="Image__Buscar mr-2" src={require('../../Assets/Images/alojamiento.png')} alt="logo arcadia" width="30px" height="30px" />

                                Alojamiento
                            </a>
                        </li>

                        <li id="text" className="nav-item pt-1">
                            <a className="nav-link" href="#">
                                <img className="Image__Buscar mr-2" src={require('../../Assets/Images/carros.png')} alt="logo arcadia" width="30px" height="30px" />

                                Carros
                            </a>
                        </li>

                        <li id="text" className="nav-item pt-1">
                            <a className="nav-link" href="#">
                                <img className="Image__Buscar mr-2 pb-1" src={require('../../Assets/Images/turismo.png')} alt="logo arcadia" width="30px" height="30px" />

                                Turismo
                            </a>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li id="text1" className="nav-item">
                            <a className="nav-link" href="#">Registrarme</a>
                        </li>

                        <li id="text" className="nav-item">
                            <a className="nav-link" href="#">Ingresar</a>
                        </li>
                    </ul>
                </div>


            </nav>

            </div>
        );

    }

}

export default Menu;