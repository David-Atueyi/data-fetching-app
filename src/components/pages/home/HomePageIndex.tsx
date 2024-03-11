import { Cards } from "../../global/cards/Cards";

export const HomePageIndex = () => {
  return (
    <div className="flex flex-col gap-3 p-1">
      <div>
        <h1 className="text-center text-black p-2 font-bold uppercase mb-2">
          movies
        </h1>
        <div className="flex gap-2 flex-wrap">
          <Cards />
          <Cards/>
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        <button className="border bg-blue-500 rounded-md p-1 px-2 text-white capitalize hover:bg-blue-600 hover:scale-105 transition-all duration-300">previous</button>
        <button className="border bg-blue-500 rounded-md p-1 px-2 text-white capitalize hover:bg-blue-600 hover:scale-105 transition-all duration-300">next</button>
      </div>
    </div>
  );
}

