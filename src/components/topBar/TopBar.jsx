import { useNavigate } from "react-router";
import UserButton from "../userButton/UserButton";
import "./tobBar.css";

const TopBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?search=${e.target[0].value}`);
  };
  return (
    <div className="topBar">
      {/* SEARCH */}
      <form onSubmit={handleSubmit} className="searchBar">
        <img src="/general/search.svg" alt="SearchIcon" />
        <input type="text" placeholder="Search..." />
      </form>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;
