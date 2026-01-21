# Restaurant Landing Pages - Next.js

5개의 캘거리 식당을 위한 완전히 다른 디자인의 Next.js 랜딩페이지 모음입니다.

## 🚀 기술 스택

- **Next.js 15** - React 프레임워크 (App Router)
- **React 19** - 최신 React 버전
- **TypeScript** - 타입 안정성
- **Tailwind CSS 4** - 유틸리티 기반 CSS 프레임워크
- **Framer Motion 12** - 애니메이션 라이브러리

## 🎨 각 식당별 고유 디자인

### 1. **Penny Crown** - 클래식 타번 스타일
- **디자인**: 사이드바 네비게이션, 다크 테마, 골드 악센트
- **특징**: 
  - 고정 사이드바 메뉴
  - 패럴랙스 효과
  - 클래식한 골드/블랙 컬러
  - 부드러운 애니메이션

### 2. **Brioche by Avitus** - 프랑스 카드 레이아웃
- **디자인**: 카드 기반 그리드, 우아한 프랑스 스타일
- **특징**:
  - 화이트/베이지/골드 컬러
  - 카드 레이아웃
  - 우아한 세리프 폰트
  - 호버 시 카드 애니메이션

### 3. **Chefs & Farmers** - 모던 그리드 레이아웃
- **디자인**: 매거진 스타일, 비대칭 그리드
- **특징**:
  - 그린/화이트 컬러 팔레트
  - 매거진 스타일 레이아웃
  - 스티키 헤더
  - 통계 박스

### 4. **The Lazy S** - 프리미엄 미니멀
- **디자인**: 와이드 스크린, 미니멀 타이포그래피
- **특징**:
  - 브라운/블랙 컬러
  - 와이드 이미지 섹션
  - 미니멀한 네비게이션
  - 타이포그래피 중심 디자인

### 5. **Fresh Eats (Order Store)** - 인터랙티브 카드
- **디자인**: 3D 효과, 강화된 애니메이션
- **특징**:
  - 오렌지/레드 컬러
  - 3D 카드 효과
  - 인터랙티브 호버
  - 애니메이션 강화

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 열립니다.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 📁 프로젝트 구조

```
app/
├── layout.tsx              # 루트 레이아웃
├── page.tsx                # 홈 페이지
├── globals.css             # 전역 스타일 (Tailwind CSS)
├── penny-crown/
│   └── page.tsx           # Penny Crown 페이지
├── brioche-avitus/
│   └── page.tsx           # Brioche Avitus 페이지
├── chefs-farmers/
│   └── page.tsx           # Chefs & Farmers 페이지
├── lazy-s/
│   └── page.tsx           # The Lazy S 페이지
├── order-store/
│   └── page.tsx           # Fresh Eats 페이지
└── utils/
    └── squareConfig.ts    # Square 설정
```

## 🎯 주요 기능

✅ **Next.js App Router** - 최신 Next.js 라우팅 시스템
✅ **서버 사이드 렌더링 (SSR)** - SEO 최적화
✅ **이미지 최적화** - Next.js Image 컴포넌트 사용
✅ **완전히 다른 디자인**: 각 식당마다 고유한 레이아웃과 스타일
✅ **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
✅ **애니메이션**: Framer Motion을 사용한 부드러운 애니메이션
✅ **인터랙티브 요소**: 호버 효과, 3D 변환, 스크롤 애니메이션
✅ **SEO 최적화**: 메타 태그 및 시맨틱 HTML
✅ **접근성**: 키보드 네비게이션 및 ARIA 레이블

## 🛒 Square 웹사이트 연동

Square로 만든 웹사이트와 연동하려면:

### 1. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음을 추가하세요:

```env
# Square Online Store URL
NEXT_PUBLIC_SQUARE_STORE_URL=https://your-restaurant.square.site

# Square Online Ordering URL (필요시)
NEXT_PUBLIC_SQUARE_ORDERING_URL=https://your-restaurant.square.site
```

### 2. Square URL 찾기

1. Square Dashboard에 로그인
2. **Online** → **Online Store** 메뉴로 이동
3. 스토어 URL을 복사하여 `.env.local` 파일에 입력

### 3. 연동 완료

이제 Penny Crown 페이지의 "Online Ordering" 버튼이 Square 웹사이트로 연결됩니다.

## 📸 Instagram Feed 연동 (Brioche by Avitus)

Brioche by Avitus 페이지에 Instagram 피드를 표시하려면:

### 1. Instagram Access Token 생성

1. [Facebook Developers](https://developers.facebook.com/)에 로그인
2. 새 앱 생성 또는 기존 앱 선택
3. **Instagram Basic Display** 제품 추가
4. **Instagram App ID**와 **Instagram App Secret** 확인
5. **OAuth Redirect URI** 설정 (예: `https://yourdomain.com/auth/instagram/callback`)
6. **User Token Generator**에서 Access Token 생성

### 2. 환경 변수 설정

`.env.local` 파일에 다음을 추가하세요:

```env
# Instagram API Credentials
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_access_token_here
NEXT_PUBLIC_INSTAGRAM_USER_ID=your_user_id_here
```

### 3. User ID 찾기

Instagram User ID를 찾으려면:
- [Instagram User ID Lookup](https://www.instagram.com/{username}/?__a=1) (브라우저에서 직접 확인)
- 또는 Graph API를 사용하여 확인

### 4. 연동 완료

이제 Brioche by Avitus 페이지에 Instagram 피드가 표시됩니다.

## 📱 반응형 브레이크포인트

- **모바일**: < 768px
- **태블릿**: 768px - 1024px
- **데스크톱**: > 1024px

## 🎨 디자인 컨셉

각 페이지는 완전히 독립적인 디자인 시스템을 가지고 있어, 클라이언트의 브랜드 아이덴티티에 맞게 커스터마이징할 수 있습니다.

## 📝 라이센스

© 2025 Daol Consulting. All rights reserved.
