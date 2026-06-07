// ============================================================
//  Supabase 클라이언트 초기화
//  HTML 에서 아래 순서로 로드하세요:
//   1) <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//   2) <script src="js/config.js"></script>
//   3) <script src="js/supabase.js"></script>
// ============================================================
(function () {
  if (!window.AX_CONFIG || window.AX_CONFIG.SUPABASE_URL.includes("YOUR-PROJECT")) {
    console.warn("[AX] config.js 의 SUPABASE_URL / SUPABASE_ANON_KEY 를 먼저 채워주세요.");
  }
  const { createClient } = window.supabase;
  // 전역 db 클라이언트
  window.db = createClient(window.AX_CONFIG.SUPABASE_URL, window.AX_CONFIG.SUPABASE_ANON_KEY);
})();
