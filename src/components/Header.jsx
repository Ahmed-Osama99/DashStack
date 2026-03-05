import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import ThemeButton from "./ThemeButton";

const Header = ({ setIsSidebarOpen }) => {
  return (
    <header className="dashboard-header px-2 py-4 flex items-center gap-4 bg-alt transition-colors duration-150">
      <button
        className="flex justify-center items-end cursor-pointer md:hidden"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        aria-label="Toggle Sidebar"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Link to="/" className="md:ml-12">
        <h1>
          <span className="text-primary">Dash</span>Stack
        </h1>
      </Link>
      <div className="grow flex items-center justify-around">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="px-4 py-2 bg-input rounded-full w-40 sm:w-1/2 md:w-1/3 focus:outline-2 focus:outline-primary"
        />
        <div className="profile flex gap-6">
          <ThemeButton />
          <button className="cursor-pointer" aria-label="Go to User page">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
