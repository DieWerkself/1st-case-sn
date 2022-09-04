import Title from "./Title";
import React from "react";
import axios from "axios";
import {setUserData, toggleIsFetching} from "../../redux/authReducer";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {usersAPI} from "../../api/api";


class TitleContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
            usersAPI.auth().then(response => {
                this.props.toggleIsFetching(false);
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
                    this.props.setUserData(id, login, email);
                    usersAPI.getProfile(id).then(response => {
                            this.props.setUserProfile(response);
                        })
                }
            });
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
        profile: state.profileP.profile
    }
}

export default connect(mapStateToProps, {setUserData, toggleIsFetching, setUserProfile}) (TitleContainer);

