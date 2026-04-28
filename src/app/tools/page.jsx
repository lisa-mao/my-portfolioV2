'use client'
import {GiNewShoot} from "react-icons/gi";
import {LuEye} from "react-icons/lu";
import {FaPeopleGroup} from "react-icons/fa6";
import Link from "next/link";

export default function Tools() {
    return (
        <main>
            <div className="pl-4 pr-4 m-3 flex items-start gap-4 justify-between ">
                <h1 className="jersey-10-regular">Tools waar ik gebruik van maak</h1>
            </div>
            <section className=" flex flex-col gap-1 h-full w-full text-black ">
                <div
                    className="p-4 m-5 flex items-start gap-4 border-2 border-black border-dotted rounded-2xl bg-white">
                    <div className="text-3xl mt-1 shrink-0 border-2 border-black border-solid text-[#372d36]">
                        <LuEye/>
                    </div>
                    <div>
                        <h2 className="noto-sans-jp font-bold text-sm tracking-wide">Phpstorm</h2>
                        <p className="noto-sans-jp text-xs leading-relaxed text-gray-700">
                            Mijn meest gebruikte IDE, hier heb ik het langste mee geprogrammeerd (alle projecten zijn
                            met deze IDE gemaakt).
                        </p>
                        <button>
                            <Link href="/projects"
                                  className=" cursor-pointer jerseyTab select-none text-[#372d36]"
                                  alt="klik hier om mijn projecten te bekijken!">Bekijk projecten</Link>
                        </button>
                    </div>
                </div>

                <div
                    className="p-4 m-5 flex items-start gap-4 border-2 border-black border-dotted rounded-2xl bg-white">
                    <div className="text-3xl mt-1 shrink-0 border-2 border-black border-solid text-[#372d36]">
                        <FaPeopleGroup/>
                    </div>
                    <div>
                        <h2 className="noto-sans-jp font-bold text-sm tracking-wide">Figma</h2>
                        <p className="noto-sans-jp text-xs leading-relaxed text-gray-700">
                            Ik design mijn UI/UX met Figma hier zijn een paar voorbeelden:
                        </p>
                        <button>
                            <Link href="/figmashowcase"
                                  className="pl-2 cursor-pointer jerseyTab select-none text-[#372d36]"
                                  alt="klik hier om mijn figma voorbeelden te zien!">Klik hier</Link>
                        </button>
                    </div>
                </div>

                <div
                    className="p-4 m-5 flex items-start gap-4 border-2 border-black border-dotted rounded-2xl bg-white">
                    <div className="text-3xl mt-1 shrink-0 border-2 border-black border-solid text-[#372d36]">
                        <GiNewShoot/>
                    </div>
                    <div>
                        <h2 className="noto-sans-jp font-bold text-sm tracking-wide">Trello & Github</h2>
                        <p className="noto-sans-jp text-xs leading-relaxed text-gray-700">
                            Mijn meest gebruikte plannings-tools
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
