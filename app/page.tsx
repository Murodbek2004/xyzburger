import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { MenuSection } from '@/components/menu-section'
import { AboutSection } from '@/components/about-section'
import { Footer } from '@/components/footer'
import { CartSidebar } from '@/components/cart-sidebar'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <MenuSection />
      <AboutSection />
      <Footer />
      <CartSidebar />
    </main>
  )
}
