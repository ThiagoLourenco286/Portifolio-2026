"use client"
import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ElementType } from "react";

interface ItensSideBarProps extends LinkProps {
    href: string,
    icon: ElementType,
    text: string,
}

export function ItensSideBar({ icon: Icon, href, text, ...props }: ItensSideBarProps) {

    const pathName = usePathname()
    const isCurrentPath = pathName === href

    return (
        <Link {...props} href={href} className={`flex gap-4 text-[18px] font-sans text-tech-secundary transition-all duration-100 p-1
            ${isCurrentPath ?
                'bg-linear-to-l from-tech-accent-blue/50 from-5% ' : ''}`}>
            <Icon />
            {text}
        </Link>
    )
}