import { useLanguage } from '../contexts/LanguageContext';

export default function WorkProcess() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      data: t.process.steps.analysis
    },
    {
      number: '02',
      data: t.process.steps.strategy
    },
    {
      number: '03',
      data: t.process.steps.execution
    },
    {
      number: '04',
      data: t.process.steps.followup
    }
  ];

  return (
    <section id="proceso" className="bg-[#F5F7FA] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-[2px] bg-[#C9A24D] mb-6 mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#243A5A] mb-6">
            {t.process.title}
          </h2>
          <p className="text-lg text-[#4B5563] font-light max-w-3xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 relative"
            >
              <div className="text-6xl font-serif font-light text-[#C9A24D] mb-6 opacity-50">
                {step.number}
              </div>
              <h3 className="text-2xl font-serif text-[#243A5A] mb-4">
                {step.data.title}
              </h3>
              <p className="text-[#4B5563] font-light leading-relaxed">
                {step.data.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-[#C9A24D] opacity-30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
