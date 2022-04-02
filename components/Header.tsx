import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useWindowSize } from "@react-hook/window-size";
import Image from "next/image";
import { useRouter } from "next/router";
import SocialIcons, { IconType } from "./SocialIcons";
import Button from "./Button";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import OpenSeaIcon from "./OpenSeaIcon";

const navs = [
    {
        title: "OPPORTUNITY",
        url: "/",
    },
    {
        title: "FAQ",
        url: "/faq",
    },
    {
        title: "Account",
        url: "/account",
    },
];

export const icons: IconType[] = [
    {
        Icon: BsDiscord,
        url: "#",
    },
    {
        Icon: BsTwitter,
        url: "#",
    },
    {
        Icon: OpenSeaIcon,
        url: "#",
    },
];

function Header() {
    const router = useRouter();

    const [windowWidth, windowHeight] = useWindowSize();
    const [showSidebar, setShowSidebar] = useState(false);
    const [headerHeight, setHeaderHeight] = useState<any>("auto");
    const [mobieSidebarHeight, setMobieSidebarHeight] = useState<any>("auto");

    const closeSidebar = (e: any) => e?.target?.id === "mobile_sidebar" && setShowSidebar(false);
    const closeSidebarForcely = () => setShowSidebar(false);

    useEffect(() => {
        document.body.style.overflow = showSidebar ? "hidden" : "auto";
    }, [showSidebar]);

    useEffect(() => {
        setTimeout(() => {
            console.log(windowWidth);
            if (windowWidth < 1024) {
                const header_main_wrapper =
                    document.getElementById("header_main_wrapper")?.clientHeight;
                setHeaderHeight(header_main_wrapper || 0);
                setMobieSidebarHeight(`${windowHeight - ((header_main_wrapper || 1) - 1)}px`);
            } else {
                setHeaderHeight("auto");
                setMobieSidebarHeight("auto");
            }
        }, 100);
    }, [windowWidth, windowHeight]);

    return (
        <header
            className="sticky top-0 left-0 w-full z-50 duration-[0.4s] bg-dark-hard"
            id="header_main_wrapper"
        >
            <div className="relative py-4 backdrop-blur-sm lg:py-6 flex justify-between items-center px-5 md:px-6">
                {/* Logo Start */}
                <div className="shrink-0">
                    <Link href="/">
                        <a className="w-[150px] block lg:w-[200px]">
                            <Image
                                src="/img/quantum_logo.svg"
                                alt="Quantum"
                                width={336}
                                height={60}
                                quality={100}
                            />
                        </a>
                    </Link>
                </div>
                {/* Logo End */}

                <div>
                    {/* Nav Start */}
                    <div
                        onClick={closeSidebar}
                        id="mobile_sidebar"
                        className={`fixed pointer-events-none overflow-hidden left-0 w-full bg-black/20 z-50 lg:static lg:w-auto lg:h-auto lg:bg-transparent opacity-0 duration-[0.3s] ${
                            showSidebar ? "opacity-100 pointer-events-auto" : ""
                        } lg:opacity-100 lg:pointer-events-auto`}
                        style={{ top: headerHeight - 2, height: mobieSidebarHeight }}
                    >
                        <ul
                            className={`gap-10 font-inter font-normal text-white bg-dark-hard py-5 lg:py-0 w-full lg:w-auto lg:flex h-auto lg:bg-transparent -translate-y-full duration-[0.3s] lg:items-center ${
                                showSidebar ? "translate-y-0" : ""
                            } lg:translate-y-0`}
                        >
                            {navs.map((nav, i) => {
                                const isActive = nav.url === router.asPath;
                                return (
                                    <li key={i}>
                                        <Link href={nav.url}>
                                            <a
                                                onClick={closeSidebarForcely}
                                                className={`hover:text-white/70 uppercase border-l-4 lg:border-b-2 lg:border-l-0 border-transparent font-semibold duration-100 px-6 py-4 lg:py-2 block lg:p-1 ${
                                                    isActive
                                                        ? "!text-white !border-primary"
                                                        : "text-gray"
                                                }`}
                                            >
                                                {nav.title}
                                            </a>
                                        </Link>
                                    </li>
                                );
                            })}

                            <li className="px-6 lg:px-0 mt-8 mb-8 lg:m-0">
                                <SocialIcons icons={icons} />
                            </li>

                            <li className="px-6 lg:px-0 pb-2 lg:pb-0">
                                <Button>Connect Wallet</Button>
                            </li>
                        </ul>
                    </div>
                    {/* Nav End */}
                    <div className="text-white flex items-center gap-6 lg:gap-8">
                        {/* Hamburger Icon --Start-- */}
                        <div
                            className="hover:text-white lg:hidden"
                            onClick={() => setShowSidebar((prev) => !prev)}
                        >
                            {showSidebar ? (
                                <IoMdClose size={28} className="relative z-50" />
                            ) : (
                                <GiHamburgerMenu size={25} />
                            )}
                        </div>
                        {/* Hamburger Icon --End-- */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
