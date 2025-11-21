import { Link } from "react-router-dom";
import RegisterFirmBg from "../images/provider-login-bg.svg";

function LoginCompany() {
    return (
        <div className="min-h-screen w-full flex font-archivo overflow-hidden">
            {/* Mobile Background */}
            <div
                className="lg:hidden fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: `url(${RegisterFirmBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                }}
            ></div>

            <div className="w-full lg:w-[40%] bg-transparent lg:bg-white flex flex-col relative z-10 shrink-0">
                <div className="flex-1 flex flex-col justify-center items-center lg:items-end pr-0 lg:pr-[60px] xl:pr-[80px]">
                    {/* Form Card */}
                    <div className="bg-white rounded-[30px] shadow-2xl p-8 lg:p-12 lg:min-w-[500px] w-[95%] sm:w-[90%] max-w-[600px] lg:max-w-[700px] lg:mr-[-150px] xl:mr-[-200px] relative z-20 mt-20 lg:mt-0 min-h-[500px] flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black text-light-blue-green mb-10">
                            Prijava
                        </h1>

                        <form className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-light-blue-green font-bold text-base lg:text-lg block">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    className="w-full border-b-[3px] border-light-blue focus:border-light-blue-green outline-none py-2 lg:py-3 text-gray-700 font-medium text-lg transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-light-blue-green font-bold text-base lg:text-lg block">
                                    Šifra
                                </label>
                                <input
                                    type="password"
                                    className="w-full border-b-[3px] border-light-blue focus:border-light-blue-green outline-none py-2 lg:py-3 text-gray-700 font-medium text-lg transition-colors"
                                />
                            </div>

                            <div className="text-center pt-4">
                                <span className="text-gray-500 text-sm lg:text-base font-medium">
                                    Niste registrovali firmu?{" "}
                                </span>
                                <Link
                                    to="/registracija-firme"
                                    className="text-gray-500 text-sm lg:text-base font-bold underline hover:text-gray-700"
                                >
                                    Registrujte se
                                </Link>
                            </div>

                            <div className="flex justify-between items-center pt-4">
                                <Link
                                    to="/"
                                    className="text-light-blue-green font-bold text-base lg:text-lg hover:text-light-blue-green-darker"
                                >
                                    Nazad
                                </Link>
                                <Link
                                    to="/"
                                    className="bg-light-blue text-white font-bold py-3 lg:py-4 px-12 lg:px-16 rounded-full shadow-lg hover:bg-light-blue-darker transition-all text-lg text-center"
                                >
                                    Prijava
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Desktop Background */}
            <div
                className="hidden lg:block lg:w-[60%] bg-cover bg-center bg-no-repeat fixed right-0 top-0 h-full"
                style={{
                    backgroundImage: `url(${RegisterFirmBg})`,
                }}
            ></div>
        </div>
    );
}

export default LoginCompany;
