import { NavLink } from "react-router-dom";
import { IMovie } from "../../../base/interface/IMovie";

export const watchListMovies: IMovie[] = [];

export const WatchListPageIndex = () => {
  console.log(watchListMovies);

  return (
    <div className="flex gap-2 flex-wrap mt-2">
      {watchListMovies.map((watchListMovie: IMovie) => (
        <NavLink
          to={`/movie_details/${watchListMovie.movieId}`}
          className="border-2 rounded w-[190px] flex flex-col hover:shadow-xl transition-shadow duration-500 bg-white group"
        >
          <div className="h-[160px]">
            <img
              src={watchListMovie.image}
              alt=""
              className="w-[100%] h-[100%] object-cover rounded group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="p-2">
            <h3 className="uppercase font-bold">{watchListMovie.movieTitle}</h3>
            <p>{watchListMovie.movieDescription}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
