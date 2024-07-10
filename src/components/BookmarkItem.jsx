import React, { useState } from "react";

const BookmarkItem = ({ category, bookmarks }) => {
  const [select, setSelect] = useState("");

  const toggleSelect = () => {
    setSelect((prev) => (prev === "active" ? "" : "active"));
  };
  return (
    <>
      <div className="mb-4">
        <div
          onClick={toggleSelect}
          className="cursor-pointer rounded pl-1 px-4 py-3 flex justify-start items-center hover:bg-gray-50">
          <svg
            className={
              select === "active"
                ? "w-4 h-4 mr-2 text-gray-800"
                : "hidden w-4 h-4 mr-2 text-gray-800"
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 10">
            <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
          </svg>
          <svg
            className={
              select === "active"
                ? "hidden w-4 h-4 mr-2 text-gray-800"
                : "w-4 h-4 mr-2 text-gray-800"
            }
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 16">
            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
          </svg>
          <h1 className="text-[22px] font-bold text-gray-800">{category}</h1>
        </div>
        <div
          className={
            select === "active"
              ? "grid grid-cols-2 mt-4 gap-x-4 gap-y-4"
              : "hidden"
          }>
          {bookmarks.map((item, index) => {
            return (
              <>
                <a
                  target="_blank"
                  href={item.link}
                  key={index}
                  className="flex justify-between items-center p-4 md:p-6 bg-white rounded shadow hover:bg-gray-50 cursor-pointer gap-3">
                  <div>
                    <h2 className="text-[12px] md:text-[16px] font-[400]">
                      {item.name}
                    </h2>
                    <p className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded md:inline-block mt-2 hidden ">
                      {item.tag}
                    </p>
                  </div>
                  <img className="h-6 md:h-12 rounded" src={item.logo} alt="" />
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
