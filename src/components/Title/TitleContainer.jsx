import Title from "./Title";
import React from "react";
import {authMe} from "../../redux/authReducer";
import {connect} from "react-redux";


class TitleContainer extends React.Component {

    componentDidMount() {
        this.props.authMe();
    }
   render() {
       return <Title {...this.props}  />
   }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        profile: state.auth.profile
    }
}

export default connect(mapStateToProps, {authMe}) (TitleContainer);

