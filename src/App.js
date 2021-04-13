import React from 'react';
import './App.css';
import {Header} from "./app/Header";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import {ArticleList} from "./features/articles/ArticleList";
import {NewArticleForm} from "./features/articles/NewArticleForm";
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
                                <ArticleList props={false}/>
                            </React.Fragment>

                        )}
                    />
                    <Route
                        exact
                        path="/search/:searchString"
                        render={() => (
                            <React.Fragment>
                                <ArticleList props={true}/>
                            </React.Fragment>
                        )}
                    />
                    <Route
                        exact
                        path="/newPost"
                        render={() => (
                            <React.Fragment>
                                <NewArticleForm />
                            </React.Fragment>
                        )}
                    />
                    <Route
                        exact
                        path="/editPost/:artId"
                        render={({match}) => (
                            <React.Fragment>
                                <NewArticleForm props={match}/>
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
