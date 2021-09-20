import "./profileHome.css";
import noAvatar from "../../assets/person/noAvatar.png";
import noCover from "../../assets/person/noCover.png";
import { ArrowDropDown, Add, Create, MoreHoriz } from "@material-ui/icons";

const ProfileHome = () => {
  return (
    <div className="profileHome">
      <div className="profileHomeTop">
        <div className="profileInfo">
          <div className="profileImg">
            <img src={noCover} alt="" className="coverImg" />
            <img src={noAvatar} alt="" className="avatarImg" />
          </div>
          <div className="profileName">
            <span className="profileUsername">Duc Anh Nguyen</span>
            <span className="profileOtherName">Hi, my name is DA!</span>
          </div>
        </div>
        <hr className="profileHomeTopHr" />
        <div className="profileHomeTopLinks">
          <div className="profilePageLinks">
            <div className="profilePageLink">
              <span className="profilePageLinkText">Homes</span>
            </div>
            <div className="profilePageLink">
              <span className="profilePageLinkText">About</span>
            </div>
            <div className="profilePageLink">
              <span className="profilePageLinkText">Friends</span>
              <span className="amountFriends">195</span>
            </div>
            <div className="profilePageLink">
              <span className="profilePageLinkText">Photos</span>
            </div>
            <div className="profilePageLink moreIcon">
              <span className="profilePageLinkText">More</span>
              <ArrowDropDown />
            </div>
          </div>
          <div className="profileEditLinks">
            <div className="profileEditLink addLink">
              <Add className="addIcon" />
              <span className="profileAddStory">Add to Story</span>
            </div>
            <div className="profileEditLink">
              <Create className="editIcon" />
              <span className="profileEditProfile">Edit Profile</span>
            </div>
            <div className="profileEditLink">
              <MoreHoriz className="MoreHorizIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHome;
