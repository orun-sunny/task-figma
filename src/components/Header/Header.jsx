import img1 from "../../assets/images/logo2.png";

const Header = () => {
  return (
    <header className="p-4 border-b-2 max-w-7xl mx-auto">
      <div className="navbar bg-base-100 flex items-center justify-between">
        <div className="navbar-start flex items-center">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              {/* Hamburger icon for mobile menu */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Features</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Apps</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <img src={img1} alt="Logo" className="h-12 w-auto ml-4" />
        </div>
        <div className="navbar-end hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-8">
            <li>
              <details>
                <summary>Features</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Apps</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>

          <div className="flex gap-2">
            <a
              href="#"
              className="bg-[#ff5e29] text-white py-3 px-4 rounded-lg text-lg font-normal"
            >
              Sign in
            </a>
            <a className="btn bg-white text-black border-[#ff5e29] py-3 px-4 rounded-lg text-lg font-normal">
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
