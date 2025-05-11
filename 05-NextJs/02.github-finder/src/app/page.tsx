"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const formHandler = (e: any) => {
    e.preventDefault(); // refresh nhi hone dega page

    const username = e.currentTarget.children[0].value;

    router.push(`/profile/${username}`); // works same as navigate in react-router-dom
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <input type="text" className="border-2 border-red-500" />
        <button>Search</button>
      </form>
    </div>
  );
}
