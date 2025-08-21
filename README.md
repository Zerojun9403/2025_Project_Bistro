# 🍽️ Le Bisto NomaVia 레스토랑 웹사이트

한국의 이탈리안 캐주얼 비스트로 "Le Bisto NomaVia"의 공식 웹사이트입니다. 반응형 디자인과 실시간 예약 시스템을 구현하여 고급스러운 사용자 경험을 제공합니다.

## 라이브 데모

<div align="center">

### **[배포된 웹사이트 보기](https://2025-project-bistro.vercel.app/)**

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://2025-project-bistro.vercel.app/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://2025-project-bistro.vercel.app/)

**별도 설치 없이 바로 체험 가능**

</div>

## 프로젝트 개요

이 프로젝트는 실제 운영 중인 이탈리안 레스토랑을 위한 풀스택 웹사이트입니다. 메뉴 관리, 예약 시스템, 회원 관리, 배달 서비스 연동 등 실제 비즈니스에 필요한 모든 기능을 구현했습니다.

### 주요 특징

- **실시간 예약 시스템**: jQuery UI 달력을 활용한 즉석 예약
- **동적 메뉴 시스템**: JavaScript 기반 카테고리별 메뉴 렌더링
- **회원 관리**: 세션 스토리지 기반 로그인/회원가입
- **배달 서비스 연동**: 배달의민족, 쿠팡이츠 링크 연동
- **반응형 디자인**: 모바일 우선 설계

## 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업, 접근성 고려
- **CSS3**: Flexbox, Grid, CSS Variables, 미디어 쿼리
- **JavaScript (ES6+)**: 모듈 패턴, 이벤트 위임, DOM 조작
- **jQuery 3.7.1**: AJAX, 애니메이션, UI 컴포넌트

### UI/UX Libraries
- **jQuery UI**: 달력 위젯, 인터랙티브 요소
- **Google Fonts**: Noto Sans KR 웹폰트
- **YouTube API**: 배경 영상 임베드
- **Daum Roughmap**: 카카오 지도 연동

### 데이터 & 스토리지
- **SessionStorage**: 사용자 세션 관리
- **LocalStorage**: 예약 데이터 영구 저장
- **JSON**: 메뉴 데이터 구조화

## 프로젝트 구조

```
le-bisto-nomavia/
│
├── 📄 index.html                 # 메인 홈페이지
├── 📄 vercel.json               # Vercel 배포 설정
│
├── 🎨 css/                       # 스타일시트
│   ├── index.css                # 글로벌 스타일 & 홈페이지
│   ├── company.css              # 브랜드 소개 페이지
│   └── store.css                # 매장/메뉴/예약 통합 스타일
│
├── 🖼️ image/                     # 이미지 리소스
│   ├── logo_le.png              # 브랜드 로고
│   ├── logo_w.png               # 푸터용 화이트 로고
│   ├── icon.png                 # 파비콘
│   ├── 갈릭립아이.jpg             # 메뉴 이미지들
│   ├── 로제투움바파스타.png        # ...
│   └── [60+ 메뉴 이미지]         # 카테고리별 음식 사진
│
├── ⚙️ js/                        # JavaScript 파일
│   ├── index.js                 # 홈페이지 슬라이더 & 네비게이션
│   ├── login.js                 # 로그인/회원가입 시스템
│   ├── store.js                 # 예약 시스템 & 카카오 지도
│   ├── menu_Steak.js            # 스테이크 메뉴 렌더링
│   ├── menu-pasta_pizza.js      # 파스타&피자 메뉴
│   ├── menu-salad.js            # 샐러드 메뉴
│   ├── menu-dessert.js          # 디저트 메뉴
│   ├── deliver.js               # 배달 구역 토글
│   ├── event.js                 # 이벤트 모달
│   └── company.js               # 브랜드 페이지 (빈 파일)
│
└── 📃 html/                      # 서브 페이지
    ├── company.html             # 브랜드 스토리
    ├── menu_Steak.html          # 스테이크 메뉴
    ├── menu-pasta_pizza.html    # 파스타&피자 메뉴
    ├── menu-salad.html          # 샐러드 메뉴
    ├── menu-dessert.html        # 디저트 메뉴
    ├── store.html               # 매장 정보 & 예약
    ├── event.html               # 이벤트 & 프로모션
    ├── deliver.html             # 배달 서비스
    ├── voc.html                 # 고객의 소리
    ├── hr.html                  # 채용 정보
    └── login.html               # 로그인/회원가입
```

## 실행 방법

### 온라인에서 바로 체험

**가장 쉬운 방법** - 별도 설치 없이 바로 사용 가능합니다.

