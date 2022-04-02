import { NextPage } from "next";
import Head from "next/head";

const Disclaimer: NextPage = () => {
    return (
        <>
            <Head>
                <title>Disclaimer | Quantam</title>
            </Head>
            <main className="container">
                <p className="text-gray font-bold">Effective Date: Jan 1, 2022</p>
                <h1 className="page_title">DiSCLAIMER</h1>
                <section className="mt-12">
                    <p className="subtitle_md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis
                        nulla nec tortor aliquet ultricies vitae vitae libero. Curabitur ut pharetra
                        nunc. Etiam pretium suscipit magna, nec consectetur ante condimentum ac.
                        Nullam tortor libero, ultrices vitae metus a, mollis eleifend sem. Phasellus
                        nunc lorem, iaculis condimentum est id, rhoncus rhoncus diam. Nunc dictum
                        nibh vitae diam auctor, id bibendum dolor porta. Etiam aliquam neque ut
                        nulla vehicula lacinia.
                    </p>
                    <p className="subtitle_md mt-12">
                        Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et
                        netus et malesuada fames ac turpis egestas. Donec semper quis ex gravida
                        molestie. Aliquam ac finibus ligula. Proin quis turpis et massa dictum
                        imperdiet. Nunc fermentum dignissim mi, blandit varius urna viverra tempus.
                        Morbi non lobortis sem. Curabitur tellus felis, maximus at enim nec, ornare
                        ullamcorper enim. Maecenas gravida eleifend nisi id eleifend. Cras ac eros
                        vel magna blandit mattis
                    </p>
                </section>
                <section className="mt-12">
                    <h2 className="page_title_sm">SECTION HEADER</h2>
                    <p className="subtitle_md mt-3">
                        Morbi mi leo, congue a mattis nec, eleifend sed libero. In sollicitudin quam
                        at ultricies euismod. Morbi scelerisque lacus sit amet tortor tempor, in
                        gravida magna interdum. Donec a odio nec ante sodales rhoncus vel eget
                        neque. Orci varius natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                    </p>
                    <ul className="list-disc pl-8 mt-10">
                        <li className="subtitle_md">
                            Cras egestas felis eu imperdiet interdum. Nulla ipsum orci, sagittis sed
                            augue porttitor, auctor blandit nisl.{" "}
                        </li>
                        <li className="subtitle_md">
                            Curabitur faucibus erat ligula, vitae lacinia nisl mollis a. Maecenas
                            luctus lorem vel feugiat iaculis.
                        </li>
                        <li className="subtitle_md">
                            Cras nec varius ex, vitae feugiat metus. Sed id risus blandit, lobortis
                            risus sed, tristique lectus.
                        </li>
                        <li className="subtitle_md">
                            Sed at purus sed dolor rutrum consectetur. Duis pellentesque malesuada
                            fringilla. Etiam cursus, nisl congue venenatis mollis, neque est
                            scelerisque quam, id tempor ligula libero non velit. Vestibulum lacinia
                            felis eu commodo vehicula. Proin a nibh auctor, mollis nisi nec, varius
                            ipsum.
                        </li>
                    </ul>
                    <p className="subtitle_md mt-8">
                        Sed risus lorem, pellentesque vel luctus ac, volutpat a dui. Donec iaculis
                        nibh sagittis, ultrices risus in, gravida mi. Cras id volutpat nisi.
                        Pellentesque efficitur diam fermentum urna bibendum cursus. Phasellus
                        ornare, urna nec condimentum sollicitudin, sapien massa volutpat sem, ut
                        semper est dui sit amet lectus. Proin in porta quam. Vestibulum non nisi
                        vitae quam pellentesque hendrerit nec quis massa. Sed sit amet odio luctus,
                        scelerisque odio in, congue sapien. Nunc eu tortor turpis. Vestibulum a
                        ipsum ex.
                    </p>
                </section>
            </main>
        </>
    );
};

export default Disclaimer;
