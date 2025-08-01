import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "../../pages/api/auth/[...nextauth]"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/admin-login")
  }
  return <>{children}</>
}
