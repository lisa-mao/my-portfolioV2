import IdentificationCard from '../images/identificationcard.png'
import SpiderChart from "../components/Chart.jsx";
import Cake from '../images/items/cake.png'
import Charger from '../images/items/charger.png'
import Mouse from '../images/items/mouse.png'
import Laptop from '../images/items/laptop.png'
import Snacks from '../images/items/snacks.png'
import Waterbottle from '../images/items/waterbottle.png'
import {useState} from "react";


export default function AboutMe() {
    const [label, setLabel] = useState("Hover over een item voor meer informatie")

    const checkItem = (e) => {
        if (e.target.id === "items") {

            if (e.target.alt === "laptop") {
                let text = "Mijn geliefde laptop sinds 2021."
                setLabel(text)
            }
            if (e.target.alt === "laptop oplader") {
                let text = "Mijn laptop red het niet zonder oplader."
                setLabel(text)
            }
            if (e.target.alt === "computer muis") {
                let text = "Een computer muis maakt je leven vele malen makkelijker."
                setLabel(text)
            }
            if (e.target.alt === "waterfles") {
                let text = "To do: drink water."
                setLabel(text)
            }
            if (e.target.alt === "cake") {
                let text = "Ik hou van taart."
                setLabel(text)
            }
            if (e.target.alt === "snacks") {
                let text = "Snacks, yum."
                setLabel(text)
            }
        } else {
            return null
        }
    }

    const noItem = () => {
       setLabel("Hover over een item voor meer informatie")
    }

    document.addEventListener("mouseover", checkItem)
    document.addEventListener("mouseout", noItem)

    return (

        <main
            className="grid grid-cols-1 md:grid-cols-[auto_minmax(300px,350px)] gap-6 p-6 h-fit w-full max-w-6xl mx-auto items-start justify-center">

            <section className="flex md:flex-row flex-col gap-4 h-full items-start">
                <div
                    className="bg-white flex justify-center items-center h-auto w-full md:w-[350px] border-[#372d36] rounded-xl border-solid border-2 overflow-hidden shrink-0 shadow-sm">
                    <SpiderChart/>
                </div>

                <div
                    className="bg-white flex flex-col border-[#372d36] rounded-md border-solid border-2 flex-grow h-full md:min-w-[150px] w-full">
                    <h1 className="noto-sans-jp tracking-[0.15rem] bg-black p-2 text-white text-lg">Wat zit er in mijn
                        tas</h1>
                    <div className="p-3 text-sm overflow-y-auto">
                        <div className="flex flex-col gap-6">

                            <img
                                className=" w-78 h-45 hover:animate-wiggle "
                                src={Laptop}
                                alt="laptop"
                                id="items"
                            />

                            <div className="flex flex-row">
                                <img
                                    className="  w-70 h-18 hover:animate-wiggle"
                                    src={Charger}
                                    alt="laptop oplader"
                                    id="items"
                                />
                                <img
                                    className=" w-10 h-21 hover:animate-wiggle"
                                    src={Mouse}
                                    alt="computer muis"
                                    id="items"
                                />
                            </div>
                        </div>
                        <div className=" w-70 h-18 flex justify-between flex-row">
                            <img
                                className="w-10 h-20 hover:animate-wiggle "
                                src={Waterbottle}
                                alt="waterfles"
                                id="items"
                            />

                            <img
                                className="w-15 h-14 hover:animate-wiggle"
                                src={Cake}
                                alt="cake"
                                id="items"
                            />
                            <img
                                className="w-13 h-13 hover:animate-wiggle"
                                src={Snacks}
                                alt="snacks"
                                id="items"
                            />
                        </div>

                    </div>
                    <div className=" h-auto object-contain w-full bg-black">
                    <p id="itemDescription" className="text-center bg-black text-white rounded-b-md border-black border-3 border-solid h-auto object-contain w-full ">{label}</p>
                </div>
                </div>

            </section>

            <section className="flex flex-col gap-4 h-full w-full">
                <div className="w-full flex justify-start">
                    <img
                        className="rounded-2xl noto-sans-jp- border-black border-2 border-solid w-full max-w-[320px] h-auto object-contain"
                        src={IdentificationCard}
                        alt="id card"
                    />
                </div>

                <div
                    className="bg-white border-[#372d36] rounded-xl border-solid border-2 w-full max-w-[320px] flex-grow overflow-hidden">
                    <h1 className="p-2 select-none noto-sans-jp font-thin tracking-[0.15rem]  text-xl border-b bg-black text-white border-gray-200 mb-1">Biografie</h1>
                    <p className="p-1 select-none noto-sans-jp text-sm leading-relaxed">
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

