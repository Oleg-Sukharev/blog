import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import BlogListContainer from '../HOC/blog-list-container';
import BlogPageContainer from '../HOC/blog-page-container';
import "./app.scss";
const App = () => {
    return (
        <Switch>
            <Route
                path="/" render={BlogListContainer} exact>
            </Route>
            <Route path="/posts/:id"
                render={({ match }) => {
                    const { id } = match.params;
                    return <BlogPageContainer itemId={+id} />
                }} />
            <Route render={() => {
                return <h2> Page not found</h2>
            }} />
        </Switch>
    );
}

export default withRouter(App);
