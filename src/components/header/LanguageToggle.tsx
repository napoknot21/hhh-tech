import i18n from "i18next";
import { useEffect, useState } from "react";
import "./header.css"; // optionnel : si tu veux styliser via header.css

type Lang = "en" | "fr" | "es";

const LANGS : { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "es", label: "ES" },
];

const STORAGE_KEY = "heroics_lang";

export default function LanguageToggle() {
    
    const [current, setCurrent] = useState<Lang>(
        (i18n.language?.slice(0, 2) as Lang) || "en"
    );

    // Au montage : récupère la langue sauvegardée (si tu veux la persistance)
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
        if (saved && saved !== current) {
        i18n.changeLanguage(saved);
        setCurrent(saved);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeLang = async (lang: Lang) => {
        await i18n.changeLanguage(lang);
        setCurrent(lang);
        localStorage.setItem(STORAGE_KEY, lang);
    };

    return (
        <div className="language-toggle" role="group" aria-label="Language switch">
            {LANGS.map((l) => (
                <button
                    key={l.code}
                    type="button"
                    onClick={() => changeLang(l.code)}
                    className={`language-toggle__btn ${
                        current === l.code ? "is-active" : ""
                    }`}
                    aria-pressed={current === l.code}
                    >
                    {l.label}
                </button>
            ))}
        </div>
    );
    
}
