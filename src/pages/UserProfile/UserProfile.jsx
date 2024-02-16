import Avatar from '../../components/Avatar/Avatar';
import './UserProfile.scss';
import facebookIcon from '../../assets/facebook.png';
import phoneIcon from '../../assets/phone-call.png';
import emailIcon from '../../assets/email.png';
import chatIcon from '../../assets/chat1.png';
const UserProfile = () => {
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
    <main className="profile">
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
          <div className='profile__right-header'>
            <h3>Responds in a few minutes</h3>
            <h3>Active one hour ago</h3>
          </div>
          <div className="profile__social-container">
            <div className="profile__social">
              <img src={facebookIcon} alt="Facebook" className="icon" />
              <p className="profile__social-description">Confirmed</p>
              <p className="profile__social-description">Facebook</p>
            </div>
            <div className="profile__social">
              <img src={phoneIcon} alt="Facebook" className="icon" />
              <p className="profile__social-description">Confirmed</p>
              <p className="profile__social-description">Phone</p>
            </div>
            <div className="profile__social">
              <img src={emailIcon} alt="Facebook" className="icon" />
              <p className="profile__social-description">Confirmed</p>
              <p className="profile__social-description">Email</p>
            </div>
            <div className="profile__social">
              <img src={chatIcon} alt="Facebook" className="icon" />
              <p className="profile__social-description">90%</p>
              <p className="profile__social-description">Reply Rate</p>
            </div>
          </div>
        </div>
      </div>
      <p>KijiJi Verified Member</p>
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
    </main>
  );
};

export default UserProfile;