👉 **[https://2025-project-bistro.vercel.app/](https://2025-project-bistro.vercel.app/)**

### 로컬 환경에서 실행

#### 요구 사항
- 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- 로컬 웹 서버 (Live Server 권장)

#### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/Zerojun9403/2025_Project_Bistro.git
cd 2025_Project_Bistro
```

2. **VS Code Live Server 실행**
- VS Code에서 프로젝트 열기
- Live Server 확장 프로그램 설치
- `index.html` 우클릭 → "Open with Live Server"

3. **브라우저에서 접속**
```
http://localhost:5500
```

## 핵심 기능 구현

### 1. 실시간 예약 시스템 (store.js)

```javascript
// 예약 가능 날짜 실시간 체크
function isReserved(dateStr) {
  return getReservedDates().includes(dateStr);
}

// 달력 커스터마이징
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
    isReserved(dateText) ? setUIUnavailable(dateText) : setUIAvailable(dateText);
  }
});
```

### 2. 동적 메뉴 렌더링 시스템

```javascript
// 메뉴 데이터 배열 → DOM 자동 생성
const steakList = [
  { name: "갈릭립아이 스테이크", price: 30000 },
  { name: "달링포인트 스테이크", price: 32000 },
  // ...
];

// 이미지 자동 매핑
const imageMap = {
  "갈릭립아이 스테이크": "../image/갈릭립아이.jpg",
  "달링포인트 스테이크": "../image/달링포인트.jpeg",
  // ...
};

// HTML 카드 동적 생성
$grid.innerHTML = steakList.map((item) => {
  const img = imageMap[item.name] || "../image/placeholder.jpg";
  return `
    <article class="menu-card">
      <figure class="menu-card__thumb">
        <img src="${img}" alt="${item.name}" loading="lazy" />
      </figure>
      <div class="menu-card__body">
        <h3 class="menu-card__title">${item.name}</h3>
        <div class="menu-card__price">₩${toKRW(item.price)}</div>
      </div>
    </article>
  `;
}).join("");
```

### 3. 회원 관리 시스템 (login.js)

```javascript
// 다중 사용자 데이터베이스 시뮬레이션
const SESSION_KEYS = {
  REGISTERED_USER: "registeredUser",
  USER_DB: "userDB", 
  CURRENT_USER: "currentUser"
};

// 내장 테스트 계정
const BUILT_IN = [
  { id: "admin", pw: "1234", name: "관리자" },
  { id: "user", pw: "1234", name: "사용자" }
];

// 로그인 검증 로직
const found = matchSession || matchDB || matchBuiltIn;
if (found) {
  sessionStorage.setItem(SESSION_KEYS.CURRENT_USER, found.id);
  showLoginMsg(`${found.name}님 환영합니다!`, true);
}
```

### 4. 반응형 슬라이더 시스템

```javascript
// 화면 크기별 슬라이드 개수 조정
function getCardsPerView() {
  return window.innerWidth <= 768 ? 1 : 2;
}

// 윈도우 리사이즈 시 자동 재조정
window.addEventListener("resize", () => {
  goBest(bestCurrentIndex);
});

// 자동 슬라이드 (3초 간격)
let bestTimer = setInterval(() => {
  goBest(bestCurrentIndex + 1);
}, 3000);
```

### 5. 햄버거 메뉴 & 모바일 네비게이션

```css
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    font-size: 28px;
    cursor: pointer;
  }

  .menu-wrapper {
    width: 100%;
    display: none;
    flex-direction: column;
    background: #ddd;
  }

  .menu-wrapper.active {
    display: flex;
  }
}
```
1. **성능 최적화**
   - 이미지 Lazy Loading
   - CSS/JS 파일 분할
   - 효율적인 DOM 조작

2. **확장 가능한 아키텍처**
   - 모듈화된 JavaScript
   - 재사용 가능한 CSS 컴포넌트
   - 데이터 중심 메뉴 시스템

3. **외부 서비스 연동**
   - 카카오 지도 API (Daum Roughmap)
   - YouTube 임베드 (배경 영상)
   - 배달 앱 연동

## 테스트 계정

### 로그인 테스트용 계정
```
관리자 계정: admin / 1234
일반 사용자: user / 1234
```

### 예약 시스템 테스트
1. [매장 정보 페이지](https://2025-project-bistro.vercel.app/html/store.html) 접속
2. 달력에서 원하는 날짜 선택
3. "예약하기" 버튼 클릭
4. 예약 완료 후 해당 날짜가 빨간색으로 표시됨

## 브라우저 호환성

### 지원 브라우저
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### 핵심 기능 호환성
- ✅ CSS Grid & Flexbox
- ✅ ES6+ JavaScript (화살표 함수, 템플릿 리터럴)
- ✅ jQuery 3.7.1
- ✅ LocalStorage/SessionStorage
- ✅ CSS Custom Properties

**🔗 모바일에서 체험하기: [https://2025-project-bistro.vercel.app/](https://2025-project-bistro.vercel.app/)**

---

<div align="center">

**Le Bisto NomaVia에서 특별한 식사 경험을 만나보세요.**

[웹사이트 방문하기](https://2025-project-bistro.vercel.app/) 

</div>
