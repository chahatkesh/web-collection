import React from "react";
import BookmarkList from "./components/BookmarkList";

const App = () => {
  return (
    <div className="w-[95vw] h-[95vh] m-auto bg-white rounded-md px-6 py-8 overflow-scroll">
      <BookmarkList />
    </div>
  );
};

export default App;
