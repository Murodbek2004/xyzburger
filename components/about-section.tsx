'use client'

import { Flame, Heart, Leaf, Award } from 'lucide-react'
import { useTranslation } from '@/lib/language-store'

const generations = [
  {
    name: 'Gen X',
    years: '1965-1980',
    color: 'bg-amber-500'
  },
  {
    name: 'Millennials',
    years: '1981-1996',
    color: 'bg-primary'
  },
  {
    name: 'Gen Z',
    years: '1997-2012',
    color: 'bg-accent'
  }
]

export function AboutSection() {
  const t = useTranslation()

  const features = [
    {
      icon: Flame,
      title: t.about.features.grill.title,
      description: t.about.features.grill.description
    },
    {
      icon: Heart,
      title: t.about.features.love.title,
      description: t.about.features.love.description
    },
    {
      icon: Leaf,
      title: t.about.features.fresh.title,
      description: t.about.features.fresh.description
    },
    {
      icon: Award,
      title: t.about.features.premium.title,
      description: t.about.features.premium.description
    }
  ]

  const generationDescriptions = [
    t.about.generations.genX.description,
    t.about.generations.millennials.description,
    t.about.generations.genZ.description,
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Main About */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t.about.whyUs} <span className="text-primary">XYZ Burger</span>{t.about.whyUsEnd}
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            {t.about.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Generations */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            {t.about.forAllGenerations}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {generations.map((gen, index) => (
              <div
                key={gen.name}
                className="relative overflow-hidden bg-card rounded-2xl p-6 border border-border animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${gen.color}`} />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {gen.name}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {gen.years}
                </div>
                <p className="text-muted-foreground">
                  {generationDescriptions[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
