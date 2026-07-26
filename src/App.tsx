import { Background } from '@/components/Background'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProfileCard } from '@/components/ProfileCard'

export default function App() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <Background />
      <Header />
      <main className="mx-auto flex w-full flex-1 flex-col justify-center py-10 sm:py-12">
        <ProfileCard />
      </main>
      <Footer />
    </div>
  )
}
