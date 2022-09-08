import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";



class ProfileContainer extends React.Component {



    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getProfile(userId, this.props.isAuth);
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.router.params.userId;
        if (prevProps.router.params.userId !== userId) {
            let userId = this.props.userId;
            this.props.getProfile(userId);
        }
    }


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

let redirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => {

    return {
        profile: state.profileP.profile,
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
    }
}


export default connect(mapStateToProps, {getProfile})(withRouter(redirectComponent))


