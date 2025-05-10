import axios from "axios";
import Image from "next/image";

export default async function Page({ params }) {
  const { productId } = await params;

  const result = await axios(`https://dummyjson.com/products/${productId}`);
  console.log("🚀 ~ Page ~ res:", result.data);

  return (
    <div>
      Product Detail Page {result.data.title}
      <br />
      <Image
        src={result.data.images[0]}
        width={300}
        height={300}
        alt={"my title"}
      />
    </div>
  );
}
