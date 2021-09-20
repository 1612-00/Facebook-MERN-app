import "./profile.css";
import Topbar from "./../../components/topbar/Topbar";
import ProfileHome from "../../components/profileHome/ProfileHome";
import ProfilePost from "./../../components/profilePost/ProfilePost";

const Profile = () => {
  return (
    <div className="Profile">
      <Topbar />
      <ProfileHome />
      <ProfilePost />
    </div>
  );
};

export default Profile;
