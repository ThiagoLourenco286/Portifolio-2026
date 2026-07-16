"use client";

import { useState } from "react";
import { ItensSideBar } from "./itens-side-bar";
import {
    Home,
    FolderBookmark,
    Layers,
    BookMarkedIcon,
    Menu,
} from "lucide-react";

export default function SideBar() {
    const [open, setIsOpen] = useState(false);

    return (
        <nav className="bg-tech-card rounded-2xl border m-3 border-tech-border md:flex md:flex-col md:ps-6 md:pt-6 md:m-5">

            <div className="md:hidden">
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex w-full justify-between items-center p-5 cursor-pointer"
                >
                    <h1 className="text-tech-secundary text-sm">
                        DEV_PORTIFOLIO
                    </h1>

                    <Menu />
                </button>

                {open && (
                    <div className="flex flex-col gap-5 px-5 pb-5">
                        <ItensSideBar href="/" icon={Home} text="Inicio" />
                        <ItensSideBar
                            href="/Competencias"
                            icon={Layers}
                            text="Competências"
                        />
                        <ItensSideBar
                            href="/Certificados"
                            icon={BookMarkedIcon}
                            text="Certificados"
                        />
                        <ItensSideBar
                            href="/Projetos"
                            icon={FolderBookmark}
                            text="Projetos"
                        />
                    </div>
                )}
            </div>

            <div className="hidden md:flex md:flex-col">
                <h1 className="text-tech-secundary text-sm">
                    DEV_PORTIFOLIO
                </h1>

                <div className="flex flex-col mt-12 gap-5">
                    <ItensSideBar href="/" icon={Home} text="Inicio" />
                    <ItensSideBar
                        href="/Competencias"
                        icon={Layers}
                        text="Competências"
                    />
                    <ItensSideBar
                        href="/Certificados"
                        icon={BookMarkedIcon}
                        text="Certificados"
                    />
                    <ItensSideBar
                        href="/Projetos"
                        icon={FolderBookmark}
                        text="Projetos"
                    />
                </div>
            </div>
        </nav>
    );
}