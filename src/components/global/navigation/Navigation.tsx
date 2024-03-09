import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="capitalize text-white font-bold">
      <ul className="flex justify-center gap-10">
        <li><NavLink to="/">home</NavLink></li>
        <li><NavLink to="/watch_list">watch list</NavLink></li>
      </ul>
    </div>
  );
};
