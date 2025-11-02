function NavBar() {
    return (
        <nav className="font-archivo flex justify-between px-30 align-center py-4 pt-6 text text-[17px] font-black">
            <p className="text-[30px]">Servio</p>
            <ul className="flex gap-20 items-center justify-center">
                <li>
                    Usluge <i className="fa-solid fa-caret-down"></i>
                </li>
                <li>Poveži firmu</li>
                <button className="bg-light-blue text-white px-3 py-1 rounded-full border-none">
                    Prijava
                </button>
            </ul>
        </nav>
    );
}

export default NavBar;
