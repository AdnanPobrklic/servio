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
import Footer from "../components/Footer";
function Home() {
    return (
        <div className="min-h-dvh flex flex-col font-archivo select-none">
            <NavBar />

            <main className="px-6 md:px-10 lg:px-20 font-archivo flex flex-col lg:flex-row items-center lg:justify-between min-h-[calc(100vh-75px)] pt-10 lg:py-0 gap-30 lg:gap-20">
                <div className="text-center lg:text-left w-full lg:w-1/2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-light-blue-green font-[700] leading-tight lg:leading-18">
                        Traži, uporedi i angažuj – sve na jednom mjestu.
                    </h1>
                    <input
                        className="border-3 border-stone-400 rounded-full w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mt-8 lg:mt-12 py-2 lg:py-3 pl-5 text-base lg:text-xl shadow-lg"
                        placeholder="🔍 Pretraži"
                        type="search"
                    />
                    <ul className="mt-8 lg:mt-12 flex flex-wrap gap-2 lg:gap-3 gap-y-3 lg:gap-y-4 justify-center lg:justify-start">
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
                                className="bg-light-blue-darker text-light-blue-green-darker rounded-full border-none px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-base xl:text-xl whitespace-nowrap"
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div
                        className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[750px] h-[250px] sm:h-[350px] lg:h-[400px] xl:h-[500px] rounded-2xl bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${mainBg})` }}
                    ></div>
                </div>
            </main>

            <section className="text-center bg-light-blue-darker text-light-blue-green-darker font-[900] py-16 lg:py-20">
                <h2 className="text-3xl lg:text-4xl px-4">Zašto baš Servio?</h2>
                <p className="text-lg lg:text-xl px-6 lg:mx-[50px] xl:mx-[350px] mt-6 lg:mt-10 leading-8 lg:leading-10">
                    Servio ti štedi vrijeme i novac. Umjesto da gubiš sate
                    pretražujući različite sajtove i pozivajući desetine firmi,
                    na jednom mjestu pronađi, uporedi i angažuj provjerene
                    pružaoce usluga. Bez stresa, bez nepotrebnog pregovaranja -
                    samo brzo i pouzdano rješenje prilagođeno tvojim potrebama.
                </p>
            </section>

            <section className="py-16 lg:py-20 px-6 lg:px-30 bg-white">
                <h2 className="text-3xl lg:text-4xl font-[900] text-center text-light-blue-green mb-10 lg:mb-16">
                    Kako koristiti Servio
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
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
                            className="border-[3px] lg:border-[5px] border-light-blue rounded-2xl p-6 lg:p-8 relative bg-white shadow-lg hover:shadow-xl transition-shadow text-light-blue-green flex flex-col justify-center items-center lg:items-start text-center lg:text-left mx-2 lg:mx-10"
                        >
                            {step.number === 1 ? (
                                <img
                                    src={StepOneIcon}
                                    alt="Step 1 icon"
                                    className="m-4 lg:m-[25px] w-16 lg:w-auto"
                                />
                            ) : step.number === 2 ? (
                                <img
                                    src={StepTwoIcon}
                                    alt="Step 2 icon"
                                    className="m-4 lg:m-[25px] w-16 lg:w-auto"
                                />
                            ) : (
                                <img
                                    src={StepThreeIcon}
                                    alt="Step 3 icon"
                                    className="m-4 lg:m-[25px] w-16 lg:w-auto"
                                />
                            )}
                            <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-8 h-8 lg:w-12 lg:h-12 bg-white flex items-center justify-center font-bold text-2xl lg:text-5xl border-2 lg:border-4 border-white shadow-md">
                                {step.number}
                            </div>

                            <h3 className="text-xl lg:text-2xl mb-3 lg:mb-4 mt-2 lg:mt-4 font-[900]">
                                {step.title}
                            </h3>
                            <p className="text-base lg:text-lg leading-relaxed font-[700]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="min-h-[70vh] lg:min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-16 lg:py-20"
                style={{ backgroundImage: `url(${ConnectFirmBg})` }}
            >
                <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 max-w-4xl mx-6 lg:mx-10 shadow-2xl">
                    <h2 className="text-3xl lg:text-5xl font-[900] text-light-blue-green mb-8 lg:mb-16 leading-tight lg:leading-15">
                        Imate uslugu koju želite približiti klijentima?
                    </h2>
                    <p className="text-lg lg:text-2xl text-gray-700 mb-8 lg:mb-16 leading-relaxed">
                        Registrujte se na Servio, povežite firmu i počnite
                        nuditi usluge!
                    </p>
                    <button className="bg-light-blue text-white text-lg lg:text-xl font-bold py-3 lg:py-4 px-8 lg:px-12 rounded-full hover:bg-light-blue-darker transition-colors shadow-lg">
                        Poveži firmu
                    </button>
                </div>
            </section>

            <section
                className="min-h-[70vh] lg:min-h-screen bg-contain bg-center bg-no-repeat flex items-center justify-center py-16 lg:py-20 bg-light-blue relative"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${CoverageGroupBg})`,
                }}
            >
                <div className="relative z-10 flex flex-col text-center gap-10 lg:gap-20 text-white px-6">
                    <h2 className="text-3xl lg:text-5xl font-[900]">
                        Tražite provjerenu uslugu u svom gradu?
                    </h2>
                    <div className="text-xl lg:text-2xl font-[600] flex flex-col gap-2">
                        <p>Djelujemo u svim gradovima Bosne i Hercegovine</p>
                        <p>naša mreža pokriva cijelu zemlju.</p>
                    </div>
                </div>
            </section>

            <section className="min-h-[70vh] lg:min-h-screen flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-[100px] px-6 lg:px-30 py-16 lg:py-0">
                <div className="text-center lg:text-left">
                    <div className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-8 flex flex-col gap-3 lg:gap-5 text-light-blue-green font-[900]">
                        <h2>Sve usluge na dohvat ruke</h2>
                        <h2>preuzmi aplikaciju i uštedi vrijeme.</h2>
                    </div>
                    <div className="flex gap-6 lg:gap-10 justify-center lg:justify-start">
                        <img
                            src={AppStoreIcon}
                            alt="Servio App store"
                            className="h-10 lg:h-12"
                        />
                        <img
                            src={GooglePlayIcon}
                            alt="Servio Google store"
                            className="h-10 lg:h-12"
                        />
                    </div>
                </div>
                <img
                    src={Group76}
                    alt="Servio Mobile App"
                    className="h-[500px] lg:h-[600px] xl:h-[1000px] w-auto self-center lg:self-end translate-x-[27.5px] translate-y-[60px] lg:translate-x-[0px] lg:translate-y-[0px]"
                />
            </section>

            <Footer />
        </div>
    );
}

export default Home;
