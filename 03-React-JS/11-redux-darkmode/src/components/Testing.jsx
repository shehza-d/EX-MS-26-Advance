import { useSelector } from "react-redux";

export default function Testing() {
  const isDarkMode = useSelector((state) => state.darkModeSlice.darkMode);

  return (
    <div
      className={isDarkMode ? "bg-black" : "bg-white"}
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "red" : "blue",
      }}
    >
      Testing
    </div>
  );
}
