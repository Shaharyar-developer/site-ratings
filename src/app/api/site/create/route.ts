import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { FormData } from "@/components/navbar";

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin");
  const formData = (await req.json()) as FormData;
  console.log(origin);
  if (
    origin === "http://localhost:3000" ||
    origin === "https://site-ratings.vercel.app"
  ) {
    const site = await db.site.findMany({
      where: {
        url: formData.url,
      },
    });
    if (!site) {
      console.log(formData);
      console.log();

      const site = await db.site.create({
        data: {
          url: formData.url,
          ratings: {
            create: {
              userEmail: formData.userEmail,
            },
          },
        },
      });
      console.log(site);
    }

    return NextResponse.json({ success: true });
  } else return NextResponse.json({ success: false });
}
