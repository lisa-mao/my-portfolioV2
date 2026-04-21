'use client'
import {useState} from "react";
import ImageModal from "../components/ImageModalComponent.jsx";

export default function FigmaShowcase() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const skillswapImages = [
        {
            id: 1, src:"/figmaShowcase/home.png", alt: "Homepagina"
        },
        {
            id: 2, src:"/figmaShowcase/marketplace.png", alt: "Marktplaats"
        },
        {
            id: 3, src:"/figmaShowcase/selectedService.png", alt: "Bekijk service"
        },
        {
            id: 4, src:"/figmaShowcase/styleguide.png", alt: "Styleguide"
        },


    ]
    return (
        <main>
            <div
                className="pl-4 m-3 pr-4 flex items-start gap-4 justify-between md:max-h-[450px]  ">

                <h1 className="jersey-10-regular">Mijn UI/UX ontwerpen</h1>
            </div>
            <section className=" flex flex-col gap-1 h-full w-full text-black">
                <div
                    className="p-4 m-5 flex flex-col md:flex-row items-start gap-4 border-2 border-black border-solid rounded-xl bg-white">
                    <div className="flex flex-col">
                        <h1 className="font-stretch-50% jersey-10-projectLabels">SkillSwap</h1>
                        <button onClick={() => setIsModalOpen(true)} className="cursor-pointer">
                            <img alt="homepage" className="w-140 h-70 border-black border-2 border-solid "
                                 src="/figmaShowcase/home.png"/>
                        </button>
                    </div>
                    <div
                        className="md:w-1/3 flex flex-col">
                        <div
                            className="md:max-h-[390px]  md:overflow-y-auto md-pr-6 md:scrollbar-thin h-auto overflow-visible ">
                            <div>
                                <h2 className=" md:pt-10 noto-sans-jp-label2">Concept</h2>
                                <p className="noto-sans-jp-">SkillSwap is ontworpen voor snelheid en kwaliteit. In
                                    plaats van lange
                                    vacaturetrajecten, kunnen gebruikers direct specifieke services huren. Het platform
                                    is ideaal voor startups, hobbyisten of bedrijven die tijdelijke versterking nodig
                                    hebben op projectbasis.</p>
                            </div>
                            <div>
                                <h2 className=" md:pt-10 noto-sans-jp-label2">Kern functionaliteiten</h2>
                                <p className="noto-sans-jp-">* Service-Based Browsing: Zoek niet op profiel, maar op de
                                    specifieke dienst (bijv.
                                    "React Component Optimalisatie" of "Database Migratie").</p>
                                <p>
                                    * Seamless Collaboration: Tools voor directe communicatie en code-review
                                    integraties.
                                </p>
                                <p> * Kwaliteitsgarantie: Een beoordelingssysteem gebaseerd op opgeleverde code en
                                    design-assets.</p>
                            </div>
                            <div>
                                <h2 className=" md:pt-10 noto-sans-jp-label2">WIP (work in progress)</h2>
                                <p className="noto-sans-jp-">Deze screenshots tonen de eerste iteraties van de
                                    gebruikerservaring. De focus ligt
                                    momenteel op: </p>
                                <p>* Mid-Fidelity Mockups: Het ontwikkelen van een modern, "developer-first" interface
                                    design.</p>
                                <p>* Feedback Loop: Gebruikerstesten uitvoeren op de navigatiestructuur.</p>
                            </div>
                            <div>
                                <h2 className=" md:pt-10 noto-sans-jp-label2">Design visie:</h2>
                                <p className="noto-sans-jp-"> ik heb gekozen voor deze strakke layout en donkere thema,
                                    omdat developers meestal
                                    in het donker programmeren(soms letterlijk). Ik wil nog werken aan de accent kleuren
                                    van elke expertise(Front-end, Back-end, Design) om ze uit elkaar te scheiden.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ImageModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    images={skillswapImages}
                    altText="homepagina "
                />
            </section>
        </main>
    );
}

