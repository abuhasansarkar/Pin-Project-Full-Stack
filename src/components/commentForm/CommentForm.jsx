import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import apiRequest from "../../utils/apiRequest";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Function to add a comment
const addComment = async (comment) => {
  const res = await apiRequest.post("/comments", comment);
  return res.data;
};

const CommentForm = ({ pinId }) => {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");
  // console.log(desc);
  const handleEmojiClick = (emoji) => {
    setDesc((prev) => prev + " " + emoji.emoji);
    setOpen(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comment", pinId],
      });
      setDesc("");
      setOpen(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate({
      description: desc,
      pin: pinId,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="commentForm">
      <input
        onChange={(e) => setDesc(e.target.value)}
        type="text"
        placeholder="Add a comment..."
        value={desc}
      />
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
              onEmojiClick={handleEmojiClick}
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
