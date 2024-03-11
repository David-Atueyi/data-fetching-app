import { NavLink } from "react-router-dom";
import movies from "../../../base/dummyDatas/dummyData.json";
import { IMovie } from "../../../base/interface/IMovie";

export const Cards = () => {
  return (
    <>
      {movies.map((movie: IMovie) => (
        <NavLink to={`/movie_details/${movie.movieId}`} className="border-2 rounded w-[190px] flex flex-col hover:shadow-xl transition-shadow duration-500 bg-white group">
          <div className="h-[160px]">
            <img
              src={movie.image}
              alt=""
              className="w-[100%] h-[100%] object-cover rounded group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="p-2">
            <h3 className="uppercase font-bold">{movie.movieTitle}</h3>
            <p>{movie.movieDescription}</p>
          </div>
        </NavLink>
      ))}
    </>
  );
};
