import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (id: string) => void;
  onOpenHours: () => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onSelectSection,
  onOpenHours,
}) => {
  if (!isOpen) return null;

  const navItems = [
    { id: 'home', label: '홈 (Clinic Home)', icon: 'home', hash: '#' },
    { id: 'departments', label: '진료 분야 안내', icon: 'medical_services', hash: '#departments' },
    { id: 'notice', label: '방문 전 확인사항', icon: 'notification_important', hash: '#notice' },
    { id: 'tour', label: '원내 공간 둘러보기', icon: 'apartment', hash: '#tour' },
    { id: 'location', label: '오시는 길 & 주차 안내', icon: 'location_on', hash: '#location' },
    { id: 'faq', label: '자주 묻는 질문 (FAQ)', icon: 'quiz', hash: '#faq' },
  ];

  const handleItemClick = (hash: string, id: string) => {
    onSelectSection(id);
    onClose();

    setTimeout(() => {
      if (hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#001d36]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 animate-slideLeft">
        {/* Drawer Header */}
        <div className="p-4 bg-[#f7f9fc] border-b border-[#e0e3e6] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#075fae] text-[22px]">
              local_hospital
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-[15px] text-[#001d36]">
                {CLINIC_DATA.shortName}
              </span>
              <span className="text-[11px] text-[#43474d]">
                {CLINIC_DATA.departmentBadge}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#e6e8eb] hover:bg-[#e0e3e6] flex items-center justify-center text-[#191c1e] transition-colors"
            aria-label="닫기"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Operating status card */}
        <div className="p-4 border-b border-[#eceef1]">
          <div className="p-3 rounded-lg bg-[#f2f4f7] border border-[#e0e3e6] flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-bold text-[#001d36] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse"></span>
                진료 안내
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenHours();
                }}
                className="text-[11px] text-[#075fae] font-semibold underline"
              >
                상세보기
              </button>
            </div>
            <p className="text-[12px] text-[#43474d]">
              평일: 09:00 - 18:30 (점심 13:00-14:00)<br />
              토요일: 09:00 - 13:00 (일/공휴일 휴진)
            </p>
          </div>
        </div>

        {/* Nav List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.hash, item.id)}
              className="w-full flex items-center gap-3 px-3.5 py-3 rounded-lg text-left text-[14px] font-semibold text-[#191c1e] hover:bg-[#f2f4f7] hover:text-[#075fae] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px] text-[#075fae]">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Drawer Footer Call CTA */}
        <div className="p-4 bg-[#f7f9fc] border-t border-[#e0e3e6] flex flex-col gap-2">
          <a
            href={`tel:${CLINIC_DATA.phone}`}
            className="w-full h-12 rounded-lg bg-[#075fae] hover:bg-[#064e8e] text-white flex items-center justify-center gap-2 text-[14px] font-bold shadow-xs active:scale-[0.99] transition-all"
          >
            <span className="material-symbols-outlined text-[19px]">call</span>
            <span>전화 문의 ({CLINIC_DATA.phoneFormatted})</span>
          </a>
          <p className="text-[11px] text-center text-[#74777e]">
            {CLINIC_DATA.address}
          </p>
        </div>
      </div>
    </div>
  );
};
