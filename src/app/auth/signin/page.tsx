import { redirect } from "next/navigation";
import { Client } from "./client";
import { getServerSession } from "next-auth";
export default async function Page() {
  const session = await getServerSession();
  console.log(session);

  if (session) {
    redirect("/");
  } else {
    return <Client />;
  }
}
