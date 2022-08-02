import React from 'react';
import style from './component/layout/style';
import Layout from "./component/layout/Layout";
import {BrowserRouter,HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import TweetsByHashTag from "./pages/tweetsByHashTag/TweetsByHashTag";
import TweetsByUser from "./pages/tweetsByUser/TweetsByUser";
import P404 from "./pages/404/P404";
import AuthPage from "./pages/auth/AuthPage";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {TweetProvider} from "./context/TweetContext";
import {LayoutProvider} from "./context/LayoutContext";


const App = () => {
    const classes = style();
    return (
        <div>
            <HashRouter>
                <Switch>
                    <PublicRoute path={"/login"} component={AuthPage}/>
                    <PrivateRoute path={"/"} render={() =>
                        <TweetProvider>
                            <LayoutProvider>
                                <Layout>
                                    <Switch>
                                        <Route exact path={"/"} component={Home}/>
                                        <Route path={"/hashTags/:hashtag"} component={TweetsByHashTag}/>
                                        <Route exact path={"/users/:id/:name"} component={TweetsByUser}/>
                                        <Route component={P404}/>
                                    </Switch>
                                </Layout>
                            </LayoutProvider>
                        </TweetProvider>
                    }/>
                </Switch>
            </HashRouter>
            <ToastContainer/>
        </div>
    );
};
const isLogin = () => !!localStorage.getItem('x-auth-token');
const PublicRoute = ({component, ...props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return <Redirect to={'/'}/>
        else {
            // return React.createElement(component,props);
            return <Route component={component} {...props}/>;
        }
    }}/>

}
const PrivateRoute = ({render, ...props}) => {
    return <Route {...props} render={(props) => {
        if (!isLogin())
            return <Redirect to={"/login"}/>;
        else {
            return render(props);
        }
    }}/>

}

export default App;