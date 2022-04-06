import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://d30rdpcpvc9rnp.cloudfront.net/logo.png" />
        <span className="help-text">HopeQureMeet</span>
      </div>
      
    </div>
  );
};
export default Header;
