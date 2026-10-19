import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface OperatingHoursModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OperatingHoursModal: React.FC<OperatingHoursModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#001d36]/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-[#e0e3e6] overflow-hidden z-10 animate-scaleUp">
        {/* Header */}
        <div className="p-4 bg-[#f7f9fc] border-b border-[#e0e3e6] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#075fae] text-[22px]">
              schedule
            </span>
            <h3 className="font-bold text-[16px] text-[#001d36]">
              진료시간 상세 안내
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#e6e8eb] hover:bg-[#e0e3e6] flex items-center justify-center text-[#191c1e] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-4 text-[#191c1e]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ffdcc3] text-[#6e3900] text-[12px] font-semibold">
            <span className="material-symbols-outlined text-[16px]">info</span>
            <span>병원 개원 일정 및 의료진 진료 계획에 따라 변동 가능</span>
          </div>

          <table className="w-full text-[13px] border-collapse">
            <tbody>
              <tr className="border-b border-[#eceef1]">
                <td className="py-2.5 font-bold text-[#001d36] w-28 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#075fae]"></span>
                  평일 (월~금)
                </td>
                <td className="py-2.5 text-[#191c1e] font-semibold">
                  {CLINIC_DATA.hours.weekday}
                </td>
              </tr>
              <tr className="border-b border-[#eceef1]">
                <td className="py-2.5 font-bold text-[#001d36] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#74777e]"></span>
                  점심시간
                </td>
                <td className="py-2.5 text-[#43474d]">
                  {CLINIC_DATA.hours.lunch}
                </td>
              </tr>
              <tr className="border-b border-[#eceef1]">
                <td className="py-2.5 font-bold text-[#001d36] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#075fae]"></span>
                  토요일 진료
                </td>
                <td className="py-2.5 text-[#191c1e] font-semibold">
                  {CLINIC_DATA.hours.saturday}
                </td>
              </tr>
              <tr>
                <td className="py-2.5 font-bold text-[#ba1a1a] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ba1a1a]"></span>
                  일·공휴일
                </td>
                <td className="py-2.5 text-[#ba1a1a] font-semibold">
                  {CLINIC_DATA.hours.holiday}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="p-3.5 rounded-xl bg-[#f2f4f7] border border-[#e0e3e6] text-[12px] text-[#43474d] leading-relaxed">
            <p className="font-semibold text-[#001d36] mb-1">
              ※ 접수 마감 및 당일 내원 안내
            </p>
            <p>
              초진 환자 및 물리치료, 방사선 검사가 필요한 경우 진료 마감 30분~1시간 전까지 내원하시는 것을 권장합니다.
            </p>
          </div>

          <a
            href={`tel:${CLINIC_DATA.phone}`}
            className="w-full h-12 rounded-lg bg-[#075fae] hover:bg-[#064e8e] text-white flex items-center justify-center gap-2 text-[14px] font-bold shadow-xs active:scale-[0.99] transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>진료시간 유선 확인 ({CLINIC_DATA.phoneFormatted})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
