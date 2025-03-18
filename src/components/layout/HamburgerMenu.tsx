"use client";

import { Menu, ChevronDown, ChevronRight, X } from "lucide-react";
import * as React from "react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type MenuItem = {
  title: string;
  href?: string;
  submenu?: MenuItem[];
  handleOpenChange?: (open: boolean) => void;
};

const menuItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "Buy $KLINK", href: "/#" },
  { title: "Stake $KLINK", href: "/#" },
];

const MenuItemComponent: React.FC<{
  item: MenuItem;
  depth?: number;
  handleOpenChange: (open: boolean) => void;
}> = ({ item, depth = 0, handleOpenChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (item.submenu) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            onClick={() => handleOpenChange(false)}
            className={cn(
              "flex w-full items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary",
              depth > 0 && "pl-4"
            )}
          >
            {item.title}
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.submenu.map((subItem) => (
            <MenuItemComponent
              key={subItem.title}
              item={subItem}
              depth={depth + 1}
              handleOpenChange={handleOpenChange}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <a
      href={item.href}
      onClick={() => {
        handleOpenChange(false);
      }}
      className={cn(
        "block py-2 text-lg font-medium transition-colors hover:text-primary",
        depth > 0 && "pl-4",
        item.href === "/" && "text-primary"
      )}
    >
      {item.title}
    </a>
  );
};

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [animationState, setAnimationState] = React.useState<
    "open" | "closed" | "opening" | "closing"
  >("closed");

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setIsOpen(true);
      setAnimationState("opening");
      setTimeout(() => {
        setAnimationState("open");
      }, 400);
    } else {
      setAnimationState("closing");
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
        setAnimationState("closed");
      }, 400);
    }
  };

  useEffect(() => {
    const fadeIn = `
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    `;

    const slideSheetIn = `
    @keyframes slideSheetIn {
      0% { transform: translateX(100%); }
      100% { transform: translateX(0); }
    }
    `;

    const slideSheetOut = `
    @keyframes slideSheetOut {
      0% { transform: translateX(0); }
      100% { transform: translateX(100%); }
    }
    `;

    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(
      document.createTextNode(`
      ${fadeIn}
      ${slideSheetIn}
      ${slideSheetOut}
      
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-in-out forwards;
      }
      
      .animate-slideSheetIn {
        animation: slideSheetIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      
      .animate-slideSheetOut {
        animation: slideSheetOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        animation-fill-mode: forwards;
      }
    `)
    );

    document.head.appendChild(style);

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <Sheet open={isOpen || isAnimating} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white bg-[#55468B4D] rounded-full p-3 z-30 relative cursor-pointer hover:bg-[#55468B70] transition-all duration-300"
          onClick={() => handleOpenChange(true)}
        >
          <div
            className={`relative w-5 h-5 ${
              isOpen ? "transform rotate-90" : ""
            } transition-all duration-300`}
          >
            <Menu className="h-5 w-5" />
          </div>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className={`bg-[#16151F] text-white border-l border-[#9A8AFE]/30 ${
          animationState === "opening" || animationState === "open"
            ? "animate-slideSheetIn"
            : animationState === "closing"
              ? "animate-slideSheetOut"
              : ""
        }`}
      >
        <div className="absolute top-5 right-5">
          <Button
            variant="ghost"
            size="icon"
            className="text-white bg-[#55468B4D] rounded-full p-2 hover:bg-[#55468B70] transition-all duration-300"
            onClick={() => handleOpenChange(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="mt-6 animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <MenuItemComponent
                key={item.title}
                item={item}
                handleOpenChange={handleOpenChange}
              />
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
