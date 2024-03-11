import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const PlayIcon = () => {
  return (
    <div className="w-[100px] h-[45px] bg-slate-50 flex justify-center items-center gap-1 rounded-sm">
      <FontAwesomeIcon  icon={faPlay} />
      <span>Play</span>
    </div>
  );
};