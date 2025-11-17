import RegLoginBg from "../images/reg_login_bg.svg";

function Register() {
    return (
        <div
            className="min-h-screen flex items-center justify-center font-archivo p-6 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${RegLoginBg})` }}
        >
            <div className="w-full max-w-[700px] bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
                <h1 className="text-4xl font-black text-light-blue-green text-center mb-8">
                    Servio
                </h1>

                <div className="space-y-6">
                    <h2 className="text-2xl font-black text-gray-900 text-center mb-6">
                        Registruj se
                    </h2>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            E-mail / telefon
                        </label>
                        <input
                            type="text"
                            className="w-full py-2 border-b-3 border-light-blue focus:outline-none focus:border-light-blue"
                            placeholder="Unesite email ili broj telefona"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Šifra
                        </label>
                        <input
                            type="password"
                            className="w-full py-2 border-b-3 border-light-blue focus:outline-none focus:border-light-blue"
                            placeholder="Unesite šifru"
                        />
                    </div>

                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">ili</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    <button className="w-full bg-light-blue text-white py-3 rounded-lg font-bold hover:bg-light-blue-darker transition-colors">
                        Poveži firmu
                    </button>

                    <div className="text-center">
                        <span className="text-gray-600">Imate profil? </span>
                        <button className="text-light-blue font-bold hover:underline">
                            Prijavi se
                        </button>
                    </div>

                    <div className="text-center">
                        <button className="text-gray-500 text-sm hover:text-gray-700">
                            Admin prijava
                        </button>
                    </div>

                    <div className="pt-6 border-t border-gray-300">
                        <p className="text-center text-gray-600 mb-4">
                            Registruj se sa
                        </p>
                        <div className="flex justify-center">
                            <button className="w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-gray-400 transition-colors">
                                <i className="fa-brands fa-google text-xl text-gray-600"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
