import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useState } from "react";
import { useNavigate } from "react-router";
import Loader from "../components/Loader";

export default function Signup() {
  const [msg, setMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault(); // prevent page refresh

    // console.log('event :>> ', event.target);
    // event.target wo elemet hota hy jisse event generate ho

    setIsLoading(true)

    // 0 index per form ka phale child hoga
    const email = event.target.children[0].value;
    const password = event.target.children[1].value;


    if (!email || !password) {
      setMsg('Please fill all fields')
      setIsLoading(false)

      return
    }


    try {

      await createUserWithEmailAndPassword(auth, email, password)

      setMsg('User Signup Successful')

      event.target.reset();// empty form values

      // navigate("/");

    } catch (error) {
      console.log("🚀 ~ Signup ~ error:", error)

      setMsg(error.message)
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <div className="container">Signup

      <form onSubmit={submitHandler}>
        {msg}
        <input className="border-amber-400 border-2" type="text" />
        <input className="border-amber-400 border-2" type="text" />
        <button
          className={`mr-1 h-12 w-full border-2 my-4 bg-primary px-3 py-2 text-center text-xl font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out hover:opacity-95 active:shadow-[0px_0px_0px_0px_#4f4e4e] disabled:cursor-not-allowed sm:w-auto`}
        >
          {isLoading ? <Loader width="w-5" height="h-5" /> : "Register"}
        </button>
      </form>

      {/* <h1 onClick={(e) => console.log('event :>> ', event.target)}>Hello</h1> */}
    </div>
  )
}
