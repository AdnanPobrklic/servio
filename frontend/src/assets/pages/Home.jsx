import NavBar from "../components/NavBar";
import mainBg from "../images/main-bg.png";
import StepOneIcon from "../images/Group 57.svg";
import StepTwoIcon from "../images/Group 58.svg";
import StepThreeIcon from "../images/Group 65.svg";
import ConnectFirmBg from "../images/connect-firm-bg.svg";
import CoverageGroupBg from "../images/coverage-group-bg.svg";
import AppStoreIcon from "../images/AppStore.svg";
import GooglePlayIcon from "../images/GooglePlay.svg";
import Group76 from "../images/Group 76.svg";

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

            <section
                className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-20"
                style={{ backgroundImage: `url(${ConnectFirmBg})` }}
            >
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-10 shadow-2xl">
                    <h2 className="text-5xl font-[900] text-light-blue-green mb-16 leading-15">
                        Imate uslugu koju želite približiti klijentima?
                    </h2>
                    <p className="text-2xl text-gray-700 mb-16 leading-relaxed">
                        Registrujte se na Servio, povežite firmu i počnite
                        nuditi usluge!
                    </p>
                    <button className="bg-light-blue text-white text-xl font-bold py-4 px-12 rounded-full hover:bg-light-blue-darker transition-colors shadow-lg">
                        Poveži firmu
                    </button>
                </div>
            </section>

            <section
                className="min-h-screen bg-contain bg-center bg-no-repeat flex items-center justify-center py-20 bg-light-blue relative"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${CoverageGroupBg})`,
                }}
            >
                <div className="relative z-10 flex flex-col text-center gap-20 text-white">
                    <h2 className="text-5xl font-[900]">
                        Tražite provjerenu uslugu u svom gradu?
                    </h2>
                    <div className="text-2xl font-[600] flex flex-col gap-2">
                        <p>Djelujemo u svim gradovima Bosne i Hercegovine</p>
                        <p>naša mreža pokriva cijelu zemlju.</p>
                    </div>
                </div>
            </section>

            <section className="min-h-screen flex items-center justify-center gap-[350px]">
                <div className="">
                    <div className="text-5xl font-bold  mb-8 flex flex-col gap-5 text-light-blue-green font-[900]">
                        <h2>Sve usluge na dohvat ruke</h2>
                        <h2>preuzmi aplikaciju i uštedi vrijeme.</h2>
                    </div>
                    <div className="flex gap-10 justify-start">
                        <img
                            src={AppStoreIcon}
                            alt="Servio App store"
                            className="h-12"
                        />
                        <img
                            src={GooglePlayIcon}
                            alt="Servio Google store"
                            className="h-12"
                        />
                    </div>
                </div>
                <img
                    src={Group76}
                    alt="Servio Mobile App"
                    className="h-[1000px] self-end"
                />
            </section>
            <footer className="w-full bg-light-blue flex flex-col gap-10 pt-20 pl-10 text-light-blue-green-darker">
                <div className="flex gap-20">
                    <ul className="flex flex-col gap-1">
                        <li className="font-[900]">Informacije i Kontakt</li>
                        <li>Zašto koristiti Servio</li>
                        <li>Kako koristiti Servio</li>
                        <li>
                            <a href="tel:+38761233575">
                                <i class="fa-solid fa-phone-volume"></i>
                                <span>+38761233575</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-1">
                        <li className="font-[900]">Nudite usluge?</li>
                        <li>Povežite firmu</li>
                        <li>Postanite partner</li>
                    </ul>
                    <i className="fa-brands fa-google-play text-3xl"></i>
                    <i className="fa-brands fa-app-store text-3xl"></i>
                </div>
                <span className="pb-2">
                    Copyright ©2025 Servio d.o.o. Sva prava zadržana.
                </span>
            </footer>
        </div>
    );
}

export default Home;
