import { Image } from "@imagekit/react";
import "./ikmage.css";

const IKImage = ({ src, alt, className, w, h }) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      lqip={{ actove: true, quality: 20 }}
      transformation={[{ height: h, width: w }]}
    />
  );
};

export default IKImage;
