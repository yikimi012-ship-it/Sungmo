import React, { useState } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface HeroSectionProps {
  onImageClick?: (url: string, title: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onImageClick }) => {
  const [logoError, setLogoError] = useState(false);
  const [heroImgError, setHeroImgError] = useState(false);

  return (
    <section className="flex flex-col pt-3 pb-8 text-[#191c1e]">
      {/* Clinic Brand Header Pill */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <div className="w-10 h-10 rounded-lg bg-[#f2f4f7] border border-[#e0e3e6] flex items-center justify-center p-1.5 shadow-2xs">
          {!logoError ? (
            <img
              src={CLINIC_DATA.logoUrl}
              alt="성모정형외과마취통증의학과의원 로고"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="material-symbols-outlined text-[#075fae] text-[22px]">
              healing
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <span className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-[#eceef1] text-[#075fae] text-[12px] font-semibold">
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            대전 중구 목동
          </span>
        </div>
      </div>

      {/* Main Headline & Copy */}
      <h1 className="text-[24px] sm:text-[28px] text-[#001d36] font-bold mb-2.5 leading-[1.38] tracking-tight">
        통증으로 불편한 일상,<br />
        <span className="text-[#075fae]">진료 정보</span>부터 편안하게 확인하세요
      </h1>

      <p className="text-[15px] sm:text-[16px] text-[#43474d] mb-6 leading-relaxed">
        {CLINIC_DATA.name}의 진료 분야와 방문 정보를 안내합니다. 진료 가능 항목과 운영시간은 전화로 확인해 주세요.
      </p>

      {/* Hero Quick Action CTAs */}
      <div className="flex flex-col gap-2.5 mb-7">
        <a
          href={`tel:${CLINIC_DATA.phone}`}
          className="w-full h-13 min-h-[52px] rounded-lg bg-[#075fae] hover:bg-[#064e8e] text-white flex items-center justify-center gap-2 text-[16px] font-bold shadow-xs active:scale-[0.99] transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">call</span>
          <span>전화로 진료 문의 ({CLINIC_DATA.phoneFormatted})</span>
        </a>

        <a
          href="#location"
          className="w-full h-12 rounded-lg bg-[#e6e8eb] hover:bg-[#e0e3e6] text-[#001d36] flex items-center justify-center gap-2 text-[14px] font-bold active:scale-[0.99] transition-all"
        >
          <span className="material-symbols-outlined text-[19px] text-[#075fae]">explore</span>
          <span>위치 및 오시는 길 확인하기</span>
        </a>
      </div>

      {/* Hero Image Card */}
      <div className="relative w-full rounded-xl overflow-hidden bg-[#f2f4f7] border border-[#e0e3e6] shadow-sm">
        <div
          className="relative w-full h-56 sm:h-64 bg-cover bg-center cursor-pointer group"
          onClick={() => onImageClick?.(CLINIC_DATA.heroImage, '성모정형외과마취통증의학과 원내 안내')}
        >
          {!heroImgError ? (
            <img
              src={CLINIC_DATA.heroImage}
              alt="성모정형외과마취통증의학과 로비 및 진료 환경 안내"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
              onError={() => setHeroImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#17324d] to-[#075fae] flex items-center justify-center text-white p-6 text-center">
              <div>
                <span className="material-symbols-outlined text-[48px] text-[#d1e4ff] mb-2">local_hospital</span>
                <p className="font-bold text-lg">성모정형외과마취통증의학과의원</p>
                <p className="text-xs text-[#d1e4ff] mt-1">정확한 진료 정보와 편안한 내원 환경을 제공합니다</p>
              </div>
            </div>
          )}

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001d36]/85 via-transparent to-transparent flex flex-col justify-end p-3.5 text-white pointer-events-none">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white border border-white/20">
                <span className="material-symbols-outlined text-[14px] text-[#d1e4ff]">verified</span>
                정확한 진료 정보 · 편리한 방문 안내
              </span>
              <span className="material-symbols-outlined text-[18px] text-white/80">
                zoom_in
              </span>
            </div>
          </div>
        </div>

        <div className="px-3.5 py-2.5 bg-[#eceef1] flex items-center justify-between">
          <span className="text-[12px] text-[#43474d] flex items-center gap-1">
            <span className="material-symbols-outlined text-[15px] text-[#74777e]">info</span>
            ※ 병원 제공 실제 사진 준비 중 (임시 이미지 예시)
          </span>
          <span className="text-[12px] text-[#075fae] font-semibold">안내용</span>
        </div>
      </div>
    </section>
  );
};
