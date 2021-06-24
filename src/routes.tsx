import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { EmployeeInfo } from "./pages/EmployeeInfo";
import { CreateForm } from "./pages/CreateForm";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/employees/:id" component={EmployeeInfo} />
                <Route exact path="/create" component={CreateForm} />
            </Switch>
        </BrowserRouter>
    );
}