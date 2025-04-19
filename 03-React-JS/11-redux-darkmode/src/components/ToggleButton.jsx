import { useDispatch } from "react-redux";
import { changeMode } from "../config/redux/reducers/darkModeSlice";
import { useSelector } from "react-redux";

export default function ToggleButton() {
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => state.darkModeSlice.darkMode);

  return (
    <button
      onClick={() => {
        dispatch(changeMode());
      }}
    >
      {isDarkMode ? "light" : "dark"} mode
    </button>
  );
}

// import { useDispatch } from "react-redux";
// import { changeMode } from "../config/redux/reducers/darkModeSlice";

// export default function ToggleButton() {
//   const dispatch = useDispatch();

//   return (
//     <button
//       onClick={() => {
//         dispatch(changeMode());
//       }}
//     >
//       dark mode
//     </button>
//   );
// }
