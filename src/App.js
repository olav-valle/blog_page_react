import React from 'react';
import './App.css';
import {Header} from "./app/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

function App() {

    return (
        <Router>
            <Header/>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() =>(
                        <React.Fragment>

                        </React.Fragment>

                    )}
                />



            </Switch>
        </Router>
    )
}

export default App;
