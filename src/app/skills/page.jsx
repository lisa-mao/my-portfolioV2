'use client'
import { GiNewShoot } from "react-icons/gi";
import {LuEye} from "react-icons/lu";
import {FaPeopleGroup} from "react-icons/fa6";
import Link from "next/link";

export default function Skills() {
    return (
        <main>
            <div className="pl-4 pr-4 m-3 flex items-start gap-4 justify-between ">
                <h1 className="jersey-10-regular">Zo breng ik ideeën tot leven</h1>
                <button className="border-2 border-black border-solid rounded-xl bg-white">
                    <Link href="/tools"
                          className=" p-3 cursor-pointer noto-sans-jp select-none text-[#372d36] ">Tools waar ik gebruik van maak</Link>
                </button>
            </div>
            <section className=" grid grid-rows-3 items-center gap-1 h-full w-full text-black">
                <div className="p-4 m-5 flex items-start gap-4 border-2 border-black border-dotted rounded-2xl bg-white">
                    <div className="text-3xl mt-1 shrink-0 border-2 border-black border-solid text-[#372d36]">
                        <LuEye />
                    </div>
                    <div>
                        <h2 className="noto-sans-jp font-bold text-sm tracking-wide">Oog voor detail</h2>
                        <p className="noto-sans-jp text-xs leading-relaxed text-gray-700">
                            Ik focus op de subtiele, cruciale functies die de gebruikerservaring vlekkeloos maken. Details die je pas mist als ze er niet zijn.
                        </p>
                    </div>
                </div>

                <div className="p-4 m-5 flex items-start gap-4 border-2 border-black border-dotted rounded-2xl bg-white">
                    <div className="text-3xl mt-1 shrink-0 border-2 border-black border-solid text-[#372d36]">
                        <FaPeopleGroup />
                    </div>
                    <div>
                        <h2 className="noto-sans-jp font-bold text-sm tracking-wide">Van concept naar product</h2>
                        <p className="noto-sans-jp text-xs leading-relaxed text-gray-700">
                            Ik vertaal de wensen van de klant naar een levendig product. Hierbij combineer ik diverse perspectieven om tot een resultaat te komen dat goed voelt, beweegt en reageert.
                        </p>
                    </div>
                </div>

                <div className="p-4 m-5 flex items-start gap-4 border-2 border-black border-dotted rounded-2xl bg-white">
                    <div className="text-3xl mt-1 shrink-0 border-2 border-black border-solid text-[#372d36]">
                        <GiNewShoot />
                    </div>
                    <div>
                        <h2 className="noto-sans-jp font-bold text-sm tracking-wide">Creativiteit & Beleving</h2>
                        <p className="noto-sans-jp text-xs leading-relaxed text-gray-700">
                            Creativiteit is de kern van mijn werk. Mijn prioriteit is het bouwen van een website die niet alleen functioneel is, maar ook echt tot leven komt.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
