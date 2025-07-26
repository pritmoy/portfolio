"use client";

import React, { useState, useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import MainContainer from "../shared/Container/MainContainer";
import { CiMail } from "react-icons/ci";
import { TfiFacebook } from "react-icons/tfi";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

type NavItem = {
  id: number;
  pathName: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: 1, pathName: "/", label: "Home" },
  { id: 2, pathName: "/about-me", label: "About me" },
  { id: 3, pathName: "/services", label: "Servides" },
  { id: 4, pathName: "/case-studies", label: "Case Studies" },
  { id: 5, pathName: "/protfolio", label: "Portfolio" },
  { id: 6, pathName: "/lets-talk", label: "Let's talk" },
];

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

const Navbar = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop) {
      setIsSheetOpen(false);
    }
  }, [isDesktop]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  const [hoverValue, setHovervalue] = useState("");

  return (
    <>
      <div className="">
        <MainContainer>
          <div className="flex justify-between py-1 px-3">
            <div className="flex items-center gap-2">
              <CiMail className="size-5" /> <p>hellopritmoy@gmail.com</p>
            </div>
            <div className="flex items-center gap-1">
              <TfiFacebook className="size-6 hover:text-blue-500 cursor-pointer duration-300" />{" "}
              <FaLinkedin className="size-6 hover:text-blue-500 cursor-pointer duration-300" />{" "}
              <FaYoutube className="size-6 hover:text-red-500 cursor-pointer duration-300" />
            </div>
          </div>
        </MainContainer>
      </div>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300  shadow",
          isScrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
        )}
      >
        <MainContainer>
          <div className="mx-auto flex items-center justify-between px-3">
            <div className="block md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <LuMenu className="size-8  text-gray-800 dark:text-white rounded" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-3 py-6">
                    <Link href="/" className="flex items-center px-3">
                      <Image
                        className="w-[120px]"
                        src="/Logo.png"
                        alt="img"
                        width={500}
                        height={500}
                      />
                    </Link>
                    <nav className="flex flex-col space-y-1">
                      {navItems.map((item: NavItem) => (
                        <Link
                          key={item.id}
                          href={item.pathName}
                          className={cn(
                            "text-[14px] text-[#3d3d3d] dark:text-gray-200 hover:text-white list-none hover:bg-[var(--custom-orange)] px-3 py-2 rounded-md transition-colors",
                            isActive(item.pathName) &&
                              "bg-[var(--custom-orange)] text-white"
                          )}
                          onClick={() => setIsSheetOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex items-center">
              <Link href="/" className="flex items-center">
              <Image
                        className="w-[120px]"
                        src="/Logo.png"
                        alt="img"
                        width={500}
                        height={500}
                      />
              </Link>
            </div>
            <div className="hidden md:block">
              {" "}
              <NavigationMenu className="py-2">
                <NavigationMenuList>
                  {navItems.map((item: NavItem) => (
                    <NavigationMenuItem
                      key={item.id}
                      className="group relative"
                    >
                      <Link href={item.pathName} legacyBehavior passHref>
                        <NavigationMenuLink
                          onMouseEnter={() => setHovervalue(item.label)}
                          onMouseLeave={() => setHovervalue("")}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "relative px-4 py-2 text-black dark:text-white transition-colors duration-200 hover:text-[var(--custom-orange)]"
                          )}
                        >
                          <span className="relative z-10">{item.label}</span>
                          <span
                            className={cn(
                              "absolute bottom-0 left-0 h-0.5 bg-[var(--custom-orange)] origin-left transition-all duration-300 ease-in-out",
                              hoverValue === item.label ? "w-full" : "w-0"
                            )}
                          />
                          {isActive(item.pathName) && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--custom-orange)]" />
                          )}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-6 p-1 border rounded-md border-gray-700 text-black dark:text-white">
                {`Let's Talk`}{" "}
              </div>
            </div>
          </div>
        </MainContainer>
      </header>{" "}
    </>
  );
};

export default Navbar;
