import {connect} from "react-redux";
import {
    updatePage, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowUser, followUser
} from "../../redux/usersReducer";
import React from "react";
import AllUsers from "./AllUsers";
import defaultAvatar from "../../assests/image/default-avatar.jpg";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanges = (p) => {
        this.props.updatePage(p, this.props.pageSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : <AllUsers
                allUsers={this.props.allUsers}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                defaultAvatar={defaultAvatar}
                onPageChanges={this.onPageChanges}
                unfollow={this.props.unfollowUser}
                follow={this.props.followUser}
                followingProgress={this.props.followingProgress}
            /> }

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        allUsers: state.usersP.users,
        pageSize: state.usersP.pageSize,
        totalUsersCount: state.usersP.totalUsersCount,
        currentPage: state.usersP.currentPage,
        isFetching: state.usersP.isFetching,
        followingProgress: state.usersP.followingProgress,
    }
}

const AllUsersContainer = connect(mapStateToProps,
    {followUser, setCurrentPage,
        toggleFollowingProgress, getUsers, updatePage, unfollowUser })(UsersContainer)

export default AllUsersContainer;

