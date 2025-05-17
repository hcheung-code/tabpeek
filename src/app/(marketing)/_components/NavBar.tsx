/**
 *  This is the NavBar component 
 * 
 */

import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function NavBar() {
    return (
        <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/95">
            <nav className="flex items-center gap-10 container font-semibold">
                <Link href="/" className="mr-auto">
                <BrandLogo />
                </Link>
                <Link className="text-lg" href="#about">
                    About
                </Link>
                <Link className="text-lg" href="#">
                    Features
                </Link>
                <Link className="text-lg" href="#">
                    Download Now
                </Link>
            </nav>
        </header>
    )
}