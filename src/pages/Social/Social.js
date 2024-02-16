import "./Social.scss";
import Settings from "../../styles/assets/settings.png";
import Suggested from "../../styles/assets/b1.png";
import Garagesale from "../../styles/assets/garagesale.jpg";
import Craftfair from "../../styles/assets/craftfairs.jpg";
import Header from "../../assets/Images/header.png";

export default function Social() {
  return (
    <>
      <img className="header" src={Header} alt="header" />
      <main className="parent">
        <div className="sidebarmainparent">
          <div className="sidebarparent">
            <section className="sidebar">
              <h2 className="sidebar__header">Groups</h2>
              <img
                className="sidebar__img"
                src={Settings}
                alt="settings icon"
              />
            </section>
            <form className="sidebar__form">
              <input
                type="search"
                className="sidebar__input"
                placeholder="Search"
              />
            </form>
            <ul className="sidebar__feed">
              <li className="sidebar__feedli">Your Feed</li>
              <li className="sidebar__feedli">Discover</li>
              <li className="sidebar__feedli">Your Groups</li>
            </ul>
            <button className="sidebar__button">+ Create New Group</button>
          </div>
          <div className="sidebarparent2">
            <h3 className="sidebar2__header">Suggested for You</h3>
            <img className="sidebar2__img" src={Suggested} alt="suggested" />
          </div>
        </div>
        <div className="mainparent">
          <h2 className="headp">Recent Activity</h2>
          <div className="firstfeed">
            <h2 className="firstfeed__header">Garage Sale- Oakville</h2>
            <p className="firstfeed__subheader1">Joe Doe</p>
            <p className="firstfeed__subheader2">
              {" "}
              . Top Seller . February 15 at 10:06 AM
            </p>
            <div className="imagetextparent">
              <div className="imageparent">
                <img
                  className="firstfeed__img"
                  src={Garagesale}
                  alt="craft fair"
                />
              </div>
              <div className="textparent">
                <p className="firstfeed__text1">
                  🌟 When: Saturday, February 28th, 12 pM - 5 PM
                  <br />
                  📍 Where: 1259 Main Street, Ancaster
                  <br />
                  📞 Contact: Jane Doe - (555) 123-4567 (Text or Call for
                  inquiries)
                  <br />
                  Join us for a huge garage sale with items from multiple
                  families! Everything must go! Great deals on gently used
                  items, perfect for bargain hunters and treasure seekers alike.
                </p>
              </div>
            </div>
          </div>

          <div className="secondfeed">
            <h2 className="firstfeed__header">Handmade Jewelry Craft Fair</h2>
            <p className="firstfeed__subheader1">Sara Leasing</p>
            <p className="firstfeed__subheader2">February 15 at 08:15 AM</p>
            <div className="imagetextparent">
              <div className="imageparent">
                <img
                  className="firstfeed__img"
                  src={Craftfair}
                  alt="craft fair"
                />
              </div>
              <div className="textparent">
                <p className="firstfeed__text1">
                  📅 Date: Saturday, March 25th
                  <br />
                  📍 Location: Harbor Town Community Center, 123 Seaside Lane,
                  Harbor Town
                  <br />
                  Dive into the heart of creativity at the Harbor Town Annual
                  Craft Fair! We're bringing together local artisans, craft
                  enthusiasts, and vibrant talents from across the region for a
                  one-of-a-kind shopping experience. Discover unique,
                  handcrafted goods that tell a story, from stunning jewelry and
                  ceramics to bespoke textiles and artisanal foods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
