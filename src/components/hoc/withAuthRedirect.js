import {Navigate} from "react-router-dom";
import React from "react";
import Login from "../Login/Login";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component) => {
    class redirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Login/>;
            return <Component {...this.props}/>
        }
    }
    let ConnectedAuthRedirectComponent = connect (mapStateToProps) (redirectComponent);
    return ConnectedAuthRedirectComponent;
}

