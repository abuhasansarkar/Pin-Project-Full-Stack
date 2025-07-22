import { useState } from "react";
import IKImage from "../ikimage/IKImage";
import "./comment.css";

import EmojiPicker from "emoji-picker-react";

const Comment = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 Comments</span>
        {/* Comment */}
        <div className="comment">
          <IKImage src="/general/noAvatar.png" alt="userImg" />
          <div className="commentContent">
            <p className="commentText">
              <b className="commentUser">John Doe : </b>
              This is a sample comment text. It can be quite long, so it should
              wrap properly within the comment box.
            </p>
            <i className="commentDate">2 hour ago</i>
          </div>
        </div>
        <div className="comment">
          <IKImage src="/general/noAvatar.png" alt="userImg" />
          <div className="commentContent">
            <p className="commentText">
              <b className="commentUser">John Doe : </b>
              This is a sample comment text. It can be quite long, so it should
              wrap properly within the comment box.
            </p>
            <i className="commentDate">2 hour ago</i>
          </div>
        </div>
        <div className="comment">
          <IKImage src="/general/noAvatar.png" alt="userImg" />
          <div className="commentContent">
            <p className="commentText">
              <b className="commentUser">John Doe : </b>
              This is a sample comment text. It can be quite long, so it should
              wrap properly within the comment box.
            </p>
            <i className="commentDate">2 hour ago</i>
          </div>
        </div>
      </div>

      {/* Comment Input Form */}
      <form className="commentForm">
        <input type="text" placeholder="Add a comment..." />
        <div className="emoji">
          <span
            onClick={() => setOpen((prev) => !prev)}
            role="img"
            aria-label="emoji"
          >
            😊
          </span>

          {open && (
            <div className="emojiPicker">
              <EmojiPicker
                onEmojiClick={(event, emojiObject) => {
                  console.log(emojiObject);
                }}
                disableSearchBar={true}
                disableSkinTonePicker={true}
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comment;
