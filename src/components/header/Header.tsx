import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Nav, { type NavItem } from "./Nav";
import LanguageToggle from "./LanguageToggle";
import UserMenu from "./UserMenu";

import logo from "../../assets/images/common/heroics-logo-rgb.png";
//import menuIcon from "../../assets/images/common/user.png"; // ⚠️ replace with your real menu icon if you have it
import burgerIcon from "../../assets/images/common/user.png"; // ⚠️ replace with menuicon.png

import "./header.css";

export default function Header() {
const location = useLocation();
const [smallLayout, setSmallLayout] = useState<boolean>(window.innerWidth < 1100);
const [menuOpen, setMenuOpen] = useState<boolean>(false);

// Define nav items here (cleaner than passing "categories" everywhere)
const items: NavItem[] = useMemo(

        () => [
        { key: "about", to: "/about" },
        { key: "services", to: "/services" },
        { key: "news", to: "/news" },
        { key: "contact", to: "/contact" },
        ],
        []
    );

    useEffect(() => {
        const handleResize = () => setSmallLayout(window.innerWidth < 1100);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close menu when route changes (nice UX)
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => setMenuOpen((v) => !v);

    return (
        <header className="header">
        <div className="header-inner">
            {/* Logo (Home) */}
            <div className="header-left">
            <Link to="/" className="header-logo-link" aria-label="Home">
                <img className="header-logo" src={logo} alt="Heroics" />
            </Link>
            </div>

            {/* Nav */}
            <div className="header-center">
            {smallLayout ? (
                <div className="header-burger">
                <button
                    type="button"
                    className="header-burger-btn"
                    onClick={toggleMenu}
                    aria-label="Open menu"
                    aria-expanded={menuOpen}
                >
                    <img src={burgerIcon} alt="" className="header-burger-icon" />
                </button>

                {menuOpen && (
                    <div className="header-dropdown">
                    <Nav items={items} variant="mobile" />
                    <div className="header-dropdown-lang">
                        <LanguageToggle />
                    </div>
                    </div>
                )}
                </div>
            ) : (
                <div className="header-nav-row">
                <Nav items={items} variant="desktop" />
                <div className="header-lang">
                    <LanguageToggle />
                </div>
                </div>
            )}
            </div>

            {/* User icon (external login) */}
            <div className="header-right">
            <UserMenu />
            </div>
        </div>
        </header>
    );
}
