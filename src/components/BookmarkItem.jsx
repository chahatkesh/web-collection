import React from "react";

const BookmarkItem = ({ category, bookmarks }) => {
  return (
    <>
      <div className="mb-8">
        <div className="flex justify-start items-center">
          <svg
            className="w-5 h-5 mr-2 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 10 16">
            <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
          </svg>
          <h1 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
            {category}
          </h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-x-4 gap-y-4">
          {bookmarks.map((item, index) => {
            return (
              <>
                <a
                  href={item.link}
                  key={index}
                  className="flex justify-between items-center max-w-sm p-4 md:p-6 bg-white  rounded-lg shadow hover:bg-gray-100 cursor-pointer gap-3">
                  <div>
                    <h2 className="text-[12px] md:text-[16px] font-[400]">
                      {item.name}
                    </h2>
                    <p className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-gray-500 md:inline-block mt-2 hidden ">
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
