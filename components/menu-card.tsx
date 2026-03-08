'use client'

import { Plus, Check } from 'lucide-react'
import { useState } from 'react'
import type { MenuItem } from '@/lib/menu-data'
import { useCartStore } from '@/lib/cart-store'
import { cn } from '@/lib/utils'

interface MenuCardProps {
  item: MenuItem
  index: number
}

export function MenuCard({ item, index }: MenuCardProps) {
  const [isAdded, setIsAdded] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <div
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 animate-in fade-in slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ 
            backgroundImage: `url(${item.image})`,
            backgroundColor: 'hsl(var(--secondary))'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        
        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  'px-2 py-1 rounded-full text-xs font-semibold',
                  tag === 'Хит продаж' && 'bg-primary text-primary-foreground',
                  tag === 'Острое' && 'bg-accent text-accent-foreground',
                  tag === 'Выгодно' && 'bg-green-500 text-white',
                  tag === 'Для голодных' && 'bg-amber-500 text-white',
                  tag === 'Десертное' && 'bg-pink-500 text-white',
                  tag === 'Фирменный' && 'bg-primary text-primary-foreground',
                  !['Хит продаж', 'Острое', 'Выгодно', 'Для голодных', 'Десертное', 'Фирменный'].includes(tag) && 'bg-secondary text-secondary-foreground'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-card-foreground mb-1 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary">
            {item.price} ₽
          </span>
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300',
              isAdded
                ? 'bg-green-500 text-white'
                : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105'
            )}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Добавлено</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>В корзину</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
