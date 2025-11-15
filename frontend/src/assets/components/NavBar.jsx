import { useState } from "react";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="font-archivo flex justify-between items-center px-6 lg:px-30 py-4 pt-6 text-[17px] font-black text-light-blue-green border-b-2 border-light-blue">
            <p className="text-[30px]">Servio</p>

            <ul className="hidden lg:flex gap-20 items-center justify-center">
                <li className="flex items-center gap-1 cursor-pointer">
                    Usluge <i className="fa-solid fa-caret-down"></i>
                </li>
                <li className="cursor-pointer">Poveži firmu</li>
                <button className="bg-light-blue text-white px-5 py-2 rounded-full border-none">
                    Prijava
                </button>
            </ul>

            <button
                className="lg:hidden text-light-blue-green text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <i
                    className={`fa-solid ${
                        isMenuOpen ? "fa-xmark" : "fa-bars"
                    }`}
                ></i>
            </button>

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-light-blue lg:hidden z-50">
                    <ul className="flex flex-col items-center py-6 gap-6">
                        <li className="flex items-center gap-1 cursor-pointer text-lg">
                            Usluge <i className="fa-solid fa-caret-down"></i>
                        </li>
                        <li className="cursor-pointer text-lg">Poveži firmu</li>
                        <button className="bg-light-blue text-white px-8 py-3 rounded-full border-none text-lg">
                            Prijava
                        </button>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
