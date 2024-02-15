"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export const Navbar = () => {
  return (
    <nav className="relative w-full">
      <div className="min-h-12 flex justify-between items-center py-2 mx-4 lg:mx-12">
        <span className="font-bold text-2xl">Website Ratings</span>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Top Ratings</NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Developers Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button>Login | Register</Button>
      </div>
      <motion.span
        className="absolute bg-accent w-full h-[1px]"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2.5, ease: "anticipate" }}
      />
    </nav>
  );
};
