import { Sidebar } from "@/components/sidebar"
import { MainContent } from "@/components/main-content"
import { UserSync } from "@/components/user-sync"

export default function HomePage() {
  return (
    <div className="flex h-[calc(100vh-5rem)] bg-background">
      <UserSync />
      <Sidebar />
      <MainContent />
    </div>
  )
}
