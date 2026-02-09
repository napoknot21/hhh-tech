import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFound() {

    const { t } = useTranslation();
    
    return (
        <main style={{ padding: 24 }}>
            <h1>{t("pages.notFound.title")}</h1>
            <p>{t("pages.notFound.desc")}</p>
        <Link to="/">{t("pages.notFound.back")}</Link>
        </main>
    );

}
