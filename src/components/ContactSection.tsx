import React, { useState } from 'react';
import { CheckCircle2, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { APPROVED_SERVICES } from '../data/servicesData';

const address = 'Town Centre Building, F5A-005, KN 70 St, Kigali, Rwanda';
const whatsapp = 'https://wa.me/250789320757';
const isValidPhone = (value: string) => {
  const digits = value.match(/[0-9]/g)?.length || 0;
  return /^[+0-9().\s-]+$/.test(value) && digits >= 7 && digits <= 15;
};

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(APPROVED_SERVICES[0].title);
  const [message, setMessage] = useState('');
  const [prepared, setPrepared] = useState(false);

  const getWhatsAppContactUrl = () => {
    const text = [
      'Hello BARACK DESIGN, I would like to make an enquiry.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : '',
      `Service: ${service}`,
      `Project details: ${message}`
    ].filter(Boolean).join('\n');
    return `${whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="bg-[#0B0D10] py-16 text-white sm:py-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#C0C0C0]">Contact</p>
          <h2 id="contact-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Tell us about your project.</h2>
          <p className="mt-3 text-sm leading-6 text-[#B8B8B8]">Contact BARACK DESIGN in Kigali or prepare a project enquiry to send through WhatsApp.</p>
        </div>

        <div className="mt-9 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <address className="not-italic">
            <div className="space-y-5 border-y border-[#444444] py-5">
              <a href="https://www.google.com/maps/search/?api=1&query=Town+Centre+Building%2C+F5A-005%2C+KN+70+St%2C+Kigali%2C+Rwanda" target="_blank" rel="noopener noreferrer" className="flex gap-3 text-sm leading-6 text-[#E5E5E5] hover:text-white">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C0C0C0]" />
                <span>{address}<span className="mt-1 block text-xs text-[#999999]">Open in Google Maps</span></span>
              </a>
              <a href="tel:+250789320757" className="flex items-center gap-3 text-sm text-[#E5E5E5] hover:text-white">
                <Phone className="h-4 w-4 text-[#C0C0C0]" /> +250 789 320 757
              </a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#E5E5E5] hover:text-white">
                <MessageSquare className="h-4 w-4 text-[#C0C0C0]" /> WhatsApp
              </a>
            </div>
          </address>

          <div className="border border-[#333333] bg-[#111214] p-5 sm:p-7">
            {prepared ? (
              <div className="py-8" role="status" aria-live="polite">
                <CheckCircle2 className="h-9 w-9 text-[#C0C0C0]" />
                <h3 className="mt-4 text-xl font-semibold">Your message is ready.</h3>
                <p className="mt-2 max-w-lg text-sm leading-6 text-[#B8B8B8]">This website has not sent or stored your enquiry. Open WhatsApp and press Send to contact BARACK DESIGN.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={getWhatsAppContactUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-[#E5E5E5]">
                    <Send className="h-4 w-4" /> Open WhatsApp
                  </a>
                  <button type="button" onClick={() => setPrepared(false)} className="min-h-11 border border-[#555555] px-4 py-2.5 text-sm text-white hover:bg-[#191919]">Edit details</button>
                </div>
              </div>
            ) : (
              <form onSubmit={(event) => {
                event.preventDefault();
                const phoneInput = event.currentTarget.querySelector<HTMLInputElement>('#contact-phone');
                if (phoneInput && !isValidPhone(phone)) {
                  phoneInput.setCustomValidity('Enter a valid phone number containing 7 to 15 digits.');
                  phoneInput.reportValidity();
                  return;
                }
                phoneInput?.setCustomValidity('');
                setPrepared(true);
              }} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[#E5E5E5]">Full name <span aria-hidden="true">*</span></label>
                    <input id="contact-name" required autoComplete="name" maxLength={100} value={name} onChange={(event) => setName(event.target.value)} className="w-full border border-[#3A3A3A] bg-[#191919] px-3.5 py-3 text-sm text-white outline-none focus:border-[#C0C0C0]" />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-[#E5E5E5]">Phone / WhatsApp <span aria-hidden="true">*</span></label>
                    <input id="contact-phone" type="tel" required autoComplete="tel" inputMode="tel" maxLength={24} aria-describedby="contact-phone-help" value={phone} onChange={(event) => { event.currentTarget.setCustomValidity(''); setPhone(event.target.value); }} className="w-full border border-[#3A3A3A] bg-[#191919] px-3.5 py-3 text-sm text-white outline-none focus:border-[#C0C0C0]" />
                    <p id="contact-phone-help" className="mt-1 text-xs leading-5 text-[#999999]">Enter a number with 7–15 digits.</p>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[#E5E5E5]">Email <span className="font-normal text-[#999999]">(optional)</span></label>
                    <input id="contact-email" type="email" autoComplete="email" maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} className="w-full border border-[#3A3A3A] bg-[#191919] px-3.5 py-3 text-sm text-white outline-none focus:border-[#C0C0C0]" />
                </div>
                <div>
                  <label htmlFor="contact-service" className="mb-2 block text-sm font-medium text-[#E5E5E5]">Service</label>
                  <select id="contact-service" value={service} onChange={(event) => setService(event.target.value)} className="w-full border border-[#3A3A3A] bg-[#191919] px-3.5 py-3 text-sm text-white outline-none focus:border-[#C0C0C0]">
                    {APPROVED_SERVICES.map((item) => <option key={item.id} value={item.title}>{item.title}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[#E5E5E5]">Project details <span aria-hidden="true">*</span></label>
                  <textarea id="contact-message" required rows={4} maxLength={1000} value={message} onChange={(event) => setMessage(event.target.value)} className="w-full border border-[#3A3A3A] bg-[#191919] px-3.5 py-3 text-sm text-white outline-none focus:border-[#C0C0C0]" />
                </div>
                <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-[#E5E5E5]">
                  <Send className="h-4 w-4" /> Prepare WhatsApp message
                </button>
                <p className="text-xs leading-5 text-[#999999]">Your details are only placed in a message link. They are not submitted to or stored by this website.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
