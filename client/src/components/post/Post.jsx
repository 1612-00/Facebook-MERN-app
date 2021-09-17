import "./post.css";
import avatar from "../../assets/avatar.jpg";
import {
  MoreHoriz,
  ThumbUpAltOutlined,
  ChatBubbleOutlineOutlined,
  ScreenShareOutlined,
} from "@material-ui/icons";
import imgPost from "../../assets/post/5.jpeg";
import like from "../../assets/like.png";
import heart from "../../assets/heart.png";

const Post = () => {
  return (
    <div className="post">
      <div className="postTop">
        <div className="postTopProfile">
          <img src={avatar} alt="" className="postAvatar" />
          <span className="postUsername">Duc Anh</span>
        </div>
        <div className="postTopIcon">
          <MoreHoriz />
        </div>
      </div>
      <div className="postMiddle">
        <span className="postDesc">Hi, my name is facebook!</span>
        <img src={imgPost} alt="" className="postImg" />
      </div>

      <div className="postBottom">
        <div className="postBottomInfo">
          <div className="postBottomInfoLeft">
            <img src={like} alt="" className="postBottomInfoIcon" />
            <img src={heart} alt="" className="postBottomInfoIcon" />
            <span className="postBottomInfoText">3.9K</span>
          </div>
          <div className="postBottomInfoRight">
            <span className="postBottomInfoComment">600 Comments</span>
          </div>
        </div>
        <hr className="postBottomHr" />
        <div className="postBottomActions">
          <div className="postBottomAction">
            <ThumbUpAltOutlined className="postBottomActionIcon" />
            <span className="postBottomActionLikeText">Like</span>
          </div>
          <div className="postBottomAction">
            <ChatBubbleOutlineOutlined className="postBottomActionIcon" />
            <span className="postBottomActionLikeText">Comment</span>
          </div>
          <div className="postBottomAction">
            <ScreenShareOutlined className="postBottomActionIcon" />
            <span className="postBottomActionLikeText">Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
