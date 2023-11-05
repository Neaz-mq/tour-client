import { NavLink } from "react-router-dom";


const Header = () => {

    const links = (
        <>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/services'>Services</NavLink>
            </li>
            <li>
                <NavLink to='/register'>Register</NavLink>
            </li>
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>

        </>
    );
    return (
        <div className="navbar bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-400 ...">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </label>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                    {links}
                </ul>
            </div>
            <a href='/'><img className='w-24 lg:ml-6 md:ml-64 ml-24' src="https://i.ibb.co/sKprTQZ/Screenshot-1-removebg-preview.png" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white text-base font-semibold">{links}</ul>
        </div>
        
  
    </div>
    );
};

export default Header;