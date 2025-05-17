/**
 *  This is the NavBar component 
 *  Fully responsive for all device sizes
 */

import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function NavBar() {
    return (
        <header className="flex py-3 md:py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
            <nav className="flex flex-col xs:flex-row items-center justify-between w-full px-2 sm:px-4 md:px-6 lg:container font-semibold">
                <Link href="/" className="flex-shrink-0 mb-3 xs:mb-0">
                    <BrandLogo />
                </Link>
                <div className="flex justify-center gap-4 xs:gap-6 md:gap-8 lg:gap-10">
                    <Link className="text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap" href="#about">
                        About
                    </Link>
                    <Link className="text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap" href="#">
                        Features
                    </Link>
                    <Link className="text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap" href="#">
                        Download
                    </Link>
                </div>
            </nav>
        </header>
    )
}