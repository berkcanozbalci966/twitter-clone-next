import React from "react";

export default function SidebarLink({ Icon, text, activate }) {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hover-animation ${
        activate && "font-bold"
      } `}
    >
      <Icon className="h-7 text-white" />
      <span className="hidden xl:inline">{text}</span>
    </div>
  );
}
