"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
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

import { UserDialogBox } from "./user-dialog-box";

export const Navbar = ({
  username,
  avatar,
}: {
  username: Nullable<string>;
  avatar: Nullable<string>;
}) => {
  return (
    <nav className="relative w-full">
      <div className="min-h-12 flex justify-between items-center py-2 mx-4 lg:mx-12">
        <span
          className="font-bold text-2xl cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Website Ratings
        </span>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Top Websites</NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Developers Websites</NavigationMenuTrigger>
              <NavigationMenuContent>
                <>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {username ? (
          <UserDialogBox name={username} avatar={avatar} />
        ) : (
          <Button onClick={() => signIn()}>Login | Register</Button>
        )}
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
