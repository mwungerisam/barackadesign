import React from 'react';

const questions = [
  {
    question: 'What should I include in a quote request?',
    answer: 'Share the service or product, quantity if known, dimensions where relevant, your requirements, and a way to contact you.'
  },
  {
    question: 'How is the price determined?',
    answer: 'Pricing depends on the project details. We provide a quotation after reviewing your requirements; no instant prices are estimated on this site.'
  },
  {
    question: 'Can I send my own artwork?',
    answer: 'Yes. You can mention your artwork in the request. When using the WhatsApp form, attach the file in WhatsApp after your message is prepared.'
  },
  {
    question: 'Can I request delivery?',
    answer: 'You can note a delivery preference in your request. Availability and arrangements are confirmed with the quotation.'
  }
];

export const FAQSection: React.FC = () => (
  <section className="border-b border-[#E5E5E5] bg-white py-16 sm:py-20" aria-labelledby="faq-heading">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[0.7fr_1.3fr] lg:px-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#666666]">Questions</p>
        <h2 id="faq-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Before you get started.</h2>
      </div>
      <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
        {questions.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-[#111111] marker:hidden">
              {item.question}
              <span aria-hidden="true" className="text-xl font-normal text-[#666666] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-2xl pt-3 text-sm leading-6 text-[#666666]">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
