import React from "react";

const Sidebar = () => {
  return (
    <div className="w-full h-full">
      <div className="">
        <button className="flex items-center justify-start text-left text-sm font-medium w-full px-3 hover:bg-gray-200 py-3 text-stone-800">
          <i className="fas fa-plus mr-2"></i> <p>Add Page</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
