import "./ProductPage.scss";
import bedding from "../../assets/Images/bedding.png";
import Likes from "../../assets/Icons/favorite_FILL0_wght400_GRAD0_opsz24.svg";
import View from "../../assets/Icons/visibility_FILL0_wght400_GRAD0_opsz24.svg";
import Other from "../../assets/Images/Other-products.png";
import Profile from "../../assets/Images/Profile.png";
import header from "../../assets/Images/header.png";
import { Link } from "react-router-dom";

export default function ProductPage() {
  return (
    <>
      <Link to="/social">
        <img src={header} alt="header image" className="Product__header" />{" "}
      </Link>

      <section className="Product">
        <div className="Product-main">
          <h1 className="Product-main__heading">Ikea Couch</h1>
          <p className="Product-main__price"> $700</p>
          <section className="Product-main__image">
            <img
              src={bedding}
              alt="Bedding"
              className="Product-main__image-img"
            />
          </section>
          <h3 className="Product-main__description-heading"> Description</h3>
          <p className="Product-main__description">
            Moving sale. Currently moving out. Apartment size style sofa. Bought
            this about 6/7 months ago. Paid close to $1800 from Ikea. Priced the
            sofa for a quick sale, serious buyers only please. Can be dissembled
            as well. $700 .
          </p>
          <div className="Product-main__buttons">
            <button className="Product-main__buttons-view">
              <img
                src={View}
                alt="Visits-icon"
                className="Product-main__buttons-view-img"
              />
              68 visits
            </button>
            <button className="Product-main__buttons-likes">
              <img
                src={Likes}
                alt="saves-icon"
                className="Product-main__buttons-likes-img"
              />
              24 saves
            </button>
            <button className="Product-main__buttons-pay">
              <Link
                to="/escrowService"
                className="Product-main__buttons-pay-link"
              >
                {" "}
                Pay and Reserve
              </Link>
            </button>
          </div>
        </div>
        <div className="Product-profile">
          <Link to="/profile" className="Product-main__buttons-pay-link">
            <img
              className="Product-profile__image"
              src={Profile}
              alt="profile section"
            />
          </Link>
        </div>
      </section>
      <section className="Product-suggested">
        <img
          className="Product-suggested__img"
          src={Other}
          alt="Similar products"
        />
      </section>
    </>
  );
}
