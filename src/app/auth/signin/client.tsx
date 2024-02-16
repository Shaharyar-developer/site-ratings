"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export const Client = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  size-72 md:size-96 rounded border flex justify-center flex-col gap-4 items-center p-2">
      <div className="flex-1 flex gap-2 flex-col justify-center items-center">
        <Button variant={"outline"} onClick={() => signIn("google")}>
          Sign In With Google
        </Button>
        <span className="text-muted-foreground text-sm">
          More options coming soon
        </span>
      </div>
      <span className="text-muted-foreground text-sm">
        Username and Passwords are Unsafe
      </span>
    </div>
  );
};
