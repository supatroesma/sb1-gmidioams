import { Target, Award, Users, Globe, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Target,
      data: t.whyUs.reasons.strategic
    },
    {
      icon: Award,
      data: t.whyUs.reasons.experience
    },
    {
      icon: Users,
      data: t.whyUs.reasons.personalized
    },
    {
      icon: Globe,
      data: t.whyUs.reasons.international
    },
    {
      icon: CheckCircle,
      data: t.whyUs.reasons.rigor
    }
  ];

  return (
    <section id="ventajas" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-[2px] bg-[#C9A24D] mb-6 mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#243A5A] mb-6">
            {t.whyUs.title}
          </h2>
          <p className="text-lg text-[#4B5563] font-light max-w-3xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 bg-[#F5F7FA] hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0">
                <reason.icon className="w-8 h-8 text-[#243A5A]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#243A5A] mb-3">
                  {reason.data.title}
                </h3>
                <p className="text-[#4B5563] font-light leading-relaxed">
                  {reason.data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
