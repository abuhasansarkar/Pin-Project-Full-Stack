import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";

const CommentForm = () => {
  const [open, setOpen] = useState(false);
  return (
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
  );
};

export default CommentForm;
