import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddMovie from "./components/AdminPage/AddMovie";
import AdminPage from "./components/AdminPage/AdminPage";
import EditMovie from "./components/AdminPage/EditMovie";

import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import MovieDetails from "./components/MovieCard/MovieDetails";
import Watch from "./components/MovieCard/Watch";
import AdminPrivateRoute from "./components/PrivateRoute/AdminPrivateRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import MyList from "./components/Search/MyList";
import Search from "./components/Search/Search";
import Signup from "./components/Signup/Signup";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import { AuthProvider } from "./contexts/AuthContext";
import MoviesContextProvider from "./contexts/MovieContext";

const Routes = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <MoviesContextProvider>
                    <Switch>
                        <PrivateRoute exact path="/" component={Main} />
                        <PrivateRoute
                            exact
                            path="/dashboard"
                            component={Dashboard}
                        />

                        <PrivateRoute
                            exact
                            path="/my-list"
                            component={MyList}
                        />
                        <PrivateRoute
                            path="/update-profile"
                            component={UpdateProfile}
                        />
                        <PrivateRoute path="/search" component={Search} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route
                            path="/forgot-password"
                            component={ForgotPassword}
                        />
                        <Route path="/landing-page" component={Homepage} />
                        <PrivateRoute
                            path="/details/:id"
                            component={MovieDetails}
                        />
                        <PrivateRoute path="/watch/:id" component={Watch} />
                        <AdminPrivateRoute
                            path="/admin"
                            component={AdminPage}
                        />
                        <AdminPrivateRoute
                            path="/add-movie"
                            component={AddMovie}
                        />
                        <AdminPrivateRoute
                            path="/edit/:id"
                            component={EditMovie}
                        />
                    </Switch>
                </MoviesContextProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default Routes;
