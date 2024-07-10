import React from "react";

const BookmarkItem = ({ category, bookmarks }) => {
  return (
    <>
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
          {category}
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-x-4 gap-y-4">
          {bookmarks.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="flex justify-between items-center max-w-sm p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer">
                  <div>
                    <h2 className="text-[12px] md:text-[16px]">{item.name}</h2>
                    <p className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2 py-1 rounded dark:bg-red-900 md:inline-block md:block mt-2 hidden ">
                      {item.tag}
                    </p>
                  </div>
                  <img className="h-6 md:h-12 rounded" src={item.logo} alt="" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BookmarkItem;
