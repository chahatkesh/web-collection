import React from "react";
import { bookmark_list } from "../assets/assets";
import BookmarkItem from "./BookmarkItem";

const BookmarkList = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-x-4 gap-y-0">
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
