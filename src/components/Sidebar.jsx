import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faList,
  faBox,
  faTachometerAlt,
  faBoxOpen,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
const links = [
  { path: "/", title: "Dashboard", icon: faTachometerAlt },
  { path: "/products", title: "Products", icon: faBoxOpen },
  { path: "/favorites", title: "Favorites", icon: faHeart },
  { path: "/orders", title: "Order Lists", icon: faList },
  { path: "/stock", title: "Product Stock", icon: faBox },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  // function for close sidebar after click on navlink (on mobile devices)
  const handleLinkClick = () => {
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };
  return (
    <>
      {/* backdrop for mobile phones */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-overlay opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`dashboard-aside absolute bg-alt max-w-[14rem] top-0 left-0 bottom-0 transition duration-150 md:block md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="navigation"
      >
        <button
          className="block w-fit m-2 ml-auto p-2 bg-bg cursor-pointer rounded-lg transition duration-300 hover:opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close Sidebar"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <nav>
          <ul className="space-y-2 px-6 py-4 border-t-1 border-border">
            {links.map((link) => (
              <li key={link.title}>
                <NavLink
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-2xl flex gap-3 items-center transition duration-300 hover:bg-primary ${
                      isActive &&
                      "bg-primary before:absolute before:top-0 before:-left-6.5 before:rounded-full before:w-1 before:h-full before:bg-primary"
                    }`
                  }
                >
                  <FontAwesomeIcon icon={link.icon} className="w-5" />
                  <span>{link.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
