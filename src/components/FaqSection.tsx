import React, { useState } from 'react';
import { CLINIC_DATA, FaqItem } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  // Allow toggling accordions cleanly
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({
    'faq-1': true, // Open the first by default for quick clarity
  });

  const toggleFaq = (id: string) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="flex flex-col py-8 px-4 sm:px-6 bg-[#f2f4f7] -mx-4 sm:mx-0 sm:rounded-2xl scroll-mt-24">
      <div className="flex flex-col mb-4">
        <div className="inline-flex items-center gap-1.5 text-[#075fae] text-[13px] font-semibold mb-1">
          <span className="material-symbols-outlined text-[16px]">quiz</span>
          질문과 답변
        </div>
        <h2 className="text-[20px] sm:text-[22px] text-[#001d36] font-bold tracking-tight">
          자주 묻는 질문
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#43474d] mt-1">
          환자분들께서 가장 자주 궁금해하시는 질문을 정리했습니다.
        </p>
      </div>

      <div className="flex flex-col gap-2.5">
        {CLINIC_DATA.faqs.map((faq: FaqItem, idx: number) => {
          const isOpen = !!openMap[faq.id];
          const qNumber = `Q${idx + 1}`;

          return (
            <div
              key={faq.id}
              className="rounded-xl bg-white border border-[#e0e3e6] shadow-xs overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-4 cursor-pointer text-left select-none hover:bg-[#f7f9fc] transition-colors"
              >
                <span className="text-[15px] sm:text-[16px] text-[#001d36] font-bold pr-2 flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#eceef1] text-[#075fae] flex items-center justify-center text-[12px] font-bold shrink-0">
                    {qNumber}
                  </span>
                  <span>{faq.question}</span>
                </span>
                <span
                  className={`material-symbols-outlined text-[20px] text-[#74777e] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#075fae]' : ''
                  }`}
                >
                  keyboard_arrow_down
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-0 text-[#43474d] text-[14px] leading-relaxed border-t border-[#f2f4f7] bg-white animate-fadeIn">
                  <div className="p-3.5 rounded-lg bg-[#f2f4f7] text-[#191c1e] mt-1">
                    {faq.answer}
                    {faq.highlight && (
                      <div className="mt-2 pt-2 border-t border-[#e0e3e6] text-[12px] font-semibold text-[#075fae] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">info</span>
                        <span>핵심 요약: {faq.highlight}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
