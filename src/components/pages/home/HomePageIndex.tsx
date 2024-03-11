import { Cards } from "../../global/cards/Cards";

export const HomePageIndex = () => {
  return (
    <div className="flex flex-col gap-3 p-1">
      <div className="w-[100%] h-[500px]">   
        <img
          src="/images/cat.jpg"
          alt=""
          className="w-[100%] h-[100%] object-cover rounded-sm"
        />
      </div>
      <div>
        <h1 className="bg-blue-600 p-2 font-semibold uppercase text-white mb-2">
          newly added
        </h1>
        <div className="flex gap-2 flex-wrap">
          <Cards />
        </div>
      </div>
      <div>
        <h1 className="bg-blue-600 p-2 font-semibold uppercase text-white mb-2">
          trending
        </h1>
        <div className="flex gap-2 flex-wrap">
          <Cards />
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        <button className="border bg-blue-500 rounded-md p-1 px-2 text-white capitalize hover:bg-blue-600 hover:scale-105 transition-all duration-300">previous</button>
        <button className="border bg-blue-500 rounded-md p-1 px-2 text-white capitalize hover:bg-blue-600 hover:scale-105 transition-all duration-300">next</button>
      </div>
    </div>
  );
}

