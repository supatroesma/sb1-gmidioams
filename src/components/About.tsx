import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <div className="w-16 h-[2px] bg-[#C9A24D] mb-6"></div>
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#243A5A] mb-8">
              {t.about.title}
            </h2>
          </div>

          <div className="space-y-6 text-[#4B5563] leading-relaxed">
            {t.about.description.map((paragraph, index) => (
              <p key={index} className="text-lg font-light">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
