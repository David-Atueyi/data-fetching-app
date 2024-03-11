import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const PlusIcon = () => {
  return (
    <div className="mx-3">
      <FontAwesomeIcon className=" rounded-full border border-slate-300 bg-gray-700 text-white p-2 w-[23px] h-[23px]" icon={faPlus} />
    </div>
  )
}
