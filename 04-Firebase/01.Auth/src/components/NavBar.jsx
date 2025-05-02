import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../lib/firebase";

export default function Navbar() {
  const user = useSelector((state) => state.authSlice.user);

  const handleLogout = async () => await signOut(auth);

  return (
    <nav className="flex bg-blue-300 justify-between p-8 item-between">
      <div>Expertizo</div>

      <div>{user?.email}</div>

      {user ? (
        <button
          onClick={handleLogout}
          className="p-2 bg-amber-400 cursor-pointer"
        >
          Logout
        </button>
      ) : (
        <div className="flex gap-4">
          <Link to={"/signup"} className="p-1 bg-amber-300">
            Signup
          </Link>
          <Link to={"/login"} className="p-1 bg-amber-300">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
