import Link from "next/link";

const Header = () => (
  <header>
    <Link href="/index">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <style jsx>{`
      header a {
        margin-right: 20px;
      }
    `}</style>
  </header>
);

export default Header;
