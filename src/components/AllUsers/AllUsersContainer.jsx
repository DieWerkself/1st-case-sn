import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsers,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import AllUsers from "./AllUsers";
import defaultAvatar from "../../assests/image/default-avatar.jpg";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setTotalUsers(response.totalCount);
            });
    }

    onPageChanges = (p) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(p, this.props.pageSize).then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items)
            });
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
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingProgress={this.props.followingProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
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

const AllUsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setTotalUsers, setCurrentPage, toggleIsFetching, toggleFollowingProgress })(UsersContainer)

export default AllUsersContainer;

