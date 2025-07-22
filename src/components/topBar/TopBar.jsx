import UserButton from "../userButton/UserButton";
import "./tobBar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      {/* SEARCH */}
      <div className="searchBar">
        <img src="/general/search.svg" alt="SearchIcon" />
        <input type="text" placeholder="Search..." />
      </div>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;
