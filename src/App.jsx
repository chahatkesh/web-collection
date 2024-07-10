import React from "react";
import Header from "./components/Header";
import BookmarkList from "./components/BookmarkList";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <div className="flex flex-col w-[80%] m-auto">
        <div className="flex flex-col justify-between">
          <div className="hidden md:block">
            <Header />
          </div>
          <SearchBar />
        </div>
        <hr className="h-px my-2 md:my-8 bg-gray-200 border-0 "></hr>
        <BookmarkList />
      </div>
    </>
  );
};

export default App;
