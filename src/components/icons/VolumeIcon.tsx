import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export const VolumeIcon = () => {
  return (
    <div>
      <FontAwesomeIcon  className=" rounded-full border border-slate-300 bg-gray-700 text-white p-2 w-[23px] h-[23px] text-end" icon={faVolumeHigh} />
    </div>
  );
};
