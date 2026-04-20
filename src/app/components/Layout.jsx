import FileIcon from "../images/file-icon.png";
import Flower from "../images/flowericon.png";
import Clock from "./Clock.jsx";
import AboutMe from "../pages/AboutMe.jsx";
import {Link, Outlet} from "react-router-dom";

import Navigation from "./navigation.jsx";
import {useState} from "react";

export default function Layout() {
    const [currentPath, setCurrentPath] = useState("about");
    return (
        <>
            <main className="min-h-screen w-full background flex justify-center items-center p-2 md:p-6">
                <div className="flex justify-center items-center flex-col w-full max-w-6xl">
                    <div className="bg-[#c5a9bf] w-full min-h-[500px] md:h-[720px] rounded-2xl border-[#372d36] border-solid border-3 flex flex-col shadow-2xl">

                        <div className="flex justify-between flex-row m-2 shrink-0">
                            <div className="flex flex-row items-center gap-2">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <img className="select-none pb-1 w-full" src={FileIcon} alt="fileicon" />
                                </div>
                                <p className="jersey select-none text-xs md:text-sm tracking-wide text-[#372d36]">portfolio.exe</p>
                            </div>
                            <button className="cursor-pointer px-2 rounded transition-colors">
                                <p className="select-none jersey text-sm tracking-wide text-[#372d36]">X</p>
                            </button>
                        </div>

                        <div className="bg-[#372d36] h-16 md:h-20 border-[#372d36] border-solid border-t border-b p-3 flex items-center shrink-0">
                            <div className="flex flex-row w-full items-center px-1">
                                <img className="size-8 md:size-10 select-none object-contain" src={Flower} alt="flowerLogo" />
                                <div className="flex md:flex-row flex-col justify-between flex-1 items-center ml-2 md:ml-4 overflow-hidden">
                                    <h1 className="jersey text-lg md:text-4xl jersey-10-regular gradient select-none truncate leading-none">
                                        Welkom bij mijn portfolio
                                    </h1>
                                    <Clock />
                                </div>
                            </div>
                        </div>

                        <Navigation currentPath={currentPath} setCurrentPath={setCurrentPath} />

                        <div className="flex-1 px-2 md:px-2 pb-2 -mt-[2px]">
                            <div className="bg-amber-100 border-[#372d36] border-solid border-2 rounded-b-md rounded-tr-md h-full md:min-h-[480px] overflow-hidden relative shadow-inner">
                                <div className="h-full overflow-y-auto">
                                    <Outlet />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            </>
    );
}

