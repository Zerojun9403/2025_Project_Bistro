// 카카오 지도
new daum.roughmap.Lander({
  timestamp: "1754873570012",
  key: "6sg545kii98",
  mapWidth: "720",
  mapHeight: "640",
}).render();

// ---- 예약 달력/저장 로직 ----
const STORAGE_KEY = "reservedDates";
let selectedDate = null;

// 저장 읽기/쓰기
function getReservedDates() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch (e) {
    return [];
  }
}
function setReservedDates(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}
function isReserved(dateStr) {
  return getReservedDates().includes(dateStr);
}
function saveReservation(dateStr) {
  const list = getReservedDates();
  if (!list.includes(dateStr)) {
    list.push(dateStr);
    setReservedDates(list);
  }
}
function removeReservation(dateStr) {
  const list = getReservedDates().filter((d) => d !== dateStr);
  setReservedDates(list);
}

// 버튼 상태 토글
function updateButtonsState(reserved) {
  $("#reserveBtn").prop("disabled", reserved); // 예약되어 있으면 예약 버튼 비활성화
  $("#cancelBtn").prop("disabled", !reserved); // 예약되어 있지 않으면 취소 버튼 비활성화
}

// 메시지/배경 업데이트
function setUIAvailable(dateText) {
  $("#reservationMessage")
    .text(dateText + " 예약 가능합니다.")
    .css("color", "green");
  $(".reservationMessage").css("background-color", "#e0ffd8"); // 연두
  updateButtonsState(false);
}
function setUIUnavailable(dateText) {
  $("#reservationMessage")
    .text(dateText + " 는 예약이 불가능합니다.")
    .css("color", "crimson");
  $(".reservationMessage").css("background-color", "#ffe4e9"); // 핑크
  updateButtonsState(true);
}

$(function () {
  // 달력
  $("#calendar").datepicker({
    dateFormat: "yy-mm-dd",
    beforeShowDay: function (date) {
      const ds = $.datepicker.formatDate("yy-mm-dd", date);
      return isReserved(ds)
        ? [true, "reserved-date", "예약 불가"]
        : [true, "", "예약 가능"];
    },
    onSelect: function (dateText) {
      selectedDate = dateText;
      isReserved(dateText)
        ? setUIUnavailable(dateText)
        : setUIAvailable(dateText);
    },
  });

  // 예약하기
  $("#reserveBtn").on("click", function () {
    if (!selectedDate) {
      alert("예약할 날짜를 먼저 선택하세요.");
      return;
    }
    if (isReserved(selectedDate)) {
      setUIUnavailable(selectedDate);
      alert("이미 예약된 날짜입니다. 다른 날짜를 선택해주세요.");
      return;
    }
    saveReservation(selectedDate);
    alert("예약되었습니다.");
    setUIUnavailable(selectedDate); // 예약 후 불가 상태로 전환
    $("#calendar").datepicker("refresh"); // 스타일 갱신
  });

  // 예약 취소
  $("#cancelBtn").on("click", function () {
    if (!selectedDate) {
      alert("취소할 날짜를 먼저 선택하세요.");
      return;
    }
    if (!isReserved(selectedDate)) {
      alert("해당 날짜는 예약되어 있지 않습니다.");
      setUIAvailable(selectedDate);
      return;
    }
    if (!confirm(selectedDate + " 예약을 취소하시겠습니까?")) return;

    removeReservation(selectedDate);
    alert("예약이 취소되었습니다.");
    setUIAvailable(selectedDate); // 취소 후 가능 상태로 전환
    $("#calendar").datepicker("refresh");
  });

  // 초기 버튼 상태(아무 날짜도 선택 전)
  updateButtonsState(false);
});

$(function () {
  $("#calendar").datepicker({
    dateFormat: "yy-mm-dd",
    showOtherMonths: true,
    selectOtherMonths: false,
    changeMonth: true,
    changeYear: true,
    firstDay: 0, // 일요일 시작(월요일이면 1)
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],

    beforeShowDay: function (date) {
      const ds = $.datepicker.formatDate("yy-mm-dd", date);
      return isReserved(ds)
        ? [true, "reserved-date", "예약 불가"]
        : [true, "", "예약 가능"];
    },
    onSelect: function (dateText) {
      selectedDate = dateText;
      if (isReserved(dateText)) {
        setUIUnavailable(dateText); // 배경 핑크 & 메시지
      } else {
        setUIAvailable(dateText); // 배경 연두 & 메시지
      }
    },
  });
});
