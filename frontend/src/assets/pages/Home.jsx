import NavBar from "../components/NavBar";
import mainBg from "../images/main-bg.png";
import StepOneIcon from "../images/Group 57.svg";
import StepTwoIcon from "../images/Group 58.svg";
import StepThreeIcon from "../images/Group 65.svg";

function Home() {
    return (
        <div className="min-h-dvh flex flex-col font-archivo select-none">
            <NavBar />
            <main className="grow px-30 font-archivo flex items-center justify-between min-h-[calc(100vh-75px)]">
                <div>
                    <h1 className="text-5xl text-light-blue-green font-[700] max-w-[800px] leading-18">
                        Traži, uporedi i angažuj – sve na jednom mjestu.
                    </h1>
                    <input
                        className="border-3 border-stone-400 rounded-full w-[700px] mt-20 py-3 pl-5 text-xl shadow-lg"
                        placeholder="🔍 Pretraži"
                        type="search"
                        name=""
                        id=""
                    />
                    <ul className="mt-20 flex flex-wrap gap-4 gap-y-6 w-[80%]">
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
                                className="bg-light-blue-darker text-light-blue-green-darker rounded-full border-none px-5 py-2 text-xl"
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="w-[750px] h-[500px] rounded-2xl bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${mainBg})` }}
                ></div>
            </main>

            {/* SEKCIJA "ZAŠTO BAŠ SERVIO?" */}
            <section className="text-center bg-light-blue-darker text-light-blue-green-darker font-[900] py-20">
                <h2 className="text-4xl">Zašto baš Servio?</h2>
                <p className="text-xl mx-[350px] mt-10 leading-10">
                    Servio ti štedi vrijeme i novac. Umjesto da gubiš sate
                    pretražujući različite sajtove i pozivajući desetine firmi,
                    na jednom mjestu pronađi, uporedi i angažuj provjerene
                    pružaoce usluga. Bez stresa, bez nepotrebnog pregovaranja -
                    samo brzo i pouzdano rješenje prilagođeno tvojim potrebama.
                </p>
            </section>

            {/* NOVA SEKCIJA "KAKO KORISTITI SERVIO" */}
            <section className="py-20 px-30 bg-white">
                <h2 className="text-4xl font-[900] text-center text-light-blue-green mb-16">
                    Kako koristiti Servio
                </h2>

                <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {[
                        {
                            number: 1,
                            title: "Definisanje posla",
                            description:
                                "Opisi šta želiš da uradiš bilo da je u pitanju čišćenje, renoviranje ili popravka. Unesi detalje i obim posla.",
                        },
                        {
                            number: 2,
                            title: "Slanje zahtjeva",
                            description:
                                "Pošalji svoj zahtjev i firme koje nude tu uslugu će biti obaviještene.",
                        },
                        {
                            number: 3,
                            title: "Pregled ponuda i dogovor",
                            description:
                                "Pregledaj pristigle ponude, uporedi cijene i dogovori posao sa firmom koja ti najviše odgovara.",
                        },
                    ].map((step, index) => (
                        <div
                            key={index}
                            className="border-[5px] border-light-blue rounded-2xl p-8 relative bg-white shadow-lg hover:shadow-xl transition-shadow text-light-blue-green flex flex-col justify-center align-center mx-10"
                        >
                            {step.number === 1 ? (
                                <img
                                    src={StepOneIcon}
                                    alt="Step 1 icon"
                                    className="m-[25px]"
                                />
                            ) : step.number === 2 ? (
                                <img
                                    src={StepTwoIcon}
                                    alt="Step 2 icon"
                                    className="m-[25px]"
                                />
                            ) : (
                                <img
                                    src={StepThreeIcon}
                                    alt="Step 3 icon"
                                    className="m-[25px]"
                                />
                            )}
                            <div className="absolute -top-[calc(-50%+15px)] -left-6 w-12 h-[50px] bg-white  flex items-center justify-center font-bold text-5xl">
                                {step.number}
                            </div>

                            <h3 className="text-2xl mb-4 mt-4 font-[900]">
                                {step.title}
                            </h3>
                            <p className="text-lg leading-relaxed font-[700]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
