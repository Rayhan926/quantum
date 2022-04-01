import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaGlobeAsia } from "react-icons/fa";
import Button from "../components/Button";
import SocialIcons, { IconType } from "../components/SocialIcons";
import cx from "../utils/cx";

const icons: IconType[] = [
    {
        Icon: BsDiscord,
        url: "#",
    },
    {
        Icon: BsTwitter,
        url: "#",
    },
    {
        Icon: FaGlobeAsia,
        url: "#",
    },
];

const alocations = ["250", "500", "1000"];

const Home: NextPage = () => {
    const [selectedAlocation, setSelectedAlocation] = useState<null | number>(null);

    const selectAlocation = (index: number) => {
        setSelectedAlocation((prev) => (prev === index ? null : index));
    };

    return (
        <>
            <Head>
                <title>Quantam</title>
                <meta name="description" content="Quantam" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="grid grid-cols-1 lg:grid-cols-[60%,auto] gap-10 lg:gap-[60px]">
                    <div>
                        <img
                            src="/img/feature_image.png"
                            alt="feature_image"
                            className="w-full h-auto"
                        />
                    </div>
                    <div>
                        {/* Tags --Start-- */}
                        <div className="flex flex-wrap gap-3">
                            <div className="rounded-full px-3 py-1 bg-dark-soft text-[#C1C0DE] font-bold text-sm">
                                MMORPG
                            </div>
                            <div className="rounded-full px-3 py-1 bg-dark-soft text-[#C1C0DE] font-bold text-sm">
                                PLAY 2 EARN
                            </div>
                        </div>
                        {/* Tags --End-- */}

                        {/* Title --Start-- */}
                        <h1 className="mt-5 text-white font-montserrat font-bold tracking-wide text-3xl lg:text-5xl">
                            RAVENDAWN
                        </h1>
                        {/* Title --End-- */}

                        {/* Icons --Start-- */}
                        <div className="mt-8">
                            <SocialIcons icons={icons} />
                        </div>
                        {/* Icons --End-- */}

                        <p className="text-white text-base !leading-[30px] mt-5">
                            Ravendawn Online. A fully open world sandbox MMORPG focusing on depth of
                            gameplay, community and unique character design over empty graphics.
                        </p>

                        {/* Select Alocation Size --Start-- */}
                        <div className="mt-6 mb-6 bg-dark-medium border border-dark-soft rounded-[8px] px-4 lg:px-7 pt-6 pb-8">
                            <h6 className="text-white font-bold tracking-wide">Allocation Size</h6>

                            <div className="mt-4 mb-8 gap-3 lg:gap-4 flex flex-wrap">
                                {alocations.map((alocation, i) => {
                                    const isActive = selectedAlocation === i;
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => selectAlocation(i)}
                                            className={cx(
                                                "outline-none border px-6 py-3 lg:px-[38px] lg:py-[14px] rounded-[8px] font-bold duration-150",
                                                isActive
                                                    ? "border-primary text-white bg-primary/50"
                                                    : "border-[#404A75] text-[#BEBED8] bg-white/5 hover:bg-white/10"
                                            )}
                                        >
                                            ${alocation}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="w-full">
                                <Button
                                    disabled={typeof selectedAlocation === "number" ? false : true}
                                    varient="solid"
                                    className="w-full block py-3"
                                >
                                    BUY NOW
                                </Button>
                            </div>
                        </div>
                        {/* Select Alocation Size --End-- */}

                        <div className="py-4 border-y border-dark-soft">
                            <table className="border-collapse text-left">
                                <tbody>
                                    <tr className="text-white">
                                        <th className="text-[#8D8CAB] font-bold py-3.5">
                                            VESTING PERIOD
                                        </th>
                                        <th className="py-3.5 pl-6 font-normal">24 Months</th>
                                    </tr>
                                    <tr className="text-white">
                                        <th className="text-[#8D8CAB] font-bold py-3.5">
                                            VALUATION
                                        </th>
                                        <th className="py-3.5 pl-6 font-normal">
                                            PPT = $0.025 / FDV of $250M
                                        </th>
                                    </tr>
                                    <tr className="text-white">
                                        <th className="text-[#8D8CAB] font-bold py-3.5">
                                            PRIVATE ROUND
                                        </th>
                                        <th className="py-3.5 pl-6 font-normal">$19M</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
