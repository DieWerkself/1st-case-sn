import React, {useEffect, useState} from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, updateUserStatus } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";

const ProfileContainerHooks = (props) => {

  let userId = props.router.params.userId;


  useEffect(() => {
    props.getProfile(userId);
  }, [useParams()])

    return (
        <>
          {props.isFetching ? <Preloader /> : <Profile
              {...props}
              profile={props.profile}
              status={props.status}
              updateStatus={props.updateUserStatus}
          />}
        </>
    );
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

let mapStateToProps = (state) => {
  return {
    profile: state.profileP.profile,
    userId: state.auth.userId,
    status: state.profileP.status,
    isFetching: state.profileP.isFetching,
  };
};

export default compose(
  connect(mapStateToProps, { getProfile, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainerHooks);
