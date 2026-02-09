import { useTranslation } from "react-i18next";

export default function About() {
    
    const { t } = useTranslation();
    
    return (
        <main style={{ padding: 24 }}>
            <h1>{t("pages.about.title")}</h1>
            <p>{t("pages.about.desc")}</p>
        </main>
    );
    
}
