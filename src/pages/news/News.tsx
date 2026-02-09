import { useTranslation } from "react-i18next";

export default function News() {
    
    const { t } = useTranslation();

    return (
        <main style={{ padding: 24 }}>
            <h1>{t("pages.news.title")}</h1>
            <p>{t("pages.news.desc")}</p>
        </main>
    );

}
