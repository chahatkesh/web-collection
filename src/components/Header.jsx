import React, { useState } from "react";
import { bookmark_list } from "../assets/assets";

const Header = () => {
  const [menu, setMenu] = useState("All");
  return (
    <>
      <div className="flex justify-center gap-6 my-10 ">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
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
                    ? "bg-black text-white py-1 px-4 rounded-sm"
                    : ""
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
