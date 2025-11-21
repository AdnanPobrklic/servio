import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import RegisterFirmBg from "../images/register-firm-bg.svg";

function RegisterCompany() {
    const [step, setStep] = useState(1);
    const [files, setFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState({});
    const fileInputRef = useRef(null);

    // Handler za odabir fajlova
    const handleFileSelect = (event) => {
        const selectedFiles = Array.from(event.target.files);

        if (selectedFiles.length > 0) {
            const newFiles = selectedFiles.map((file) => ({
                file: file,
                name: file.name,
                size: formatFileSize(file.size),
                type: file.type,
                progress: 0,
                status: "uploading", // uploading, completed, error
            }));

            setFiles((prev) => [...prev, ...newFiles]);

            // Simuliraj upload progres
            newFiles.forEach((fileObj, index) => {
                simulateUpload(fileObj, index);
            });
        }
    };

    // Simulacija upload procesa
    const simulateUpload = (fileObj, originalIndex) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);

                setFiles((prev) =>
                    prev.map((f, idx) =>
                        idx === originalIndex
                            ? { ...f, progress: 100, status: "completed" }
                            : f
                    )
                );

                setUploadProgress((prev) => ({ ...prev, [fileObj.name]: 100 }));
            } else {
                setFiles((prev) =>
                    prev.map((f, idx) =>
                        idx === originalIndex
                            ? { ...f, progress: Math.min(progress, 100) }
                            : f
                    )
                );

                setUploadProgress((prev) => ({
                    ...prev,
                    [fileObj.name]: Math.min(progress, 100),
                }));
            }
        }, 200);
    };

    // Formatiranje veličine fajla
    const formatFileSize = (bytes) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    // Handler za brisanje fajla
    const handleRemoveFile = (indexToRemove) => {
        setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    // Handler za drag and drop
    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = Array.from(event.dataTransfer.files);

        if (droppedFiles.length > 0) {
            const newFiles = droppedFiles.map((file) => ({
                file: file,
                name: file.name,
                size: formatFileSize(file.size),
                type: file.type,
                progress: 0,
                status: "uploading",
            }));

            setFiles((prev) => [...prev, ...newFiles]);

            newFiles.forEach((fileObj, index) => {
                simulateUpload(fileObj, files.length + index);
            });
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Handler za browse button
    const handleBrowseClick = () => {
        fileInputRef.current?.click();
    };

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };

    const handleBack = () => {
        if (step === 2 && files.length > 0) {
            setFiles([]);
            setUploadProgress({});
        }
        setStep((prev) => prev - 1);
    };

    // Provjera da li su svi fajlovi uploadani
    const allFilesUploaded =
        files.length > 0 && files.every((file) => file.status === "completed");

    return (
        <div className="min-h-screen w-full flex font-archivo overflow-hidden">
            {/* Mobile Background - FIXED */}
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
                <div className="flex-1 flex flex-col justify-start mt-10 lg:mt-0 lg:justify-center items-center lg:items-end pr-0 lg:pr-[60px] xl:pr-[80px]">
                    {/* Form Card - Veći na svim ekranima osim mobile */}
                    <div className="bg-white rounded-[30px] shadow-2xl p-8 lg:p-12 lg:min-w-[500px] w-[95%] sm:w-[90%] max-w-[600px] lg:max-w-[700px] lg:mr-[-150px] xl:mr-[-200px] relative z-20 min-h-[600px] sm:min-h-[650px] flex flex-col justify-center">
                        {step === 1 && (
                            <>
                                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black text-light-blue-green mb-10">
                                    Prijavite svoju firmu
                                </h1>

                                <form className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-light-blue-green font-bold text-base lg:text-lg block">
                                            Ime firme
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border-b-[3px] border-light-blue focus:border-light-blue-green outline-none py-2 lg:py-3 text-gray-700 font-medium text-lg transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-light-blue-green font-bold text-base lg:text-lg block">
                                            Usluga koju pružate
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border-b-[3px] border-light-blue focus:border-light-blue-green outline-none py-2 lg:py-3 text-gray-700 font-medium text-lg transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-light-blue-green font-bold text-base lg:text-lg block">
                                            Telefon
                                        </label>
                                        <input
                                            type="tel"
                                            className="w-full border-b-[3px] border-light-blue focus:border-light-blue-green outline-none py-2 lg:py-3 text-gray-700 font-medium text-lg transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-light-blue-green font-bold text-base lg:text-lg block">
                                            Adresa / lokacija
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border-b-[3px] border-light-blue focus:border-light-blue-green outline-none py-2 lg:py-3 text-gray-700 font-medium text-lg transition-colors"
                                        />
                                    </div>

                                    <div className="flex justify-between items-end pt-8">
                                        <div className="flex flex-col gap-2">
                                            <Link
                                                to="/prijava-firme"
                                                className="text-light-blue-green font-bold text-base lg:text-lg underline decoration-2 underline-offset-2 hover:text-light-blue-green-darker"
                                            >
                                                Već sam prijavljen
                                            </Link>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className="bg-light-blue text-white font-bold py-4 lg:py-5 px-12 lg:px-16 rounded-full shadow-lg hover:bg-light-blue-darker transition-all text-lg"
                                        >
                                            Dalje
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black text-light-blue-green mb-4">
                                    Dodajte dokumente
                                </h1>
                                <p className="text-gray-300 font-bold text-base lg:text-lg mb-8">
                                    Uploadajte potrebne dokumente za
                                    verifikaciju vaše firme
                                </p>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileSelect}
                                    multiple
                                    className="hidden"
                                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.mp4"
                                />

                                <div
                                    className={`border-[3px] border-dashed border-light-blue rounded-xl p-6 lg:p-8 flex flex-col items-center justify-center text-center bg-white w-full ${
                                        files.length === 0
                                            ? "min-h-[300px] lg:min-h-[350px] cursor-pointer"
                                            : "min-h-[auto]"
                                    }`}
                                    onClick={
                                        files.length === 0
                                            ? handleBrowseClick
                                            : undefined
                                    }
                                    onDrop={handleDrop}
                                    onDragOver={handleDragOver}
                                >
                                    {files.length === 0 ? (
                                        <>
                                            <i className="fa-solid fa-cloud-arrow-up text-6xl lg:text-7xl text-gray-700 mb-6"></i>
                                            <p className="font-bold text-gray-800 mb-4 text-lg lg:text-xl">
                                                Odaberite fajlove ili ih
                                                prevucite ovdje
                                            </p>
                                            <p className="text-gray-300 text-sm lg:text-base mb-8">
                                                JPEG, PNG, PDF, DOC i MP4
                                                formati, do 50MB
                                            </p>
                                            <button
                                                type="button"
                                                onClick={handleBrowseClick}
                                                className="border border-gray-300 text-gray-600 font-bold py-4 lg:py-5 px-10 lg:px-12 rounded-full hover:bg-gray-50 transition-colors text-lg"
                                            >
                                                Odaberite fajlove
                                            </button>
                                        </>
                                    ) : (
                                        <div className="w-full space-y-6 py-4">
                                            {files.map((file, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-4 w-full p-4 lg:p-5 bg-gray-50 rounded-lg"
                                                >
                                                    <i
                                                        className={`fa-regular text-3xl lg:text-4xl ${
                                                            file.type.includes(
                                                                "image"
                                                            )
                                                                ? "fa-file-image text-blue-400"
                                                                : file.type.includes(
                                                                      "pdf"
                                                                  )
                                                                ? "fa-file-pdf text-red-400"
                                                                : file.type.includes(
                                                                      "video"
                                                                  )
                                                                ? "fa-file-video text-purple-400"
                                                                : "fa-file text-gray-400"
                                                        }`}
                                                    ></i>
                                                    <div className="flex-1 text-left">
                                                        <p className="font-bold text-gray-700 text-base lg:text-lg truncate">
                                                            {file.name}
                                                        </p>
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="text-gray-400 text-sm">
                                                                {file.size}
                                                            </span>
                                                            {file.status ===
                                                                "completed" && (
                                                                <>
                                                                    <i className="fa-solid fa-circle-check text-light-blue-green text-sm"></i>
                                                                    <span className="text-gray-700 text-sm font-bold">
                                                                        Završeno
                                                                    </span>
                                                                </>
                                                            )}
                                                            {file.status ===
                                                                "uploading" && (
                                                                <span className="text-orange-500 text-sm font-bold">
                                                                    Uploaduje
                                                                    se...{" "}
                                                                    {Math.round(
                                                                        file.progress
                                                                    )}
                                                                    %
                                                                </span>
                                                            )}
                                                        </div>
                                                        {/* Progress bar */}
                                                        <div className="w-full bg-gray-200 rounded-full h-2 lg:h-2.5">
                                                            <div
                                                                className={`h-2 lg:h-2.5 rounded-full ${
                                                                    file.status ===
                                                                    "completed"
                                                                        ? "bg-light-blue-green"
                                                                        : "bg-light-blue"
                                                                }`}
                                                                style={{
                                                                    width: `${file.progress}%`,
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleRemoveFile(
                                                                idx
                                                            );
                                                        }}
                                                        className="text-gray-400 hover:text-red-500 transition-colors text-xl"
                                                    >
                                                        <i className="fa-solid fa-times"></i>
                                                    </button>
                                                </div>
                                            ))}

                                            {/* Dodaj još fajlova button */}
                                            <div
                                                className="border-2 border-dashed border-gray-300 rounded-lg p-5 lg:p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors mt-6"
                                                onClick={handleBrowseClick}
                                            >
                                                <i className="fa-solid fa-plus text-gray-400 mb-3 text-xl"></i>
                                                <p className="text-gray-600 text-base lg:text-lg font-bold">
                                                    Dodaj još fajlova
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex justify-between items-center pt-12 w-full">
                                    <button
                                        onClick={handleBack}
                                        className="text-light-blue-green font-bold text-base lg:text-lg hover:text-light-blue-green-darker"
                                    >
                                        Nazad
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        disabled={!allFilesUploaded}
                                        className={`font-bold py-4 lg:py-5 px-10 lg:px-12 rounded-full shadow-lg transition-all text-lg ${
                                            allFilesUploaded
                                                ? "bg-light-blue text-white hover:bg-light-blue-darker cursor-pointer"
                                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        }`}
                                    >
                                        {files.length === 0
                                            ? "Dalje"
                                            : allFilesUploaded
                                            ? "Poveži firmu"
                                            : "Uploaduje se..."}
                                    </button>
                                </div>
                            </>
                        )}

                        {step === 3 && (
                            <div className="flex flex-col items-center text-center py-12">
                                <div className="w-28 h-28 lg:w-32 lg:h-32 bg-light-blue-green rounded-full flex items-center justify-center mb-10 shadow-xl transform scale-110">
                                    <i className="fa-solid fa-check text-6xl lg:text-7xl text-white"></i>
                                </div>
                                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black text-light-blue-green mb-6 leading-tight">
                                    Firma uspješno <br /> povezana!
                                </h1>
                                <p className="text-gray-300 font-bold text-base lg:text-lg mb-12 px-4">
                                    Vaša firma je uspješno verifikovana.
                                    Dokumenti su prihvaćeni.
                                </p>

                                <div className="mb-8 w-full max-w-sm lg:max-w-md">
                                    <p className="text-gray-700 font-bold text-base lg:text-lg mb-4">
                                        Uploadovani dokumenti:
                                    </p>
                                    <div className="space-y-3 text-left">
                                        {files.map((file, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 text-base lg:text-lg"
                                            >
                                                <i className="fa-solid fa-check text-light-blue-green text-base"></i>
                                                <span className="text-gray-600">
                                                    {file.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    to="/"
                                    className="bg-light-blue text-white font-bold py-4 lg:py-5 px-14 lg:px-16 rounded-full shadow-lg hover:bg-light-blue-darker transition-all text-lg"
                                >
                                    Na početnu
                                </Link>
                            </div>
                        )}
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

export default RegisterCompany;
