'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: "Over Mij", path: "/" },
        { name: "Mijn Projecten", path: "/my-projects" },
        { name: "Mijn Kwaliteiten", path: "/skills" },
        { name: "Tools", path: "/tools" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="relative">
            <div className="md:hidden w-full h-full flex justify-start p-2">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-amber-100 border-2 border-[#372d36] px-3 py-1 rounded-md jersey text-[#372d36] flex items-center gap-2"
                >
                    {isOpen ? "Sluiten" : "Menu ☰"}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-2 right-2 z-50 bg-amber-100 border-2 border-[#372d36] rounded-md shadow-xl p-2 flex flex-col gap-2 mt-1">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path} // 'to' wordt 'href'
                            onClick={() => setIsOpen(false)}
                            className={`text-left p-2 jersey text-lg rounded ${
                                pathname === item.path ? "bg-[#372d36] text-white" : "text-[#372d36]"
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}

            <div className="hidden md:flex gap-1 flex-row items-start m-2 mb-0 overflow-hidden">
                {menuItems.map((item) => (
                    <div key={item.path} className="tab shrink-0">
                        <div
                            className={`bg-amber-100 relative z-10 rounded-tr-md border-[#372d36] border-solid border-2 px-1 py-2 flex items-center transition-all ${
                                pathname === item.path
                                    ? "bg-amber-50 border-b-0 -mb-[2px] h-11"
                                    : "border-b-2 h-10 hover:bg-[#372d36]/10"
                            }`}
                        >
                            <Link href={item.path} className="flex items-center h-full">
                                <span className="cursor-pointer jerseyTab text-s select-none text-[#372d36] whitespace-nowrap">
                                    {item.name}
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}