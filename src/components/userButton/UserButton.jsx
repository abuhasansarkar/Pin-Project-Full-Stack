import { useState } from "react";
import "./userButton.css";
import { Link, useNavigate } from "react-router";
import apiRequest from "../../utils/apiRequest";
import useAuthStore from "../../utils/authStore";
import IKImage from "../ikimage/IKImage";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Temp User
  // const currentUser = true; // Replace with actual user check logic

  const { currentUser, removeCurrentUser } = useAuthStore();

  console.log(currentUser);

  const handleLogOut = async () => {
    try {
      await apiRequest.post("/users/logout", {});
      removeCurrentUser();
      setOpen(false);
      console.log("User logged out");
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="userButton">
      {currentUser ? (
        <div className="userInfo">
          <div onClick={() => setOpen(!open)} className="userButton">
            <IKImage
              className="userImg"
              src={currentUser.profilePicture || "/general/noAvatar.png"}
              alt="User Icon"
            />
            <span className="userName">{currentUser.name}</span>
            <IKImage
              className="arrow"
              src="/general/arrow.svg"
              alt="User Icon"
            />
          </div>

          {open && (
            <ul className="userOptions">
              <Link to={`/profile/${currentUser.username}`} className="">
                Profile
              </Link>
              <Link to="/settings" className="">
                Setting
              </Link>
              <Link to="/auth" onClick={handleLogOut} className="">
                LogOut
              </Link>
            </ul>
          )}
        </div>
      ) : (
        <Link to="/auth" className="loginButton">
          Login/Signup
        </Link>
      )}
    </div>
  );
};

export default UserButton;
