'use client'
import SpiderChart from "./components/Chart.jsx";
import { useState } from "react";

export default function AboutMe() {
    const [label, setLabel] = useState("Hover over een item voor meer informatie");

    const handleMouseOver = (text) => {
        setLabel(text);
    };

    const handleMouseOut = () => {
        setLabel("Hover over een item voor meer informatie");
    };

    return (
        <main className="grid grid-cols-1 md:grid-cols-[auto_minmax(260px,350px)] gap-6 p-6 h-fit w-full max-w-6xl mx-auto items-start justify-center">
            <section className="flex md:flex-row flex-col gap-4 h-full items-start">
                <div className="bg-white flex justify-center items-center h-auto w-full md:w-[350px] border-[#372d36] rounded-xl border-solid border-2 overflow-hidden shrink-0 shadow-sm">
                    <SpiderChart />
                </div>

                <div className="bg-white flex flex-col border-[#372d36] rounded-md border-solid border-2 flex-grow h-full md:min-w-[150px] w-full">
                    <h1 className="noto-sans-jp tracking-[0.15rem] bg-black p-2 text-white text-lg">Wat zit er in mijn tas</h1>
                    <div className="p-3 text-sm overflow-y-auto">
                        <div className="flex flex-col gap-6">
                            <img
                                className="w-78 h-45 hover:animate-wiggle cursor-help"
                                src="/items/laptop.png"
                                alt="laptop"
                                onMouseOver={() => handleMouseOver("Mijn geliefde laptop sinds 2021.")}
                                onMouseOut={handleMouseOut}
                            />

                            <div className="flex flex-row">
                                <img
                                    className="w-70 h-18 hover:animate-wiggle cursor-help"
                                    src="/items/charger.png"
                                    alt="laptop oplader"
                                    onMouseOver={() => handleMouseOver("Mijn laptop red het niet zonder oplader.")}
                                    onMouseOut={handleMouseOut}
                                />
                                <img
                                    className="w-10 h-21 hover:animate-wiggle cursor-help"
                                    src="/items/mouse.png"
                                    alt="computer muis"
                                    onMouseOver={() => handleMouseOver("Mijn computer muis.")}
                                    onMouseOut={handleMouseOut}
                                />
                            </div>
                        </div>
                        <div className="w-70 h-18 flex justify-between flex-row">
                            <img
                                className="w-10 h-20 hover:animate-wiggle cursor-help"
                                src="/items/waterbottle.png"
                                alt="waterfles"
                                onMouseOver={() => handleMouseOver("To do: drink water.")}
                                onMouseOut={handleMouseOut}
                            />
                            <img
                                className="w-15 h-14 hover:animate-wiggle cursor-help"
                                src="/items/cake.png"
                                alt="cake"
                                onMouseOver={() => handleMouseOver("Ik hou van taart.")}
                                onMouseOut={handleMouseOut}
                            />
                            <img
                                className="w-13 h-13 hover:animate-wiggle cursor-help"
                                src="/items/snacks.png"
                                alt="snacks"
                                onMouseOver={() => handleMouseOver("Snacks, yum.")}
                                onMouseOut={handleMouseOut}
                            />
                        </div>
                    </div>
                    <div className="h-auto object-contain w-full bg-black">
                        <p className="text-center bg-black text-white rounded-b-md border-black border-3 border-solid h-auto object-contain w-full p-2 min-h-[40px]">
                            {label}
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-4 h-full w-full">
                <div className="w-full flex justify-start">
                    <img
                        className="rounded-2xl border-black border-2 border-solid w-full max-w-[320px] h-auto object-contain"
                        src="/identificationcard.png"
                        alt="id card"
                    />
                </div>

                <div className="bg-white border-[#372d36] rounded-xl border-solid border-2 w-full max-w-[320px] flex-grow overflow-hidden">
                    <h1 className="p-2 select-none noto-sans-jp font-thin tracking-[0.15rem] text-xl border-b bg-black text-white border-gray-200 mb-1">Biografie</h1>
                    <p className="p-2 select-none noto-sans-jp text-sm leading-relaxed">
                        Hoii!! Ik ben een Fullstack Developer met een scherp oog voor wat een applicatie écht succesvol
                        maakt. Ik geloof dat de kracht van elk project schuilt in de details: die subtiele maar cruciale
                        functies waar de gebruiker misschien niet direct over nadenkt, maar die de ervaring wel
                        vlekkeloos maken!
                    </p>
                </div>
            </section>
        </main>
    );
}