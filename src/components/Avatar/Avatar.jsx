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
    </div>
  );
}

export default Avatar;
