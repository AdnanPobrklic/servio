import NavBar from "../components/NavBar";

function Home() {
    return (
        <div className="min-h-dvh flex flex-col">
            <NavBar />
            <main className="grow bg-gradient-to-br from-blue-50 to-indigo-100 px-30">
                <h1 className="mt-20 font-archivo font-extrabold text-5xl">
                    Servio
                </h1>
                <h2 className="text-3xl mt-6">
                    Traži, uporedi i angažuj – sve na jednom mjestu.
                </h2>
                <input
                    className="border-2 rounded-full w-[700px] mt-10 py-2 pl-5"
                    placeholder="🔍 Pretraži"
                    type="search"
                    name=""
                    id=""
                />
                <ul className="mt-10 flex flex-wrap gap-4 gap-y-6 w-[40%]">
                    {[
                        "Čišćenje",
                        "Transport i selidba",
                        "Gradnja i renovacija",
                        "Imovina",
                        "Enterijer",
                        "IT, Web i grafički dizajn",
                    ].map((category, i) => (
                        <li
                            key={i}
                            className="bg-light-blue text-white rounded-full border-none px-5 py-2 text-xl"
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default Home;
