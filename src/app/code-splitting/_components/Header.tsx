import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/" style={{ marginRight: 10 }}>
        Home
      </Link>
    </div>
  );
}