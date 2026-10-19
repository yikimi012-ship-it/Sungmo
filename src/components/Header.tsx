import React, { useState } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenHours: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu, onOpenHours }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#f7f9fc]/95 backdrop-blur-md border-b border-[#e6e8eb] shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
        {/* Brand Zone */}
        <a href="#" className="flex items-center gap-2.5 text-left group">
          <div className="w-9 h-9 rounded-lg bg-white border border-[#e0e3e6] flex items-center justify-center p-1 shrink-0 shadow-xs">
            {!imgError ? (
              <img
                src={CLINIC_DATA.logoUrl}
                alt="성모정형외과마취통증의학과의원 로고"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="material-symbols-outlined text-[#075fae] text-[20px]">
                local_hospital
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-[15px] sm:text-[16px] text-[#001d36] tracking-tight leading-tight truncate max-w-[190px] sm:max-w-none">
              {CLINIC_DATA.shortName}
            </span>
            <span className="text-[11px] sm:text-[12px] text-[#43474d] font-medium leading-none mt-0.5">
              {CLINIC_DATA.departmentBadge}
            </span>
          </div>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${CLINIC_DATA.phone}`}
            aria-label="전화 연결"
            className="w-10 h-10 rounded-full bg-[#eceef1] hover:bg-[#e0e3e6] flex items-center justify-center text-[#075fae] active:scale-95 transition-all shadow-2xs"
            title="전화 문의 (042-223-3375)"
          >
            <span className="material-symbols-outlined text-[20px]">call</span>
          </a>
          <button
            onClick={onOpenMenu}
            aria-label="메뉴 열기"
            className="w-10 h-10 rounded-full bg-[#eceef1] hover:bg-[#e0e3e6] flex items-center justify-center text-[#191c1e] active:scale-95 transition-all shadow-2xs"
            title="전체 메뉴"
          >
            <span className="material-symbols-outlined text-[22px]">menu</span>
          </button>
        </div>
      </div>

      {/* Sub-Header Clinic Home Bar with Status */}
      <div className="max-w-2xl mx-auto px-4 pb-2.5 pt-0.5 flex items-center justify-between text-[#43474d]">
        <span className="text-[18px] sm:text-[20px] font-bold text-[#001d36] tracking-tight">
          Clinic Home
        </span>
        <button
          onClick={onOpenHours}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#eceef1] hover:bg-[#e0e3e6] text-[12px] font-semibold text-[#075fae] transition-colors"
          title="진료 시간표 자세히 보기"
        >
          <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse"></span>
          <span>진료안내 09:00 - 18:30</span>
          <span className="material-symbols-outlined text-[14px]">info</span>
        </button>
      </div>
    </header>
  );
};
