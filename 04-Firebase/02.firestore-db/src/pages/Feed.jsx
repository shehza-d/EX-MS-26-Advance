import AddPost from "../components/AddPost";
import {
  collection,
  getDocs,
  onSnapshot,
  where,
  query,
  limit,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useEffect, useState } from "react";

export default function Feed() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      // where("isShareAble", "==", false)

      const q = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        limit(60)
      );

      onSnapshot(q, (querySnapshot) => {
        const posts = [];

        // ye querySnapshot firebase ka object hy isper map nhi chalta
        querySnapshot.forEach((doc) => {
          posts.push({ ...doc.data(), id: doc.id });
        });

        setPostData(posts);
      });
    };
    getPosts();
  }, []);

  return (
    <>
      <AddPost />

      {postData.map((post, index) => (
        <div key={post.id} className="border-2 p-6 m-4">
          {index + 1} <h1>{post.content}</h1>
          <p>{post.from}</p>
          <p>likes: {post.likes}</p>
          <button
            className="p-2 bg-red-400"
            onClick={async () => {
              await deleteDoc(doc(db, "posts", post.id));
            }}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
}
