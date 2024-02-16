"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "./ui/dialog";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { UserDialogBox } from "./user-dialog-box";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type FormData = {
  protocol?: string;
  url?: string;
  tags?: string[];
};

export const Navbar = ({
  username,
  avatar,
}: {
  username: Nullable<string>;
  avatar: Nullable<string>;
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [protocol, setProtocol] = useState<string>();
  const [url, setUrl] = useState<string>();
  const [formData, setFormData] = useState<FormData>();
  useEffect(() => {
    setFormData({ protocol, url, tags });
  }, [tags, protocol, url]);

  return (
    <nav className="relative w-full">
      <div className="min-h-12 flex justify-between items-center py-2 mx-4 lg:mx-12">
        <span
          className="font-bold text-2xl cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Website Ratings
        </span>
        <div className="flex gap-2">
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
                <NavigationMenuTrigger>
                  Developers Websites
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Dialog
            onOpenChange={() => {
              setTimeout(() => {
                setTags([]);
                setProtocol("");
                setUrl("");
              }, 100);
            }}
          >
            <DialogTrigger asChild>
              <Button variant={"ghost"}>
                <Plus /> Add New
              </Button>
            </DialogTrigger>
            <DialogContent>
              <h2>Add New Website</h2>
              <form
                className="flex gap-4 flex-col"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast(<pre>{JSON.stringify(formData, null, 2)}</pre>);
                }}
              >
                <Select
                  onValueChange={(e) => {
                    setProtocol(e);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Protocol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="http">HTTP</SelectItem>
                    <SelectItem value="https">HTTPS</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  type="text"
                  placeholder="URL"
                />
                <div className="flex gap-2">
                  <Input
                    onChange={(e) => {
                      setTags(e.target.value.split(","));
                    }}
                    type="text"
                    placeholder="Tags"
                  />
                  <span className="flex text-white/40 justify-center items-center">
                    {tags.length}/6
                  </span>
                </div>
                <div className="flex gap-2">
                  {tags.map((tag, idx) => {
                    if (tags[0] !== "")
                      return <Badge key={tag + idx}>{tag}</Badge>;
                  })}
                </div>
                <DialogClose>
                  <Button className="w-full" type="submit" value="Submit">
                    Submit
                  </Button>
                </DialogClose>
              </form>
            </DialogContent>
          </Dialog>
        </div>
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
