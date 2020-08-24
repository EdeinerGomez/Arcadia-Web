import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../../Pages/HomePage/HomePage";

class Routes extends  Component{
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                </Switch>
            </BrowserRouter>
        );
    }

}

export default Routes;