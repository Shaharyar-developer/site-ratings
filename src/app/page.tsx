import { db } from "@/lib/db";
import { Navbar } from "@/components/navbar";
import { getServerSession } from "next-auth";
export default async function Home() {
  const userSession = await getServerSession();
  if (userSession?.user?.email) {
    const dbUser = await db.user.findUnique({
      where: {
        email: userSession?.user?.email,
      },
    });
    if (!dbUser)
      await db.user.create({
        data: {
          email: userSession?.user?.email,
        },
      });
  }
  const site = await db.siteRating.findMany();
  console.log(site);

  return (
    <>
      <Navbar
        email={userSession?.user?.email || ""}
        avatar={userSession?.user?.image}
        username={userSession?.user?.name}
      />
    </>
  );
}
