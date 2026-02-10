import { Scale } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#243A5A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <Scale className="w-10 h-10 text-[#C9A24D]" strokeWidth={1.5} />
            <h1 className="text-sm font-light tracking-[0.2em] uppercase text-gray-300">
              Global Maritime Consultants Group Panama
            </h1>
          </div>

          <h2 className="text-5xl lg:text-6xl font-serif font-light leading-tight mb-6">
            {t.hero.title}
          </h2>

          <p className="text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-2xl">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contacto"
              className="inline-block px-8 py-4 bg-white text-[#243A5A] font-medium tracking-wide hover:bg-gray-100 transition-colors text-center"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#contacto"
              className="inline-block px-8 py-4 border border-white/30 text-white font-light tracking-wide hover:bg-white/10 transition-colors text-center"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-gray-400 font-light mb-1">{t.hero.credentials.experience}</p>
              </div>
              <div>
                <p className="text-gray-400 font-light mb-1">{t.hero.credentials.maritimeLaw}</p>
              </div>
              <div>
                <p className="text-gray-400 font-light mb-1">{t.hero.credentials.international}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
