import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { icons } from "./Header";
import SocialIcons from "./SocialIcons";

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
        title: "Disclaimer",
        url: "/disclaimer",
    },
];

function Footer() {
    const router = useRouter();
    return (
        <footer className="bg-dark-hard">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-10 md:items-center justify-between pt-[58px] pb-6 border-b border-gray/30">
                    <div className="flex md:items-center gap-12 flex-col md:flex-row">
                        <div className="shrink-0 flex items-center">
                            <Image
                                src="/img/quantum_icon.svg"
                                width={48}
                                height={48}
                                quality={100}
                                alt="Quantum"
                            />
                        </div>
                        <ul className="flex items-center gap-x-8 gap-y-1 justify-start md:gap-8 flex-wrap">
                            {navs.map((nav, i) => {
                                const isActive = nav.url === router.asPath;
                                return (
                                    <li key={i}>
                                        <Link href={nav.url}>
                                            <a
                                                className={`hover:text-white/70 uppercase border-l-4 lg:border-b-2 lg:border-l-0 border-transparent font-medium duration-100 md:px-6 py-2 block lg:p-1 ${
                                                    isActive ? "!text-primary" : "text-gray"
                                                }`}
                                            >
                                                {nav.title}
                                            </a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <SocialIcons icons={icons} />
                    </div>
                </div>
                <div className="py-8 md:pt-6 md:pb-14">
                    <p className="text-gray text-xs">
                        Copyright © 2022 Quantum. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
