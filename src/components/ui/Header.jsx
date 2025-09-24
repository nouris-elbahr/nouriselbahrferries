import LinkButton from "./LinkButton";
import styles from "./Header.module.css";
import logo from "/public/static/images/logo.png";
import logoWhite from "/public/static/images/logo-h-white.png";
import { useState } from "react";
import { Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink, useLocation } from "react-router-dom";
import MyNavMenu from "./MyNavMenu";
import { useAuth } from "@/Hooks/context/AuthContext";
import HeaderButton from './New/HeaderButton';

function Header() {
  const navItems = [
    { name: "Accueil", href: "/", secondaryName: "Page d'Accueil" },
    { name: "À Propos", href: "/about", secondaryName: "À Propos de Nous" },
    { name: "Le Cracovia", href: "/cracovia", secondaryName: "Le Cracovia" },
    { name: "Réservations", href: "/bookings", secondaryName: "Réservations" },
    { name: "Contact", href: "/contact", secondaryName: "Nous Contacter" },
  ];

  const [open, setOpen] = useState(false);
  const location = useLocation();
  const activeLink = location.pathname;
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <>
      {/* Desktop Header */}
      <div className="hidden 2md:block">
        <header className="fixed top-0 z-50 bg-gradient-to-b to-[#00000000] backdrop-blur-sm md:pb-5 3xl:pb-10 w-full">
          <div className="mt-8 flex w-full items-center justify-center md:mt-5">
            <LinkButton to="/" nopx={false}>
              <img
                src={activeLink === "/bookings" ? logoWhite : logo}
                className="absolute left-[5vw] top-6 mt-0 inline-block h-[3.5rem] 2md:h-[2.75rem] lg:h-[3.15rem] xl:top-5 xl:h-[4rem] 3xl:h-[4.15rem]"
                alt="Logo"
              />
            </LinkButton>

            <div className={styles.nav}>
              <div className="flex  rounded-full border-[1px] bg-black bg-opacity-30 space-x-[-0.8rem] md:space-x-[-0.8rem]  3xl:space-x-[-1rem] md:p-[0.2rem] 3xl:p-1">
                {navItems.map((item) => (
                  <LinkButton to={item.href} key={item.name}>
                    {item.name}
                  </LinkButton>
                ))}
              </div>
            </div>

            {/* Auth Buttons - Desktop */}
            <div className="absolute items-center justify-center md:p-[0.2rem] 3xl:p-1 right-[5vw] h- top-6 flex gap-6 xl:top-5">
              {isAuthenticated ? (
                <HeaderButton onClick={logout} isLink={false}>
                  Déconnexion
                </HeaderButton>
              ) : (
                <>
                  <HeaderButton href="/login">Connexion</HeaderButton>
                  <HeaderButton href="/register">Inscription</HeaderButton>
                </>
              )}
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Header */}
      <div className="fixed z-50 h-[4rem] w-full bg-gradient-to-b to-[#00000000] backdrop-blur-sm 2md:hidden">
        <Button
          variant="outline"
          size="icon"
          className="fixed left-4 top-4 z-50 h-10 w-10 bg-white text-nouris2 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>

        <div className="fixed top-0 w-full pt-0">
          <NavLink to={"/"}>
            <img
              src={activeLink === "/bookings" ? logoWhite : logo}
              className="mx-auto my-0 mt-4 h-[2.7rem] self-center"
              alt="Logo"
            />
          </NavLink>
        </div>

        <MyNavMenu
          open={open}
          onOpenChange={setOpen}
          navItems={navItems}
          isAuthenticated={isAuthenticated}
          onLogout={logout}
        />
      </div>
    </>
  );
}

export default Header;
