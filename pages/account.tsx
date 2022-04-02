import { NextPage } from "next";
import Head from "next/head";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaGlobeAsia } from "react-icons/fa";
import AllocationCard, { AllocationCardProps } from "../components/AllocationCard";
import { IconType } from "../components/SocialIcons";

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

const allocationsCards: AllocationCardProps[] = [
    {
        img: {
            src: "/img/card_2.png",
            alt: "Card 2",
        },
        title: "RAVENDAWN",
        specifications: {
            "VESTING PERIOD": "24 Months",
            "UNLOCK DATE": "March 3, 2024",
        },
        price: 500,
        socialIcons: icons,
    },
    {
        img: {
            src: "/img/card_3.png",
            alt: "Card 3",
        },
        title: "DOGAMI",
        specifications: {
            "VESTING PERIOD": "24 Months",
            "UNLOCK DATE": "March 3, 2024",
        },
        price: 1000,
        socialIcons: icons,
    },
    {
        img: {
            src: "/img/card_1.png",
            alt: "Card 1",
        },
        title: "AUKI",
        specifications: {
            "VESTING PERIOD": "24 Months",
            "UNLOCK DATE": "March 3, 2024",
        },
        price: 250,
        socialIcons: icons,
    },
];

const AccountPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>Account | Quantam</title>
                <meta name="description" content="Quantam" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container">
                <p className="text-gray font-bold">MY ACCOUNT</p>
                <h1 className="page_title">Allocations</h1>
                <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-[30px]">
                    {allocationsCards.map((allocationsCard, i) => (
                        <AllocationCard {...allocationsCard} key={i} />
                    ))}
                </section>
            </main>
        </>
    );
};

export default AccountPage;
