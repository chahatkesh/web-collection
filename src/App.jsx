import React from "react";
import Header from "./components/Header";
import BookmarkList from "./components/BookmarkList";

const App = () => {
  return (
    <>
      <div className="flex flex-col w-[80%] m-auto">
        <Header />
        <BookmarkList />
      </div>
    </>
  );
};

export default App;
