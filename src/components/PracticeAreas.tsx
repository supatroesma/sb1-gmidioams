import { Anchor, Building2, Globe, Shield, Scale } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function PracticeAreas() {
  const { t } = useLanguage();

  const areas = [
    {
      icon: Anchor,
      data: t.practices.areas.maritime
    },
    {
      icon: Building2,
      data: t.practices.areas.corporate
    },
    {
      icon: Globe,
      data: t.practices.areas.international
    },
    {
      icon: Shield,
      data: t.practices.areas.compliance
    },
    {
      icon: Scale,
      data: t.practices.areas.disputes
    }
  ];

  return (
    <section id="areas" className="bg-[#F5F7FA] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-[2px] bg-[#C9A24D] mb-6 mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#243A5A] mb-6">
            {t.practices.title}
          </h2>
          <p className="text-lg text-[#4B5563] font-light max-w-3xl mx-auto">
            {t.practices.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <area.icon className="w-10 h-10 text-[#243A5A] mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif text-[#243A5A] mb-4">
                {area.data.title}
              </h3>
              <p className="text-[#4B5563] font-light leading-relaxed">
                {area.data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
