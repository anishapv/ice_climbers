import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import HelloWorldText from "./components/HelloWorldText";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Login from "./components/login.component";
import Plan from "./components/plan.component";
import Timer from "./components/timer.component";
import Track from "./components/track.component";

function App() {
    return (
        <Router>
            <Navbar />
            <br/>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/plan" component={Plan} />
            <Route path="/timer" component={Timer} />
            <Route path="/track" component={Track} />

             {/*Anisha Testing out */}
            <Route path='/potato' exact component={HelloWorldText}/>
        </Router>
    );
}

export default App;
