import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        status={props.status}
        profile={props.profile}
        updateStatus={props.updateStatus}
        isAuth={props.isAuth}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
