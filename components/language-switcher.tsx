'use client'

import { useLanguageStore, type Language } from '@/lib/language-store'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore()

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'uz', label: 'UZ' },
  ]

  return (
    <div className="flex items-center bg-secondary rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={cn(
            'px-3 py-1 rounded-full text-sm font-medium transition-all duration-200',
            language === lang.code
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
