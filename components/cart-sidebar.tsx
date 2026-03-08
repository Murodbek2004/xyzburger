'use client'

import { X, Plus, Minus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react'
import { useCartStore } from '@/lib/cart-store'
import { useEffect } from 'react'

export function CartSidebar() {
  const { 
    items, 
    isOpen, 
    setCartOpen, 
    removeItem, 
    updateQuantity, 
    getTotalPrice,
    clearCart 
  } = useCartStore()

  const totalPrice = getTotalPrice()

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 animate-in fade-in duration-200"
        onClick={() => setCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-card border-l border-border z-50 flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-card-foreground">Корзина</h2>
            <span className="text-muted-foreground">
              ({items.length} {items.length === 1 ? 'товар' : items.length < 5 ? 'товара' : 'товаров'})
            </span>
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-medium text-card-foreground mb-2">
                Корзина пуста
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Добавьте что-нибудь вкусное из меню
              </p>
              <button
                onClick={() => setCartOpen(false)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all"
              >
                К меню
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-secondary/50 rounded-xl p-3 animate-in fade-in slide-in-from-right duration-200"
                >
                  {/* Image */}
                  <div 
                    className="w-20 h-20 rounded-lg bg-secondary bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-card-foreground truncate">
                      {item.name}
                    </h4>
                    <p className="text-primary font-bold mt-1">
                      {item.price} ₽
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-start p-2 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-4 space-y-4">
            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-destructive transition-colors py-2"
            >
              <Trash2 className="w-4 h-4" />
              <span>Очистить корзину</span>
            </button>

            {/* Total */}
            <div className="flex items-center justify-between text-lg">
              <span className="text-card-foreground">Итого:</span>
              <span className="text-2xl font-bold text-primary">{totalPrice} Сум</span>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-primary text-primary-foreground py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
              <span>Оформить заказ</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Delivery Info */}
            <p className="text-center text-muted-foreground text-sm">
              Бесплатная доставка от 1000 Сум
            </p>
          </div>
        )}
      </div>
    </>
  )
}
