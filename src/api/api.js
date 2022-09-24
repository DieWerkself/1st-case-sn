import axios from "axios";
import {setStatusProfile} from "../redux/profileReducer";

const baseGet = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "28e59eef-3cb7-4dc7-ad24-81180d35f72f",
  },
});

const follow = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/follow/",
  withCredentials: true,
  headers: {
    "API-KEY": "28e59eef-3cb7-4dc7-ad24-81180d35f72f",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return baseGet
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  addFollow(id) {
    return follow.post(`${id}`).then((response) => response.data);
  },

  deleteFollow(id) {
    return follow.delete(`${id}`).then((response) => response.data);
  },

  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },

  auth() {
    return authAPI.auth();
  },
};

export const profileAPI = {
  getProfile(userId) {
    return baseGet.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return baseGet
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },

  updateStatus(status) {
    return baseGet
      .put(`/profile/status`, { status })
      .then((response) => response.data);
  },
};

export const authAPI = {
  auth() {
    return baseGet.get(`auth/me`).then((response) => response.data);
  },
  authLogin(data) {
    return baseGet.post(`auth/login`, data)
        .then((response) => response.data)
  },
};
