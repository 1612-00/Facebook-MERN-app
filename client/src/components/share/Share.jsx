import "./share.css";
import avatar from "../../assets/avatar.jpg";
import {
  VideocamOutlined,
  PhotoLibraryOutlined,
  EmojiEmotionsOutlined,
} from "@material-ui/icons";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={avatar} alt="" className="shareAvatar" />
          <input type="text" placeholder="What's on your mind, Duc Anh?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareAction">
            <VideocamOutlined htmlColor="#f02849" className="shareActionIcon" />
            <span className="shareActionTitle">Live Video</span>
          </div>
          <div className="shareAction">
            <PhotoLibraryOutlined htmlColor="#45bd62" className="shareActionIcon" />
            <span className="shareActionTitle">Photo/Video</span>
          </div>
          <div className="shareAction">
            <EmojiEmotionsOutlined htmlColor="#f7b928" className="shareActionIcon" />
            <div className="shareActionTitle">Feeling/Activity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
