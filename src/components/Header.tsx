import { useState, useEffect } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#nosotros', label: t.header.about },
    { href: '#areas', label: t.header.practices },
    { href: '#ventajas', label: t.header.whyUs },
    { href: '#proceso', label: t.header.process },
    { href: '#contacto', label: t.header.contact }
  ];

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'es', flag: '🇪🇸', label: 'ES' },
    { code: 'en', flag: '🇺🇸', label: 'EN' },
    { code: 'zh', flag: '🇨🇳', label: '中文' }
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            onClick={scrollToTop}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Scale className="w-7 h-7 text-[#243A5A]" strokeWidth={1.5} />
            <div>
              <h1 className="text-[#243A5A] font-serif text-lg leading-tight">
                Global Maritime Consultants
              </h1>
              <p className="text-[#4B5563] text-xs font-light tracking-wide">
                GROUP PANAMA
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#4B5563] hover:text-[#243A5A] font-light text-sm tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-1 border-l border-gray-300 pl-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`px-2 py-1 text-lg transition-all ${
                    language === lang.code
                      ? 'bg-[#243A5A] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                  aria-label={`Switch to ${lang.label}`}
                  title={lang.label}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
            <a
              href="#contacto"
              className="px-6 py-2.5 bg-[#243A5A] text-white text-sm font-medium tracking-wide hover:bg-[#3A4F6F] transition-colors"
            >
              {t.hero.ctaPrimary}
            </a>
          </nav>

          <div className="lg:hidden flex items-center gap-3">
            <div className="flex items-center gap-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`px-2 py-1 text-base transition-all ${
                    language === lang.code
                      ? 'bg-[#243A5A] text-white'
                      : 'hover:bg-gray-100'
                  }`}
                  aria-label={`Switch to ${lang.label}`}
                  title={lang.label}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#243A5A] p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#4B5563] hover:text-[#243A5A] font-light py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 bg-[#243A5A] text-white text-center font-medium tracking-wide hover:bg-[#3A4F6F] transition-colors mt-2"
              >
                {t.hero.ctaPrimary}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
