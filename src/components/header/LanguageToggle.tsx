import { useTranslation } from "react-i18next";

const LANGS = [

  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },

] as const;

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const setLang = async (lang: string) => {
    await i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      {LANGS.map((l) => {
        const active = i18n.language?.startsWith(l.code);
        return (
          <button
            key={l.code}
            type="button"
            className={`lang-btn ${active ? "is-active" : ""}`}
            onClick={() => setLang(l.code)}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
