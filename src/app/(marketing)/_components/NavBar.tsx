/**
 *  This is the NavBar component 
 * 
 */

import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function NavBar() {
    return (
        <header className="flex py-4 md:py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
            <nav className="flex flex-wrap items-center justify-between w-full container font-semibold">
                <Link href="/" className="flex-shrink-0 mb-2 md:mb-0">
                    <BrandLogo />
                </Link>
                <div className="flex flex-wrap gap-4 md:gap-10">
                    <Link className="text-sm md:text-lg whitespace-nowrap" href="#about">
                        About
                    </Link>
                    <Link className="text-sm md:text-lg whitespace-nowrap" href="#">
                        Features
                    </Link>
                    <Link className="text-sm md:text-lg whitespace-nowrap" href="#">
                        Download Now
                    </Link>
                </div>
            </nav>
        </header>
    )
}