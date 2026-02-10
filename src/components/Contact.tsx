import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-[2px] bg-[#C9A24D] mb-6 mx-auto"></div>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#243A5A] mb-6">
            {t.contact.title}
          </h2>
          <p className="text-lg text-[#4B5563] font-light max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-[#243A5A] mb-2">
                    {t.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#243A5A] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-[#243A5A] mb-2">
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#243A5A] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#243A5A] mb-2">
                    {t.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#243A5A] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-[#243A5A] mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#243A5A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-[#243A5A] mb-2">
                  {t.contact.form.matter} *
                </label>
                <select
                  id="asunto"
                  name="asunto"
                  required
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#243A5A] transition-colors"
                >
                  <option value="">{t.contact.form.matter}</option>
                  <option value="maritimo">{t.practices.areas.maritime.title}</option>
                  <option value="corporativo">{t.practices.areas.corporate.title}</option>
                  <option value="internacional">{t.practices.areas.international.title}</option>
                  <option value="cumplimiento">{t.practices.areas.compliance.title}</option>
                  <option value="conflictos">{t.practices.areas.disputes.title}</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-[#243A5A] mb-2">
                  {t.contact.form.message} *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={6}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#243A5A] transition-colors resize-none"
                ></textarea>
              </div>

              <div className="bg-[#F5F7FA] p-4 border-l-2 border-[#C9A24D]">
                <p className="text-sm text-[#4B5563] font-light">
                  {t.contact.privacy}
                </p>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-4 bg-[#243A5A] text-white font-medium tracking-wide hover:bg-[#3A4F6F] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t.contact.form.submit}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif text-[#243A5A] mb-6">
                {t.contact.info.title}
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-[#243A5A] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-[#4B5563] font-light mb-1">{t.contact.info.phone}</p>
                    <a href="tel:+50766727591" className="text-[#243A5A] hover:text-[#3A4F6F]">
                      +507 6672-7591
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-[#243A5A] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-[#4B5563] font-light mb-1">{t.contact.info.email}</p>
                    <a href="mailto:Vergaralaw@cwpanama.net" className="text-[#243A5A] hover:text-[#3A4F6F] break-all">
                      Vergaralaw@cwpanama.net
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-[#243A5A] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm text-[#4B5563] font-light mb-1">{t.contact.info.address}</p>
                    <p className="text-[#243A5A]">
                      {t.contact.info.addressLine1}<br />
                      {t.contact.info.addressLine2}<br />
                      {t.contact.info.addressLine3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
