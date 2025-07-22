import Comment from "../../components/comment/Comment";
import Gallery from "../../components/gallery/Gallery";
import IKImage from "../../components/ikimage/IKImage";
import PostInteraction from "../../components/postInteraction/PostInteraction";
import "./postPage.css";
import { Link, useParams } from "react-router";

const PostPage = () => {
  let params = useParams();
  console.log(params.id);
  return (
    <>
      <div className="postPage">
        <div className="postContainer">
          <div className="postImage">
            <IKImage src="/pins/pin10.jpeg" alt="" w={736} />
          </div>
          <div className="postDetails">
            {/* User Interaction */}
            <PostInteraction />
            {/* User Info */}
            <Link to="/abuhasan" className="postUser">
              <IKImage src="/general/noAvatar.png" alt="User" />
              <span>Username</span>
            </Link>

            {/* Comment */}

            <Comment />
          </div>
        </div>
      </div>
      {/* Related Pin Post */}
      <Gallery />
    </>
  );
};

export default PostPage;
