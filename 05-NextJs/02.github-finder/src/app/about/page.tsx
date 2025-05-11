import Link from "next/link";

export default function page() {
  return (
    <div>
      about
      <Link href={`/profile/owaiskhan909`}>my username</Link>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
        sunt ducimus repudiandae provident tempore ex non excepturi pariatur
        alias sed, dolores, animi harum maiores magni! Consequatur reprehenderit
        aliquid vero a.
      </p>
    </div>
  );
}
