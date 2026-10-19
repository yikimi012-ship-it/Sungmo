import React from 'react';
import { CLINIC_DATA } from '../data/clinicData';

interface TermsModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-[#001d36]/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#e0e3e6] overflow-hidden z-10 flex flex-col max-h-[80vh] animate-scaleUp">
        <div className="p-4 bg-[#f7f9fc] border-b border-[#e0e3e6] flex items-center justify-between">
          <h3 className="font-bold text-[16px] text-[#001d36]">
            {isPrivacy ? '개인정보처리방침' : '홈페이지 이용약관'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#e6e8eb] hover:bg-[#e0e3e6] flex items-center justify-center text-[#191c1e] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="p-5 overflow-y-auto text-[13px] text-[#43474d] leading-relaxed space-y-3">
          {isPrivacy ? (
            <>
              <p className="font-semibold text-[#001d36]">
                {CLINIC_DATA.name}(이하 &apos;의원&apos;)은(는) 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수합니다.
              </p>
              <div>
                <strong className="text-[#001d36] block mb-1">1. 수집하는 개인정보 항목</strong>
                <p>본 안내 웹페이지는 별도의 온라인 회원가입이나 온라인 진료예약 데이터베이스를 운영하지 않으며, 전화 상담(유선 문의) 시 환자의 자발적 제공 정보(성명, 연락처, 진료 희망 분야)에 한하여 최소한으로 수집합니다.</p>
              </div>
              <div>
                <strong className="text-[#001d36] block mb-1">2. 개인정보의 보유 및 이용기간</strong>
                <p>의료법 및 관련 법령에 명시된 진료기록부 보관 연한(기본 10년 등)을 준수하며, 목적 달성 시 즉시 파기합니다.</p>
              </div>
              <div>
                <strong className="text-[#001d36] block mb-1">3. 의료법 준수 고지</strong>
                <p>의료법 제56조 및 의료광고 기준을 준수하며, 허위 과장 광고를 지양하고 환자의 알 권리를 충실히 보장합니다.</p>
              </div>
            </>
          ) : (
            <>
              <p className="font-semibold text-[#001d36]">
                {CLINIC_DATA.name} 웹사이트 이용약관
              </p>
              <div>
                <strong className="text-[#001d36] block mb-1">제1조 (목적)</strong>
                <p>본 약관은 {CLINIC_DATA.name}가 제공하는 공식 안내 웹페이지의 이용 조건 및 절차, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
              </div>
              <div>
                <strong className="text-[#001d36] block mb-1">제2조 (의료 정보의 성격)</strong>
                <p>본 사이트에서 제공되는 진료 관련 안내는 환자의 이해를 돕기 위한 일반적 정보이며, 전문의의 개별 진료 및 처방을 대체할 수 없습니다. 정확한 진단과 치료 계획은 내원 후 의료진과의 직접 상담을 통해 확인하시기 바랍니다.</p>
              </div>
              <div>
                <strong className="text-[#001d36] block mb-1">제3조 (저작권의 귀속)</strong>
                <p>의원이 작성한 저작물에 대한 저작권 기타 지적재산권은 의원에 귀속됩니다.</p>
              </div>
            </>
          )}
        </div>

        <div className="p-3 bg-[#eceef1] border-t border-[#e0e3e6] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#075fae] text-white rounded-lg text-[13px] font-bold hover:bg-[#064e8e] transition-colors"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
