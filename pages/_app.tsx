import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <div className="bg_gradient p-5 md:p-10 lg:px-[60px] lg:py-[70px]">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
