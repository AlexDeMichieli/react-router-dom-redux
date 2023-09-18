import { Outlet, NavLink } from "react-router-dom";

const Root = () => {
    return (
        <div className="w-full h-2">
            <nav className="bg-gray-800">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between px-4 py-3">
                        <NavLink
                            to={`/`}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                        >
                            Ingredient
                        </NavLink>
                        <button
                            className="text-white focus:outline-none focus:text-white lg:hidden"
                            type="button"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="heroicon-ui"
                                    d="M20 12H4M20 6H4M20 18H4"
                                ></path>
                            </svg>
                        </button>
                        <div className=" flex items-center">
                            <div className="mr-10">
                                <NavLink to={"/favs"} className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : "text-white mr-4"
                                }>
                                   Favourite
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Root
