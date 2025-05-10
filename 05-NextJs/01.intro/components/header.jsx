import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link className="underline" href="/">
        Home
      </Link>
      <Link className="underline" href="/about">
        About
      </Link>
    </header>
  );
}
