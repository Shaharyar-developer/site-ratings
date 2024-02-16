import { db } from "@/lib/db";
import { Navbar } from "@/components/navbar";
import { getServerSession } from "next-auth";
export default async function Home() {

  const userSession = await getServerSession();
  return (
    <>
      <Navbar
        avatar={userSession?.user?.image}
        username={userSession?.user?.name}
      />
    </>
  );
}
