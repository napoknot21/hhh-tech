import { useTranslation } from "react-i18next";

export default function Services() {

    const { t } = useTranslation();
    
    return (
        <main style={{ padding: 24 }}>
            <h1>{t("pages.services.title")}</h1>
            <p>{t("pages.services.desc")}</p>
        </main>
    );
    
}