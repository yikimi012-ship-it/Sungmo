import React, { useState } from 'react';
import { CLINIC_DATA, DepartmentInfo } from '../data/clinicData';

export const DepartmentsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="departments" className="flex flex-col py-8 px-4 sm:px-6 bg-[#f2f4f7] -mx-4 sm:mx-0 sm:rounded-2xl scroll-mt-24">
      <div className="flex flex-col mb-4">
        <div className="inline-flex items-center gap-1.5 text-[#075fae] text-[13px] font-semibold mb-1">
          <span className="material-symbols-outlined text-[16px]">medical_services</span>
          진료 안내
        </div>
        <h2 className="text-[20px] sm:text-[22px] text-[#001d36] font-bold tracking-tight">
          진료 분야 안내
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#43474d] mt-1">
          증상과 진료 목적에 따라 필요한 진료 분야를 확인해 보세요.
        </p>
      </div>

      <div className="flex flex-col gap-3.5">
        {CLINIC_DATA.departments.map((dept: DepartmentInfo) => {
          const isExpanded = expandedId === dept.id;

          return (
            <div
              key={dept.id}
              className="p-4 sm:p-5 rounded-xl bg-white border border-[#e0e3e6] shadow-xs flex flex-col transition-all hover:border-[#6daafe]"
            >
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#eceef1] flex items-center justify-center text-[#075fae] shrink-0">
                    <span className="material-symbols-outlined text-[24px]">
                      {dept.id === 'orthopedics' ? 'orthopedics' : 'healing'}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[18px] text-[#001d36] font-bold leading-tight">
                      {dept.name}
                    </h3>
                    <p className="text-[12px] text-[#43474d] mt-0.5">{dept.subtitle}</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#e6e8eb] text-[#43474d] text-[12px] font-medium shrink-0">
                  진료과목
                </span>
              </div>

              <p className="text-[14px] text-[#191c1e] mb-3 leading-relaxed">
                {dept.description}
              </p>

              {/* Symptom Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {dept.symptoms.map((symptom, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#eceef1] text-[#191c1e] text-[12px] font-medium flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#075fae]"></span>
                    {symptom}
                  </span>
                ))}
              </div>

              {/* Expandable Details */}
              {isExpanded && (
                <div className="mb-4 p-3 bg-[#f7f9fc] rounded-lg border border-[#e0e3e6] text-[13px] text-[#43474d] animate-fadeIn">
                  <div className="font-semibold text-[#001d36] mb-1.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-[#075fae]">check_circle</span>
                    주요 진료 및 상담 대상 질환:
                  </div>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    {dept.details.map((detail, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-[#74777e] mt-2 pt-1 border-t border-[#e0e3e6]">
                    ※ 환자 개개인의 건강 상태 및 질환의 중증도에 따라 맞춤형 진료가 진행됩니다.
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${CLINIC_DATA.phone}`}
                  className="flex-1 h-11 rounded-lg bg-[#e6e8eb] hover:bg-[#e0e3e6] text-[#001d36] flex items-center justify-center gap-1.5 text-[14px] font-semibold active:bg-[#e0e3e6] transition-colors"
                >
                  <span className="material-symbols-outlined text-[17px] text-[#075fae]">
                    phone_in_talk
                  </span>
                  <span>진료 가능 항목 유선 문의</span>
                </a>
                <button
                  type="button"
                  onClick={() => toggleExpand(dept.id)}
                  aria-expanded={isExpanded}
                  className="px-3 h-11 rounded-lg border border-[#e0e3e6] hover:bg-[#eceef1] text-[#43474d] text-[12px] font-medium flex items-center gap-1 shrink-0 transition-colors"
                  title="세부 항목 펼치기"
                >
                  <span>{isExpanded ? '접기' : '상세보기'}</span>
                  <span
                    className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
