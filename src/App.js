import { useState } from "react";
import SearchableParagraph from "./components/SearchableParagraph";

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const changeEventHandler = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col gap-6 w-3/4 mx-auto mt-10 p-8 align-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
        <label htmlFor="search-keyword" />
        <input
          onChange={changeEventHandler}
          className="w-2/4 mx-auto px-4 py-2 border-2 border-black-600"
          id="search-keyword"
          type="search"
          placeholder="search..."
        />
        <SearchableParagraph keyword={searchKeyword}></SearchableParagraph>
      </div>
    </>
  );
}

export default App;
