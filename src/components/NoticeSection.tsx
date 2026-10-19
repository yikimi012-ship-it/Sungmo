import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface NoticeSectionProps {
  onOpenHours: () => void;
}

export const NoticeSection: React.FC<NoticeSectionProps> = ({ onOpenHours }) => {
  return (
    <section id="notice" className="flex flex-col py-8 scroll-mt-24">
      <div className="flex flex-col mb-4">
        <div className="inline-flex items-center gap-1.5 text-[#075fae] text-[13px] font-semibold mb-1">
          <span className="material-symbols-outlined text-[16px]">notification_important</span>
          안내 사항
        </div>
        <h2 className="text-[20px] sm:text-[22px] text-[#001d36] font-bold tracking-tight">
          방문 전 확인하세요
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#43474d] mt-1">
          내원 전 필요한 핵심 행정 정보와 주의사항을 미리 안내해 드립니다.
        </p>
      </div>

      {/* 4 Info Tiles */}
      <div className="flex flex-col gap-3">
        {/* Tile 1: 진료시간 */}
        <div className="p-4 rounded-xl bg-[#f2f4f7] border border-[#e0e3e6] flex flex-col gap-1.5 hover:border-[#c3c6ce] transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#075fae] text-[20px]">
                schedule
              </span>
              <span className="text-[15px] font-bold text-[#001d36]">진료시간 안내</span>
            </div>
            <button
              onClick={onOpenHours}
              className="px-2 py-0.5 rounded bg-[#ffdcc3] text-[#6e3900] text-[12px] font-semibold hover:bg-[#ffcca3] transition-colors flex items-center gap-1"
            >
              <span>[병원 확인 후 입력]</span>
              <span className="material-symbols-outlined text-[12px]">visibility</span>
            </button>
          </div>
          <p className="text-[14px] text-[#191c1e] leading-relaxed">
            요일별 구체적인 진료시간 및 야간진료 여부는 변동될 수 있으므로, 방문 전 유선 전화로 미리 확인해 주시기 바랍니다.
          </p>
          <div className="mt-1 flex items-center gap-2 text-[12px] text-[#43474d]">
            <span className="font-semibold text-[#075fae]">기본 진료 안내:</span>
            <span>평일 09:00 ~ 18:30 (점심 13:00~14:00)</span>
          </div>
        </div>

        {/* Tile 2: 전화 문의 */}
        <div className="p-4 rounded-xl bg-[#f2f4f7] border border-[#e0e3e6] flex flex-col gap-1.5 hover:border-[#c3c6ce] transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#075fae] text-[20px]">
                call
              </span>
              <span className="text-[15px] font-bold text-[#001d36]">대표 전화 문의</span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-[#e0e3e6] text-[#075fae] text-[13px] font-bold tabular-nums">
              {CLINIC_DATA.phoneFormatted}
            </span>
          </div>
          <p className="text-[14px] text-[#191c1e] leading-relaxed">
            당일 접수 마감 시간, 검사 장비 가동 여부 및 실시간 진료 대기 상태를 원내 데스크에서 신속히 안내해 드립니다.
          </p>
          <a
            href={`tel:${CLINIC_DATA.phone}`}
            className="mt-1 self-start inline-flex items-center gap-1 text-[#075fae] hover:text-[#003e75] text-[13px] font-semibold underline underline-offset-2"
          >
            <span>즉시 전화 연결하기</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </a>
        </div>

        {/* Tile 3: 위치 및 주차 */}
        <div className="p-4 rounded-xl bg-[#f2f4f7] border border-[#e0e3e6] flex flex-col gap-1.5 hover:border-[#c3c6ce] transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#075fae] text-[20px]">
                directions_car
              </span>
              <span className="text-[15px] font-bold text-[#001d36]">위치 및 주차 안내</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#ffdcc3] text-[#6e3900] text-[12px] font-semibold">
              [병원 확인 후 입력]
            </span>
          </div>
          <p className="text-[14px] text-[#191c1e] leading-relaxed">
            <strong className="font-semibold text-[#001d36]">{CLINIC_DATA.address}</strong><br />
            원내 전용 주차장 위치 및 무료 주차 등록 가능 여부는 방문 전 병원 데스크로 문의해 주세요.
          </p>
        </div>

        {/* Tile 4: 진료 가능 항목 */}
        <div className="p-4 rounded-xl bg-[#f2f4f7] border border-[#e0e3e6] flex flex-col gap-1.5 hover:border-[#c3c6ce] transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#075fae] text-[20px]">
                clinical_notes
              </span>
              <span className="text-[15px] font-bold text-[#001d36]">진료 가능 항목</span>
            </div>
            <span className="px-2.5 py-0.5 rounded bg-[#eceef1] text-[#43474d] text-[12px] font-semibold">
              사전 문의 권장
            </span>
          </div>
          <p className="text-[14px] text-[#191c1e] leading-relaxed">
            방사선 촬영(X-ray), 초음파 검사, 주사 처방, 물리치료 등 구체적 검사 및 치료 가능 항목은 환자 증상과 의료진 일정에 따라 상이할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};
