import React, { useState } from 'react';
import { CLINIC_DATA, TourPhoto } from '../data/clinicData';

interface ClinicTourSectionProps {
  onImageClick?: (url: string, title: string) => void;
}

export const ClinicTourSection: React.FC<ClinicTourSectionProps> = ({ onImageClick }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="tour" className="flex flex-col py-8 px-4 sm:px-6 bg-[#f2f4f7] -mx-4 sm:mx-0 sm:rounded-2xl scroll-mt-24">
      <div className="flex flex-col mb-4">
        <div className="inline-flex items-center gap-1.5 text-[#075fae] text-[13px] font-semibold mb-1">
          <span className="material-symbols-outlined text-[16px]">apartment</span>
          공간 둘러보기
        </div>
        <h2 className="text-[20px] sm:text-[22px] text-[#001d36] font-bold tracking-tight">
          가까운 곳에서 확인하는 진료 정보
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#43474d] mt-1 leading-relaxed">
          몸의 불편함으로 진료가 필요할 때, 의료기관의 진료 분야와 방문 정보를 먼저 확인하는 것이 도움이 됩니다. 성모정형외과마취통증의학과의원의 위치와 진료 관련 정보를 확인하고 방문 계획을 세워 보세요.
        </p>
      </div>

      {/* 3-Slot Photo Preview List */}
      <div className="flex flex-col gap-3.5">
        {CLINIC_DATA.tourPhotos.map((photo: TourPhoto) => {
          const isError = failedImages[photo.id];

          return (
            <div
              key={photo.id}
              className="rounded-xl overflow-hidden bg-white border border-[#e0e3e6] shadow-xs hover:shadow-sm transition-all group"
            >
              <div
                className="w-full h-44 sm:h-52 bg-cover bg-center relative cursor-pointer overflow-hidden bg-[#eceef1]"
                onClick={() => onImageClick?.(photo.imageUrl, `${photo.title} (${photo.titleEn})`)}
              >
                {!isError ? (
                  <img
                    src={photo.imageUrl}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(photo.id)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-[#eceef1] text-[#43474d]">
                    <span className="material-symbols-outlined text-[36px] text-[#075fae] mb-1">
                      image
                    </span>
                    <span className="text-[13px] font-medium">{photo.title} 예시 공간</span>
                  </div>
                )}

                {/* Tag pill on top left */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#001d36]/80 backdrop-blur-sm text-white text-[12px] font-semibold flex items-center gap-1 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6daafe]"></span>
                  {photo.tag}
                </div>

                {/* Magnify hint on top right */}
                <div className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-[#001d36]/60 backdrop-blur-sm text-white flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-[18px]">zoom_in</span>
                </div>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white">
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[15px] font-bold text-[#001d36]">
                      {photo.title}
                    </span>
                    <span className="text-[13px] text-[#74777e] font-normal">
                      ({photo.titleEn})
                    </span>
                  </div>
                  <span className="text-[13px] text-[#43474d] mt-0.5">
                    {photo.caption}
                  </span>
                </div>

                <span className="self-start sm:self-center px-2 py-0.5 rounded bg-[#ffdcc3] text-[#6e3900] text-[11px] font-medium">
                  {photo.statusBadge}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ethical Disclaimer */}
      <div className="mt-3.5 p-3 rounded-lg bg-[#eceef1] border border-[#e0e3e6] flex items-start gap-2.5">
        <span className="material-symbols-outlined text-[#74777e] text-[18px] shrink-0 mt-0.5">
          announcement
        </span>
        <p className="text-[12px] text-[#43474d] leading-relaxed">
          ※ 본 사진은 이해를 돕기 위한 예시 이미지이며, 개원/진료 전 병원 실사 사진으로 교체됩니다.
        </p>
      </div>
    </section>
  );
};
