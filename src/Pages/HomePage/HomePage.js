import React from "react";
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import {
    Col,
    Row,
    Container,
} from "reactstrap/es"
import "./HomePage.css";
import Menu from "../../Components/Menu/Menu";
import "bootstrap";


class HomePage extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Menu/>

                <div className="Container-fluid pt-6" id="Header" >

                    < div className="Row pt-5" id="Form1" >


                        
                        < div className="Col text-center" >
                        <img className="Image__Buscar1" src={require('../../Assets/Images/avion-blanco.png')} alt="logo arcadia" />
                       </div>

                    < div className="Col text-center">

                    <input type="checkbox" id="defaultInline2"/>
                    <label id="tex" for="defaultInline2">Ida y vuelta</label>      

                    <input type="checkbox" id="defaultInline2"/>
                    <label id="tex" for="defaultInline2">Solo ida</label>   

                    <input type="checkbox" id="defaultInline2"/>
                    <label  id="tex" for="defaultInline2">Multidestino</label>
                    </div>

                    <div className="Col text-center pb-5">
                          <div className="form-group">
                             <input id="input" className="form-control-lg" size="20" type="text" placeholder="Caracas, Venezuela"/> 
                             <input id="input" className="form-control-lg" size="25" type="text" placeholder="Ingresar hacia donde viaja"/>
                             <input id="input" className="form-control-lg" size="6" type="text" placeholder="Ida"/>
                             <input id="input" className="form-control-lg" size="6" type="text" placeholder="Vuelta"/>
                             <input id="input"  className="form-control-lg" size="10" type="text" placeholder="1 persona"/>

                             <button  type="submit" className="btn btn-Buscar">Buscar</button>                             
                          </div>
                       

                    </div>
                 
                    

                    </div>



                </div>







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