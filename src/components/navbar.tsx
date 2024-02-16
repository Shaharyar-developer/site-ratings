"use client";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogClose } from "./ui/dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { UserDialogBox } from "./user-dialog-box";
import { Plus, X } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export type FormData = {
  url: string;
  tags: string[];
  userEmail: string;
};

export const Navbar = ({
  username,
  avatar,
  email,
}: {
  username: Nullable<string>;
  avatar: Nullable<string>;
  email: string;
}) => {
  const [tags, setTags] = useState<string[]>([]);

  const [url, setUrl] = useState<string>("");
  const [formData, setFormData] = useState<FormData>();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setFormData({ url: `http"//${url}`, tags, userEmail: email });
  }, [tags, url, email]);
  useEffect(() => {
    setTimeout(() => {
      setTags([]);
      setUrl("");
    }, 100);
  }, [open]);

  return (
    <nav className="relative w-full border-b">
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
          <Dialog open={open}>
            {username && (
              <Button onClick={() => setOpen(true)} variant={"ghost"}>
                <Plus /> Add New
              </Button>
            )}
            <DialogContent>
              <h2>Add New Website</h2>
              <form
                className="flex gap-4 flex-col"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast(<pre>{JSON.stringify(formData, null, 2)}</pre>);
                  setOpen(false);
                  fetch("/api/site/create", {
                    method: "POST",
                    body: JSON.stringify(formData),
                  }).then((res) => {
                    res.json().then((data) => {
                      console.log(data);

                      setTimeout(() => {
                        data.success === true
                          ? toast("Success")
                          : toast("Error");
                      }, 500);
                    });
                  });
                }}
              >
                <Input
                  required
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                  type="text"
                  placeholder="URL (without protocol)"
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

                <Button className="w-full" type="submit" value="Submit">
                  Submit
                </Button>
              </form>
              <DialogClose
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <X size={"18"} />
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
        <UserDialogBox name={username} avatar={avatar} />
      </div>
    </nav>
  );
};
