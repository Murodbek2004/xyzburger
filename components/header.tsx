'use client'

import { useState, useEffect } from 'react'
import { ShoppingBag, Menu, X, Ticket } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '@/lib/cart-store'
import { useTranslation } from '@/lib/language-store'
import { LanguageSwitcher } from './language-switcher'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { getTotalItems, toggleCart } = useCartStore()
  const totalItems = getTotalItems()
  const t = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'combo', name: t.nav.combo },
    { id: 'strips', name: t.nav.strips },
    { id: 'drinks', name: t.nav.drinks },
    { id: 'sauces', name: t.nav.sauces },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">XYZ</span>
            </div>
            <span className="text-foreground font-bold text-xl md:text-2xl tracking-tight">
              <span className="text-primary">BURGER</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {section.name}
              </button>
            ))}
            <Link
              href="/promo"
              className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              <Ticket className="w-4 h-4" />
              {t.nav.promo}
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Switcher - Desktop */}
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            {/* Cart Button */}
            <button
              onClick={toggleCart}
              className="relative flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">{t.cart.title}</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground w-6 h-6 rounded-full text-sm flex items-center justify-center font-bold animate-in zoom-in-50 duration-200">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col py-4">
              {navItems.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors font-medium text-left"
                >
                  {section.name}
                </button>
              ))}
              <Link
                href="/promo"
                className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors font-medium text-left flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Ticket className="w-4 h-4" />
                {t.nav.promo}
              </Link>
              {/* Language Switcher - Mobile */}
              <div className="px-4 py-3 sm:hidden">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
