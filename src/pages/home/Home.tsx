import { useTranslation } from "react-i18next";

export default function Home() {

    const { t } = useTranslation();
    
    return (
        <main style={{ padding: 24 }}>
        <h1>{t("pages.home.title")}</h1>
        <p>{t("pages.home.desc")}</p>
        </main>
    );

}
