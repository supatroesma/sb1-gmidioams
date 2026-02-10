import { Scale } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#243A5A] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-[#C9A24D]" strokeWidth={1.5} />
              <h3 className="text-lg font-serif">
                Global Maritime Consultants<br />Group Panama
              </h3>
            </div>
            <p className="text-gray-300 font-light text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">{t.footer.practicesTitle}</h4>
            <ul className="space-y-3 text-sm font-light text-gray-300">
              <li>{t.practices.areas.maritime.title}</li>
              <li>{t.practices.areas.corporate.title}</li>
              <li>{t.practices.areas.international.title}</li>
              <li>{t.practices.areas.compliance.title}</li>
              <li>{t.practices.areas.disputes.title}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm font-light text-gray-300">
              <li>
                <a href="tel:+50766727591" className="hover:text-white transition-colors">
                  +507 6672-7591
                </a>
              </li>
              <li>
                <a href="mailto:Vergaralaw@cwpanama.net" className="hover:text-white transition-colors break-all">
                  Vergaralaw@cwpanama.net
                </a>
              </li>
              <li className="pt-2">
                {t.contact.info.addressLine1}<br />
                {t.contact.info.addressLine2}<br />
                {t.contact.info.addressLine3}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-light">
            <p>
              {currentYear} {t.footer.rights}
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">{t.footer.legal}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
