import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="font-archivo flex justify-between items-center px-6 lg:px-30 py-4 pt-6 text-[17px] font-black text-light-blue-green border-b-2 border-light-blue relative">
            <p className="text-[30px]">Servio</p>

            <ul className="hidden lg:flex gap-20 items-center justify-center">
                <li className="flex items-center gap-1 cursor-pointer">
                    Usluge <i className="fa-solid fa-caret-down"></i>
                </li>
                <Link to="/registracija-firme" className="cursor-pointer">
                    Poveži firmu
                </Link>
                <Link
                    to="/prijava"
                    className="bg-light-blue text-white px-5 py-2 rounded-full border-none"
                >
                    Prijava
                </Link>
            </ul>

            <button
                className="lg:hidden text-light-blue-green text-2xl z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <i
                    className={`fa-solid ${
                        isMenuOpen ? "fa-xmark" : "fa-bars"
                    }`}
                ></i>
            </button>

            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 lg:hidden">
                    <div className="flex flex-col items-center justify-center h-full space-y-12">
                        <li className="flex items-center gap-1 cursor-pointer text-2xl list-none">
                            Usluge <i className="fa-solid fa-caret-down"></i>
                        </li>
                        <Link
                            to="/registracija-firme"
                            className="cursor-pointer text-2xl list-none"
                        >
                            Poveži firmu
                        </Link>
                        <Link
                            to="/prijava"
                            className="bg-light-blue text-white px-10 py-4 rounded-full border-none text-xl mt-4"
                        >
                            Prijava
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
