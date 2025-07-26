import { useSearchParams } from "react-router";
import Gallery from "../../components/gallery/Gallery";
import "./searchPage.css";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");
  const boardId = searchParams.get("boardId");
  return (
    <>
      {/* <h1 className="searchResult">Search: {search}</h1> */}
      <Gallery search={search} boardId={boardId} />
    </>
  );
};

export default SearchPage;
