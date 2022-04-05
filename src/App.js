import React from "react";
import './App.css';
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/"><Dashboard/></Route>
                    <Route path="/sign-in"><SignIn/></Route>
                    <Route path="/sign-up"><SignUp/></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
