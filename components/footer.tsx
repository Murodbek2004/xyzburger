'use client'

import { Instagram, Facebook, Send, Phone, MapPin, Clock } from 'lucide-react'
import { useTranslation } from '@/lib/language-store'

export function Footer() {
  const t = useTranslation()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">X</span>
              </div>
              <span className="font-bold text-xl">
                YZ<span className="text-primary">BURGER</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.menu}</h4>
            <ul className="space-y-2">
              {[
                { id: 'combo', name: t.nav.combo },
                { id: 'strips', name: t.nav.strips },
                { id: 'drinks', name: t.nav.drinks },
                { id: 'sauces', name: t.nav.sauces },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.contacts}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+998 123 45 67</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>{t.footer.workHours}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.subscription}</h4>
            <p className="text-muted-foreground mb-4">
              {t.footer.subscriptionDesc}
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 bg-secondary border border-border rounded-full px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
