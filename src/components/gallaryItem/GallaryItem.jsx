import "./gallaryItem.css";
import { Link } from "react-router";
import IKImage from "../ikimage/IKImage";

const GallaryItem = ({ item }) => {
  const optimzeHeight = item.height > 100 ? item.height : 100; // Ensure minimum height for grid layout
  return (
    <div
      key={item.id}
      className="gallaryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      {/* <img src={item.media} alt={`Gallery item ${item.id}`} /> */}
      {/* <Image
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        src={item.media}
        alt={`Gallery item ${item.id}`}
        className="gallaryImage"
        loading="lazy"
        lqi={{ actove: true, quality: 20 }}
        transformation={[{ height: item.height, width: item.width }]}
      /> */}
      <IKImage
        src={item.media}
        alt={`Gallery item ${item._id}`}
        w={item.width}
        h={optimzeHeight}
        className={"gallaryImage"}
      />

      <Link to={`/pin/${item._id}`} className="overlay">
        <button className="saveButton">Save</button>
        <div className="overlyIcons">
          <button>
            <IKImage src="/general/share.svg" alt="share" />
          </button>
          <button>
            <IKImage src="/general/more.svg" alt="more" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default GallaryItem;
