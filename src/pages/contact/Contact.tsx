import { useTranslation } from "react-i18next";

export default function Contact() {

    const { t } = useTranslation();

    return (
        <main style={{ padding: 24 }}>
            <h1>{t("pages.contact.title")}</h1>
            <p>{t("pages.contact.desc")}</p>
        </main>
    );

}
