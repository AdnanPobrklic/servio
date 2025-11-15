function Footer() {
    return (
        <footer className="w-full bg-light-blue flex flex-col gap-8 lg:gap-10 pt-10 lg:pt-20 px-6 lg:pl-10 text-light-blue-green-darker">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
                <ul className="flex flex-col gap-2">
                    <li className="font-[900]">Informacije i Kontakt</li>
                    <li>Zašto koristiti Servio</li>
                    <li>Kako koristiti Servio</li>
                    <li>
                        <a
                            href="tel:+38761233575"
                            className="flex items-center gap-2"
                        >
                            <i className="fa-solid fa-phone-volume"></i>
                            <span>+38761233575</span>
                        </a>
                    </li>
                </ul>
                <ul className="flex flex-col gap-2">
                    <li className="font-[900]">Nudite usluge?</li>
                    <li>Povežite firmu</li>
                    <li>Postanite partner</li>
                </ul>
                <div className="flex gap-4">
                    <i className="fa-brands fa-google-play text-2xl lg:text-3xl"></i>
                    <i className="fa-brands fa-app-store text-2xl lg:text-3xl"></i>
                </div>
            </div>
            <span className="pb-4 lg:pb-2 text-center lg:text-left">
                Copyright ©2025 Servio d.o.o. Sva prava zadržana.
            </span>
        </footer>
    );
}

export default Footer;
