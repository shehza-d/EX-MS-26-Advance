import Image from "next/image";
import { notFound } from "next/navigation";

// optional
// export async function generateStaticParams() {
//   return [{ id: "shehza-d" }, { id: "owaiskhan909" }];
// }

export default async function page({ params }) {
  const { id } = await params;

  const res = await fetch(`https://api.github.com/users/${id}`);

  if (res.status !== 200) {
    notFound();
  }

  const data = await res.json();

  return (
    <div>
      page {data.name}
      <br />
      <p>
        follower
        {data.followers} following {data.following}
      </p>
      <br />
      <Image src={data.avatar_url} alt={data.name} width={200} height={200} />
    </div>
  );
}
