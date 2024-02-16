import { getInitials } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signIn, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export const UserDialogBox = ({
  avatar,
  name,
}: {
  name: Nullable<string>;
  avatar: Nullable<string>;
}) => {
  if (name)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={avatar || ""} />
            <AvatarFallback>{getInitials(name || "")}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()}>
            Sign Out
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <ModeToggle />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  else return <Button onClick={() => signIn()}>Login | Register</Button>;
};
