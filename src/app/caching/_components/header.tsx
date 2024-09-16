import Link from "next/link";

const Header = () => (
  <header className="justify-center flex flex-row align-middle">
    <ul>
      <li>
        <Link href="/caching">Home</Link>
      </li>
      <li>
        <Link href="/caching/about">About</Link>
      </li>
      <li>
        <Link
          href="/caching/post/[...slug]"
          as="/caching/post/2020/first-post/with/catch/all/routes"
        >
          First Post
        </Link>
      </li>
      <li>
        <Link
          href="/caching/post/[...slug]"
          as="/caching/post/2020/second-post/with/catch/all/routes"
        >
          Second Post
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
