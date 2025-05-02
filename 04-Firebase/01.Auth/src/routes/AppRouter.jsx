import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Product from "../pages/Product";
import Navbar from "../components/NavBar";
import { useEffect } from "react";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/reducers/authSlice";

export default function AppRouter() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authSlice.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) dispatch(addUser(false));
      else dispatch(addUser(JSON.parse(JSON.stringify(user))));
    });
  }, []);

  if (user === null) return <>Loading...</>;

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {user ? (
          <>
            <Route path="/product" element={<Product />} />

            <Route path="/not-found" element={<>404 Page not found</>} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}
