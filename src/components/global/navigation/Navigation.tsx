import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="capitalize text-white font-bold">
      <ul className="flex justify-center gap-10">
        <li><NavLink to="/" style={({isActive})=>{
          return{
            color: isActive ? "red" : "white"
          }
        }}>home</NavLink></li>
        <li><NavLink to="/watch_list" style={({isActive})=>{
          return{
            color: isActive ? "red" : "white"
          }
        }}>watch list</NavLink></li>
      </ul>
    </div>
  );
};
