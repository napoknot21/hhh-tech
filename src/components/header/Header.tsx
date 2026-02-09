import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./header.css";

import LanguageToggle from "./LanguageToggle";
import ClientToggle from "./ClientToggle";
import UserMenu from "./UserMenu";

import logo from "../../assets/images/common/heroics-logo-rgb.png";
import menuIcon from "../../assets/images/common/ny.png";

type NavItem = {
  label: string;
  to: string;
};

export default function Header() {

    const { t } = useTranslation();
    const location = useLocation();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems: NavItem[] = useMemo(
        () => [
        { label: t("header.about"), to: "/about" },
        { label: t("header.services"), to: "/services" },
        { label: t("header.news"), to: "/news" },
        { label: t("header.contact"), to: "/contact" },
        ],
        [t]
    );

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 1100);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const isActive = (to: string) => location.pathname === to;

    return (
        <header className="header">
            <div className="header-inner">
                {/* LEFT: logo */}
                <div className="header-left">
                <Link to="/">
                    <img className="header-logo" src={logo} alt="Heroics" />
                </Link>
                </div>

                {/* CENTER */}
                <div className="header-center">
                {isMobile ? (
                    <div className="header-burger">
                    <button
                        type="button"
                        className="header-burger-btn"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Open menu"
                        aria-expanded={menuOpen}
                    >
                        <img className="header-burger-icon" src={menuIcon} alt="Menu" />
                    </button>

                    {menuOpen && (
                        <div className="header-dropdown">
                        <ul className="nav-mobile">
                            {navItems.map((item) => (
                            <li key={item.to} className="nav-mobile-item">
                                <Link
                                to={item.to}
                                className={`nav-mobile-link ${
                                    isActive(item.to) ? "is-active" : ""
                                }`}
                                >
                                {item.label}
                                </Link>
                            </li>
                            ))}
                        </ul>

                        <div className="header-dropdown-lang">
                            <ClientToggle />
                            <LanguageToggle />
                        </div>
                        </div>
                    )}
                    </div>
                ) : (
                    <div className="header-nav-row">
                    <ul className="nav-desktop">
                        {navItems.map((item) => (
                        <li key={item.to}>
                            <Link
                            to={item.to}
                            className={`nav-desktop-link ${
                                isActive(item.to) ? "is-active" : ""
                            }`}
                            >
                            {item.label}
                            </Link>
                        </li>
                        ))}
                    </ul>

                    <ClientToggle />
                    <LanguageToggle />
                    </div>
                )}
                </div>

                {/* RIGHT: user */}
                <div className="header-right">
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}
