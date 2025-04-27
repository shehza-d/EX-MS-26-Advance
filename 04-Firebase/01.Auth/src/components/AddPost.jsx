import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function AddPost() {
  const addPost = async (e) => {
    e.preventDefault();

    const text = e.target.children[0].value;
    try {
      await addDoc(collection(db, "posts"), {
        content: text,
        from: "abdullah",
        likes: 815,
        image:
          "https://cometinsure.com/blog/wp-content/uploads/2024/08/Best-Fuel-Average-Cars-in-Pakistan.jpg",
        isShareAble: true,
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={addPost}>
      <input type="text" className="border-2 p-6" />
    </form>
  );
}
