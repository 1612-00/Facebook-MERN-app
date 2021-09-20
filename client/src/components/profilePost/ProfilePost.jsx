import "./profilePost.css";
import Feed from "./../feed/Feed";
import { Work, Home, Place } from "@material-ui/icons";
import image from "../../assets/post/4.jpeg";

const ProfilePost = () => {
  return (
    <div className="profilePost">
      <div className="profilePostSidebar">
        <div className="profileIntro">
          <span className="profileTitle">Intro</span>
          <div className="profileIntroElements">
            <div className="profileIntroElement">
              <Work className="profileIntroIcon" />
              <span className="profileIntroElementText">
                Went to Lương Đắc Bằng Confession
              </span>
            </div>
            <div className="profileIntroElement">
              <Home className="profileIntroIcon" />
              <span className="profileIntroElementText">
                Lives in Hanoi, Vietnam
              </span>
            </div>
            <div className="profileIntroElement">
              <Place className="profileIntroIcon" />
              <span className="profileIntroElementText">From Thanh Hóa</span>
            </div>
          </div>
        </div>
        <div className="profilePhotos">
          <div className="profilePhotosTop">
            <span className="profileTitle">Photos</span>
            <span className="profilePhotosAll">See All Photos</span>
          </div>
          <div className="profilePhotosTab">
            <div className="profilePhoto">
              <img src={image} alt="" className="profilePhotosImg img1" />
            </div>
            <div className="profilePhoto">
              <img src={image} alt="" className="profilePhotosImg" />
            </div>
            <div className="profilePhoto">
              <img src={image} alt="" className="profilePhotosImg img3" />
            </div>
            <div className="profilePhoto">
              <img src={image} alt="" className="profilePhotosImg" />
            </div>
            <div className="profilePhoto">
              <img src={image} alt="" className="profilePhotosImg" />
            </div>
            <div className="profilePhoto">
              <img src={image} alt="" className="profilePhotosImg" />
            </div>
            <div className="profilePhoto">
              <img src={image} alt="" className="profilePhotosImg img7" />
            </div>
            <div className="profilePhoto">
              <img src={image} alt="" className="profilePhotosImg" />
            </div>
            <div className="profilePhoto">
              <img src={image} alt="" className="profilePhotosImg img9" />
            </div>
          </div>
        </div>
        <div className="profileFriends">
          <div className="profileFriendsTop">
            <span className="profileTitle">Friends</span>
            <span className="profileFriendsAll">See All Friends</span>
          </div>
          <span className="profileAllFriend">196 friends</span>
          <div className="profileFriendsTab">
            <div className="profileFriend">
              <img src={image} alt="" className="profileFriendsAvatar" />
              <span className="profileFriendName">Nguyen Duc Anh</span>
            </div>
            <div className="profileFriend">
              <img src={image} alt="" className="profileFriendsAvatar" />
              <span className="profileFriendName">Nguyen Duc Anh</span>
            </div>
            <div className="profileFriend">
              <img src={image} alt="" className="profileFriendsAvatar" />
              <span className="profileFriendName">Nguyen Duc Anh</span>
            </div>
            <div className="profileFriend">
              <img src={image} alt="" className="profileFriendsAvatar" />
              <span className="profileFriendName">Nguyen Duc Anh</span>
            </div>
            <div className="profileFriend">
              <img src={image} alt="" className="profileFriendsAvatar" />
              <span className="profileFriendName">Nguyen Duc Anh</span>
            </div>
            <div className="profileFriend">
              <img src={image} alt="" className="profileFriendsAvatar" />
              <span className="profileFriendName">Nguyen Duc Anh</span>
            </div>
            <div className="profileFriend">
              <img src={image} alt="" className="profileFriendsAvatar" />
              <span className="profileFriendName">Nguyen Duc Anh</span>
            </div>
            <div className="profileFriend">
              <img src={image} alt="" className="profileFriendsAvatar" />
              <span className="profileFriendName">Nguyen Duc Anh</span>
            </div>
            <div className="profileFriend">
              <img src={image} alt="" className="profileFriendsAvatar" />
              <span className="profileFriendName">Nguyen Duc Anh</span>
            </div>
            
          </div>
        </div>
      </div>
      <Feed className="profileFeed" />
    </div>
  );
};

export default ProfilePost;
