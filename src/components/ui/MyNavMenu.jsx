import { useCallback, useEffect, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import logo from "/public/static/images/logo.png";
import logoWhite from "/public/static/images/logo-h.png";

function MyNavMenu({ open, onOpenChange, navItems }) {
  const [navRef, setNavRef] = useState(null);
  const [showChevron, setShowChevron] = useState(true);
  const handleScroll = useCallback(() => {
    if (navRef) {
      const { scrollTop, scrollHeight } = navRef;
      const windowHeight = window.innerHeight;

      setShowChevron(scrollTop < scrollHeight - (windowHeight - 80));
    }
  }, [navRef]);

  const scrollToBottom = () => {
    if (navRef) {
      navRef.scrollTo({ top: navRef.scrollHeight, behavior: "smooth" });

      setTimeout(() => {
        handleScroll();
      }, 0);
    }
  };
  const navRefCallback = useCallback(
    (node) => {
      if (node) {
        setNavRef(node);
        node.addEventListener("scroll", handleScroll);
        node.addEventListener("resize", handleScroll);
        // Check initial scroll position
        handleScroll();
      }
    },
    [handleScroll],
  );
  useEffect(() => {
    const handleResize = () => {
      handleScroll(); // Recalculate scroll on resize
    };

    // Attach the resize event listener to the window
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup resize event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, [navRef, handleScroll]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[300px] p-0 sm:w-[400px]">
        <SheetHeader className="relative border-b p-4">
          <SheetTitle>
            <NavLink to={"/"} onClick={() => onOpenChange(false)}>
              <img src={logo} className="ml-2 h-[3.5rem] self-center pt-2" />
            </NavLink>
          </SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-3 h-10 w-10"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </SheetHeader>
        <nav
          ref={navRefCallback}
          className="flex max-h-[calc(100dvh-80px)] flex-col space-y-5 overflow-scroll p-6"
        >
          {navItems.map((item, index) => (
            <NavLink
              key={`${item.name}-${index}`}
              to={item.href}
              className="text-xl font-medium text-nouris2 transition-colors"
              onClick={() => onOpenChange(false)}
            >
              {item.secondaryName}
            </NavLink>
          ))}
        </nav>

        <Button
          variant="outline"
          size="icon"
          className={`absolute left-1/2 top-[calc(100dvh-2.5rem-0.75rem)] h-10 w-10 -translate-x-1/2 transform rounded-full bg-white transition-all duration-300 ${
            showChevron ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={scrollToBottom}
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="h-7 w-7 stroke-black text-muted-foreground" />
        </Button>
      </SheetContent>
    </Sheet>
  );
}

export default MyNavMenu;
