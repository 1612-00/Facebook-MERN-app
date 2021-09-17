import {
  Search,
  HomeOutlined,
  PersonAddOutlined,
  OndemandVideoOutlined,
  StorefrontOutlined,
  PeopleOutline,
  MenuOutlined,
  ChatOutlined,
  NotificationsActiveOutlined,
  KeyboardArrowDownOutlined,
} from "@material-ui/icons";
import "./topbar.css";
import logo from "../../assets/logo.png"
import avatar from "../../assets/avatar.jpg"

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <img src={logo} alt="" className="topbarLogo" />
          <div className="topbarSearch">
            <Search className="topbarSearchLogo" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="topbarSearchInput"
            />
          </div>
        </div>
        <div className="topbarCenter">
          <div className="topbarPageLogos">
            <div className="topbarPageLogo">
              <HomeOutlined className="logo" />
            </div>
            <div className="topbarPageLogo">
              <PersonAddOutlined className="logo" />
              <span className="topbarIconBadgeMid">2</span>
            </div>
            <div className="topbarPageLogo">
              <OndemandVideoOutlined className="logo" />
              <span className="topbarIconBadgeMid">1</span>
            </div>
            <div className="topbarPageLogo">
              <StorefrontOutlined className="logo" />
              <span className="topbarIconBadgeMid">1</span>
            </div>
            <div className="topbarPageLogo">
              <PeopleOutline className="logo" />
              <span className="topbarIconBadgeMid">1</span>
            </div>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarProfile">
            <img src={avatar} alt="" className="topbarAvatar" />
            <div className="topbarUsername">Duc Anh</div>
          </div>
          <div className="topbarProfileLogos">
            <div className="topbarProfileLogo">
              <MenuOutlined className="logo" />
            </div>
            <div className="topbarProfileLogo">
              <ChatOutlined className="logo" />
              <span className="topbarIconBadgeRight">1</span>
            </div>
            <div className="topbarProfileLogo">
              <NotificationsActiveOutlined className="logo" />
              <span className="topbarIconBadgeRight">1</span>
            </div>
            <div className="topbarProfileLogo">
              <KeyboardArrowDownOutlined className="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
