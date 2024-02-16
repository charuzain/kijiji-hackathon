import Avatar from '../../components/Avatar/Avatar';
import './UserProfile.scss';

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
      <div className="profile__left-container">
        <Avatar />
        <div className="profile__details">
          <p>James Lu</p>
          <p>Joined Jan 2014</p>
          <p>NorthYork, ON</p>
          <div className="profile__rating">{renderStars(5)} (300)</div>{' '}
        </div>
      </div>
      <p>KijiJi Verified Member</p>
    </main>
  );
};

export default UserProfile;
