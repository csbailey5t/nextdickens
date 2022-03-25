import Link from "next/link";

// functional React component for Navbar
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Introduction</Link>
        </li>
        <li>
          <Link href="/notes">Using the DDNP</Link>
        </li>
        <li>
          <Link href="/contact">The Working Notes</Link>
        </li>
        <li>
          <Link href="/contact">About the Project</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
