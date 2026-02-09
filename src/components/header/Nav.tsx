import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export type NavItem = {
    key: string; // i18n key: header.about, header.services...
    to: string;
};

export default function Nav(
    {
        items,
        variant,
    } : {
        items: NavItem[];
        variant: "mobile" | "desktop";
    }

) {
    
    const { t } = useTranslation();
    const location = useLocation();

    if (variant === "mobile") {
        return (
        <ul className="nav-mobile">
            {items.map((item) => {
            const active = location.pathname === item.to;
            return (
                <li key={item.to} className="nav-mobile-item">
                <Link className={`nav-mobile-link ${active ? "is-active" : ""}`} to={item.to}>
                    {t(`header.${item.key}`)}
                </Link>
                </li>
            );
            })}
        </ul>
        );
    }

    return (
        <ul className="nav-desktop">
        {items.map((item) => {
            const active = location.pathname === item.to;
            return (
            <li key={item.to} className="nav-desktop-item">
                <Link className={`nav-desktop-link ${active ? "is-active" : ""}`} to={item.to}>
                {t(`header.${item.key}`)}
                </Link>
            </li>
            );
        })}
        </ul>
    );
}
