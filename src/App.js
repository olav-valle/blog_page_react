import React from 'react';
import './App.css';
import {Header} from "./app/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import {ArticleList} from "./features/articles/ArticleList";
import {NewArticleForm} from "./features/articles/NewArticleForm";
import {FloatingNewButton} from "./FloatingNewButton";

function App() {

    return (
        <Router>
            <Header/>
            <div className="bg-gray-200 h-full">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <ArticleList/>
                        )}
                    />
                    <Route exact path="/newPost" component={NewArticleForm}/>


                </Switch>
                    <FloatingNewButton />
            </div>
        </Router>
    )
}

export default App;
