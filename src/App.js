import React from 'react';
import './App.css';
import {Header} from "./app/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, Link,
} from 'react-router-dom'
import {ArticleList} from "./features/articles/ArticleList";
import {NewArticleForm} from "./features/articles/NewArticleForm";
import {FloatingSaveButton, FloatingNewButton, FloatingEditButton} from "./app/FloatingActionButton";
import {SingleArticlePage} from "./features/articles/SingleArticlePage";

function App() {

    return (
        <Router>
            <Header/>
            <div className="">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <React.Fragment>
                                <ArticleList/>
                                <Link to={"/newPost"}>
                                    <FloatingNewButton/>
                                </Link>
                            </React.Fragment>

                        )}
                    />
                    <Route
                        exact
                        path="/newPost"
                        render={() => (
                            <React.Fragment>
                                <NewArticleForm/>
                            </React.Fragment>
                        )}
                    />
                    <Route exact
                           path="/posts/:artId"
                           render={({match}) => (
                               <React.Fragment>
                               <SingleArticlePage props={match}/>
                               </React.Fragment>
                           )
                           }

                    />


                </Switch>
            </div>
        </Router>
    )
}

export default App;
