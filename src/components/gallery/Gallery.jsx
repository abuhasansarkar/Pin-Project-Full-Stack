import { useInfiniteQuery } from "@tanstack/react-query";
import GallaryItem from "../gallaryItem/GallaryItem";
import "./gallary.css";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Gallery = ({ search, userId, boardId }) => {
  const fetchPins = async ({ pageParam, search }) => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/pins?cursor=${pageParam}&search=${
        search || ""
      }&userId=${userId || ""}&boardId=${boardId || ""} `
    );
    return res.data;
  };
  // Queries
  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: [`pins, ${search}`],
    queryFn: ({ pageParm = 0 }) =>
      fetchPins({ pageParm, search, userId, boardId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  if (status === "pending") return "Loading...";
  if (status === "error") return "Something want wrong...";

  // console.log(data);

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
