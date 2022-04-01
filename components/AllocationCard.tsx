import { ReactNode } from "react";
import SocialIcons, { IconType } from "./SocialIcons";

export type AllocationCardProps = {
    img: {
        src: string;
        alt: string;
        width?: number;
        height?: number;
    };
    title: ReactNode;
    specifications: {};
    price: number;
    socialIcons?: IconType[];
};
function AllocationCard({
    img: { src, alt, width, height },
    title,
    specifications,
    price,
    socialIcons,
}: AllocationCardProps) {
    const specificationsKeys: ReactNode[] = Object.keys(specifications);
    const specificationsValue: ReactNode[] = Object.values(specifications);

    return (
        <div className="rounded-[8px] overflow-hidden bg-dark-medium border border-dark-soft">
            <div>
                <img src={src} alt={alt} className="w-full h-auto" />
            </div>
            <div className="p-4 md:p-8">
                <h2 className="text-lg md:text-xl text-white font-extrabold font-montserrat mb-5">
                    {title}
                </h2>

                <table className="border-collapse text-left">
                    <tbody>
                        {specificationsKeys.map((key, i) => (
                            <tr className="text-white">
                                <th className="text-[#8D8CAB] font-bold py-2.5">{key}</th>
                                <th className="py-2.5 pl-6 font-normal">
                                    {specificationsValue[i]}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className="w-full block py-[18px] px-5 text-white font-bold rounded-[8px] bg-dark-soft hover:bg-white/10 duration-150 mt-4">
                    ${price}
                </button>

                {socialIcons && (
                    <div className="flex justify-center mt-8">
                        <SocialIcons
                            icons={socialIcons}
                            iconClassName="!text-primary hover:!scale-[1.1]"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default AllocationCard;
