import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { LinkResponse } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export async function getSite(url: string) {
  const regex =
    /^([A-Za-z]+):(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
  if (regex.test(url)) {
    const res = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true`
    );
    return (await res.json()) as LinkResponse;
  } else {
    return null;
  }
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}