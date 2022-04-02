import React, { ComponentProps } from "react";
import cx from "../utils/cx";

type ButtonType = {
    varient?: "solid" | "outline";
} & ComponentProps<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
    ({ className = "", varient = "outline", children, ...props }, ref) => {
        return (
            <button
                {...props}
                ref={ref}
                className={cx(
                    className,
                    "rounded-full overflow-hidden border-2 duration-150 border-primary px-8 py-2.5 disabled:border-opacity-25 font-bold",
                    varient === "solid"
                        ? "bg-primary text-white hover:bg-transparent hover:text-primary disabled:bg-opacity-20 disabled:pointer-events-none"
                        : "bg-transparent text-primary hover:bg-primary hover:text-white disabled:text-opacity-50 disabled:pointer-events-none"
                )}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
export default Button;
