import "./sidebar.css";
import {
  PersonAdd,
  Bookmark,
  OndemandVideo,
  Storefront,
  People,
  KeyboardArrowDownOutlined,
} from "@material-ui/icons";
import avatar from "../../assets/avatar.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarOptions">
          <div className="sidebarOption">
            <img src={avatar} alt="" className="sidebarOptionImg" />
            <span className="sidebarOptionTitle">Duc Anh Nguyen</span>
          </div>
          <div className="sidebarOption">
            <PersonAdd htmlColor="#1b87f5" className="sidebarOptionIcon" />
            <span className="sidebarOptionTitle">Friends</span>
          </div>
          <div className="sidebarOption">
            <Bookmark htmlColor="#833bdb" className="sidebarOptionIcon" />
            <span className="sidebarOptionTitle">Saved</span>
          </div>
          <div className="sidebarOption">
            <OndemandVideo htmlColor="#3cc4c5" className="sidebarOptionIcon" />
            <span className="sidebarOptionTitle">Watch</span>
            <div className="sidebarOptionBadge">
              <div className="sidebarOptionBadgeDot"></div>
              <span className="sidebarOptionBadgeText">3 new</span>
            </div>
          </div>
          <div className="sidebarOption">
            <Storefront htmlColor="#23adfd" className="sidebarOptionIcon" />
            <span className="sidebarOptionTitle">Group</span>
            <div className="sidebarOptionBadge">
              <div className="sidebarOptionBadgeDot"></div>
              <span className="sidebarOptionBadgeText">2 new</span>
            </div>
          </div>
          <div className="sidebarOption">
            <People htmlColor="#44bdd7" className="sidebarOptionIcon" />
            <span className="sidebarOptionTitle">Marketplace</span>
          </div>
          <div className="sidebarOption">
            <KeyboardArrowDownOutlined className="sidebarOptionSeeMore" />
            <span className="sidebarOptionTitle">See More</span>
          </div>
        </div>
        <hr className="sidebarHr" />
        <div className="sidebarShortcuts">
          <span className="sidebarShortcutsHeader">Your Shortcuts</span>
          <div className="sidebarShortcut">
            <img src={avatar} alt="" className="sidebarShortcutImg" />
            <span className="sidebarShortcutTitle">Group React Js</span>
          </div>
          <div className="sidebarShortcut">
            <img src={avatar} alt="" className="sidebarShortcutImg" />
            <span className="sidebarShortcutTitle">Group React Js</span>
          </div>
          <div className="sidebarShortcut">
            <img src={avatar} alt="" className="sidebarShortcutImg" />
            <span className="sidebarShortcutTitle">Group React Js</span>
          </div>
          <div className="sidebarShortcut">
            <img src={avatar} alt="" className="sidebarShortcutImg" />
            <span className="sidebarShortcutTitle">Group React Js</span>
          </div>
          <div className="sidebarShortcut">
            <img src={avatar} alt="" className="sidebarShortcutImg" />
            <span className="sidebarShortcutTitle">Group React Js</span>
          </div>
          <div className="sidebarShortcut">
            <img src={avatar} alt="" className="sidebarShortcutImg" />
            <span className="sidebarShortcutTitle">Group React Js</span>
          </div>
          <div className="sidebarShortcut">
            <img src={avatar} alt="" className="sidebarShortcutImg" />
            <span className="sidebarShortcutTitle">Group React Js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
