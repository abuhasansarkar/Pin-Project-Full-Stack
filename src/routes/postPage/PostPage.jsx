import axios from "axios";
import Comment from "../../components/comment/Comment";
import Gallery from "../../components/gallery/Gallery";
import IKImage from "../../components/ikimage/IKImage";
import PostInteraction from "../../components/postInteraction/PostInteraction";
import "./postPage.css";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import apiRequest from "../../utils/apiRequest";

const PostPage = () => {
  let params = useParams();
  console.log(params.id);

  const { isPending, error, data } = useQuery({
    queryKey: ["pin", params.id],
    queryFn: () => apiRequest.get(`/pins/${params.id}`).then((res) => res.data),
  });

  if (isPending) return "Loading.........";
  if (error) return "An Error has occured:" + error.message;

  if (!data) return "No Pin found";

  console.log(data);

  return (
    <>
      <div className="postPage">
        <div className="postContainer">
          <div className="postImage">
            <IKImage
              src={data?.media}
              alt="Pin"
              w={data?.width}
              h={data?.height}
            />
          </div>
          <div className="postDetails">
            {/* User Interaction */}
            <PostInteraction />
            {/* User Info */}
            <Link to={`/profile/${data?.user.username}`} className="postUser">
              <IKImage
                src={
                  data?.user.profilePicture
                    ? data?.user.profilePicture
                    : "/general/noAvatar.png"
                }
                alt="User"
              />
              <span>{data?.user.name}</span>
            </Link>

            {/* Comment */}

            <Comment pinId={data._id} />
          </div>
        </div>
      </div>
      {/* Related Pin Post */}
      <Gallery />
    </>
  );
};

export default PostPage;
