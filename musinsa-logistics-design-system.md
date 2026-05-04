# 무신사 로지스틱스 디자인 시스템

## 개요

무신사 로지스틱스 웹/PDA 인터페이스는 **물류 운영의 효율성과 가독성을 최우선으로 설계된 엔터프라이즈 UI 시스템**이다. 흰색 캔버스 위에 구조화된 그리드, 명확한 타이포그래피 위계, 단일 블루 포인트 컬러로 구성된 이 시스템은 복잡한 데이터와 운영 흐름을 빠르게 파악할 수 있도록 최소한의 장식으로 설계되었다.

컬러 팔레트는 회색 계열 중심으로 구성되어 있으며, 단일 액션 컬러(Blue/500 #245EFF)와 에러 컬러(Red/500 #F94A4A)만이 의미 있는 색 정보를 전달한다. 폰트는 한글은 Noto Sans KR, 영문/숫자는 Noto Sans Mono를 사용하여 물류 데이터의 가독성을 극대화한다. UI 레이블 및 보조 텍스트에는 Pretendard를 기반으로 한다.

**핵심 특성:**
- 데이터 중심 레이아웃: 테이블, 인풋, LNB(좌측 내비게이션)가 UI의 주요 구성 요소
- 회색 계열 + 단일 블루 액션 컬러 시스템
- 상태 기반 토큰 설계: enabled / hover / pressed / disabled / inverse(다크 배경) 상태를 명확히 구분
- 두 가지 폰트 패밀리: 한글(Noto Sans KR) / 영문·숫자(Noto Sans Mono)
- 1px `#F1F1F1` 보더로 구성된 카드 기반 정보 구조

---

## 컬러 시스템

> **분석 화면:** Color 토큰 시트, Background 토큰 시트, Border 토큰 시트, Icon 토큰 시트, Text 토큰 시트

### Gray Scale (기본 팔레트)

| 토큰명 | 헥스값 | 용도 |
|---|---|---|
| `gray/100` | #F1F1F1 | 섹션 헤더 배경, 카드 보더, 비활성 상태 배경 |
| `gray/200` | #E6E6E6 | 비활성화(disabled) 요소 컬러 스와치 |
| `gray/300` | #D9D9D9 | Tertiary 텍스트용 아이콘, 보더 토큰 |
| `gray/400` | #B3B3B3 | Disabled 텍스트용 아이콘 |
| `gray/500` | #929292 | Secondary 아이콘, 토큰 헤더 레이블 |
| `gray/600` | #7E7E7E | Tertiary 아이콘, LNB enabled/sub-enabled 아이콘 |
| `gray/700` | #393939 | **기본 텍스트 컬러** — 모든 본문/레이블에 사용 |
| `gray/800` | #242424 | Primary 아이콘, LNB Normal 배경 |
| `gray/900` | #050505 | **다크 배경** — LNB 패널 배경, Inverse 상태 컨테이너 |

### 브랜드 & 액션 컬러

| 토큰명 | 헥스값 | 용도 |
|---|---|---|
| `blue/300` | #649CFF | LNB Active 아이콘 (다크 배경 위) |
| `blue/500` | #245EFF | **Primary 액션** — 주요 버튼, 활성 상태, 하이라이트, 링크 |
| `blue/600` | #1F53E6 | Primary 버튼 hover (inverse) |
| `blue/700` | #1A47CC | Primary 버튼 pressed (inverse) |

### 시멘틱 컬러

| 토큰명 | 헥스값 | 용도 |
|---|---|---|
| `red/500` | #F94A4A | 에러 메시지, 경고 텍스트, 에러 아이콘 |

### 중립 컬러

| 토큰명 | 헥스값 | 용도 |
|---|---|---|
| — | #FFFFFF | 기본 페이지 배경, 카드 배경, 인풋 배경(enabled) |
| — | #000000 | 로고 텍스트, 시스템 레벨 컬러 |

---

## 색상 토큰 (Semantic Color Tokens)

### Text 토큰

| 토큰 | 컬러 참조 | 설명 |
|---|---|---|
| `color.text.common.primary` | `gray/700` (#393939) | 본문, 타이틀, 데이터, 버튼 레이블 등 기본 텍스트 |
| `color.text.common.5` | `gray/700` (#393939) | (Primary와 동일한 값으로 사용) |
| `color.text.common.secondary` | `gray/700` (#393939) | 본문 텍스트보다 중요도가 낮은 보조 텍스트 |
| `color.text.common.tertiary` | `gray/700` (#393939) | 플레이스홀더, 도움말 같은 3차 텍스트 |
| `color.text.common.disabled` | `gray/400` (#B3B3B3) | 비활성화 상태의 텍스트 |
| `color.text.common.disabled-inverse` | `gray/600` (#7E7E7E) | 어두운 배경 위의 비활성화 텍스트 |
| `color.text.common.success` | `blue/500` (#245EFF) | 완료, 성공 등의 긍정적 메시지 |
| `color.text.common.error` | `red/500` (#F94A4A) | 에러 메시지, 주의 텍스트 |
| `color.text.common.highlight` | `blue/500` (#245EFF) | 강조가 필요한 텍스트 (예: 검색어 하이라이트) |
| `color.text.common.link` | `blue/500` (#245EFF) | 텍스트 버튼, 링크 (밑줄로 클릭 가능 암시) |
| `color.text.table.cell` | `gray/800` (#242424) | 테이블 셀 내 텍스트 |
| `color.text.table.column` | `gray/600` (#7E7E7E) | 테이블 컬럼 헤더 텍스트 |
| `color.text.table.count` | `blue/500` (#245EFF) | 테이블 리스트 카운팅 텍스트 |

### Icon 토큰

| 토큰 | 컬러 참조 | 설명 |
|---|---|---|
| `color.icon.primary` | `gray/900` (#050505) | 단독 아이콘 버튼 또는 primary 텍스트와 함께 사용 |
| `color.icon.secondary` | `gray/500` (#929292) | secondary 텍스트와 함께 사용 |
| `color.icon.tertiary` | `gray/100` (#F1F1F1) | 중요도가 낮은 아이콘 |
| `color.icon.lnb.enabled` | `gray/600` (#7E7E7E) | LNB 활성화된 메뉴 아이콘 |
| `color.icon.lnb.active` | `blue/300` (#649CFF) | LNB 선택된 메뉴 아이콘 |
| `color.icon.lnb.disabled` | `gray/800` (#242424) | LNB 비활성화 메뉴 아이콘 |
| `color.icon.lnb.sub-enabled` | `gray/600` (#7E7E7E) | LNB 하위메뉴 활성화 아이콘 |
| `color.icon.lnb.sub-active` | `gray/600` (#7E7E7E) | LNB 하위메뉴 선택 아이콘 |
| `color.icon.lnb.sub-disabled` | `gray/800` (#242424) | LNB 하위메뉴 비활성화 아이콘 |
| `color.icon.input.enabled` | `gray/500` (#929292) | 인풋 내 활성화 아이콘 |
| `color.icon.input.disabled` | `gray/300` (#D9D9D9) | 인풋 내 비활성화 아이콘 |
| `color.icon.input.disabled-inverse` | `gray/600` (#7E7E7E) | 어두운 배경 인풋 내 비활성화 아이콘 |
| `color.icon.error` | `red/500` (#F94A4A) | 에러/경고 아이콘 |

### Background 토큰

| 토큰 | 컬러 참조 | 설명 |
|---|---|---|
| `color.bg.common.login` | `gray/800` (#242424, opacity 80%) | 로그인 화면 입력창 배경 |
| `color.bg.common.dim` | `gray/800` (#242424, opacity 70%) | 팝업 딤 처리 배경 |
| `color.bg.lnb.normal` | `gray/800` (#242424) | LNB 기본 배경 |
| `color.bg.lnb.active` | `gray/900` (#050505) | 선택된 LNB 메뉴 배경 |
| `color.bg.lnb.hover` | `gray/700` (#393939) | 마우스 호버 LNB 메뉴 배경 |
| `color.bg.filter` | `gray/100` (#F1F1F1) | 필터 영역 배경 |
| `color.bg.table.column` | `gray/100` (#F1F1F1) | 테이블 컬럼 영역 배경 |
| `color.bg.table.column-selected` | `gray/200` (#E6E6E6) | 테이블 선택된 컬럼 배경 |
| `color.bg.table.column-group` | `gray/300` (#D9D9D9) | 테이블 컬럼 상위 그룹명 배경 |
| `color.bg.input.enabled` | #FFFFFF | 활성화된 인풋 배경 |
| `color.bg.input.disabled` | `gray/200` (#E6E6E6) | 비활성화된 인풋 배경 |
| `color.bg.input.enabled-inverse` | `gray/700` (#393939) | 어두운 배경 위 활성화 인풋 배경 |
| `color.bg.input.disabled-inverse` | `gray/700` (#393939) | 어두운 배경 위 비활성화 인풋 배경 |
| `color.bg.common.primary` | `gray/800` (#242424) | 주요 기능 버튼 배경 |
| `color.bg.common.primary-hover` | `gray/700` (#393939) | 주요 버튼 hover |
| `color.bg.common.primary-pressed` | `gray/700` (#393939) | 주요 버튼 클릭 |
| `color.bg.common.primary-disabled` | `gray/200` (#E6E6E6) | 주요 버튼 비활성화 |
| `color.bg.common.primary-inverse` | `blue/500` (#245EFF) | 어두운 배경 위 주요 버튼 |
| `color.bg.common.primary-hover-inverse` | `blue/600` (#1F53E6) | 어두운 배경 위 주요 버튼 hover |
| `color.bg.common.primary-pressed-inverse` | `blue/700` (#1A47CC) | 어두운 배경 위 주요 버튼 클릭 |
| `color.bg.common.primary-disabled-inverse` | `gray/200` (#E6E6E6) | 어두운 배경 위 주요 버튼 비활성화 |
| `color.bg.common.secondary` | #FFFFFF | 보조 기능 버튼 배경 |
| `color.bg.common.secondary-hover` | `gray/100` (#F1F1F1) | 보조 버튼 hover |
| `color.bg.common.secondary-pressed` | `gray/200` (#E6E6E6) | 보조 버튼 클릭 |
| `color.bg.common.secondary-disabled` | `gray/200` (#E6E6E6) | 보조 버튼 비활성화 |
| `color.bg.common.highlight` | `blue/500` (#245EFF) | 강조 영역 배경 |

### Border 토큰

| 토큰 | 컬러 참조 | 설명 |
|---|---|---|
| `color.border.divider` | `gray/300` (#D9D9D9) | 텍스트, 테이블 등 구분 라인 |
| `color.border.table` | `gray/200` (#E6E6E6) | 테이블 바깥 테두리 |
| `color.border.element` | `gray/300` (#D9D9D9) | 인풋, 버튼 등 요소 테두리 |
| `color.border.element-active` | `blue/500` (#245EFF) | 활성화(포커스) 된 요소 테두리 |
| `color.border.lnb` | `gray/800` (#242424) | LNB 메뉴 간 구분 라인 |

---

## 타이포그래피

### 폰트 패밀리

| 용도 | 폰트 | 비고 |
|---|---|---|
| 한글 본문/헤드라인 | `Noto Sans KR` | 웹/PDA 한글 전용 |
| 영문/숫자 본문/헤드라인 | `Noto Sans Mono` | 물류 데이터(코드, 숫자) 가독성 최적화 |
| UI 레이블/보조 텍스트 | `Pretendard` | 모든 컴포넌트 레이블, 토큰 명세 텍스트 |
| 브랜드/섹션 헤더 | `MUSINSA OTF` | 무신사 브랜드 전용 폰트 |

### 타입 스케일 (한글/영문 공통)

| 토큰 | 사이즈 | 굵기 | 행간 | 용도 |
|---|---|---|---|---|
| `Display/32-bold` | 32px | 700 | 36px (1.125) | 페이지 최상위 타이틀, 대시보드 숫자 |
| `Headline/24-bold` | 24px | 700 | 36px (1.5) | 섹션 헤드라인 |
| `Headline/20-bold` | 20px | 700 | 32px (1.6) | 서브 섹션 헤드라인 |
| `Headline/16-bold` | 16px | 700 | 24px (1.5) | 카드 타이틀, 테이블 헤더 |
| `Headline/16-regular` | 16px | 400 | 24px (1.5) | 중요도 낮은 헤드라인 |
| `Body/14-bold` | 14px | 700 | 20px (1.43) | 강조 본문, 버튼 레이블(강조) |
| `Body/14-medium` | 14px | 500 | 20px (1.43) | 중간 강조 본문 |
| `Body/14-regular` | 14px | 400 | 20px (1.43) | 기본 본문 |
| `Body/12-bold` | 12px | 700 | 18px (1.5) | 캡션 강조 |
| `Body/12-medium` | 12px | 500 | 18px (1.5) | 캡션 중간 강조 |
| `Body/12-regular` | 12px | 400 | 18px (1.5) | 캡션, 보조 텍스트 |

### UI 레이블 (Pretendard 전용)

| 용도 | 사이즈 | 굵기 | 행간 |
|---|---|---|---|
| 토큰/컴포넌트 레이블 | 16px | 600 | 24px |
| 토큰 설명 | 16px | 400 | 24px |
| 색상 칩 레이블 | 12px | 400 | 18px |

### 원칙

- **숫자/코드는 Noto Sans Mono**: 물류 시스템 특성상 송장번호, 수량, 코드 등 숫자 데이터는 반드시 Mono 폰트를 사용하여 자릿수 정렬을 보장한다.
- **굵기 사다리: 400 / 500 / 700**: 중간 강조에는 500을 사용하고 최대 강조에는 700을 쓴다. 600은 Pretendard UI 레이블 전용.
- **행간은 사이즈 대비 고정비**: 12px → 18px(1.5), 14px → 20px(1.43), 16px → 24px(1.5), 20px → 32px(1.6), 24px → 36px(1.5), 32px → 36px(1.125). 디스플레이 사이즈일수록 행간이 조밀해진다.

---

## 레이아웃

### 스페이싱 시스템

기본 단위 8px 기반. 컴포넌트 내부 패딩에 20px이 자주 등장하는 특이점이 있다.

| 토큰 | 값 | 용도 |
|---|---|---|
| — | 4px | 아이콘-텍스트 간격, 칩 세로 패딩 |
| — | 8px | 컴포넌트 내부 gap |
| — | 10px | 아이템 간 gap |
| — | 20px | 카드/셀 좌측 패딩 (주요 인덴트 단위) |
| — | 24px | 페이지 좌측 여백 |

### 그리드 & 컨테이너

- **전체 컬럼 너비**: 1280px (COLOR 토큰 시트 기준), 1392px (FONT 시트 기준)
- **페이지 좌측 여백**: 24px
- **토큰 행 높이**: 144px (색상 토큰 행 1개 기준)
- **섹션 헤더 높이**: 72px

### Color 토큰 행 레이아웃 (3컬럼 구조)

| 컬럼 | 너비 | 내용 |
|---|---|---|
| 토큰명 | 360px | `color.text.common.primary` 형식 레이블 |
| 설명 | 680px | 한글 사용 용도 설명 |
| 스와치 | 240px | 컬러 프리뷰 (45×45px 정방형 + 헥스 칩) |

### Font 행 레이아웃 (4컬럼 구조)

| 컬럼 | 너비 | 내용 |
|---|---|---|
| 토큰명 | 320px | `Display-32-bold` 형식 레이블 |
| 스펙 | 320px | weight / size / line height 명세 |
| 한글 미리보기 | 376px | `안녕하세요` (Noto Sans KR) |
| 영문 미리보기 | 376px | `Hello` (Noto Sans Mono) |

---

## 엘리베이션 & 뎁스

무신사 로지스틱스 UI는 그림자를 거의 사용하지 않는다. 뎁스는 **보더 색상 변화**와 **배경 명도 차이**로만 표현한다.

| 레벨 | 처리 | 용도 |
|---|---|---|
| Flat | 없음 | 기본 페이지 배경, 테이블 셀 |
| Hairline | 1px solid `#F1F1F1` | 카드, 테이블 외곽선, 컴포넌트 구분 |
| Surface Change | `gray/100` (#F1F1F1) 배경 | 섹션 헤더, 필터 영역, 테이블 컬럼 헤더 |
| Dark Panel | `gray/900` (#050505) 배경 | LNB 패널, Inverse 상태 컨테이너 |

---

## 쉐이프 (Border Radius)

| 값 | 용도 |
|---|---|
| 0px | 테이블, 풀-블리드 행(row) 요소 |
| 4px | 색상 칩(Color chip), 소형 뱃지 |
| 8px | 컬러 스와치 블록, 인풋, 버튼 (기본 라운드) |

전반적으로 **8px이 기본 컴포넌트 라운드**이며, 날카로운 4px은 소형 정보 칩에만 사용한다.

---

## 컴포넌트

### LNB (좌측 내비게이션 바)

무신사 로지스틱스의 핵심 내비게이션 컴포넌트. `gray/800` (#242424) 다크 배경에 아이콘 + 텍스트 조합으로 구성된다. **펼침(unfold)** 과 **접힘(fold)** 두 가지 레이아웃 모드를 지원한다.

---

#### 컨테이너 구조

| 모드 | 너비 | 비고 |
|---|---|---|
| Unfold (펼침) | 288px | 아이콘 + 텍스트 레이블 표시 |
| Fold (접힘) | 88px | 아이콘만 표시. 콘텐츠 영역 56px |

```
background:  #242424  (gray/800)
box-shadow:  2px 0px 4px rgba(0, 0, 0, 0.04)
border-radius: 0px
height:      1080px (전체 화면 높이)
```

---

#### 상단 로고 영역 (Top_LOGO)

```
height:  64px
padding: 0px 16px
layout:  space-between (로고 좌측, 토글 아이콘 우측)
```

로고는 흰색 MWMS 로고(`#FFFFFF`)이며, 우측에 `icon/chevrons-left` (32×32px, `gray/600` #7E7E7E)로 접기/펼치기 토글이 위치한다. 접힘 상태에서는 `icon/chevrons-right`로 전환된다.

---

#### 프로필 인풋 (input)

유저명과 소속 센터를 표시하는 드롭다운 트리거.

```
width:         256px
height:        48px
background:    #393939  (gray/700)
border-radius: 4px
padding:       12px
layout:        space-between
```

| 요소 | 스타일 |
|---|---|
| 유저 아이콘 + 이름 | `icon/user` (`gray/600`) + KR/Body/14-medium `#FFFFFF` |
| 센터명 | KR/Body/14-medium `blue/300` #649CFF |
| 드롭다운 화살표 | `icon/arrow-down-filled` (`gray/500` #929292) |

활성(열림) 상태일 때: `border: 1px solid #649CFF` 추가, 화살표가 `icon/arrow-up-filled`로 전환.

**프로필 드롭다운 패널:**

```
background:    #393939
border-radius: 4px
box-shadow:    0px 10px 15px rgba(0, 0, 0, 0.05)
width:         256px
```

센터 목록은 각 40px 행으로 구성되며, 현재 선택된 센터는 `gray/900` (#050505) 배경 + `gray/400` (#B3B3B3) 텍스트. 로그아웃 버튼은 하단 `gray/900` 배경 40px 행에 위치하며 `icon/arrow-right-line`이 함께 표시된다.

---

#### 메뉴 목록 (Lnb_List)

```
padding: 0px 16px
gap:     16px
```

**1depth 메뉴 아이템 (lnb/menu):**

```
width:         256px  (fold: 56px)
height:        56px
padding:       16px
gap:           8px
border-radius: 8px
```

| 상태 | 배경 | 아이콘 | 텍스트 | 폰트 |
|---|---|---|---|---|
| Enabled | `#242424` (투명) | `gray/600` #7E7E7E | `gray/600` #7E7E7E | KR/Body/14-medium |
| Focused (현재 페이지) | `gray/900` #050505 | `blue/300` #649CFF | `#FFFFFF` | KR/Body/14-bold |
| Hover | `gray/700` #393939 | `gray/600` #7E7E7E | `gray/600` #7E7E7E | KR/Body/14-medium |

> **Focused vs Active 구분:** "Focused"는 현재 열려있는 페이지의 카테고리를 의미한다. 다른 카테고리를 탐색 중일 때도 원래 페이지의 1depth 메뉴는 Focused 상태를 유지한다.

---

#### 하위 메뉴 영역 (sub)

Focused된 1depth 메뉴 하위에 2depth 서브메뉴가 펼쳐지는 영역.

**서브 컨테이너:**

```
background:    #050505  (gray/900)
border-radius: 8px
width:         256px
```

**서브 헤더 (lnb/menu - 상단 1depth 레이블):**

```
height:        56px
padding:       16px
border-bottom: 1px solid #242424
border-radius: 8px 8px 0px 0px
background:    #050505
```

아이콘: `blue/300` / 텍스트: `#FFFFFF` KR/Body/14-bold

**2depth 서브메뉴 아이템:**

```
height:   40px
padding:  8px 16px 8px 48px   (좌측 인덴트 48px)
layout:   space-between
```

| 상태 | 텍스트 | 아이콘(newtab) |
|---|---|---|
| Enabled | `gray/600` #7E7E7E / KR/Body/14-medium | `gray/800` #242424 |
| Focused (현재 페이지) | `#FFFFFF` / KR/Body/14-bold | `gray/600` #7E7E7E |
| Hover | `gray/400` #B3B3B3 / KR/Body/14-medium | `gray/700` #393939 |

모든 2depth 메뉴 우측에는 `icon/newtab` (24×24px)이 표시되며, newtab 아이콘에 마우스 호버 시 "새탭으로 열기" 툴팁(`gray/700` 배경, 34px 높이, `border-radius: 8px`)이 노출된다.

---

#### 하단 고정 영역 (Frame 120)

스크롤과 무관하게 항상 하단에 고정되는 영역.

```
height:     88px
padding:    16px
background: #242424
border-top: 1px solid #393939  (gray/700)
layout:     space-between
```

다운로드 바로가기 메뉴 아이템 (lnb/menu, 56px)이 포함되며, 아이콘은 `gray/500` #929292, 텍스트는 `gray/600` #7E7E7E.

---

#### 스크롤바

```
width:         4px
background:    #F7F7F7  (트랙)
border-radius: 4px
transform:     rotate(-90deg)
```

---

#### 접힘(Fold) 모드 상세

접힘 상태에서는 88px 너비의 아이콘 전용 레이아웃으로 전환된다.

```
/* 아이콘 영역 */
width:         56px
height:        56px
padding:       16px
```

상태 표현은 펼침과 동일하게 적용된다: Enabled = 배경 없음, Focused = `#050505` 배경 + `blue/300` 아이콘, Hover = `#393939` 배경. 텍스트 레이블은 표시되지 않는다.

하단 고정 영역도 88px 너비로 축소되며, 활성 메뉴(Focused 상태)일 때는 `#050505` 배경 + `blue/300` 아이콘으로 강조된다.

---

### 버튼

버튼은 **위계(Hierarchy) × 크기(Size) × 상태(State) × 아이콘 유무**의 조합으로 구성된다. 전체 `border-radius`는 **6px** 고정이며, 텍스트 폰트는 `Noto Sans KR`을 사용한다.

---

#### 위계 (Hierarchy)

| 위계 | 사용 맥락 | 특징 |
|---|---|---|
| **Primary Light** | 라이트 배경 기본 주요 액션 | `gray/800` 배경, 흰 텍스트 |
| **Primary Dark (Inverse)** | 다크 배경(로그인 등) 주요 액션 | `blue/500` 배경, 흰 텍스트. 로그인 화면에서만 사용 |
| **Secondary** | 보조 액션, 아이콘 단독 버튼 | 흰 배경 + `gray/300` 보더, 검정 텍스트 |
| **Tertiary** | 최하위 보조 액션 (초기화 등) | 배경 없음, `gray/600` 텍스트. hover/pressed 시 배경 나타남 |

---

#### 크기 (Size)

| 크기 | 높이 | 패딩 (상하/좌우) | 텍스트 규격 |
|---|---|---|---|
| 56 | 56px | `16px 32px` | KR/Headline/16-bold (Noto Sans KR, 700, 16px) |
| 36 | 36px | `8px 24px` | KR/Body/14-medium (Noto Sans KR, 500, 14px) |
| 28 | 28px | `4px 16px` | KR/Body/14-medium (Noto Sans KR, 500, 14px) |

아이콘이 포함될 경우 아이콘 쪽 패딩이 4px 줄어든다 (icon=left: `padding-left 20px`, icon=right: `padding-right 20px`). 아이콘 크기는 `16×16px`.

---

#### Primary Light 상태별 토큰

| 상태 | 배경 | 텍스트 |
|---|---|---|
| Enabled | `gray/800` #242424 | `#FFFFFF` |
| Hover | `gray/700` #393939 | `#FFFFFF` |
| Pressed | `gray/700` #393939 | `#FFFFFF` |
| Disabled | `gray/200` #E6E6E6 | `gray/400` #B3B3B3 |

#### Primary Dark (Inverse) 상태별 토큰

다크 배경(예: 로그인 화면 `gray/900` #050505) 위에서만 사용.

| 상태 | 배경 | 텍스트 |
|---|---|---|
| Enabled | `blue/500` #245EFF | `#FFFFFF` |
| Hover | `blue/600` #1F53E6 | `#FFFFFF` |
| Pressed | `blue/700` #1A47CC | `#FFFFFF` |
| Disabled | `gray/200` #E6E6E6 | `gray/400` #B3B3B3 |

#### Secondary 상태별 토큰

| 상태 | 배경 | 보더 | 텍스트 | 아이콘 |
|---|---|---|---|---|
| Enabled | `#FFFFFF` | 1px solid `gray/300` #D9D9D9 | `gray/800` #242424 | `gray/800` #242424 |
| Hover | `gray/100` #F1F1F1 | 1px solid `gray/300` #D9D9D9 | `gray/800` #242424 | `gray/800` #242424 |
| Pressed | `gray/200` #E6E6E6 | 1px solid `gray/300` #D9D9D9 | `gray/800` #242424 | `gray/800` #242424 |
| Disabled | `gray/200` #E6E6E6 | 1px solid `gray/300` #D9D9D9 | `gray/400` #B3B3B3 | `gray/500` #929292 |

Secondary 아이콘 전용 버튼(Icon-only)은 `36×36px` 또는 `28×28px`로 사용되며, 아이콘 컬러는 중요도에 따라 달라질 수 있다.

#### Tertiary 상태별 토큰

| 상태 | 배경 | 텍스트 | 아이콘 |
|---|---|---|---|
| Enabled | 없음 (투명) | `gray/600` #7E7E7E | `gray/600` #7E7E7E |
| Hover | `gray/100` #F1F1F1 | `gray/600` #7E7E7E | `gray/600` #7E7E7E |
| Pressed | `gray/200` #E6E6E6 | `gray/600` #7E7E7E | `gray/600` #7E7E7E |
| Disabled | 없음 (투명) | `gray/400` #B3B3B3 | `gray/100` #F1F1F1 |

Tertiary 버튼은 테두리가 없으며, 크기는 **28px 고정**. 주로 초기화(reset), 필터 해제 등 가벼운 보조 액션에 사용된다.

---

### 인풋 (Input)

인풋은 **크기(Size) × 상태(State) × 라벨 유무 × 우측 영역 타입 × 다크 모드 × 범위(Range) 여부**의 조합으로 구성된다. 폰트는 `Noto Sans KR`, `border-radius`는 크기에 따라 다르다.

---

#### 크기 (Size)

| 크기 | 높이 | 패딩 | Border Radius | 폰트 규격 |
|---|---|---|---|---|
| Large | 36px | `6px 8px` | 6px | KR/Body/14-regular (14px) |
| Medium | 28px | `4px 8px` | 4px | KR/Body/14-regular (14px) |
| Small | 24px | `2px 8px` | 4px | KR/Body/14-regular (14px) |

---

#### 상태별 토큰 (Light 모드, No-Label)

| 상태 | 배경 | 보더 | 텍스트 | Placeholder |
|---|---|---|---|---|
| Enabled | `#FFFFFF` | 1px solid `gray/300` #D9D9D9 | `gray/800` #242424 | `gray/400` #B3B3B3 |
| Active (포커스) | `#FFFFFF` | 1px solid `blue/500` #245EFF | `gray/800` #242424 | `gray/400` #B3B3B3 |
| Filled | `#FFFFFF` | 1px solid `gray/300` #D9D9D9 | `gray/800` #242424 | — |
| Disabled | `gray/200` #E6E6E6 | 1px solid `gray/300` #D9D9D9 | `gray/400` #B3B3B3 | `gray/400` #B3B3B3 |
| Read-only | `gray/200` #E6E6E6 | 1px solid `gray/300` #D9D9D9 | `gray/800` #242424 | — |
| Error | `#FFFFFF` | 1px solid `gray/300` #D9D9D9 | `gray/800` #242424 | — |

Error 상태는 인풋 보더가 변하지 않고, 인풋 하단에 에러 메시지가 별도로 노출된다.

```
/* 에러 메시지 */
font:  KR/Body/12-medium (Noto Sans KR, 500, 12px)
color: #F94A4A  (red/500)
gap:   2px (인풋과의 간격)
```

---

#### 우측 영역 타입 (Right Area)

| 타입 | 설명 | 아이콘/텍스트 색 |
|---|---|---|
| None | 우측 영역 없음 | — |
| Unit | 단위 텍스트 (`cm`, `EA` 등) 우측 배치 | `gray/600` #7E7E7E (disabled: `gray/400` #B3B3B3) |
| Icon | 16×16px 아이콘 우측 배치 | 컨텍스트에 따라 다름 |

---

#### 라벨 (Label)

라벨이 있는 경우 인풋 좌측에 **88px 고정 너비** 레이블이 위치하며, 인풋 영역이 나머지를 차지한다.

```
/* 라벨 */
font:  KR/Body/14-medium  (14px, 500)  — Large는 16px/500
color: #242424

/* 필수 표기 (required) */
크기:  8×8px
color: blue/500  #245EFF  (별 모양 아이콘)
```

Large 크기 라벨은 Noto Sans KR 16px/500, Medium/Small은 14px/500.

---

#### Dark 모드 (Inverse)

LNB 프로필 인풋과 로그인 화면에서 사용되는 다크 배경 인풋.

| 상태 | 배경 | 보더 | 텍스트 | Placeholder | 라벨 |
|---|---|---|---|---|---|
| Enabled | `gray/700` #393939 | 없음 | `#FFFFFF` | `gray/400` #B3B3B3 | `#FFFFFF` |
| Active | `gray/700` #393939 | 1px solid `blue/500` #245EFF | `#FFFFFF` | `gray/400` #B3B3B3 | `#FFFFFF` |
| Filled | `gray/700` #393939 | 없음 | `#FFFFFF` | — | `#FFFFFF` |
| Disabled | `gray/700` #393939 | 없음 | `gray/600` #7E7E7E | `gray/600` #7E7E7E | `gray/600` #7E7E7E |
| Error | `gray/700` #393939 | 없음 | `#FFFFFF` | — | `#FFFFFF` |

다크 인풋의 패딩은 `12px` 고정 (높이 48px), `border-radius: 4px`.

---

#### 날짜 범위 인풋 (Range)

날짜 시작~종료를 한 인풋에 표현하는 Range 타입. 우측 아이콘은 `icon/calender` (16×16px, `gray/500` #929292 고정).

```
/* Range 인풋 내부 레이아웃 */
YYYY-MM-DD  ~  YYYY-MM-DD  [icon/calender]
gap:  8px (날짜 사이)

/* 상태 */
Enabled:  placeholder #B3B3B3, 보더 #D9D9D9
Active:   텍스트 #242424, 보더 #245EFF
Filled:   텍스트 #242424, 보더 #D9D9D9
Disabled: 배경 #E6E6E6, 텍스트 #B3B3B3, ~ 구분자 #B3B3B3
Read-only: 배경 #E6E6E6, 텍스트 #242424
Error:    에러 메시지 아래 표시
```

---

#### PDA 인풋

핸드헬드 스캐너(PDA) 화면 전용 인풋. 다크 배경 전용으로, 라벨이 상단에 위치한다.

```
/* PDA 인풋 */
배경:          #393939
border-radius: 4px
height:        48px
padding:       14px 12px

/* 라벨 (상단 배치) */
font:  KR/Body/12-regular (12px, 400)
color: #FFFFFF
gap:   4px (라벨~인풋)
```

---

#### 필드 주석

Label과 Required(별 표기)는 on/off로 선택적으로 표기하거나 생략할 수 있다.

---

### 셀렉트 박스 (Select Box)

셀렉트 박스는 **크기(Size) × 상태(State) × 보더 유무(border on/off) × 라벨 유무 × 범위(Range) 여부**의 조합으로 구성된다. 우측에 항상 `icon/arrow-down-filled` (16×16px)가 위치하며, 열린 상태(Active)에서는 `icon/arrow-up-filled`로 전환된다.

---

#### 크기 (Size)

| 크기 | 높이 | 패딩 (border=on) | Border Radius | 폰트 |
|---|---|---|---|---|
| Large | 36px | `2px 12px` | 6px | KR/Headline/16-regular (Noto Sans KR, 400, 16px) |
| Medium | 28px | `2px 8px` | 4px | KR/Body/14-regular (Noto Sans KR, 400, 14px) |
| Small | 24px | `2px 8px` | 4px | KR/Body/14-regular (Noto Sans KR, 400, 14px) |

border=off일 때는 패딩이 `4px 0px`으로 변경된다.

---

#### 상태별 토큰

| 상태 | 배경 | 보더 (border=on) | 텍스트 | Placeholder | 아이콘 |
|---|---|---|---|---|---|
| Enabled | `#FFFFFF` | 1px solid `#D9D9D9` | — | `#B3B3B3` | `#929292` |
| Active (열린 상태) | `#FFFFFF` | 1px solid `#245EFF` | `#242424` | `#B3B3B3` | `#929292` (arrow-up) |
| Filled | `#FFFFFF` | 1px solid `#D9D9D9` | `#242424` | — | `#929292` |
| Disabled | `#E6E6E6` | 1px solid `#D9D9D9` | `#B3B3B3` | `#B3B3B3` | `#D9D9D9` (gray/300) |
| Read-only | `#E6E6E6` | 1px solid `#D9D9D9` | `#242424` | — | 없음 (아이콘 미표시) |

Read-only 상태는 드롭다운 아이콘이 표시되지 않으며, 패딩이 `4px 8px`로 조정된다.

---

#### 보더 변형 (border on/off)

border=on은 셀렉트 박스의 기본 형태로 외곽 보더가 있다. border=off는 보더 없이 텍스트+아이콘만 표시되는 경량형으로, 테이블 셀 내부나 필터 영역에서 사용된다.

```
/* border=off */
padding:       4px 0px
background:    #FFFFFF (투명에 가까운 처리)
border:        없음
border-radius: 4px
```

---

#### 라벨 (Label)

인풋 컴포넌트와 동일한 규칙을 따른다. 라벨이 있는 경우 좌측 **88px 고정 너비** 레이블이 위치하며, 셀렉트 영역이 나머지를 차지한다.

```
/* 라벨 */
font:  KR/Body/14-medium (14px, 500)  — Large는 16px/500 아님, 14px/500 동일
color: #242424

/* 필수 표기 */
크기:  8×8px
color: blue/500  #245EFF
```

---

#### 범위 셀렉트 (Range)

두 개의 셀렉트 박스를 나란히 배치하는 패턴. 날짜 범위나 기간 선택 등에 사용된다.

```
/* Range 레이아웃 */
display:         flex
flex-direction:  row
gap:             8px
각 셀렉트:       동등한 너비(flex-grow: 1)로 균등 배분

/* 상태 적용 방식 */
각 셀렉트박스 독립적으로 상태 적용
Active 시 해당 셀렉트만 #245EFF 보더 적용
Disabled/Read-only 시 양쪽 모두 동일 상태 적용
```

---

#### 드롭다운 리스트 (Dropdown List)

셀렉트 박스를 클릭(Active 상태)했을 때 셀렉트 박스 하단에 붙어서 열리는 목록 레이어. 셀렉트 박스 너비에 맞춰 최소 120px 이상으로 표시된다.

---

##### 드롭다운 컨테이너

```
/* 드롭다운 패널 */
background:    #FFFFFF
border:        1px solid #D9D9D9
border-radius: 4px (상단 모서리만, 트리거 셀렉트와 이어지는 경우 상단 radius 없음)
box-shadow:    0px 10px 15px rgba(0, 0, 0, 0.05)
min-width:     셀렉트 박스 너비에 맞춤

/* 상하 여백 */
상단 첫 아이템:  padding-top  8px (상단 프레임)
하단 마지막 아이템: padding-bottom 8px (하단 프레임)
아이템 행:      padding 4px 8px
```

---

##### 아이템 행 타입 3종

**Normal (텍스트만)**

```
height:        36px
padding:       4px 8px
내부 아이템:   padding 4px 8px, gap 10px
```

| 상태 | 배경 | 텍스트 폰트 |
|---|---|---|
| Enabled | `#FFFFFF` | KR/Body/14-regular, `#242424` |
| Hover | `#F1F1F1`, `border-radius: 4px` | KR/Body/14-regular, `#242424` |
| Selected | `#FFFFFF` | KR/Body/14-bold (700), `#242424` |
| Disabled | `#FFFFFF` | KR/Body/14-regular, `#B3B3B3` |

**Check (체크박스 + 텍스트)**

체크박스(16×16px)가 텍스트 좌측에 위치. 체크박스 상태는 체계가 별도로 있으며 드롭다운 내에서 다음 규칙을 따른다.

```
/* 체크박스 unchecked */
background:     #FFFFFF
border:         1px solid #B3B3B3 (gray/400)
border-radius:  4px

/* 체크박스 checked */
background:     #242424 (gray/800)
체크 아이콘:    #FFFFFF
```

| 상태 | 체크박스 | 배경 | 텍스트 폰트 |
|---|---|---|---|
| Enabled | unchecked | `#FFFFFF` | KR/Body/14-regular, `#242424` |
| Hover | unchecked | `#F1F1F1`, radius 4px | KR/Body/14-regular, `#242424` |
| Selected | checked (`#242424`) | `#FFFFFF` | KR/Body/14-bold, `#242424` |
| Disabled | unchecked (`#E6E6E6` 배경) | `#FFFFFF` | KR/Body/14-regular, `#B3B3B3` |

전체 선택(all) 행은 하단에 `border-bottom: 1px solid #D9D9D9` 구분선이 추가된다.

**Arrow (텍스트 + 우측 꺽쇠 아이콘)**

카테고리 계층 탐색용. 우측에 `icon/arrow-right-line` (16×16px, `#242424`) 배치. Disabled 시 아이콘 `#D9D9D9`.

```
/* Arrow 아이템 내부 */
display:         flex
justify-content: space-between
padding:         4px 8px
gap:             4px
```

| 상태 | 배경 | 텍스트 | 아이콘 |
|---|---|---|---|
| Enabled | `#FFFFFF` | KR/Body/14-regular, `#242424` | `#242424` |
| Hover | `#F1F1F1`, radius 4px | KR/Body/14-regular, `#242424` | `#242424` |
| Selected | `#FFFFFF` | KR/Body/14-bold, `#242424` | `#242424` |
| Disabled | `#FFFFFF` | KR/Body/14-regular, `#B3B3B3` | `#D9D9D9` |

---

##### 드롭다운 구조 패턴

**Normal** — 단순 텍스트 목록. 셀렉트 박스 1개에서 열림.

**Check box** — 다중 선택 가능한 체크박스 목록. 여러 항목 선택 시 트리거 셀렉트 박스에 쉼표(,)로 구분해 표시된다.

**Category** — Arrow 타입 아이템으로 이루어진 계층 탐색 드롭다운. 좌우 두 개의 패널(각 160px)이 나란히 열리며, 왼쪽 패널에서 선택한 카테고리의 하위 목록이 오른쪽 패널에 표시된다. 카테고리 종속 관계는 꺽쇠(`>`)로 표기한다.

```
/* 카테고리 드롭다운 2단 패널 */
각 패널 너비:    160px
총 너비:         320px
패널 연결 보더:  좌측 패널 right border 없음, 우측 패널 left border 없음
                 (1px solid #D9D9D9 공유)
```

---

##### 드롭다운 위치 규칙

드롭다운은 트리거 셀렉트 박스에 **맞닿아** 하단에 열린다. 화면 하단 공간이 부족한 경우 상단으로 열릴 수 있으나 이 경우 별도 명세 없음.

```
/* 위치 */
셀렉트 박스 넓이에 맞춤 (최소 120px)
셀렉트 박스 하단에 붙음 (gap 없음)
z-index: 드롭다운 레이어는 모달/툴팁보다 낮음
```

---

### 체크박스 (Checkbox)

체크박스는 **크기(Size) × 상태(State) × 상태값(Check/Indeterminate/None)** 조합으로 구성된다. 체크박스 우측에 레이블 텍스트가 `gap: 8px`으로 배치된다.

---

#### 크기 (Size)

| 크기 | 박스 크기 | Border Radius |
|---|---|---|
| Medium | 24×24px | 4px |
| Small | 16×16px | 2px |

---

#### 상태값 × 상태 토큰

**None-check (미선택)**

| 상태 | 배경 | 보더 | 아이콘 |
|---|---|---|---|
| Default | `#FFFFFF` | 1px solid `#B3B3B3` | — |
| Disabled | `#E6E6E6` | 1px solid `#B3B3B3` | — |

**Check (선택됨)**

| 상태 | 배경 | 보더 | 아이콘 색 |
|---|---|---|---|
| Default | `#393939` (gray/700) | 없음 | `#FFFFFF` |
| Disabled | `#E6E6E6` | 1px solid `#B3B3B3` | `#7E7E7E` (gray/600) |

**Indeterminate (중간 상태)**

부분 선택을 나타내는 상태. 아이콘은 `icon/minus`(가로 바)로 표시된다.

| 상태 | 배경 | 보더 | 아이콘 색 |
|---|---|---|---|
| Default | `#393939` | 없음 | `#FFFFFF` |
| Disabled | `#E6E6E6` | 1px solid `#B3B3B3` | `#7E7E7E` |

---

#### 체크 아이템 (Check Item)

체크박스와 텍스트 레이블을 묶은 단위 컴포넌트.

```
/* check item */
display:        flex
flex-direction: row
align-items:    center
gap:            8px

/* 텍스트 레이블 */
font:           KR/Body/14-regular (Noto Sans KR, 400, 14px)
color:          #242424  (Default)
color:          #B3B3B3  (Disabled)
```

---

#### 옵션 그룹 (Option Group) — 체크박스 포함

라벨과 체크 아이템들을 묶는 폼 필드 단위. 인풋/셀렉트와 동일하게 **라벨 88px 고정 + 옵션 영역**으로 구성된다.

```
/* 옵션 그룹 */
display:        flex
flex-direction: row
align-items:    center
gap:            16px    (라벨 ↔ 첫 옵션)

/* 옵션 간 간격 */
gap:            32px    (옵션 아이템 사이)

/* 라벨 */
font:           KR/Body/14-medium (14px, 500), #242424
required:       blue/500 #245EFF 별 아이콘 (8×8px)
```

옵션 갯수는 1개 · 2개 · 3개로 구성 가능하다.

---

### 라디오 버튼 (Radio Button)

라디오 버튼은 **단일 선택** 시 사용하며, 기본값으로 하나의 옵션이 항상 선택되어 있어야 한다.

---

#### 크기 및 토큰

라디오 버튼은 Medium(24×24px) 단일 크기. 원형(Ellipse) 외곽선과 내부 도트로 상태를 표현한다.

**None-check (미선택)**

| 상태 | 외곽선 색 | 내부 도트 | 배경 |
|---|---|---|---|
| Default | `#B3B3B3` | — | `#FFFFFF` |
| Disabled | `#B3B3B3` | — | `#E6E6E6` |

**Check (선택됨)**

| 상태 | 외곽선 색 | 내부 도트 색 | 배경 |
|---|---|---|---|
| Default | `#245EFF` (blue/500) | `#245EFF` | `#FFFFFF` |
| Disabled | `#B3B3B3` | `#7E7E7E` | `#E6E6E6` |

```
/* 내부 도트 위치 */
left:   29.17%
right:  29.17%
top:    29.17%
bottom: 29.17%
/* 즉 전체 크기의 약 42% 크기 중앙 배치 */
```

---

#### 라디오 아이템 (Radio Item)

```
/* radio item */
display:        flex
flex-direction: row
align-items:    center
gap:            8px

/* 텍스트 레이블 */
font:           KR/Body/14-regular (14px, 400)
color:          #242424  (Default)
color:          #B3B3B3  (Disabled)
```

---

#### 옵션 그룹 (Option Group) — 라디오 포함

체크박스 옵션 그룹과 동일한 구조. 라벨 88px 고정 + 라디오 옵션들 `gap: 32px` 배치. 단일 선택이므로 선택 해제 불가.

---

### 팝업 / 다이얼로그 (Popup / Dialogue)

팝업과 다이얼로그는 용도에 따라 두 가지 타입으로 나뉜다. **다이얼로그(Dialogue)**는 알림·경고처럼 단순 확인이 필요한 상황에, **팝업(Popup)**은 이미지·셀렉박스 등 추가 조작이 필요한 콘텐츠에 사용한다.

---

#### 공통 스타일

```
background:    #FFFFFF
border-radius: 16px
box-shadow:    0px 4px 32px rgba(0, 0, 0, 0.03)
```

---

#### 다이얼로그 (Dialogue)

텍스트 중심의 단순 확인/취소 패턴. 헤더·푸터 구분선이 없고 단일 padding 블록 안에 제목 + 서브텍스트 + 버튼이 수직 배치된다.

```
/* dialogue 컨테이너 */
display:        flex
flex-direction: column
align-items:    center
padding:        32px
gap:            24px
width:          480px     (고정)

/* ① 텍스트 블록 */
gap:            8px

/* 제목 */
font:           KR/Headline/20-bold (Noto Sans KR, 700, 20px, line-height 32px)
color:          #242424
text-align:     center

/* 서브텍스트 (옵셔널 — display:none 처리 가능) */
font:           KR/Body/14-regular (14px, 400)
color:          #7E7E7E
text-align:     center

/* ② 버튼 행 */
display:        flex
flex-direction: row
justify-content: center
gap:            8px
```

버튼 스펙 (다이얼로그 전용 크기):

| 버튼 | 배경 | 보더 | 텍스트 색 | 크기 |
|---|---|---|---|---|
| Secondary (취소) | `#FFFFFF` | 1px solid `#D9D9D9` | `#242424` | 74×36px, radius 6px |
| Primary (확인) | `#242424` | 없음 | `#FFFFFF` | 74×36px, radius 6px |

버튼 텍스트: KR/Body/14-medium (14px, 500).

---

#### 팝업 (Popup)

헤더 / 콘텐츠 / 푸터 3단 구조. 헤더와 푸터에 각각 구분선이 붙는다.

```
/* 팝업 컨테이너 */
display:        flex
flex-direction: column
align-items:    flex-start
padding:        0px
filter:         drop-shadow(0px 4px 32px rgba(0,0,0,0.03))
```

**헤더 (Frame 544)**

```
display:        flex
flex-direction: row
justify-content: space-between
align-items:    center
padding:        16px 32px
height:         64px
border-bottom:  1px solid #D9D9D9
border-radius:  16px 16px 0px 0px   ← 상단 모서리만

/* 제목 */
font:           KR/Headline/20-bold (700, 20px, line-height 32px)
color:          #242424

/* 닫기 아이콘 */
크기:           24×24px
아이콘:         icon/close
색:             #242424 (gray/800)
```

**콘텐츠 영역**

```
padding:        24px 32px
height:         flexible (기본 68px, 1080 너비는 84px)
font:           KR/Body/14-regular (14px, 400)
color:          #7E7E7E
```

**푸터 (Frame 545)**

```
display:        flex
flex-direction: row
justify-content: flex-end
padding:        20px 32px 32px
gap:            8px
height:         88px
border-top:     1px solid #D9D9D9
border-radius:  0px 0px 16px 16px   ← 하단 모서리만

/* 버튼 스펙은 다이얼로그와 동일 */
Secondary: #FFFFFF + 1px solid #D9D9D9 / Primary: #242424
각 74×36px, border-radius 6px
```

---

#### 너비 규격

| 타입 | 너비 | 용도 |
|---|---|---|
| Dialogue | 480px (고정) | 단순 알림·확인 |
| Popup 480 | 480px | 소형 폼·간단 콘텐츠 |
| Popup 640 | 640px | 중형 콘텐츠 |
| Popup 720 | 720px | 중대형 콘텐츠 |
| Popup 1080 | 1080px | 대형 폼·테이블 포함 |

팝업 높이는 Flexible. **최대 높이는 디스플레이(Footer 제외) 80%** 로 제한되며, 이를 초과하는 경우 콘텐츠 영역 내에 스크롤이 발생한다. 헤더(64px)와 푸터(88px)는 항상 고정(Fix)된다.

---

#### 내부 여백 상세 (너비 480 기준)

```
/* 팝업 상하 여백 */
헤더 상하:         16px (padding: 16px 32px)
콘텐츠 상하:       24px (padding: 24px 32px)
푸터 상:           20px / 하: 32px

/* 좌우 패딩 */
전 영역 공통:      32px

/* 콘텐츠 내부 너비 (480 기준) */
416px = 480 - 32*2

/* 콘텐츠 내부 너비 (640 기준) */
576px = 640 - 32*2

/* 콘텐츠 내부 너비 (720 기준) */
656px = 720 - 32*2

/* 콘텐츠 내부 너비 (1080 기준) */
1016px = 1080 - 32*2
```

---

### 토스트 메시지 (Toast Message)

사용자가 수행한 작업의 성공·실패 또는 상태 변경에 대한 결과를 즉각적으로 피드백할 때 사용한다. 화면 위에 일시적으로 떠오르는 인라인 알림 레이어.

---

#### 공통 스펙

```
/* 토스트 컨테이너 */
display:         flex
flex-direction:  row
justify-content: space-between
align-items:     center   (1줄) / flex-start (2줄)
padding:         12px 16px
gap:             4px
width:           360px
border-radius:   8px
box-shadow:      0px 10px 15px rgba(0, 0, 0, 0.05)

/* 내부 레이아웃 */
좌측: 아이콘(24×24px) + 텍스트, gap 4px
우측: 닫기 아이콘(icon/close, 16×16px, #FFFFFF)
```

텍스트: KR/Body/14-medium (Noto Sans KR, 500, 14px, line-height 20px), `color: #FFFFFF`.

---

#### 타입 2종

**Success**

```
background:   #245EFF  (blue/500)
아이콘:       icon/check-oval (24×24px, #FFFFFF)
```

**Error**

```
background:   #F94A4A  (red/500)
아이콘:       icon/alert-oval (24×24px, #FFFFFF)
```

---

#### 줄 수에 따른 높이

| 줄 수 | 높이 | align-items |
|---|---|---|
| 1줄 | 48px | center |
| 2줄 | 66px (success) / 64px (error) | flex-start |

2줄일 때 닫기 아이콘 컨테이너는 `padding-top: 4px`으로 상단 정렬.

---

#### 아이콘 상세

```
/* icon/check-oval (success) */
크기:    24×24px
내부:    Subtract(체크 모양), 12.5% inset, #FFFFFF

/* icon/alert-oval (error) */
크기:    24×24px
내부:    Vector(느낌표 모양), 12.5% inset, #FFFFFF

/* icon/close (닫기) */
크기:    16×16px
내부:    Union(X 모양), 16.67% inset, #FFFFFF
```

---

### 테이블

무신사 로지스틱스의 핵심 데이터 컴포넌트. 컬럼 헤더 · 셀 · 보더 토큰이 독립적으로 설계되어 있으며, 상태 기반 행(Row) 강조와 다양한 셀 타입을 지원한다.

#### 테이블 컨테이너

```
border:        1px solid #E6E6E6  (color.border.table)
border-radius: 8px
box-shadow:    0px 10px 15px rgba(0, 0, 0, 0.05)
background:    #FFFFFF
```

---

#### 컬러 토큰 요약

| 요소 | 토큰 | 값 |
|---|---|---|
| 컬럼 헤더 배경 | `color.bg.table.column` | `gray/100` #F1F1F1 |
| 선택된 컬럼 배경 | `color.bg.table.column-selected` | `gray/200` #E6E6E6 |
| 컬럼 그룹명 배경 | `color.bg.table.column-group` | `gray/300` #D9D9D9 |
| 컬럼 헤더 텍스트 | `color.text.table.column` | `gray/600` #7E7E7E |
| 편집 가능 컬럼 헤더 텍스트 | — | `gray/800` #242424 |
| 셀 텍스트 | `color.text.table.cell` | `gray/800` #242424 |
| 카운트 텍스트 | `color.text.table.count` | `blue/500` #245EFF |
| 테이블 외곽 보더 | `color.border.table` | `gray/200` #E6E6E6 |
| 셀 구분 보더 | `color.border.divider` | `gray/300` #D9D9D9 |

---

#### 컬럼 헤더 (Column Header)

```
height:        34px
background:    #F1F1F1
border-bottom: 1px solid #E6E6E6
font:          KR/Body/12-medium  (Noto Sans KR, 500, 12px)
color:         #7E7E7E  →  편집 가능 컬럼은 #242424
```

정렬 아이콘, 리사이즈 핸들이 선택적으로 포함되며, 컬럼이 선택(sort active)된 경우 배경이 `gray/200`(#E6E6E6)으로 변경된다.

---

#### 행(Row) 상태

행 높이는 **26px**. 상태 전환은 배경색 변화만으로 표현한다.

| 상태 | 배경 | 비고 |
|---|---|---|
| Default | `#FFFFFF` (흰색) | 기본 데이터 행 |
| Hover | `#E6E6E6` (`gray/200`) | 마우스 오버 |
| Selected (단일 선택) | `#E9EFFF` (`rgba(36,94,255,0.1)`) | 클릭 선택된 행 |
| Checked (체크박스 선택) | `#8EB8FF` (`blue/200`) | 체크된 행 |
| Add (추가 행) | `#B8D4FF` (`blue/100`) | 행 추가 입력 상태 |

---

#### 셀 타입 (Cell Types)

| 타입 | 설명 | 주요 스타일 |
|---|---|---|
| **Default** | 읽기 전용 텍스트 | KR/Body/12-regular, `#242424` |
| **Edit** | 인라인 편집 가능 셀 | 포커스 시 `border: 1px solid #245EFF`, 드롭다운 아이콘 표시 |
| **Link** | 클릭 가능한 링크 셀 | `color: #1F53E6`, `text-decoration: underline` |
| **Check** | 체크박스 내장 셀 | 체크 시 행 전체 `#8EB8FF` 적용 |
| **State** | 상태 도트 + 레이블 | 컬러 도트(4px 원) + 상태 텍스트 조합 |
| **Button** | 인라인 버튼 | 셀 내부 소형 버튼, height 24px, border-radius 4px |

---

#### 탭 (Tab)

테이블 상단 또는 필터 영역 상단에 위치하는 탭 컴포넌트.

| 상태 | 하단 보더 | 폰트 굵기 | 텍스트 컬러 |
|---|---|---|---|
| Active | `2px solid #245EFF` | 700 (Bold) | `#242424` |
| Enabled (비활성) | 없음 | 400 (Regular) | `#929292` |
| Hover | 없음 | 400 | `#242424` |
| Disabled | 없음 | 400 | `#B3B3B3` |

탭 텍스트 우측에 카운트 배지가 포함될 수 있으며, 카운트 폰트는 Noto Sans Mono 사용.

---

#### 카운트 / 다운로드 바 (Count Bar)

테이블 상단 우측에 위치하는 선택 수 · 로딩 수 · 전체 수 표시 영역.

```
font:    Noto Sans Mono, bold, 12px
선택 수: #245EFF (blue/500)
로딩 수: #7E7E7E (gray/600)
전체 수: #7E7E7E (gray/600)
구분선:  1px solid #D9D9D9
```

---

#### 리사이즈 바 (Resizing Bar)

컬럼 너비 조절 핸들.

```
배경:          #F1F1F1
핸들:          background: #245EFF, border-radius: 4px
너비:          4px (트랙) / 2px (핸들 활성)
호버 시:       핸들 opacity 1, 트랙 background #E6E6E6
```

---

#### 빈 상태 (Empty State)

조회 결과 없음 상태.

```
아이콘:    검색 아이콘, color: #929292, size: 24px
제목:      "조회결과 없음"  KR/Body/14-medium, #7E7E7E
서브텍스트: "검색 조건을 변경해 주세요"  KR/Body/12-regular, #B3B3B3
정렬:      수직·수평 가운데 정렬
```

---

#### 하단 버튼 바 (Btn_Bottom)

테이블 하단 액션 영역에 배치되는 버튼 그룹.

```
height:        36px
padding:       8px 24px
border-radius: 6px
```

| 변형 | 배경 | 텍스트 | 보더 |
|---|---|---|---|
| 비활성 (Disabled) | `#E6E6E6` | `#B3B3B3` | 없음 |
| 활성 Secondary | `#FFFFFF` | `#242424` | `1px solid #E6E6E6` |
| 활성 Primary | `#242424` | `#FFFFFF` | 없음 |

---

#### 인라인 편집 저장 팝업

셀 인라인 편집 완료 후 나타나는 확인 팝업.

```
background:    rgba(36, 36, 36, 0.7)
border-radius: 8px
padding:       8px 12px
버튼: 취소 (Secondary Inverse) / 저장 (Primary Inverse)
```

---

#### 툴팁 (Tooltip/Row)

행 또는 셀 위에 표시되는 인라인 툴팁.

```
background:    rgba(36, 36, 36, 0.7)
border-radius: 8px
padding:       8px 12px
font:          KR/Body/12-medium, #FFFFFF
```

---

#### 스크롤바

```
트랙 배경:   #FAFAFA
트랙 보더:   1px solid #F1F1F1
썸(thumb): background: #D9D9D9, border-radius: 4px
너비:        6px
```

---

#### 필터 영역 (Filter Area)

테이블 위 검색·필터 컨트롤 영역.

```
background:    #F1F1F1
border-radius: 8px
padding:       12px 16px
```

내부 인풋 스타일:

```
height:     24px
background: #FFFFFF
border:     1px solid #E6E6E6
font:       KR/Body/14-medium
label:      KR/Body/14-medium, #242424
```

---

#### 페이지 타이틀 영역

테이블 상단 페이지 헤더 구조.

```
제목:         KR/Headline/20-bold, #242424
브레드크럼:    KR/Body/14-regular, #7E7E7E
센터 선택 항목: background: #B8D4FF (blue/100)
```

---

## Do's and Don'ts

### Do
- `blue/500` (#245EFF)는 **Primary Inverse 버튼, 활성 보더, 성공/하이라이트/링크 텍스트**에만 사용한다.
- LNB 다크 패널(`gray/900`) 위에서는 반드시 **Inverse 토큰**(`-inverse` 접미사)을 사용한다.
- 테이블 컬럼 헤더에는 `color.bg.table.column`(`gray/100`)을 적용하여 셀 영역과 시각적으로 구분한다.
- 숫자 데이터(송장번호, 수량, 코드 등)는 **Noto Sans Mono**를 사용하여 자릿수 정렬을 보장한다.
- 상태 전환(hover → pressed)은 **배경 명도 변화**로만 표현하며, 그림자나 크기 변화를 추가하지 않는다.
- 보더는 항상 `1px solid`로 통일하며 `gray/100`(#F1F1F1) 또는 `gray/200`(#E6E6E6) 중 맥락에 맞게 선택한다.

### Don't
- `blue/500`을 라이트 배경의 Primary 버튼 기본 배경으로 사용하지 않는다. 라이트 배경 Primary 버튼 기본값은 `gray/800`이다.
- `gray/700`(#393939)의 의미를 텍스트 컬러와 배경 컬러 두 용도로 혼동하지 않는다. 텍스트에서는 기본 잉크 컬러, 배경에서는 LNB hover 및 Inverse 인풋 배경이다.
- 그림자(box-shadow)를 UI 위계 표현에 사용하지 않는다. 모든 뎁스는 보더와 배경 변화로 표현한다.
- `red/500`(#F94A4A)을 에러 이외의 목적(장식, 강조)으로 사용하지 않는다.
- 한글 본문 폰트(Noto Sans KR)를 숫자/코드 데이터에 사용하지 않는다. 숫자는 반드시 Noto Sans Mono를 사용한다.
- 폰트 굵기를 600으로 설정하지 않는다. 본문 시스템의 굵기 사다리는 400 / 500 / 700이다. (600은 Pretendard UI 레이블 전용)

---

## 아이콘 시스템

모든 아이콘은 `24×24px` 고정 크기이며, 썸네일 배경은 `#F9F9F9` (border-radius 8px). 아이콘 색상은 컨텍스트에 따라 3가지 컬러를 사용한다.

| 컬러 | 값 | 용도 |
|---|---|---|
| `gray/600` | #7E7E7E | 기본 UI 아이콘 (비활성, 보조) |
| `gray/800` | #242424 | 강조 액션 아이콘, 닫기 등 |
| `blue/300` | #649CFF | 물류 프로세스 전용 아이콘 (LNB 활성 상태) |

---

### 내비게이션 & 레이아웃

| 아이콘명 | 컬러 | 설명 |
|---|---|---|
| `menu` | `gray/600` | 햄버거 메뉴 |
| `close` | `gray/800` | 닫기(X) |
| `home` | `gray/600` | 홈 |
| `home-small` | `gray/600` | 소형 홈 (브레드크럼용) |
| `chevrons-right` | `gray/600` | 오른쪽 이중 화살표 |
| `chevrons-left` | `gray/600` | 왼쪽 이중 화살표 |
| `chevrons-down` | `gray/600` | 아래쪽 이중 화살표 |
| `chevrons-up` | `gray/600` | 위쪽 이중 화살표 |
| `pin` | `blue/300` | 센터 핀 고정 |

---

### 방향 화살표

| 아이콘명 | 컬러 | 설명 |
|---|---|---|
| `arrow-down-filled` | `gray/500` | 채워진 아래 화살표 (드롭다운) |
| `arrow-up-filled` | `gray/500` | 채워진 위 화살표 |
| `arrow-right-filled` | `gray/500` | 채워진 오른쪽 화살표 |
| `arrow-left-filled` | `gray/500` | 채워진 왼쪽 화살표 |
| `arrow-left-line` | `gray/800` | 선형 왼쪽 화살표 |
| `arrow-right-line` | `gray/800` | 선형 오른쪽 화살표 |
| `arrow-down-line` | `gray/800` | 선형 아래 화살표 |
| `arrow-up-line` | `gray/800` | 선형 위 화살표 |
| `arrow-down-thin line` | `gray/800` | 얇은 선형 아래 화살표 |
| `arrow-up-thin line` | `gray/800` | 얇은 선형 위 화살표 |

---

### 정렬 & 테이블 조작

| 아이콘명 | 컬러 | 설명 |
|---|---|---|
| `descending` | `gray/600` | 내림차순 정렬 |
| `ascending` | `gray/600` | 오름차순 정렬 |
| `sort-ascending` | `gray/800` | 정렬 오름차순 (컬럼 헤더) |
| `sort-descending` | `gray/800` | 정렬 내림차순 (컬럼 헤더) |
| `sorting-down` | `gray/600` | 소팅 다운 핸들 |
| `handle` | `gray/600` | 드래그 핸들 (행 순서 조절) |
| `drag-h` | `gray/800` | 수평 드래그 |
| `drag-v` | `gray/800` | 수직 드래그 |
| `transform` | `gray/800` | 변환/이동 |

---

### 액션 & 인터랙션

| 아이콘명 | 컬러 | 설명 |
|---|---|---|
| `search` | `gray/500` | 검색 |
| `calender` | `gray/500` | 날짜 선택 |
| `plus` | `gray/500` | 추가 |
| `minus` | `gray/500` | 제거 |
| `edit` | `gray/500` | 편집 |
| `check` | `blue/500` | 체크 확인 (체크박스 선택 상태) |
| `setting` | `gray/800` | 설정 |
| `more` | `gray/600` | 더보기(···) |
| `reset` | `gray/600` | 초기화 |
| `newtab` | `gray/800` | 새 탭 열기 |
| `pin` | `blue/300` | 고정 |
| `star` | `gray/600` | 즐겨찾기 |
| `tip` | `gray/800` | 팁/도움말 |
| `ban` | `gray/800` | 금지/차단 |
| `info` | `gray/800` | 정보 |
| `trash` | `gray/800` | 삭제 |
| `copy` | `gray/800` | 복사 |
| `print` | `gray/800` | 인쇄 |
| `delete` | `gray/500` | 삭제(소프트) |

---

### 다운로드 & 업로드

| 아이콘명 | 컬러 | 설명 |
|---|---|---|
| `download` | `gray/800` | 다운로드 |
| `upload` | `gray/800` | 업로드 |
| `download-all` | `gray/800` | 전체 다운로드 |
| `download-template` | `gray/800` | 템플릿 다운로드 |

---

### LNB 메뉴 (물류 도메인)

LNB 전용 아이콘. 기본 상태는 `gray/600`, 활성(active) 상태는 `blue/300`(#649CFF)으로 전환된다.

| 아이콘명 | 설명 |
|---|---|
| `master` | 마스터 데이터 |
| `strategy` | 전략/정책 |
| `manager` | 관리자 |
| `system` | 시스템 |
| `dashboard` | 대시보드 |
| `home` | 홈 |
| `inbound` | 입고 |
| `outbound` | 출고 |
| `stock` | 재고 |
| `putaway` | 입고 적치 |
| `bagging` | 포장 |

---

### 물류 프로세스 전용 (`blue/300` #649CFF 고정)

프로세스 실행 맥락(작업 지시, 이동, 반품 등)에서 사용되는 아이콘으로, 항상 `blue/300`을 사용한다.

| 아이콘명 | 설명 |
|---|---|
| `sorting` | 분류 작업 |
| `picking` | 피킹 |
| `move` | 이동 |
| `return` | 반품 |
| `sorting-return` | 분류 반품 |
| `inbound-return` | 입고 반품 |
| `putaway-return` | 적치 반품 |
| `search-location` | 로케이션 검색 |
| `search-product` | 상품 검색 |
| `arrival-return` | 입하 반품 |

---

### 상태 & 알림

| 아이콘명 | 컬러 | 설명 |
|---|---|---|
| `noti-off` | `gray/500` | 알림 비활성 |
| `noti-on` | `gray/800` + `yellow/500` 도트 | 알림 활성 (노란 뱃지) |
| `loading` | `gray/600` | 로딩 스피너 |
| `check-oval` | `gray/500` | 원형 체크 확인 |
| `alert-oval` | `red/500` #F94A4A | 원형 경고 |
| `user` | `gray/500` | 사용자 |

---

## 반응형 & 기기 대응

무신사 로지스틱스 시스템은 **Web(데스크탑)**과 **PDA(핸드헬드 스캐너)** 두 가지 폼팩터를 지원한다.

| 환경 | 특성 |
|---|---|
| Web | 1280–1440px 기준 레이아웃, 풀 LNB 표시, 고밀도 테이블 데이터 |
| PDA | 핸드헬드 기기 최적화, 터치 타겟 최소 44px, 단순화된 인터페이스 |

폰트 스케일 자체는 동일하게 유지하되, PDA 환경에서는 Display/32 규격보다 Headline 규격이 주로 사용된다.

---

## 알려진 미비 사항

- 체크박스(테이블 셀 내 포함 제외), 라디오 버튼, 토글 스위치 등 독립형 폼 컴포넌트 토큰이 명세되지 않았다.
- 뱃지(Badge), 태그(Tag), 토스트(Toast) 컴포넌트의 컬러 토큰이 별도 시트로 분리되지 않았다.
- 아이콘별 SVG path 데이터는 Figma 라이브러리에만 존재하며, 본 문서에는 이름·컬러·용도만 기술되어 있다.
- 호버(Hover) 상태는 토큰 명세에 포함되어 있으나 실제 인터랙션 애니메이션 사양(트랜지션 시간, 이징)은 문서화되어 있지 않다.
- 모바일(PDA) 전용 컴포넌트 변형 규격이 별도 명세되지 않았다.
- 다크모드 전체 페이지 테마(LNB Inverse 전용이 아닌 전체 화면 다크)는 분석된 시트에 포함되어 있지 않다.
