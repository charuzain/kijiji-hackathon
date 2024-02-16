import React from 'react';

const SocialItem = ({ icon, description1, description2 }) => {
  return (
    <div className="profile__social">
      <img src={icon} alt={description1} className="icon" />
      <p className="profile__social-description">{description1}</p>
      <p className="profile__social-description">{description2}</p>
    </div>
  );
};

export default SocialItem;
