// ============================================================
//  AX Festa 2026 — 환경설정
//  Supabase 프로젝트를 만든 뒤, 아래 두 값을 바꿔주세요.
//  (Supabase 대시보드 > Project Settings > API 에서 복사)
//  ⚠ anon key 는 공개되어도 되는 키입니다(브라우저용). RLS 로 보호됩니다.
//     service_role 키는 절대 여기 넣지 마세요!
// ============================================================
window.AX_CONFIG = {
  SUPABASE_URL: "https://mbmsedjxtfljkbeudwqu.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_CG30MZULISWyXaNg1GnRmA_4ZSjLdb7",

  // 폴링 주기(ms) — 현재 진행 문항/순위 갱신 간격
  POLL_MS: 1500,

  // ── HubSpot 폼 연동 (나의 AX 유형 제출 시 함께 전송) ──
  //  필드 인터널네임은 app/index.html 의 hubspotSubmit() 에 폼 기준으로 고정돼 있음.
  //  개인정보/마케팅 동의 자동 'true', 회사인원 빈값 전송.
  HUBSPOT: {
    portalId: "24076689",
    formId: "6dc356a0-3d63-4e72-ba33-040542712c27"
  }
};
