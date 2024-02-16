import Avatar from '../../components/Avatar/Avatar';
import './UserProfile.scss';
import facebookIcon from '../../assets/facebook.png';
import phoneIcon from '../../assets/phone-call.png';
import emailIcon from '../../assets/email.png';
import chatIcon from '../../assets/chat1.png';
import SocialItem from '../../components/SocialItem/SocialItem';
import ReviewChip from '../../components/ReviewChip/ReviewChip';
import Divider from '../../components/Divider/Divider';
import ProductCard from '../../components/ProductCard/ProductCard';
import image1 from '../../assets/product1.webp';
import image2 from '../../assets/product2.webp';
import image3 from '../../assets/product3.webp';
import image4 from '../../assets/product4.webp';
import image5 from '../../assets/product1.webp';
import header from '../../assets/header.png';

const UserProfile = () => {
  const products = [
    {
      image: image1,
      productName: 'Vtech',
      price: '32.00',
      location: 'NorthYork',
    },
    {
      image: image2,
      productName: 'Soft Toy',
      price: '32.00',
      location: 'NorthYork',
    },
    {
      image: image3,
      productName: 'Car',
      price: '32.00',
      location: 'NorthYork',
    },
    {
      image: image4,
      productName: 'Trucks',
      price: '32.00',
      location: 'NorthYork',
    },
    {
      image: image5,
      productName: 'Vtech Learn',
      price: '32.00',
      location: 'NorthYork',
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="profile__star">
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <main className="profile">
        <img src={header} alt="Header" className="header" />
        <div className="profile__wrapper">
          <div className="profile__left-container">
            <Avatar />
            <div className="profile__details">
              <p>James Lu</p>
              <p>Joined Jan 2014</p>
              <p>NorthYork, ON</p>
              <div className="profile__rating">{renderStars(5)} (300)</div>{' '}
            </div>
          </div>
          <div className="profile__right-container">
            <div className="profile__right-header">
              <h3>Responds in a few minutes</h3>
              <h3>Active one hour ago</h3>
            </div>
            <div className="profile__social-container">
              <SocialItem
                icon={facebookIcon}
                description1="Confirmed"
                description2="Facebook"
              />
              <SocialItem
                icon={phoneIcon}
                description1="Confirmed"
                description2="Phone"
              />
              <SocialItem
                icon={emailIcon}
                description1="Confirmed"
                description2="Email"
              />
              <SocialItem
                icon={chatIcon}
                description1="90%"
                description2="Reply Rate"
              />
              {/* <div className="profile__social">
              <img src={facebookIcon} alt="Facebook" className="icon" />
              <p className="profile__social-description">Confirmed</p>
              <p className="profile__social-description">Facebook</p>
            </div> */}
              {/* <div className="profile__social">
              <img src={phoneIcon} alt="Facebook" className="icon" />
              <p className="profile__social-description">Confirmed</p>
              <p className="profile__social-description">Phone</p>
            </div> */}
              {/* <div className="profile__social">
              <img src={emailIcon} alt="Facebook" className="icon" />
              <p className="profile__social-description">Confirmed</p>
              <p className="profile__social-description">Email</p>
            </div> */}
              {/* <div className="profile__social">
              <img src={chatIcon} alt="Facebook" className="icon" />
              <p className="profile__social-description">90%</p>
              <p className="profile__social-description">Reply Rate</p>
            </div> */}
            </div>
          </div>
        </div>
        <p className="verified">Kijiji Verified Member</p>
        <div className="profile__bottom-container">
          <div className="stats-container">
            <div className="stat">
              <p className="number">3</p>
              <p className="label">Bought</p>
            </div>
            <div className="stat">
              <p className="number">800</p>
              <p className="label">Sold</p>
            </div>
            <div className="stat">
              <p className="number">80</p>
              <p className="label">Followers</p>
            </div>
          </div>
          <div className="review">
            <p>Top Reviews</p>
            <ReviewChip number={20} compliment="Item as described" />
            <ReviewChip number={120} compliment="Reliable" />
            <ReviewChip number={125} compliment="Quick Response" />
            <ReviewChip number={150} compliment="Showed up on time" />
            <ReviewChip number={200} compliment="Friendly" />
            <ReviewChip number={100} compliment="Fair Negotiation" />
          </div>
        </div>
        <Divider />
        <section className="products">
          <h2>Items from this seller</h2>
          <div className="product-container">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                productName={product.productName}
                price={product.price}
                location={product.location}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default UserProfile;
