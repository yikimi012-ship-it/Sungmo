import React from 'react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  imageUrl: string | null;
  title: string | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  onClose,
}) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#001d36]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col animate-scaleUp">
        <div className="p-3.5 bg-[#f7f9fc] border-b border-[#e0e3e6] flex items-center justify-between">
          <span className="font-bold text-[15px] text-[#001d36] truncate">
            {title || '원내 시설 사진'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#e6e8eb] hover:bg-[#e0e3e6] flex items-center justify-center text-[#191c1e] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="relative w-full max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={imageUrl}
            alt={title || '원내 시설 이미지'}
            className="w-full h-auto max-h-[70vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-3 bg-[#eceef1] text-[12px] text-[#43474d] flex items-center justify-between">
          <span>※ 본 사진은 이해를 돕기 위한 예시 이미지입니다.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 bg-white hover:bg-[#f7f9fc] rounded text-[12px] font-semibold text-[#001d36] border border-[#e0e3e6]"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
