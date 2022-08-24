import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import AllUsers from "./AllUsers";
import defaultAvatar from "../../assests/image/default-avatar.jpg";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
            });
    }

    onPageChanges = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <AllUsers
            allUsers={this.props.allUsers}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            defaultAvatar={defaultAvatar}
            onPageChanges={this.onPageChanges}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        allUsers: state.usersP.users,
        pageSize: state.usersP.pageSize,
        totalUsersCount: state.usersP.totalUsersCount,
        currentPage: state.usersP.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers:  (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsers:  (totalCount) => {
            dispatch(setTotalUsersAC(totalCount))
        },
        setCurrentPage:  (page) => {
            dispatch(setCurrentPageAC(page))
        }
    }
}

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersContainer)

export default AllUsersContainer;

