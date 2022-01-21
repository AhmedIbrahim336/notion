import React from "react";

const Page = ({}) => {
  return (
    <div className="h-screen overflow-y-scroll">
      <div className="h-96 relative overflow-hidden">
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

      <div className="mt-5 mx-8">
        <h1 className="text-5xl font-semibold">Electron Notion</h1>
        <div className="mt-4">
          <div className="grid grid-cols-12">
            <p className="col-span-3 flex items-center justify-start text-gray-500">
              <i className="fas fa-clock mr-2 "></i>
              <p>Date Created</p>
            </p>

            <p className="col-span-4 font-thin ">January 21, 2022 4:19 PM</p>
          </div>
        </div>
      </div>

      <div className="mt-5 px-5 w-full h-full ">
        <textarea className="px-4 py-2 font-medium w-full h-full border-none focus:outline-none bg-gray-50"></textarea>
      </div>
    </div>
  );
};

export default Page;
