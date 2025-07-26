import { useState } from "react";
import "./userButton.css";
import { useNavigate } from "react-router";
import apiRequest from "../../utils/apiRequest";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Temp User
  const currentUser = true; // Replace with actual user check logic
  const handleLogOut = async () => {
    try {
      await apiRequest.post("/users/logout", {});
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
            <img
              className="userImg"
              src="/general/noAvatar.png"
              alt="User Icon"
            />
            <span className="userName">Jhon S.</span>
            <img className="arrow" src="/general/arrow.svg" alt="User Icon" />
          </div>

          {open && (
            <ul className="userOptions">
              <li className="">Profile</li>
              <li className="">Setting</li>
              <li onClick={handleLogOut} className="">
                LogOut
              </li>
            </ul>
          )}
        </div>
      ) : (
        <a href="/" className="loginButton">
          Login/Signup
        </a>
      )}
    </div>
  );
};

export default UserButton;
