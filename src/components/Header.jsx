import React, { useState } from "react";
import { bookmark_list } from "../assets/assets";

const Header = () => {
  const [menu, setMenu] = useState("All");
  return (
    <>
      <div className="flex justify-center gap-x-6 gap-y-4 my-10 flex-wrap">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? "bg-gray-800 text-white py-1 px-4 rounded-sm"
              : "hover:bg-gray-100 py-1 px-3 rounded-sm"
          }>
          All
        </button>
        {bookmark_list.map((item, index) => {
          return (
            <>
              <button
                key={index}
                onClick={() => setMenu(item.category)}
                className={
                  menu === item.category
                    ? "bg-gray-800 text-white py-1 px-4 rounded-sm"
                    : "hover:bg-gray-100 py-1 px-3 rounded-sm"
                }>
                {item.category}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Header;
