import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="flex flex-col py-8 px-5 sm:px-8 bg-[#001d36] text-white rounded-2xl shadow-sm mt-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-[#d4e3ff] text-[24px]">
          support_agent
        </span>
        <span className="text-[14px] font-semibold text-[#d1e4ff]">
          환자 편의 상담
        </span>
      </div>

      <h2 className="text-[22px] sm:text-[24px] font-bold text-white mb-2 leading-tight tracking-tight">
        진료 관련 궁금한 점이<br />있으신가요?
      </h2>

      <p className="text-[14px] sm:text-[15px] text-[#afc9ea] mb-5 leading-relaxed">
        진료시간, 진료 가능 항목, 방문 방법을 전화로 친절히 확인해 드립니다.
      </p>

      <a
        href={`tel:${CLINIC_DATA.phone}`}
        className="w-full h-14 rounded-lg bg-[#075fae] hover:bg-[#0974d4] text-white flex items-center justify-center gap-2 text-[16px] font-bold active:scale-[0.99] transition-all shadow-md"
      >
        <span className="material-symbols-outlined text-[22px]">phone_enabled</span>
        <span>{CLINIC_DATA.phoneFormatted} 전화 문의</span>
      </a>

      <div className="mt-3.5 flex items-center justify-center gap-1.5 text-[#afc9ea]">
        <span className="material-symbols-outlined text-[15px]">info</span>
        <span className="text-[12px]">
          방문 전 운영시간과 진료 가능 여부를 확인해 주세요.
        </span>
      </div>
    </section>
  );
};
