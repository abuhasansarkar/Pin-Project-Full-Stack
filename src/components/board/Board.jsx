import { Link } from "react-router";
import apiRequest from "../../utils/apiRequest";
import IKImage from "../ikimage/IKImage";
import "./board.css";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
const Board = ({ userId }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["boards", userId],
    queryFn: () => apiRequest.get(`/boards/${userId}`).then((res) => res.data),
  });

  if (isPending) return "Loading.........";
  if (error) return "An Error has occured:" + error.message;

  if (!data) return "No Boards found";

  console.log(data);

  return (
    <div className="collections">
      {/* COLLECTION */}
      {data?.map((board) => (
        <Link
          to={`/search?boardId=${board._id}`}
          key={board._id}
          className="collection"
        >
          <IKImage
            className="collectionImg"
            src={board?.firstPin.media}
            alt="pin"
          />
          <div className="collectionInfo">
            <h2>{board?.title}</h2>
            <span>
              {board?.pinCount} Pins • {format(board.createdAt)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Board;
