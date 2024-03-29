import { useParams } from "react-router-dom";
import movies from "../../../base/dummyDatas/dummyData.json";
import { IMovie } from "../../../base/interface/IMovie";
import { PlayIcon } from "../../icons/PlayIcon";
import { PlusIcon } from "../../icons/PlusIcon";
import { ThumbsUpIcon } from "../../icons/ThumbsUpIcon";
import { VolumeIcon } from "../../icons/VolumeIcon";



export const MovieDetailsIndex = () => {
    
  const { movieId } = useParams<{ movieId: string }>();

  const movie = movies.find(
    (movie: IMovie) => movie.movieId === Number(movieId)
  );
  // 

  if (movie) {
    return (
      <div className="mt-1 bg-slate-100 h-full">
        <div className="w-[100%] h-[500px] relative">
          <img
            src={movie.image}
            alt={movie.movieTitle}
            className="w-[100%] h-[100%] object-cover rounded-sm"
          />
          <div className="absolute bottom-10 left-6 flex">
            <PlayIcon />
            <PlusIcon />
            <ThumbsUpIcon />
          </div>
          {/*  */}
          <div className="flex justify-end absolute bottom-10 right-6">
            <VolumeIcon />
          </div>
        </div>
        {/*  */}
       <div className="pl-2">
       <h1 className="text-2xl font-extrabold uppercase mt-2 mb-5 flex justify-center">
          {movie.movieTitle}
        </h1>
        <p>
          <span className="font-bold text-xl capitalize">title: </span>
          {movie.movieTitle}
        </p>
        <p>
          <span className="font-bold text-xl capitalize">year: </span>
          {movie.year}
        </p>
        <p>
          <span className="font-bold text-xl capitalize">movie description: </span>
          {movie.movieDescription}
        </p>
       </div>
      </div>
    );
  }
  return <div>Movie Not Found</div>;
};
