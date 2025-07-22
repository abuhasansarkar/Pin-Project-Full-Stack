import IKImage from "../ikimage/IKImage";
import "./postInteraction.css";
const PostInteraction = () => {
  return (
    <div className="postInteraction">
      <div className="interaction">
        <button className="loveButton">
          <IKImage src="/general/react.svg" alt="react" /> 293
        </button>
        <button className="loveButton">
          <IKImage src="/general/share.svg" alt="share" />
        </button>
        <button className="loveButton">
          <IKImage src="/general/more.svg" alt="share" />
        </button>
      </div>
      <button className="saveButton">Save</button>
    </div>
  );
};

export default PostInteraction;
