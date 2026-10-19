import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface FooterSectionProps {
  onOpenTerms: (type: 'privacy' | 'terms') => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenTerms }) => {
  return (
    <footer className="mt-8 flex flex-col gap-5 text-[#43474d]">
      {/* SECTION 8: LEGAL & COMPLIANCE FOOTER NOTE */}
      <div className="p-4 rounded-xl bg-[#eceef1] border border-[#e0e3e6]">
        <div className="p-3.5 rounded-lg bg-[#e6e8eb] flex flex-col gap-1.5 mb-3.5">
          <span className="text-[14px] font-bold text-[#001d36] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-[#075fae]">
              policy
            </span>
            의료법 및 의료광고 심의 준수 안내
          </span>
          <p className="text-[12px] text-[#43474d] leading-relaxed">
            본 웹페이지는 의료법 및 의료광고 기준을 준수하며, 특정 치료의 효과를 보증하거나 과장하지 않습니다. 진료 관련 구체적인 상담은 의료진의 직접 진료를 통해 이루어집니다.
          </p>
        </div>

        {/* Official Registry Data */}
        <div className="flex flex-col gap-1 text-[12px] text-[#43474d] leading-relaxed">
          <p>
            <strong className="font-semibold text-[#001d36]">상호:</strong> {CLINIC_DATA.name}
          </p>
          <p>
            <strong className="font-semibold text-[#001d36]">주소:</strong> {CLINIC_DATA.address}
          </p>
          <p>
            <strong className="font-semibold text-[#001d36]">대표전화:</strong>{' '}
            <a href={`tel:${CLINIC_DATA.phone}`} className="text-[#075fae] font-bold underline">
              {CLINIC_DATA.phoneFormatted}
            </a>
          </p>
          <p>
            <strong className="font-semibold text-[#001d36]">등록정보:</strong> 사업자등록번호 / 의료기관등록번호 / 대표자명{' '}
            <span className="text-[#6e3900] bg-[#ffdcc3] px-1.5 py-0.5 rounded text-[11px] font-medium">
              [병원 확인 후 입력]
            </span>
          </p>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="p-4 sm:p-5 bg-[#f2f4f7] rounded-xl border border-[#e0e3e6] flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-[15px] font-bold text-[#001d36]">
            {CLINIC_DATA.name}
          </span>
          <span className="px-2 py-0.5 rounded bg-[#ffdcc3] text-[#6e3900] text-[11px] font-semibold">
            인증 의료기관
          </span>
        </div>

        <div className="flex flex-col gap-1 text-[12px] leading-relaxed text-[#43474d]">
          <p>
            <span className="font-medium text-[#191c1e]">대표원장:</span> [병원 확인 후 입력] &nbsp;|&nbsp;{' '}
            <span className="font-medium text-[#191c1e]">사업자등록번호:</span> [병원 확인 후 입력]
          </p>
          <p>
            <span className="font-medium text-[#191c1e]">주소:</span> {CLINIC_DATA.address}
          </p>
          <p>
            <span className="font-medium text-[#191c1e]">대표전화:</span> {CLINIC_DATA.phoneFormatted}
          </p>
        </div>

        <div className="h-px bg-[#c3c6ce]/40 my-0.5"></div>

        <p className="text-[11px] text-[#74777e] leading-relaxed">
          본 사이트의 모든 의료정보는 의료법 제56조를 준수하여 환자의 이해를 돕기 위해 작성되었습니다. 무단 복제 및 전재를 금합니다.
        </p>

        <div className="flex items-center justify-between text-[12px] text-[#74777e] pt-1">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => onOpenTerms('privacy')}
              className="underline hover:text-[#001d36] transition-colors"
            >
              개인정보처리방침
            </button>
            <button
              type="button"
              onClick={() => onOpenTerms('terms')}
              className="underline hover:text-[#001d36] transition-colors"
            >
              이용약관
            </button>
          </div>
          <span>© 성모정형외과의원</span>
        </div>
      </div>
    </footer>
  );
};
