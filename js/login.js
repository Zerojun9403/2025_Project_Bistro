// ===== 유틸: 세션 키 상수 =====
const SESSION_KEYS = {
  REGISTERED_USER: "registeredUser", // 최근 가입 사용자 (단일)
  USER_DB: "userDB", // 선택: 여러 명 저장 (배열)
  CURRENT_USER: "currentUser", // 현재 로그인 사용자 아이디
};

// ===== 도우미: 세션 저장/로드 =====
const saveJSON = (key, value) =>
  sessionStorage.setItem(key, JSON.stringify(value));
const loadJSON = (key, fallback = null) => {
  try {
    return JSON.parse(sessionStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

// ===== 기본 내장 계정 =====
const BUILT_IN = [
  { id: "admin", pw: "1234", name: "관리자" },
  { id: "user", pw: "1234", name: "사용자" },
];

// ===== 초기 렌더 =====
$(function () {
  const current = sessionStorage.getItem(SESSION_KEYS.CURRENT_USER);
  if (current) {
    $("#logoutBtn").show();
    $("#navLogin").text("내 계정");
  }

  // 네비 회원가입 버튼도 모달 열기
  $("#openSignup, #navSignupBtn").on("click", openSignupModal);

  // 비밀번호 보기 토글
  $("#togglePw").on("click", function () {
    const $pw = $("#password");
    const type = $pw.attr("type") === "password" ? "text" : "password";
    $pw.attr("type", type);
    $(this).text(type === "password" ? "보기" : "숨기기");
  });

  // 로그인 처리
  $("#loginForm").on("submit", function (e) {
    e.preventDefault();
    const id = $("#username").val().trim();
    const pw = $("#password").val();

    if (!id || !pw) {
      return showLoginMsg("아이디와 비밀번호를 입력하세요.", false);
    }

    // 1) 세션에 저장된 가입자 조회
    const regUser = loadJSON(SESSION_KEYS.REGISTERED_USER);
    const db = loadJSON(SESSION_KEYS.USER_DB, []);

    const matchSession =
      regUser && regUser.id === id && regUser.pw === pw ? regUser : null;
    const matchDB = db.find((u) => u.id === id && u.pw === pw) || null;
    const matchBuiltIn =
      BUILT_IN.find((u) => u.id === id && u.pw === pw) || null;

    const found = matchSession || matchDB || matchBuiltIn;
    if (found) {
      sessionStorage.setItem(SESSION_KEYS.CURRENT_USER, found.id);
      showLoginMsg(
        `${found.name || found.id}님 환영합니다! 메인으로 이동합니다...`,
        true
      );
      setTimeout(() => {
        location.href = "/index.html";
      }, 600);
    } else {
      showLoginMsg("아이디 또는 비밀번호가 올바르지 않습니다.", false);
    }
  });

  // 로그아웃 처리
  $("#logoutBtn").on("click", function () {
    sessionStorage.removeItem(SESSION_KEYS.CURRENT_USER);
    showLoginMsg("로그아웃 되었습니다.", true);
    $("#logoutBtn").hide();
    $("#navLogin").text("로그인");
  });

  // 모달 닫기 핸들러 (배경/버튼)
  $(document).on("click", "[data-close]", closeSignupModal);
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") closeSignupModal();
  });

  // 회원가입 Submit
  $("#signupForm").on("submit", function (e) {
    e.preventDefault();
    const name = $("#suName").val().trim();
    const id = $("#suId").val().trim();
    const pw = $("#suPw").val();
    const email = $("#suEmail").val().trim();

    if (!name || !id || !pw) {
      return showSignupMsg("필수 항목을 입력해주세요.", false);
    }
    if (id.length < 4)
      return showSignupMsg("아이디는 4자 이상이어야 합니다.", false);
    if (pw.length < 4)
      return showSignupMsg("비밀번호는 4자 이상이어야 합니다.", false);

    // 중복 체크 (세션 DB + 기본 계정)
    const db = loadJSON(SESSION_KEYS.USER_DB, []);
    const exists =
      db.some((u) => u.id === id) || BUILT_IN.some((u) => u.id === id);
    if (exists) return showSignupMsg("이미 존재하는 아이디입니다.", false);

    const newUser = { id, pw, name, email };
    // 최근 가입자 저장 (단일)
    saveJSON(SESSION_KEYS.REGISTERED_USER, newUser);
    // 사용자 DB에도 추가 (멀티)
    db.push(newUser);
    saveJSON(SESSION_KEYS.USER_DB, db);

    showSignupMsg(
      "가입이 완료되었습니다! 이제 해당 계정으로 로그인하세요.",
      true
    );
    setTimeout(() => {
      closeSignupModal();
      $("#username").val(id);
      $("#password").val(pw).focus();
    }, 600);
  });
});

function showLoginMsg(msg, ok) {
  $("#loginResult").html(`<span class="${ok ? "ok" : "err"}">${msg}</span>`);
}
function showSignupMsg(msg, ok) {
  $("#signupResult").html(`<span class="${ok ? "ok" : "err"}">${msg}</span>`);
}

// 모달 열고 닫기
function openSignupModal() {
  $("#signupModal").addClass("is-open").attr("aria-hidden", "false");
  $("body").addClass("modal-open");
  setTimeout(() => $("#suName").trigger("focus"), 0);
}
function closeSignupModal() {
  $("#signupModal").removeClass("is-open").attr("aria-hidden", "true");
  $("body").removeClass("modal-open");
  $("#signupForm")[0].reset();
  $("#signupResult").empty();
}
