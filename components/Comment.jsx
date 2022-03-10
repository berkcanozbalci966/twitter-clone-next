import React from "react";

export default function Comment({ id, comment }) {
  return (
    <div
      className="p-3 flex-cursor-pointer border-b
       border-gray-700"
    >
      <img src={comment?.userImg} alt="" />
      <div className="flex flx-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#6e767d]"></div>
        </div>
      </div>
    </div>
  );
}
