import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { stateHero } from "../../../Redux/Slices/cartSlice";

const HeaderHamburger = () => {
    const [state, setState] = useState(false)
    const dispatch = useDispatch();

    const handleClick = () => {
        setState(!state)
    }

    useEffect(() => {
        dispatch(stateHero(state))
}, [state, dispatch])
    
  return (
    <button onClick={handleClick} className="z-50 flex flex-col gap-y-1">
      <span className={`block h-1 w-7 bg-secondary ${state ? "rotate-45" : ""} origin-top-left transition-global`}></span>
      <span className={`block h-1 w-7 bg-secondary ${state ? "opacity-0" : "opacity-100"} transition-global`}></span>
      <span className={`block h-1 w-7 bg-secondary ${state ? "-rotate-45" : ""} origin-bottom-left transition-global`}></span>
    </button>
  );
};

export default HeaderHamburger;
