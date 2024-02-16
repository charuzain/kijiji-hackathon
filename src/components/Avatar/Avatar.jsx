import './Avatar.scss';
import verifyIcon from '../../assets/icons8-tiktok-verified-account (1).svg';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '@fortawesome/fontawesome-free/css/all.css';

// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar__container">
        {/* <img src={userImage} alt="Avatar" /> */}
        {/* </div> */}
        <div className="avatar__badge">
       
          <img src={verifyIcon} alt="icon" />
          {/* <FontAwesomeIcon icon={faCircleCheck} /> */}
        </div>
      </div>
    </div>
  );
}

export default Avatar;
