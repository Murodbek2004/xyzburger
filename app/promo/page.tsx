'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Ticket, Copy, Check, Sparkles, Tag } from 'lucide-react'
import { useTranslation } from '@/lib/language-store'
import { LanguageSwitcher } from '@/components/language-switcher'
import { cn } from '@/lib/utils'

export default function PromoPage() {
  const t = useTranslation()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopy = async (code: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t.promo.back}</span>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">XYZ Burger</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {t.promo.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.promo.subtitle}
            </p>
          </div>

          {/* Promo Cards */}
          {t.promo.promoCodes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {t.promo.promoCodes.map((promo, index) => (
                <div
                  key={promo.code}
                  className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                  
                  <div className="p-6">
                    {/* Discount badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Tag className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground text-sm">{t.promo.discount}</span>
                      </div>
                      <span className="text-3xl font-bold text-primary">
                        {promo.discount}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-foreground font-medium mb-4">
                      {promo.description}
                    </p>

                    {/* Code */}
                    <div className="bg-secondary rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">{t.promo.code}</span>
                          <p className="text-2xl font-mono font-bold text-foreground tracking-wider">
                            {promo.code}
                          </p>
                        </div>
                        <button
                          onClick={() => handleCopy(promo.code)}
                          className={cn(
                            'flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300',
                            copiedCode === promo.code
                              ? 'bg-green-500 text-white'
                              : 'bg-primary text-primary-foreground hover:bg-primary/90'
                          )}
                        >
                          {copiedCode === promo.code ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span className="text-sm">{t.promo.copied}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span className="text-sm">{t.promo.copy}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Valid until */}
                    <div className="text-sm text-muted-foreground">
                      {t.promo.validUntil}: <span className="text-foreground">{promo.validUntil}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Ticket className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-foreground mb-2">
                {t.promo.noPromos}
              </h3>
              <p className="text-muted-foreground">
                {t.promo.checkLater}
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
