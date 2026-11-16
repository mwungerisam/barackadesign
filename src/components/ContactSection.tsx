import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Send, CheckCircle2, Clock, ShieldCheck, Mail } from 'lucide-react';
import { APPROVED_SERVICES } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [division, setDivision] = useState(APPROVED_SERVICES[0].title);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppContactUrl = () => {
    const text = `Hello BARACK DESIGN,\n\nName: ${name}\nPhone: ${phone}\nDivision: ${division}\nMessage: ${message}`;
    return `https://wa.me/250789320757?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0B0D10] text-white border-b border-[#191919]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#808080] uppercase tracking-wider">
            <span>BARACK DESIGN</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#C0C0C0]">Kigali Studio Contact</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Connect With Our <span className="metallic-text">Production Team</span>
          </h2>
          <p className="text-sm text-[#808080] leading-relaxed">
            Visit our Kigali studio, call our direct line, or send a message for instant commercial production consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Studio Contact & Location Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#191919]/60 border border-[#2A2D35] rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="space-y-2 border-b border-[#191919] pb-5">
                <span className="text-xs font-semibold text-[#808080] uppercase tracking-wider">Physical Location</span>
                <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C0C0C0]" />
                  <span>Kigali Studio & Workshop</span>
                </h3>
                <p className="text-xs text-[#E5E5E5] leading-relaxed pt-1">
                  Town Centre Building, F5A-005, KN 70 St,<br />
                  Kigali, Rwanda
                </p>
              </div>

              <div className="space-y-2 border-b border-[#191919] pb-5">
                <span className="text-xs font-semibold text-[#808080] uppercase tracking-wider">Direct Lines</span>
                <div className="space-y-2">
                  <a
                    href="https://wa.me/250789320757"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-xs text-white hover:text-[#C0C0C0] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#C0C0C0]" />
                    <span>WhatsApp: +250 789 320 757</span>
                  </a>
                  <div className="flex items-center gap-3 text-xs text-[#E5E5E5]">
                    <Phone className="w-4 h-4 text-[#808080]" />
                    <span>Phone: +250 789 320 757</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#808080] uppercase tracking-wider">Turnaround & Delivery</span>
                <div className="text-xs text-[#808080] leading-relaxed space-y-1">
                  <div>· Same-day prepress proofing available</div>
                  <div>· Pickup at Town Centre Building F5A-005</div>
                  <div>· Express courier delivery across Kigali & Rwanda</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/250789320757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#E5E5E5] hover:bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat directly on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Location Map Visual Representation */}
            <div className="bg-[#000000] border border-[#191919] rounded-2xl p-6 text-center space-y-2">
              <MapPin className="w-6 h-6 text-[#C0C0C0] mx-auto" />
              <div className="font-heading font-bold text-sm text-white">KN 70 St, Town Centre Kigali</div>
              <p className="text-[11px] text-[#808080]">F5A-005 · Accessible for order pickups and material sample inspection.</p>
            </div>

          </div>

          {/* Right Column: Interactive Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0B0D10] border border-[#191919] rounded-2xl p-6 sm:p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 bg-[#191919] text-[#C0C0C0] rounded-full flex items-center justify-center mx-auto border border-[#808080]/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">Message Received</h3>
                  <p className="text-xs text-[#808080] max-w-md mx-auto">
                    Thank you <strong className="text-white">{name}</strong>. Our production team at Town Centre Building will respond shortly.
                  </p>
                  <div className="pt-4 flex items-center justify-center gap-4">
                    <a
                      href={getWhatsAppContactUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#E5E5E5] text-black font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 text-xs text-[#808080] hover:text-white"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-heading font-bold text-xl text-white">Direct Production Inquiry</h3>
                  <p className="text-xs text-[#808080]">Send your inquiry directly to our commercial printing & design team.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-[#B8B8B8] mb-2">Full name <span aria-hidden="true">*</span></label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#F4C400]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-[#B8B8B8] mb-2">Phone / WhatsApp number <span aria-hidden="true">*</span></label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#F4C400]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-[#B8B8B8] mb-2">Email address <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#F4C400]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-[#B8B8B8] mb-2">Service</label>
                    <select
                      id="contact-service"
                      value={division}
                      onChange={(e) => setDivision(e.target.value)}
                      className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#F4C400]"
                    >
                      {APPROVED_SERVICES.map(c => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-[#B8B8B8] mb-2">Project details <span aria-hidden="true">*</span></label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#191919] border border-[#2A2D35] rounded-lg px-3.5 py-3 text-sm text-white focus:outline-none focus:border-[#F4C400]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#E5E5E5] hover:bg-white rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to BARACK DESIGN</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
