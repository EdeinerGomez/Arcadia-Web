import React from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import {
    Col,
    Row,
    Container,
} from "reactstrap/es"
import "./HomePage.css";
import Menu from "../../Components/Menu/Menu";


class HomePage extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Menu/>
                <Container fluid className="Container1"  >
                    <Row fluid className="Header">
                        <Col  lg={1}></Col>
                        <Col className="Colum"  lg={10}>
                            

                                <input className="boton" type="text" placeholder="Caracas Venezuela" size="20"></input>
                                <input  className="boton" type="text"placeholder="Ingresa hacia donde viajas" size="25"></input>
                                <input  className="boton" type="text" placeholder="ida" size="8"></input>
                                <input  className="boton" type="text" placeholder="Vuelta" size="8"></input>
                                <input  className="boton" type="text" placeholder="1 Persona" size="15"></input>
                                <button className="boton2" type="submit">Buscar</button>
  
                        
                            
                           
                        </Col>
                        <Col lg={1}></Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row>
                        <Col className="mt-0 mb-0"lg={12}><h4 className="text-center">Promoción Arcadia</h4>
                        <hr size="2px" color="black" width="70%"/></Col>
                        <Col  className="Col1"lg={4} >
                        <h2 id="alineacion">Brasil

                        </h2>
                            <p id="Promo" className="text-center ml-4">Promo</p>

                        </Col>
                        <Col className="Col2" lg={4}>
                            <h2 id="alineacion">Chile</h2>
                            <p id="Promo" className="text-center">Promo</p>
                        </Col>
                        <Col className="Col3" lg={4}>
                           <h2 id="alineacion">Costa Rica</h2>
                            <p id="Promo" className="text-center">Promo</p>
                        </Col>

                        <Col id="Turismo__Nacional" className="mt-0 mb-0"lg={12}><h4 id="h4" className="text-center"   >Turismo Nacional</h4>
                        <hr size="2px" color="white" width="70%"/></Col>


                        <Col className="Col4" lg={6}>
                           <h2 id="alineacion">Canaima
                           </h2>
                            <p id="Promo1" className="text-center">DISFRUTA LA INMENSIDAD</p>
                        </Col>

                        <Col className="Col5" lg={6}>
                            <p id="Promo2" className="text-center">DISFRUTA TUS COSTAS</p>
                           <h2 id="alineacion">Cuyagua</h2>
                        </Col>

                    </Row>

                    
                </Container>
            </React.Fragment>
        );
    }

}

export default HomePage;