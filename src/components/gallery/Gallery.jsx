import { useInfiniteQuery } from "@tanstack/react-query";
import GallaryItem from "../gallaryItem/GallaryItem";
import "./gallary.css";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
// Temp
// const items = [
//   { id: 1, media: "/pins/pin1.jpeg", width: 1260, height: 800 },
//   { id: 2, media: "/pins/pin2.jpeg", width: 1260, height: 900 },
//   { id: 3, media: "/pins/pin3.jpeg", width: 1260, height: 1100 },
//   { id: 4, media: "/pins/pin4.jpeg", width: 800, height: 690 },
//   { id: 5, media: "/pins/pin5.jpeg", width: 800, height: 650 },
//   { id: 6, media: "/pins/pin6.jpeg", width: 800, height: 600 },
//   { id: 7, media: "/pins/pin7.jpeg", width: 800, height: 1600 },
//   { id: 8, media: "/pins/pin8.jpeg", width: 800, height: 1200 },
//   { id: 9, media: "/pins/pin9.jpeg", width: 800, height: 600 },
//   { id: 10, media: "/pins/pin10.jpeg", width: 800, height: 650 },
//   { id: 11, media: "/pins/pin11.jpeg", width: 800, height: 3020 },
//   { id: 12, media: "/pins/pin12.jpeg", width: 800, height: 1500 },
//   { id: 13, media: "/pins/pin13.jpeg", width: 800, height: 600 },
//   { id: 14, media: "/pins/pin14.jpeg", width: 800, height: 700 },
//   { id: 15, media: "/pins/pin15.jpeg", width: 800, height: 1100 },
//   { id: 16, media: "/pins/pin16.jpeg", width: 800, height: 600 },
//   { id: 17, media: "/pins/pin17.jpeg", width: 800, height: 1100 },
//   { id: 18, media: "/pins/pin18.jpeg", width: 800, height: 1600 },
//   { id: 19, media: "/pins/pin19.jpeg", width: 800, height: 800 },
//   { id: 20, media: "/pins/pin20.jpeg", width: 800, height: 800 },
// ];

const Gallery = () => {
  const fetchPins = async ({ pageParam }) => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}`
    );
    return res.data;
  };
  // Queries
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["pins"],
    queryFn: fetchPins,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  if (status === "pending") return "Loading...";
  if (status === "error") return "Something want wrong...";

  console.log(data);

  const allPins = data?.pages.flatMap((page) => page.pins) || [];

  return (
    <InfiniteScroll
      dataLength={allPins.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more pins.....</h4>}
      endMessage={<h3>All Post Loaded </h3>}
    >
      <div className="gallary">
        {allPins?.map((item) => (
          <GallaryItem item={item} key={item._id} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
