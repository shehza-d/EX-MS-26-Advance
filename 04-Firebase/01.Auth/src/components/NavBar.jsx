import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/reducers/authSlice";

export default function Navbar() {
  const [user, setUser] = useState({});

  const dispatch = useDispatch()

  onAuthStateChanged(auth, (user) => {
    dispatch(addUser(JSON.stringify(user)));
  });

  const handleLogout = async () => {
  const result =   await signOut(auth);
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
    // <Route to elemet></Route>
  );
}
