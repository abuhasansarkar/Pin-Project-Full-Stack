import { useState } from "react";
import IKImage from "../../components/ikimage/IKImage";
import "./userProfile.css";
import Gallery from "../../components/gallery/Gallery";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";
import Board from "../../components/board/Board";

const UserProfile = () => {
  const [type, setType] = useState("created");
  let params = useParams();
  console.log(params.username);

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", params.username],
    queryFn: () =>
      apiRequest.get(`/users/${params.username}`).then((res) => res.data),
  });

  if (isPending) return "Loading.........";
  if (error) return "An Error has occured:" + error.message;

  if (!data) return "No User found";

  console.log(data);

  return (
    <div className="userProfile">
      <IKImage
        className="profileImage"
        src={data?.profilePicture || "/general/noAvatar.png"}
        h={200}
        w={200}
      />
      <h2 className="profileName">{data?.name}</h2>
      <span className="profileUsername">@{data?.username}</span>
      <p className="profileBio">{data?.bio}</p>
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

      {type === "created" ? (
        <Gallery userId={data?._id} />
      ) : (
        <Board userId={data?._id} />
      )}
    </div>
  );
};

export default UserProfile;
