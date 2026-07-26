import { Background } from '@/components/Background'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProfileCard } from '@/components/ProfileCard'

export default function App() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <Background />
      <Header />
      <main className="mx-auto flex w-full max-w-[440px] flex-1 flex-col justify-center px-4 py-8 sm:py-10">
        <ProfileCard />
      </main>
      <Footer />
    </div>
  )
}
