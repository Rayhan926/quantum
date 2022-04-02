import Head from "next/head";
import { ComponentProps, ReactNode } from "react";
import { useState } from "react";
import Collapsible from "react-collapsible";
import { AiFillPlusCircle } from "react-icons/ai";

const faqs = [
    {
        title: "Mattis eget vel laoreet cursus libero mauris. Diam faucibus faucibus pretium nam sit.",
        description:
            "Non, aliquam at nisl, nec imperdiet. At tellus quam imperdiet aenean lacus, nibh mattis vestibulum. Lorem nibh nibh vitae duis sed odio. Donec nec aliquet donec nulla tristique aliquet platea ac ultrices. Potenti vulputate luctus egestas quisque consequat viverra ligula. Bibendum facilisis tellus tincidunt nulla viverra egestas sed mi odio. Magna euismod justo, in et commodo tempor.",
    },
    {
        title: "Vitae, volutpat facilisis cursus gravida eu.",
        description:
            "Non, aliquam at nisl, nec imperdiet. At tellus quam imperdiet aenean lacus, nibh mattis vestibulum. Lorem nibh nibh vitae duis sed odio. Donec nec aliquet donec nulla tristique aliquet platea ac ultrices. Potenti vulputate luctus egestas quisque consequat viverra ligula. Bibendum facilisis tellus tincidunt nulla viverra egestas sed mi odio. Magna euismod justo, in et commodo tempor.",
    },
    {
        title: "Ullamcorper nunc ultrices eget cursus cras felis fermentum amet libero. Tristique.",
        description:
            "Non, aliquam at nisl, nec imperdiet. At tellus quam imperdiet aenean lacus, nibh mattis vestibulum. Lorem nibh nibh vitae duis sed odio. Donec nec aliquet donec nulla tristique aliquet platea ac ultrices. Potenti vulputate luctus egestas quisque consequat viverra ligula. Bibendum facilisis tellus tincidunt nulla viverra egestas sed mi odio. Magna euismod justo, in et commodo tempor.",
    },
    {
        title: "At semper eleifend bibendum risus. Proin nullam quisque morbi magnis eu donec dictumst tellus nunc.",
        description:
            "Non, aliquam at nisl, nec imperdiet. At tellus quam imperdiet aenean lacus, nibh mattis vestibulum. Lorem nibh nibh vitae duis sed odio. Donec nec aliquet donec nulla tristique aliquet platea ac ultrices. Potenti vulputate luctus egestas quisque consequat viverra ligula. Bibendum facilisis tellus tincidunt nulla viverra egestas sed mi odio. Magna euismod justo, in et commodo tempor.",
    },
    {
        title: "Curabitur nibh adipiscing vel, mauris dignissim luctus. Mattis at euismod amet arcu faucibus. Et.",
        description:
            "Non, aliquam at nisl, nec imperdiet. At tellus quam imperdiet aenean lacus, nibh mattis vestibulum. Lorem nibh nibh vitae duis sed odio. Donec nec aliquet donec nulla tristique aliquet platea ac ultrices. Potenti vulputate luctus egestas quisque consequat viverra ligula. Bibendum facilisis tellus tincidunt nulla viverra egestas sed mi odio. Magna euismod justo, in et commodo tempor.",
    },
];

function FaqSection() {
    return (
        <>
            <Head>
                <title>FAQ | Quantam</title>
            </Head>
            <section className="container">
                <div>
                    <div>
                        <p className="text-gray font-bold">FREQUENTLY ASKED QUESTIONS</p>
                        <h2 className="page_title">GET THE SCOOP</h2>
                    </div>

                    <div className="mt-[45px] space-y-6">
                        {faqs.map((faq, i) => (
                            <FaqAccordion title={faq.title} description={faq.description} key={i} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default FaqSection;

type FaqAccordionProps = {
    title: ReactNode;
    description: ReactNode;
} & ComponentProps<"div">;

const FaqAccordion = ({ title, description, ...rest }: FaqAccordionProps) => {
    const [isOpen, setisOpen] = useState(false);

    return (
        <div {...rest}>
            <Collapsible
                transitionTime={200}
                openedClassName="currently_open"
                trigger={
                    <div
                        className={`flex items-center p-6 gap-6 border rounded-[8px] duration-200 text-white font-montserrat text-sm font-bold ${
                            isOpen
                                ? "!text-white font-lufga-bold border-[#242C51] rounded-b-[0px]"
                                : "font-lufga-regular border-dark-soft bg-[#151A34]"
                        }`}
                    >
                        <div
                            className={`${
                                isOpen ? "rotate-45 text-primary" : "text-gray"
                            } duration-200 shrink-0`}
                        >
                            <AiFillPlusCircle size={30} />
                        </div>
                        <p className="text-base pr-6">{title}</p>
                    </div>
                }
                onOpening={() => setisOpen(true)}
                onClosing={() => setisOpen(false)}
            >
                <p
                    className={`text-white !leading-[180%] px-5 pl-[75px] py-6 pt-0 ${
                        isOpen ? "" : "bg-[#151A34]"
                    }`}
                >
                    {description}
                </p>
            </Collapsible>
        </div>
    );
};

const DownIcon = ({ fill = "#A3A5C1" }) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14 7.40607C14 6.52007 13.0127 5.9914 12.2753 6.48274L8 9.33341L3.72467 6.4834C2.98733 5.99207 2 6.52007 2 7.40607C2 7.77674 2.18533 8.12341 2.494 8.32941L7.26067 11.5067C7.70867 11.8054 8.292 11.8054 8.74 11.5067L13.5067 8.32941C13.8147 8.12341 14 7.7774 14 7.40607Z"
                fill={fill}
            />
        </svg>
    );
};
