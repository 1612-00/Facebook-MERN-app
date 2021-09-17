import "./rightbar.css";
import ad from "../../assets/ad.png";
import avatar from "../../assets/avatar.jpg";
import { Search, MoreHoriz } from "@material-ui/icons";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarSponsoreds">
          <span className="rightbarSponsoredTitle">Sponsored</span>
          <div className="rightbarSponsored">
            <img src={ad} alt="" className="rightbarSponsoredImg" />
            <span className="rightbarSponsoredContent">
              TẾT TRUNG THU - ĐỒNG LOẠT GIẢM ĐẾN 50%
            </span>
          </div>
        </div>
        <hr className="rightbarHr" />
        <div className="rightbarContacts">
          <div className="rightbarContactsTop">
            <span className="rightbarContactsTitle">Contacts</span>
            <div className="rightbarContactsTopIcon">
              <Search />
              <MoreHoriz />
            </div>
          </div>
          <div className="rightbarContactsBot">
            <div className="rightbarContact">
              <div className="rightbarContactsActive">
                <img src={avatar} alt="" className="rightbarContactImg" />
                <div className="rightbarContactsBadge"></div>
              </div>
              <span className="rightbarContactsName">Nguyen Duc Anh</span>
            </div>
            <div className="rightbarContact">
              <div className="rightbarContactsActive">
                <img src={avatar} alt="" className="rightbarContactImg" />
                <div className="rightbarContactsBadge"></div>
              </div>
              <span className="rightbarContactsName">Nguyen Duc Anh</span>
            </div>
            <div className="rightbarContact">
              <div className="rightbarContactsActive">
                <img src={avatar} alt="" className="rightbarContactImg" />
                <div className="rightbarContactsBadge"></div>
              </div>
              <span className="rightbarContactsName">Nguyen Duc Anh</span>
            </div>
            <div className="rightbarContact">
              <div className="rightbarContactsActive">
                <img src={avatar} alt="" className="rightbarContactImg" />
                <div className="rightbarContactsBadge"></div>
              </div>
              <span className="rightbarContactsName">Nguyen Duc Anh</span>
            </div>
            <div className="rightbarContact">
              <div className="rightbarContactsActive">
                <img src={avatar} alt="" className="rightbarContactImg" />
                <div className="rightbarContactsBadge"></div>
              </div>
              <span className="rightbarContactsName">Nguyen Duc Anh</span>
            </div>
            <div className="rightbarContact">
              <div className="rightbarContactsActive">
                <img src={avatar} alt="" className="rightbarContactImg" />
                <div className="rightbarContactsBadge"></div>
              </div>
              <span className="rightbarContactsName">Nguyen Duc Anh</span>
            </div>
            <div className="rightbarContact">
              <div className="rightbarContactsActive">
                <img src={avatar} alt="" className="rightbarContactImg" />
                <div className="rightbarContactsBadge"></div>
              </div>
              <span className="rightbarContactsName">Nguyen Duc Anh</span>
            </div>
            <div className="rightbarContact">
              <div className="rightbarContactsActive">
                <img src={avatar} alt="" className="rightbarContactImg" />
                <div className="rightbarContactsBadge"></div>
              </div>
              <span className="rightbarContactsName">Nguyen Duc Anh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
