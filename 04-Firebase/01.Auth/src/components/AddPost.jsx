import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function AddPost() {
  const addPost = async (e) => {
    e.preventDefault();

    const text = e.target.children[0].value;
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        content: text,
        from: "Quaid e Azam",
        likes: 815,
        createdAt:new Date()
      });

      console.log("Document written with ID: ", docRef);
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
