import React, { useState } from 'react';
import { CLINIC_DATA } from '../data/clinicData';

export const DirectionsSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'subway' | 'bus' | 'car'>('all');
  const [mapImgError, setMapImgError] = useState(false);

  const handleCopyAddress = () => {
    const textToCopy = CLINIC_DATA.address;
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => triggerCopied())
        .catch(() => fallbackCopy(textToCopy));
    } else {
      fallbackCopy(textToCopy);
    }
  };

  const fallbackCopy = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      triggerCopied();
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  const triggerCopied = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const encodedAddress = encodeURIComponent('대전 중구 동서대로 1388 성모정형외과의원');

  return (
    <section id="location" className="flex flex-col py-8 scroll-mt-24">
      <div className="flex flex-col mb-4">
        <div className="inline-flex items-center gap-1.5 text-[#075fae] text-[13px] font-semibold mb-1">
          <span className="material-symbols-outlined text-[16px]">pin_drop</span>
          위치 정보
        </div>
        <h2 className="text-[20px] sm:text-[22px] text-[#001d36] font-bold tracking-tight">
          오시는 길
        </h2>
        <p className="text-[14px] sm:text-[15px] text-[#43474d] mt-1">
          내원 전 대중교통 및 도로 위치를 확인해 보세요.
        </p>
      </div>

      {/* Clinic Summary Box */}
      <div className="p-4 sm:p-5 rounded-xl bg-[#f2f4f7] border border-[#e0e3e6] mb-3.5 flex flex-col gap-2.5 shadow-2xs">
        <div className="flex items-center justify-between">
          <span className="text-[17px] sm:text-[18px] text-[#001d36] font-bold">
            {CLINIC_DATA.name}
          </span>
        </div>

        <div className="flex items-start gap-2.5 text-[#191c1e] mt-0.5">
          <span className="material-symbols-outlined text-[#075fae] text-[20px] shrink-0 mt-0.5">
            location_on
          </span>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold text-[#001d36] leading-tight">
              {CLINIC_DATA.address}
            </span>
            <span className="text-[13px] text-[#43474d] mt-0.5">
              {CLINIC_DATA.addressDetail}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-[#191c1e]">
          <span className="material-symbols-outlined text-[#075fae] text-[20px] shrink-0">
            call
          </span>
          <span className="text-[15px] font-bold text-[#001d36] tabular-nums">
            {CLINIC_DATA.phoneFormatted}
          </span>
        </div>

        <div className="flex gap-2.5 mt-2">
          <a
            href={`tel:${CLINIC_DATA.phone}`}
            className="flex-1 h-11 rounded-lg bg-[#075fae] hover:bg-[#064e8e] text-white flex items-center justify-center gap-1.5 text-[14px] font-bold active:scale-[0.98] transition-all shadow-2xs"
          >
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span>전화 문의</span>
          </a>

          <button
            type="button"
            onClick={handleCopyAddress}
            className={`flex-1 h-11 rounded-lg flex items-center justify-center gap-1.5 text-[14px] font-semibold transition-all border ${
              copied
                ? 'bg-[#16a34a] text-white border-[#16a34a]'
                : 'bg-[#e6e8eb] hover:bg-[#e0e3e6] text-[#001d36] border-[#d8dadd]'
            }`}
          >
            <span className="material-symbols-outlined text-[18px] text-current">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? '복사 완료!' : '주소 복사'}</span>
          </button>
        </div>
      </div>

      {/* Map Placeholder & Route Check */}
      <div className="rounded-xl overflow-hidden bg-[#f2f4f7] border border-[#e0e3e6] shadow-xs flex flex-col mb-3.5">
        <div className="w-full h-52 sm:h-64 bg-cover bg-center relative overflow-hidden bg-[#eceef1]">
          {!mapImgError ? (
            <img
              src={CLINIC_DATA.mapImage}
              alt="성모정형외과마취통증의학과의원 위치 지도"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={() => setMapImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-[#eceef1] flex items-center justify-center text-[#43474d]">
              <span className="material-symbols-outlined text-[40px] text-[#075fae]">
                map
              </span>
            </div>
          )}

          {/* Centered Pin Indicator Card */}
          <div className="absolute inset-0 bg-[#001d36]/10 flex items-center justify-center p-3 pointer-events-none">
            <div className="p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-[#e0e3e6] flex items-center gap-2.5 max-w-xs animate-bounce-subtle">
              <span className="material-symbols-outlined text-[#075fae] text-[26px]">
                location_on
              </span>
              <div className="flex flex-col text-left">
                <span className="text-[13px] sm:text-[14px] font-bold text-[#001d36] leading-tight">
                  성모정형외과마취통증의학과
                </span>
                <span className="text-[11px] sm:text-[12px] text-[#43474d] mt-0.5">
                  대전 중구 동서대로 1388
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-[#eceef1] flex flex-col gap-1 border-t border-[#e0e3e6]">
          <p className="text-[12px] text-[#43474d] leading-relaxed">
            ※ 정확한 지도 핀 위치 및 대중교통 안내는 병원 개원 및 등록 정보 최종 확인 후 연동됩니다.
          </p>
        </div>
      </div>

      {/* Map App Links */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <a
          href={`https://map.naver.com/v5/search/${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 rounded-lg bg-white border border-[#e0e3e6] hover:border-[#03c75a] flex items-center justify-center gap-1.5 text-[12px] font-bold text-[#191c1e] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#03c75a]"></span>
          <span>네이버 지도</span>
        </a>

        <a
          href={`https://map.kakao.com/link/search/${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 rounded-lg bg-white border border-[#e0e3e6] hover:border-[#fee500] flex items-center justify-center gap-1.5 text-[12px] font-bold text-[#191c1e] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#fae100]"></span>
          <span>카카오맵</span>
        </a>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 rounded-lg bg-white border border-[#e0e3e6] hover:border-[#4285f4] flex items-center justify-center gap-1.5 text-[12px] font-bold text-[#191c1e] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#4285f4]"></span>
          <span>구글 지도</span>
        </a>
      </div>

      {/* Public Transit Details Filter Tabs */}
      <div className="p-4 rounded-xl bg-white border border-[#e0e3e6] shadow-2xs">
        <div className="flex items-center gap-1 p-1 bg-[#eceef1] rounded-lg mb-3">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-1.5 text-[12px] font-semibold rounded-md transition-colors ${
              activeTab === 'all'
                ? 'bg-white text-[#001d36] shadow-2xs'
                : 'text-[#43474d] hover:text-[#001d36]'
            }`}
          >
            전체 안내
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('subway')}
            className={`flex-1 py-1.5 text-[12px] font-semibold rounded-md transition-colors ${
              activeTab === 'subway'
                ? 'bg-white text-[#001d36] shadow-2xs'
                : 'text-[#43474d] hover:text-[#001d36]'
            }`}
          >
            지하철
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('bus')}
            className={`flex-1 py-1.5 text-[12px] font-semibold rounded-md transition-colors ${
              activeTab === 'bus'
                ? 'bg-white text-[#001d36] shadow-2xs'
                : 'text-[#43474d] hover:text-[#001d36]'
            }`}
          >
            시내버스
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('car')}
            className={`flex-1 py-1.5 text-[12px] font-semibold rounded-md transition-colors ${
              activeTab === 'car'
                ? 'bg-white text-[#001d36] shadow-2xs'
                : 'text-[#43474d] hover:text-[#001d36]'
            }`}
          >
            자가용/주차
          </button>
        </div>

        <div className="space-y-2 text-[13px] text-[#191c1e]">
          {(activeTab === 'all' || activeTab === 'subway') && (
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#f7f9fc]">
              <span className="material-symbols-outlined text-[#075fae] text-[18px] shrink-0 mt-0.5">
                subway
              </span>
              <div>
                <span className="font-bold text-[#001d36] mr-1.5">지하철:</span>
                <span className="text-[#43474d]">{CLINIC_DATA.transit.subway}</span>
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'bus') && (
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#f7f9fc]">
              <span className="material-symbols-outlined text-[#075fae] text-[18px] shrink-0 mt-0.5">
                directions_bus
              </span>
              <div>
                <span className="font-bold text-[#001d36] mr-1.5">시내버스:</span>
                <span className="text-[#43474d]">{CLINIC_DATA.transit.bus}</span>
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'car') && (
            <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#f7f9fc]">
              <span className="material-symbols-outlined text-[#075fae] text-[18px] shrink-0 mt-0.5">
                local_parking
              </span>
              <div>
                <span className="font-bold text-[#001d36] mr-1.5">주차 안내:</span>
                <span className="text-[#43474d]">{CLINIC_DATA.transit.parking}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
