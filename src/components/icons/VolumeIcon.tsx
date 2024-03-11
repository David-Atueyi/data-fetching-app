import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export const VolumeIcon = () => {
  return (
    <div>
      <FontAwesomeIcon  className=" rounded-full border border-slate-300 bg-gray-700 text-white p-2 w-[23px] h-[23px] text-end hover:bg-black hover:scale-105 transition-all duration-300" icon={faVolumeHigh} />
    </div>
  );
};
