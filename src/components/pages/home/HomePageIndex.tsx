import { Cards } from "../../global/cards/Cards";

export const HomePageIndex = () => {
  return (
    <div className="flex flex-col gap-3 p-1 bg-slate-100">
      <div className="w-[100%] h-[500px]">   
        <img
          src="/images/cat.jpg"
          alt=""
          className="w-[100%] h-[100%] object-cover rounded "
        />
      </div>
      <div>
        <h1 className="bg-blue-600 p-2 font-semibold uppercase text-white mb-2">
          newly added
        </h1>
        <div className="flex gap-2">
          <Cards />
        </div>
      </div>
      <div>
        <h1 className="bg-blue-600 p-2 font-semibold uppercase text-white mb-2">
          trending
        </h1>
        <div className="flex gap-2">
          <Cards />
        </div>
      </div>
    </div>
  );
}

