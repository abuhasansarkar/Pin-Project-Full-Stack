import IKImage from "../ikimage/IKImage";
import "./comment.css";

import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";

import { format } from "timeago.js";
import CommentForm from "../commentForm/CommentForm";

const Comment = ({ id }) => {
  console.log("Pin Post Id:" + id);

  const { isPending, error, data } = useQuery({
    queryKey: ["comment", id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading.........";
  if (error) return "An Error has occured:" + error.message;

  if (!data) return "No Comments found";

  console.log(data);

  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">
          {data?.length === 0 ? "No Comment" : `${data.length} Comments`}
        </span>
        {/* Comment */}
        {data.map((comment) => (
          <div key={comment._id} className="comment">
            <IKImage
              src={comment?.user.profilePicture || "/general/noAvatar.png"}
              alt="userImg"
            />
            <div className="commentContent">
              <p className="commentText">
                <b className="commentUser">{comment?.user.name} : </b>
                {comment?.description}
              </p>
              <i className="commentDate">{format(comment.createdAt)}</i>
            </div>
          </div>
        ))}
      </div>

      {/* Comment Input Form */}
      <CommentForm />
    </div>
  );
};

export default Comment;
