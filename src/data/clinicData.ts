export interface DepartmentInfo {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  description: string;
  symptoms: string[];
  details: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
}

export interface TourPhoto {
  id: string;
  title: string;
  titleEn: string;
  tag: string;
  caption: string;
  statusBadge: string;
  imageUrl: string;
  alt: string;
}

export const CLINIC_DATA = {
  name: '성모정형외과마취통증의학과의원',
  shortName: '성모정형외과의원',
  departmentBadge: '마취통증의학과 전문',
  address: '대전광역시 중구 동서대로 1388',
  addressDetail: '목동 인근 도로변 위치',
  phone: '042-223-3375',
  phoneFormatted: '042-223-3375',
  hours: {
    weekday: '09:00 ~ 18:30',
    lunch: '13:00 ~ 14:00 (오후 진료 14:00부터)',
    saturday: '09:00 ~ 13:00 (점심시간 없음)',
    holiday: '일요일 및 공휴일 휴진',
    notice: '병원 사정 및 의료진 일정에 따라 진료시간이 변동될 수 있으므로 내원 전 전화 확인을 권장합니다.',
  },
  departments: [
    {
      id: 'orthopedics',
      name: '정형외과',
      subtitle: '근골격계 질환 및 관절 관리',
      icon: 'orthopedics',
      description:
        '뼈, 관절, 근육 등 근골격계 증상과 관련된 진료 분야입니다. 보행이나 움직임 시 발생하는 불편함을 꼼꼼히 진단합니다.',
      symptoms: ['목·어깨 통증', '허리·골반', '무릎·관절', '근골격계 불편감'],
      details: [
        '퇴행성 관절염, 오십견, 회전근개 손상',
        '디스크(추간판 탈출증), 척추관 협착증',
        '인대 및 힘줄 염좌, 건초염, 테니스/골프 엘보',
        '족저근막염, 발목 염좌 및 보행 통증',
      ],
    },
    {
      id: 'pain-medicine',
      name: '마취통증의학과',
      subtitle: '신경 및 급·만성 통증 관리',
      icon: 'healing',
      description:
        '통증과 관련된 체계적인 평가 및 진료 분야입니다. 실제 진료 가능 항목 및 시술 여부는 병원에 전화로 확인해 주세요.',
      symptoms: ['신경 통증 관리', '만성 통증 상담', '비수술 통증 완화', '통증 유발 부위 진단'],
      details: [
        '원인을 알기 어려운 신경병증성 만성 통증',
        '척추 신경차단술 및 표적 주사요법 상담',
        '근막통증증후군, 좌골신경통, 방사통 완화',
        '환자 맞춤형 비수술적 통증 조절 계획',
      ],
    },
  ] as DepartmentInfo[],
  tourPhotos: [
    {
      id: 'exterior',
      title: '병원 외관',
      titleEn: 'Clinic Exterior',
      tag: '외관 안내',
      caption: '대전 중구 동서대로 1388 방면 진입로',
      statusBadge: '[병원 확인 후 실제 사진 교체 예정]',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuApSUUlG-LsvWO-9sL1gnjzGDZCJBAazSisgS5SnJ9oYycj31o_n-9NC9HK6SY8I7kwMyrsrEwfm4XEeUAqScdcEnAgIXivrr0__BEkfyBzTiXMFxeKv85RQXQcpbSKv3NcrSPb-UhSoQMVDwQ-5c9p56_qbEX-MUvZrq0axVWr7PRxn1xh09crsPHcqwp4VBx6N9EH6fyhwDO-37_8vVHbuorurW1lwiuRTtIfG7a-2ToU3ea3IqfP',
      alt: '성모정형외과마취통증의학과의원 외관 건물 사진',
    },
    {
      id: 'reception',
      title: '접수 및 안내 데스크',
      titleEn: 'Reception Area',
      tag: '원내 접수처',
      caption: '초진 접수 및 진료 대기 접수처',
      statusBadge: '[병원 확인 후 실제 사진 교체 예정]',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDwE3JT8nl_iOP6cvuGMQzV3VuQ_BE3MsvIIflVzW1i9BnOEOGpIYVcncQOuDwUz937XwVP7gc9_I_Hj9qxThAvrZqA1xqwiFi6XhR5i5eSHYcAbcs_HQ9Tr0kp0-_JwCLUQmaXRbQJsF28CgpbpfywSnuFEGOHBWkBpzk3UnawItqZDR8z4ORi3GFz5uAgA2wpeYe0RTrMtzcQW7pAjlXAwWxsMWjMp5yXgXHC_FlDLSel3tY8BHC1',
      alt: '성모정형외과마취통증의학과의원 안내 및 접수 데스크',
    },
    {
      id: 'waiting',
      title: '대기실 공간',
      titleEn: 'Waiting Area',
      tag: '환자 대기실',
      caption: '편안하고 쾌적한 환자 대기 환경',
      statusBadge: '[병원 확인 후 실제 사진 교체 예정]',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC16MlAW6EBGpA4QIQKUZybWTZnu4WkPKiGybtPVy9TzPm3OXW44KiT69JHqEdmOrCkf5kDVhbK1RsHFZkj2P2Of3gKCjv7ODhnTRt46OUAJT34Q4AOpl6K2-m_ZFt3fHgwv981oPY6VeD2-B3Le3-u6GuPlqUmo2mzApi6L7t3cxdsBchiybP27bF8NXZGKQwrnLTZvALNKgAIEUePYsUwj0H_NqW843_yNDvlZxzgh8tcCE7607XQ',
      alt: '성모정형외과마취통증의학과의원 환자 대기실 공간',
    },
  ] as TourPhoto[],
  faqs: [
    {
      id: 'faq-1',
      question: '방문 전 진료시간을 확인할 수 있나요?',
      answer:
        '진료시간과 휴진 여부는 변경될 수 있으므로 전화(042-223-3375)로 확인해 주세요. 공휴일 및 주말 진료 여부도 유선으로 상세히 안내해 드립니다.',
      highlight: '평일 09:00 - 18:30 (점심시간 13:00 - 14:00)',
    },
    {
      id: 'faq-2',
      question: '어떤 진료를 받을 수 있나요?',
      answer:
        '정형외과 및 마취통증의학과 관련 진료 분야를 안내하고 있습니다. 관절 및 척추 부위의 통증 상담이 가능하며, 구체적인 검사와 치료 가능 여부는 병원에 문의해 주세요.',
      highlight: 'X-ray, 초음파, 신경차단술, 물리치료 등',
    },
    {
      id: 'faq-3',
      question: '주차가 가능한가요?',
      answer:
        '주차 가능 여부와 이용 방법은 병원에 문의해 주세요. [병원 확인 후 입력] 건물 내 전용 주차구역 및 인근 공영주차장 연계 정보는 확정 시 업데이트됩니다.',
      highlight: '방문 전 데스크 문의 권장',
    },
    {
      id: 'faq-4',
      question: '처음 방문할 때 무엇을 준비해야 하나요?',
      answer:
        '국민건강보험법 개정에 따라 본인 확인을 위한 신분증(주민등록증, 운전면허증, 모바일 신분증 등)을 반드시 지참하셔야 합니다. 기존 타 병원 검사 결과(MRI, CT, X-ray CD) 또는 복용 중인 약 처방전이 있으시다면 가져오시면 진료에 큰 도움이 됩니다.',
      highlight: '신분증 필수 지참 (모바일 건강보험증 가능)',
    },
  ] as FaqItem[],
  transit: {
    subway: '대전 도시철도 1호선 오룡역 5번 출구 (도보 또는 환승 버스 이용)',
    bus: '목동주민센터, 목양마을아파트 앞 정류장 하차 (간선/지선 버스 노선 경유)',
    parking: '건물 내 주차공간 이용 가능 여부는 내원 전 유선 데스크 문의 필수',
  },
  heroImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDFRi3xeQMmZ22tlUcozp1eOOvVTseFiqhC4YcpmAy4dwweqDUNPWtoxKM2z2LkZt7Ik73YoztQEVGXVIYCxik7RmeS2W6Hpvt7DKEX5Vm6KVhAND54cMwIBN2Pdl0cNZpBETNwH5rh7o3foFjODX94hbpjxcmUIwmQZ9H-VZ0suFF_mUUTDTcxxLzz1UxPrhmFY8iZa8EAMZN1uuvuawFSc1_Ms1dvB0AylFv6DaDPc1Tqlr3TAC42',
  mapImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA7YvYadNah6_KOt8NDetNfQ2Mcf1gzIKEfANfn6gLmeTiG_RfYu2od6ob9sjvfB0ooSsfY1maOyZrW3J2BEA9MygC0nm_gCXtK68AaMeARrYsaD7ZxrJqGsvj99Bl207IPN2Ovycc7cZ_qf-FVSgxQ6kDpZ9cugm0dEpvwwymhHVrY8DB56TxXwYwiqi4Bc8gsBO2lmUlv9CE2TdcIdHqSmJAVn0MGnXznlEIQu9zyKh0YLcTNVY40',
  logoUrl:
    'https://lh3.googleusercontent.com/aida/AEtjO1V7oHW3RW17YOLzJh20NyJgkPJpTTWobmAI4-0irofGWudYyLtYop9KQ3IoPn2NjnA75kHSE8dGV0-xQyxcBgCo14sQMIbMrJ38PP3BPx2ZVbEsavlR-LFJvWhnfgoZghcW6wNKRoYkHbZOxPw7ehlJQN9MNJxvx710utbzbjfp_yBntY6Mm-D5D-pNCtmzpZNG6LlGK-M24fTXbGxXfNYpr5VFZE1Bel4MSO6TyFV4Nyjpu3bQnvWeP_8',
};
