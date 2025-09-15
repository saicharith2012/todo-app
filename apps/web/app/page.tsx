import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();

  return <div className="flex flex-wrap">users: {JSON.stringify(users)}</div>;
}

export const revalidate = 10; // Incremental Site Generation
// or
// export const dynamic = 'force-dynamic'
