import React from "react";

const Page = ({}) => {
  return (
    <div className="relative">
      <div className="h-96 overflow-hidden">
        <div className="w-full h-full">
          <img
            className="object-cover inline-block w-full h-full"
            src="/assets/default-bg.jpg"
            alt="Cover"
          />
        </div>
        <div className="absolute bottom-4 left-4 z-10 w-16 h-16 cursor-pointer hover:opacity-90 hover:bg-zinc-50 p-1 rounded-lg">
          <img
            src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f579-fe0f.svg"
            alt="Icon"
            className="object-cover inline-block w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
