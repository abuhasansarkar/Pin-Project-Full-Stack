import { useState } from "react";
import IKImage from "../../components/ikimage/IKImage";
import "./userProfile.css";
import Collection from "../../components/collection/Collection";
import Gallery from "../../components/gallery/Gallery";

const UserProfile = () => {
  const [type, setType] = useState("created");
  return (
    <div className="userProfile">
      <IKImage
        className="profileImage"
        src="/general/noAvatar.png"
        h={200}
        w={200}
      />
      <h2 className="profileName">AbuHasan</h2>
      <span className="profileUsername">@abuhasan</span>
      <p className="profileBio">
        Abu Hasan is a software developer with a passion for creating innovative
        solutions.
      </p>
      <p className="followCounts">5 followers • 10 following </p>

      <div className="interactionButtons">
        <IKImage className="interactionIcon" src="/general/share.svg" />
        <button className="messageButton">Message</button>
        <button className="followButton">Follow</button>
        <IKImage
          className="interactionIcon"
          src="/general/more.svg"
          alt="more"
        />
      </div>

      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "activeOption" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "activeOption" : ""}
        >
          Saved
        </span>
      </div>

      {type === "created" ? <Gallery /> : <Collection />}
    </div>
  );
};

export default UserProfile;
