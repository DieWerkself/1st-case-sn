import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = null;
        }
            usersAPI.getProfile(userId).then(response => {
                this.props.setUserProfile(response);
            });
    }

    // componentDidUpdate(prevProps) {
    //     let userId = this.props.router.params.userId;
    //     if (prevProps.router.params.userId !== userId) {
    //         let userId = 2;
    //         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //             .then(response => {
    //                 this.props.setUserProfile(response.data);
    //             });
    //     }
    // }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => {

    return {
        profile: state.profileP.profile
    }
}


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))


