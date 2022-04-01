import { ReactNode } from "react";

export type IconType = {
    Icon: any;
    url: string;
};
type SocialIconsProps = {
    icons: IconType[];
    ulClassName?: string;
    iconClassName?: string;
};
function SocialIcons({ ulClassName = "", iconClassName = "", icons }: SocialIconsProps) {
    return (
        <ul className={`${ulClassName} flex gap-7 text-gray`}>
            {icons.map(({ Icon, url }: IconType, index: number) => (
                <a href={url} target="_blank" rel="noreferrer" key={index}>
                    <Icon className={`${iconClassName} w-6 h-6 duration-100 hover:text-white`} />
                </a>
            ))}
        </ul>
    );
}

export default SocialIcons;
