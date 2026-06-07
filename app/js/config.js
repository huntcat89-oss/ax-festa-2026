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
  //  formId 를 채우면 작동. 필드는 HubSpot 폼의 "인터널네임"으로 맞춰야 함.
  //  개인정보/마케팅 동의는 코드에서 자동 'true'(YES) 로 전송, 회사인원은 비워서 전송.
  HUBSPOT: {
    portalId: "24076689",
    formId: "YOUR-FORM-ID",            // ← share 폼의 formId(GUID) 입력
    fields: {
      email:        "email",
      name:         "lastname",
      company:      "company",
      numemployees: "numemployees",    // 회사인원 (없어도 빈값 전송)
      privacy:      "inquiry_privacy",       // 개인정보 동의 (자동 true)
      marketing:    "marketing_agree_forms", // 마케팅 동의 (자동 true)
      ax_type:      ""                  // AX 유형 저장 필드가 있으면 인터널네임 입력
    }
  }
};
