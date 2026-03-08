'use client'

import { menuItems, categories } from '@/lib/menu-data'
import { MenuCard } from './menu-card'

export function MenuSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {categories.map((category) => {
          const categoryItems = menuItems.filter(
            (item) => item.category === category.id
          )

          return (
            <div key={category.id} id={category.id} className="mb-16 last:mb-0 scroll-mt-24">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{category.icon}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {category.name}
                </h2>
                <div className="flex-1 h-px bg-border ml-4" />
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categoryItems.map((item, index) => (
                  <MenuCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
