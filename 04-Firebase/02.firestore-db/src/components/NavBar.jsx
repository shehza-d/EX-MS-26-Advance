import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = {};

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <nav className="flex bg-blue-300 justify-between p-8 item-between">
      <div>Expertizo</div>

      <div>{user?.email}</div>

      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to={"/login"}>Login</Link>
      )}
    </nav>
  );
}
