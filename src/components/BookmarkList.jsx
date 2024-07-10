import React from "react";
import { bookmark_list } from "../assets/assets";
import BookmarkItem from "./BookmarkItem";

const BookmarkList = () => {
  return (
    <>
      <div>
        {bookmark_list.map((categoryItem, index) => (
          <BookmarkItem
            key={index}
            category={categoryItem.category}
            bookmarks={categoryItem.bookmarks}
          />
        ))}
      </div>
    </>
  );
};

export default BookmarkList;
