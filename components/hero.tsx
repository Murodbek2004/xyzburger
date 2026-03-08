'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown, Flame, Star, Zap } from 'lucide-react'

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { width, height } = heroRef.current.getBoundingClientRect()
      const x = (clientX / width - 0.5) * 20
      const y = (clientY / height - 0.5) * 20
      heroRef.current.style.setProperty('--mouse-x', `${x}px`)
      heroRef.current.style.setProperty('--mouse-y', `${y}px`)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToMenu = () => {
    const menuSection = document.getElementById('combo')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: 'translate(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1))' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s', transform: 'translate(var(--mouse-x), var(--mouse-y))' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Flame className="absolute top-1/4 left-[15%] w-8 h-8 text-primary/40 animate-bounce" style={{ animationDuration: '3s' }} />
        <Star className="absolute top-1/3 right-[20%] w-6 h-6 text-primary/30 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <Zap className="absolute bottom-1/3 left-[25%] w-7 h-7 text-accent/40 animate-bounce" style={{ animationDuration: '2.8s', animationDelay: '1s' }} />
        <Flame className="absolute bottom-1/4 right-[15%] w-9 h-9 text-accent/30 animate-bounce" style={{ animationDuration: '3.2s', animationDelay: '0.3s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Generation Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-muted-foreground text-sm">Для поколений</span>
          <span className="text-primary font-bold">X</span>
          <span className="text-foreground">•</span>
          <span className="text-primary font-bold">Y</span>
          <span className="text-foreground">•</span>
          <span className="text-primary font-bold">Z</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          <span className="block text-foreground">XYZ</span>
          <span className="block text-primary mt-2">BURGER</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 text-balance">
          Бургеры, которые объединяют поколения. Премиальное качество и неповторимый вкус в каждом укусе.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <button
            onClick={scrollToMenu}
            className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            <span>Смотреть меню</span>
            <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all hover:scale-105"
          >
            О нас
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto mt-16 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700">
          {[
            { value: '50+', label: 'Локаций' },
            { value: '1M+', label: 'Клиентов' },
            { value: '4.9', label: 'Рейтинг' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
