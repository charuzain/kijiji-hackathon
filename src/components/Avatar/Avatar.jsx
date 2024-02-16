import './Avatar.scss';
import verifyIcon from '../../assets/icon.svg';
import '@fortawesome/fontawesome-free/css/all.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar__container">
        {/* <img src={userImage} alt="Avatar" /> */}
        {/* </div> */}
        <div className="avatar__badge">
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
      </div>
      <div className="information">
        <div className="details">
          <p className="name">John Doe</p>
          <p className="date">Joined: January 1, 2022</p>
          <p className="location">Location: New York</p>
          <div className="rating">
            <p>Rating:</p>
            {/* Stars component */}
            <div className="stars">{/* Your stars component goes here */}</div>
            <p>4.5 (100)</p>
          </div>
        </div>

        {/* Icons */}
        <div className="icons">
          <div className="icon">Phone</div>
          <div className="icon">Email</div>
          <div className="icon">Facebook</div>
        </div>
      </div>

      {/* Active status */}
      <div className="active-status">
        <p>Active 10 minutes ago</p>
      </div>
    </div>
  );
}

export default Avatar;
