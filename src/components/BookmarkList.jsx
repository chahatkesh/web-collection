import React from "react";
import { bookmark_list } from "../assets/assets";
import BookmarkItem from "./BookmarkItem";

const BookmarkList = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 md:gap-y-6">
        {bookmark_list.map((categoryItem, index) => (
          <BookmarkItem
            key={index}
            category={categoryItem.category}
            bookmarks={categoryItem.bookmarks}
            color={categoryItem.bgcolor}
            hcolor={categoryItem.hcolor}
          />
        ))}
      </div>
    </>
  );
};

export default BookmarkList;
