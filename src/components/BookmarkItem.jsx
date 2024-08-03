import React, { useState } from "react";

const BookmarkItem = ({ hcolor, color, category, bookmarks }) => {
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="px-4 pt-6 pb-8 rounded">
        <h1
          style={{ color: hcolor }}
          className="text-[14px] md:text-[18px] font-medium pl-1">
          {category}
        </h1>
        <div className="grid grid-cols-2 mt-4 gap-x-3 gap-y-3">
          {bookmarks.map((item, index) => {
            return (
              <>
                <a
                  target="_blank"
                  href={item.link}
                  key={index}
                  className="flex justify-between items-center p-2 md:p-2.5 bg-white rounded hover:bg-blue-100 cursor-pointer gap-3">
                  <div>
                    <h2 className="text-[12px] md:text-[16px] font-[400]">
                      {item.name}
                    </h2>
                  </div>
                  <img className="h-4 md:h-6 rounded" src={item.logo} alt="" />
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BookmarkItem;
