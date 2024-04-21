import { Link, NavLink } from "react-router-dom";

export default function () {
  return (
    <header className="flex flex-col sm:flex-row gap-5 sm:gap-0 pt-8 sm:pt-16 pb-10 px mx-auto">
      <h1 className="font-bold text-3xl text-center"><Link to="/">SeqAligner</Link></h1>
      <nav className="sm:ml-auto">
        <ul className="flex justify-around sm:justify-normal sm:gap-10">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? "border-b-primary border-b-[5px] px-1" : "px-1"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "border-b-primary border-b-[5px] px-1" : "px-1"
              }
            >
              Product
            </NavLink>
          </li>
          <li className="text-secondary">Sign in</li>
        </ul>
      </nav>
    </header>
  );
}
