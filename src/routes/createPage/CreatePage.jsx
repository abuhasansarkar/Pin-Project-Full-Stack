import IKImage from "../../components/ikimage/IKImage";
import "./createPage.css";

const CreatePage = () => {
  return (
    <div className="createPin">
      {/* TOP PART */}
      <div className="createTop">
        <h2>Create Pin</h2>
        <button>Publish</button>
      </div>
      {/* BOTTOM PART */}
      <div className="createBottom">
        <div className="uploadImage">
          <div className="uploadTitle">
            <IKImage
              className="uploadFile"
              w={30}
              h={30}
              src="/general/upload.svg"
              alt="upload"
            />
            <span>Choose a File</span>
          </div>
          <p className="uploadDesc">
            We recommend using highly queryly images file less the 20 files less
            then 200 MB
          </p>
        </div>

        <div className="createForm">
          <form>
            <div className="formGroup">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" placeholder="Enter title" />
            </div>
            <div className="formGroup">
              <label htmlFor="description">Description</label>
              <textarea
                rows={6}
                id="description"
                placeholder="Enter Detail Description"
              ></textarea>
            </div>
            <div className="formGroup">
              <label htmlFor="link">Link</label>
              <input type="url" id="link" placeholder="Enter link (optional)" />
            </div>
            <div className="formGroup">
              <label htmlFor="board">Board</label>
              <select name="" id="">
                <option selected>Choose a Board</option>
                <option value="art">Art</option>
                <option value="photography">Photography</option>
                <option value="design">Design</option>
                <option value="technology">Technology</option>
              </select>
            </div>
            <div className="formGroup">
              <label htmlFor="board">Tagged topics (0) </label>
              <input
                type="text"
                id="topics"
                placeholder="Add topics (optional)"
              />
              <b>Don&apos;t Worry user can&apos;t see your tags </b>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
