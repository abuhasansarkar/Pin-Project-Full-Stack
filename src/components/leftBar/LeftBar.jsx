import IKImage from "../ikimage/IKImage";
import "./leftBar.css";
import { Link } from "react-router";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/">
          <IKImage className="logo" src="/general/logo.png" alt="logo" />
        </Link>

        <Link to="/home">
          <IKImage src="/general/home.svg" alt="home" />
        </Link>
        <Link to="/create">
          <IKImage src="/general/create.svg" alt="create" />
        </Link>
        <Link to="/">
          <IKImage src="/general/updates.svg" alt="updates" />
        </Link>
        <Link to="/messages">
          <IKImage src="/general/messages.svg" alt="messages" />
        </Link>
      </div>
      <Link to="/">
        <IKImage src="/general/settings.svg" alt="messages" />
      </Link>
    </div>
  );
};

export default LeftBar;
