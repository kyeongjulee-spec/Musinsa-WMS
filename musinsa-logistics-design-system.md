# 무신사 물류 WMS — 디자인 시스템 문서

> **기준 화면**: 입고 › 입고관리 › 전체 펼침 / 출고 › Wave 관리 / 시스템 › 사용자 / 재고이동지시  
> **캔버스 크기**: 1920 × 1080 px  
> **배경**: `#FFFFFF`  
> **최종 업데이트**: 시스템_사용자 / 재고이동지시 화면 반영

---

## 1. 컬러 팔레트

### Primary / Key Colors

| 토큰 | Hex | 용도 |
|---|---|---|
| Key Blue | `#245EFF` | CTA 버튼, 활성 아이콘, 카운트 강조, 리사이즈 핸들 |
| Light Blue (Badge BG) | `#B8D4FF` | 센터 선택 배지 배경 |

### Grayscale

| 토큰 | Hex | 용도 |
|---|---|---|
| gray/900 (LNB BG) | `#242424` | LNB 배경, 기본 텍스트, Primary 버튼 BG |
| gray/800 | `#393939` | LNB 활성 메뉴 배경 |
| gray/700 | `#050505` | LNB 현재 선택 메뉴 배경 |
| gray/500 | `#929292` | 비활성 아이콘, 보조 텍스트, 카운트 비활성 |
| gray/400 | `#7E7E7E` | 비활성 아이콘, 일반 보조 텍스트 |
| gray/300 | `#D9D9D9` | 구분선, Disabled 버튼 BG, 비활성 셀 BG |
| gray/200 | `#E6E6E6` | 테이블 셀 하단 border, Disabled 버튼 border |
| gray/100 | `#F1F1F1` | 필터 영역 BG, 테이블 헤더 BG, 리사이즈 바 BG |
| gray/50 | `#FAFAFA` | 스크롤바 배경 |
| white | `#FFFFFF` | 기본 배경, 입력 필드, 버튼 |
| text/placeholder | `#B3B3B3` | 입력 플레이스홀더, 비활성 라벨 |

### Semantic

| 토큰 | Hex | 용도 |
|---|---|---|
| accent/yellow | `#FFC700` | 별 아이콘 (화주 필드 앞 마크) |
| active/icon-blue | `#649CFF` | LNB 현재 선택 메뉴 아이콘 (출고·입고 활성) |
| user/center-text | `#245EFF` | LNB 확장 시 센터 이름 텍스트 강조 |

### Status Tag 컬러

> 피그마 StatusTag 컴포넌트 CSS 기준. `tinted` 레이어가 있는 variant는 base BG 위에 `rgba(0,0,0,0.05)` 오버레이가 중첩됩니다.

| 토큰 | BG (base) | tinted overlay | Text | badge dot | 비고 |
|---|---|---|---|---|---|
| status/default | `#FFFFFF` | `rgba(0,0,0,0.05)` ✓ | `#666666` | `#666666` | 중립 상태 |
| status/progress-primary | `#E2F1FF` | — | `#245EFF` | `#245EFF` | 진행(primary/blue) |
| status/progress-secondary | `#E6FFFB` | `rgba(0,0,0,0.05)` ✓ | `#08979C` | `#08979C` | 진행(secondary/teal) |
| status/progress-tertiary | `#F9F0FF` | `rgba(0,0,0,0.05)` ✓ | `#722ED1` | `#722ED1` | 진행(tertiary/purple) |
| status/success | `#ECFFEC` | `rgba(0,0,0,0.05)` ✓ | `#1EA514` | `#1EA514` | 완료 |
| status/warning | `#FFF4E5` | — | `#DB7F00` | `#DB7F00` | 주의·경고 |
| status/critical | `#FFECEC` | — | `#D50F0E` | `#D50F0E` | 중단·즉시 조치 필요 |

### Progress Bar 컬러 (출고_Wave 신규)

| 상태 | 배경 색상 | 설명 |
|---|---|---|
| 일반 진행 | `rgba(36,94,255,0.15)` | 파란 반투명 fill |
| 완료(100%) | `rgba(36,94,255,0.15)` | 동일 색상, 전체 채움 |
| 선택된 행(Highlighted) | `#649CFF` (solid) | 파란 solid fill (B8D4FF 배경 행) |
| 비활성 | `#E6E6E6` | 트랙 배경, 단포 등 미시작 |

---

## 2. 타이포그래피

### 폰트 패밀리

| 패밀리 | 용도 |
|---|---|
| `Noto Sans KR` | 한국어 UI 텍스트 전반 |
| `Noto Sans Mono` | 숫자·코드성 데이터 (테이블 셀, 카운트 배지, 진행률) |
| `Pretendard` | Status Tag, Filter Tag 라벨 (Ant Design / 외부 컴포넌트 계열) |

### 스케일

| 토큰 | Font | Weight | Size | Line-height | 사용처 |
|---|---|---|---|---|---|
| KR/Headline/20-bold | Noto Sans KR | 700 | 20px | 32px | 페이지 제목 |
| KR/Headline/16-bold | Noto Sans KR | 700 | 16px | 24px | 테이블 섹션 제목, 현황 카드 타이틀 |
| KR/Headline/16-regular | Noto Sans KR | 400 | 16px | 24px | 탭 비활성 텍스트 |
| KR/Body/14-bold | Noto Sans KR | 700 | 14px | 20px | 선택 센터 배지 텍스트, 필터 열기 버튼 |
| KR/Body/14-medium | Noto Sans KR | 500 | 14px | 20px | 필터 라벨, 버튼 라벨, 바텀 상태 텍스트 |
| KR/Body/14-regular | Noto Sans KR | 400 | 14px | 20px | 브레드크럼, "내 작업만 보기" 체크박스 라벨 |
| KR/Body/12-medium | Noto Sans KR | 500 | 12px | 18px | 테이블 컬럼 헤더, 닫기 버튼 텍스트 |
| KR/Body/12-regular | Noto Sans KR | 400 | 12px | 18px | Empty 안내 서브텍스트, 테이블 셀(KR) |
| EN/Headline/24-bold | Noto Sans Mono | 700 | 24px | 36px | 현황 카드 주요 수치 (미완료 수) |
| EN/Headline/16-bold | Noto Sans Mono | 700 | 16px | 24px | 현황 카드 보조 수치 (완료 수) |
| EN/Body/12-bold | Noto Sans Mono | 700 | 12px | 18px | 카운트 배지 숫자, 진행률 % |
| EN/Body/12-regular | Noto Sans Mono | 400 | 12px | 18px | 테이블 데이터 셀 값, 진행 분수 표시 |
| EN/Body/12-medium | Noto Sans Mono | 500 | 12px | 18px | 비활성 단포 라벨 |
| Pretendard/text-xs-medium | Pretendard | 500 | 12px | 150% | Status Tag 라벨 |
| Pretendard/text-xs-semibold | Pretendard | 600 | 12px | 150% | Status Tag 카운트 |
| Pretendard/text-m-medium | Pretendard | 500 | 14px | 140% | Filter Tag 라벨 |
| Pretendard/text-m-semibold | Pretendard | 600 | 14px | 140% | Filter Tag 카운트 |

---

## 3. 이펙트

| 토큰 | 값 | 용도 |
|---|---|---|
| Shadow/01 | `drop-shadow(0px 10px 15px rgba(0,0,0,0.05))` | 메인 테이블 컨테이너 |

---

## 4. 레이아웃 구조

### 입고관리 (전체 펼침)

```
┌──────────────────────────────────────────────┐
│  LNB (88px)  │  Content Area (1832px)         │
│              │  padding: 24px 32px            │
│              │  gap: 12px                     │
│              │  ┌──────────────────────────┐  │
│              │  │ Page Title (32px)        │  │
│              │  ├──────────────────────────┤  │
│              │  │ Filter Area (160px)      │  │
│              │  ├──────────────────────────┤  │
│              │  │ Table 1 (상단 / 552px)   │  │
│              │  ├──────────────────────────┤  │
│              │  │ Resize Bar (24px)        │  │
│              │  ├──────────────────────────┤  │
│              │  │ Table 2 (중단 / 460px)   │  │
│              │  ├──────────────────────────┤  │
│              │  │ Resize Bar (24px)        │  │
│              │  ├──────────────────────────┤  │
│              │  │ Table 3 (하단 / 460px)   │  │
│              │  └──────────────────────────┘  │
└──────────────────────────────────────────────┘
```

### 출고 Wave 관리

```
┌──────────────────────────────────────────────┐
│  LNB (88px)  │  Content Area (1768px)         │
│              │  left: 120px, top: 24px        │
│              │  gap: 20px                     │
│              │  ┌──────────────────────────┐  │
│              │  │ Page Title (32px)        │  │
│              │  ├──────────────────────────┤  │
│              │  │ Filter Area (44px, 접힘) │  │
│              │  ├──────────────────────────┤  │
│              │  │ Summary (출고현황, 176px) │  │
│              │  │  ├ 타이틀 + 기준시각     │  │
│              │  │  ├ Filter Tag Group      │  │
│              │  │  └ 현황 카드 Box (6종)   │  │
│              │  ├──────────────────────────┤  │
│              │  │ Table (상단, 654px)      │  │
│              │  │  └ Tab Group + 리스트    │  │
│              │  ├──────────────────────────┤  │
│              │  │ Resize Bar (24px)        │  │
│              │  ├──────────────────────────┤  │
│              │  │ Table (하단, 240px)      │  │
│              │  │  └ Tab Group             │  │
│              │  └──────────────────────────┘  │
└──────────────────────────────────────────────┘
```

---

## 5. 컴포넌트 스펙

### 5-1. LNB (Left Navigation Bar)

```
width: 88px
height: 1368px ~ 1744px (페이지별 가변)
background: #242424
display: flex
flex-direction: column
justify-content: space-between
```

#### Top Logo 영역

```
width: 88px
height: 64px
padding: 0px 24px
gap: 16px
border-radius: 16px
아이콘: 32×32px  (icon/chevrons-right)
아이콘 색상: #7E7E7E
```

#### LNB 메뉴 목록

```
position: absolute
left: 16px, top: 64px
width: 56px
height: 568px
gap: 16px
```

**상단 유저 영역 (확장 상태)**

```
width: 56px, height: 48px
background: #393939
border-radius: 4px
padding: 12px 16px
gap: 60px (출고) / gap: 4px (입고)

[축소 상태] 아이콘(user): 24×24px, color: #7E7E7E
[확장 상태] 센터명 텍스트: KR/Body/14-medium, color: #245EFF (예: "신여주1")
            아이콘(user): 24×24px, color: #929292
```

**lnb/menu 기본 상태**

```
width: 56px, height: 56px
padding: 16px
gap: 10px
아이콘: 24×24px, color: #7E7E7E
```

**lnb/menu 활성 상태 (현재 페이지)**

```
background: #050505
border-radius: 8px

입고 페이지: 아이콘(inbound), color: #649CFF
출고 페이지: 아이콘(outbound), color: #649CFF
```

#### LNB 하단 다운로드 버튼 영역

```
width: 88px, height: 88px
padding: 16px
background: #242424
border-top: 1px solid #393939
아이콘(download): 24×24px, color: #929292
```

---

### 5-2. Page Title

```
width: 1767px, height: 32px
display: flex
flex-direction: row
justify-content: space-between
align-items: flex-end
```

**좌측 — 제목 + 센터 배지**

```
gap: 16px

제목 텍스트: KR/Headline/20-bold, color: #242424
  └ 예시: "재고조회"

구분선(divider): 2px × 16px, background: #D9D9D9

센터 아이콘: 16×16px icon/pin, color: #7E7E7E
센터 텍스트: KR/Body/14-medium, color: #7E7E7E
  └ 예시: "센터"

센터 배지:
  background: #B8D4FF
  border-radius: 6px
  padding: 4px 8px
  gap: 2px
  텍스트: KR/Body/14-bold, color: #242424
    └ 예시: "여주1센터"
  아이콘(arrow-down-filled): 24×24px, polygon color: #242424
```

**우측 — 브레드크럼**

```
gap: 12px
아이콘(home-small): 24×24px, color: #929292
텍스트 "Home": KR/Body/14-regular, color: #7E7E7E
구분선: 1px × 8px, background: #D9D9D9
1 depth: KR/Body/14-regular, color: #7E7E7E
구분선
2 depth: KR/Body/14-medium, color: #242424  ← 현재 위치 강조
```

---

### 5-3. Filter Area

**접힘 상태 (출고 Wave 기본값)**

```
width: 1768px
height: 44px
background: #F1F1F1
border-radius: 8px
padding: 8px 0px
display: flex
justify-content: center
align-items: center

[검색 필터 열기] 버튼:
  아이콘(chevrons-down): 24×24px, color: #7E7E7E
  텍스트: KR/Body/14-bold, color: #7E7E7E, "검색 필터 열기"
```

**펼침 상태 (입고관리 기본값)**

```
width: 1768px
height: 160px
background: #F1F1F1
border-radius: 8px
display: flex
flex-direction: column
```

#### 필터 행 구조 (Sec_01)

```
padding: 12px 0px
gap: 6px
3개 행(row) 포함, 각 행: padding 0px 20px, gap 40px
각 행: 3개 input 컴포넌트, flex-grow:1로 균등 분할 (≈549px each)
```

#### 필터 입력 컴포넌트 (input)

```
display: flex
flex-direction: row
align-items: center
gap: 16px

라벨 영역:
  width: 88px, height: 20px
  font: KR/Body/14-medium, color: #242424

입력 필드:
  background: #FFFFFF
  border: 1px solid #D9D9D9
  border-radius: 4px
  padding: 2px 8px
  height: 24px
  flex-grow: 1
```

**날짜 범위 입력 (Date Range)**

```
플레이스홀더: "YYYY-MM-DD ~ YYYY-MM-DD"
  font: KR/Body/14-regular, color: #B3B3B3
캘린더 아이콘: 16×16px, color: #929292
```

**텍스트 입력 (Search)**

```
플레이스홀더: KR/Body/14-regular, color: #B3B3B3
플러스 아이콘: 16×16px, color: #929292
```

**드롭다운 셀렉트**

```
arrow-down-filled: 16×16px, polygon color: #929292
텍스트: KR/Body/14-regular, color: #B3B3B3 (미선택) / #242424 (선택됨)
```

**복합 드롭다운 (화주 — 타입+이름)**

```
타입 셀렉트: width 126px
이름 셀렉트: flex-grow:1 (≈315px)
```

**별 마크 아이콘 (화주 라벨 앞)**

```
width: 8px, height: ~8px
색상: #FFC700 (별), #000000 (선)
```

**"내 작업만 보기" 체크박스 (출고 Wave 전용)**

```
gap: 8px
checkbox: 24×24px (출고용 대형)
  border: 1px solid #D9D9D9
  border-radius: 4px
  background: #FFFFFF
label: KR/Body/14-medium, color: #242424
```

#### 필터 액션 버튼 영역

```
width: 1768px, height: 36px
display: flex
justify-content: flex-end (버튼은 우측 정렬)
```

**검색 필터 닫기 버튼 (중앙)**

```
padding: 8px 16px
gap: 4px
아이콘(chevrons-up): 18×18px, color: #7E7E7E
텍스트: KR/Body/12-medium, color: #7E7E7E, "검색 필터 닫기"
```

**초기화 버튼**

```
width: 120px, height: 36px
background: #FFFFFF
border: 1px solid #D9D9D9
border-radius: 6px
padding: 8px 24px
label: KR/Body/14-medium, color: #242424, "초기화"
```

**검색 버튼**

```
width: 120px, height: 36px
background: #242424
border-radius: 6px
padding: 8px 24px
label: KR/Body/14-medium, color: #FFFFFF, "검색"
```

---

### 5-4. 테이블 컴포넌트

#### 전체 컨테이너

```
width: 1768px
background: #FFFFFF
border: 1px solid #E6E6E6
border-radius: 8px 8px 0px 0px  (상단) | 0px (중단) | 0px 0px 8px 8px (하단)
filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.05))
```

#### Tab Group (출고 Wave 신규)

```
width: 1766px, height: 40px (상단 테이블) / 48px (하단 테이블)
padding: 0px 16px
background: #FFFFFF
border-bottom: 1px solid #E6E6E6

탭 요소 (활성):
  padding: 8px 12px
  border-bottom: 2px solid #245EFF
  텍스트: KR/Headline/16-bold, color: #242424

탭 요소 (비활성):
  padding: 8px 12px
  border-bottom: none
  텍스트: KR/Headline/16-regular, color: #929292
```

#### List Head (테이블 상단 툴바)

```
height: 44px
padding: 0px 16px
display: flex
flex-direction: row
justify-content: space-between (입고) / flex-start with gap:20px (출고)
align-items: center
background: #FFFFFF
```

**카운트 배지**

```
gap: 12px
선택 수: EN/Body/12-bold, color: #245EFF
구분선: 1px × 8px, #D9D9D9
전체 수: EN/Body/12-bold, color: #929292
구분선
페이지 수: EN/Body/12-bold, color: #929292
```

**"내 작업만 보기" 체크박스 (출고 리스트헤드)**

```
gap: 8px
checkbox: 16×16px
  border: 1px solid #B3B3B3
  border-radius: 2px
  background: #FFFFFF
label: KR/Body/14-regular, color: #7E7E7E
```

**버튼 그룹 (우측)**

```
gap: 8px ~ 12px

[엑셀 다운로드]
  width: 131px, height: 28px
  border: 1px solid #D9D9D9
  border-radius: 6px
  아이콘(download): 16×16px, color: #242424
  label: KR/Body/14-medium, color: #242424

[Wave 생성 등 CTA]
  width: 120px, height: 28px
  background: #242424
  border-radius: 6px
  label: KR/Body/14-medium, color: #FFFFFF
```

#### Table Header (T_Head)

```
height: 34px
background: #F1F1F1
border-bottom: 1px solid #F1F1F1 (입고) / border: 1px solid #F1F1F1 (출고)
```

**체크박스 셀**

```
width: 32px
padding: 8px
checkbox: 16×16px
  border: #B3B3B3, border-radius: 2px (출고) / 4px (입고)
  background: #FFFFFF
```

**컬럼 셀**

```
height: 34px
padding: 8px
background: #F1F1F1
border-bottom: 1px solid #E6E6E6

셀간 divider:
  일반: 1px × 16px, background: #D9D9D9
  섹션 구분 강조: 1px × 34px (full-height), background: #929292

타이틀 텍스트: KR/Body/12-medium
  일반: color: #929292
  강조(✎ 표시 컬럼): color: #242424
```

**출고 Wave 테이블 컬럼 너비 목록**

| 순서 | 너비 | 비고 |
|---|---|---|
| checkbox | 32px | — |
| col 1–2 | 140px × 2 | Wave번호, Wave명 |
| 상태 셀 | 92px | statusTag |
| col 4–5 | 140px, 104px | — |
| 수량 셀 | 62px | 숫자, right-align |
| progress×3 | 200px × 3 | 피킹/단포/패킹 진행바 |
| col 10 | 160px | — |
| col 11 | 112px | — |
| col 12 | 62px | — |
| col 13 | 120px | — |
| col 14–15 | 120px × 2 | — |
| col 16 | 102px | — |

**하단 테이블 (집계) 컬럼 너비 목록**

| 순서 | 너비 | 비고 |
|---|---|---|
| checkbox | 32px | — |
| col 1~19 | 90.37px × 19 | 균등 분할 (flex-grow:1) |

#### Table Row (데이터 행)

```
[입고 기본]
height: 26px
border-bottom: 1px solid #F1F1F1
gap: 1px

[출고 Wave]
height: 40px
border-bottom: 1px solid #F1F1F1
gap: 1px

셀 기본:
  padding: 4px 8px
  background: #FFFFFF
  border-bottom: 1px solid #E6E6E6
  font: EN/Body/12-regular (숫자) / KR/Body/12-regular (한글)
  color: #242424

선택된 행(Highlighted, 출고):
  background: #B8D4FF (행 전체)
  셀 border-bottom: 1px solid #E6E6E6

비활성(disabled) 셀:
  background: #D9D9D9
  color: #7E7E7E

숫자 셀: text-align: right
```

#### Progress Bar 셀 (출고 Wave 신규)

```
width: 200px, height: 40px (행 높이에 맞춤)
position: relative

진행 fill (Rectangle 402):
  position: absolute
  left: 0, bottom: 1px
  height: 38px
  background: rgba(36,94,255,0.15)
  border-radius: 2px 8px 8px 2px

[선택된 행의 fill]:
  background: #649CFF (solid, 불투명)

우측 텍스트 그룹 (position: absolute, right: 8px):
  분수: EN/Body/12-regular, color: #7E7E7E  예: "(42/84)"
  퍼센트: EN/Body/12-bold, color: #242424  예: "50%"

좌측 공정명 (position: absolute, left: 8px):
  KR/Body/12-regular, color: #242424  예: "피킹", "소팅", "패킹"

비활성 track (단포 미시작):
  background: #E6E6E6
  텍스트 color: #B3B3B3
```

#### Scroll Bar

**수평 스크롤바**

```
width: 1766px, height: 24px
background: #FAFAFA
border-top: 1px solid #F1F1F1

트랙: width 872px, height 8px, background: #D9D9D9, border-radius: 4px
화살표 버튼: 24×24px, polygon(#242424)
끝 사각형: 24×24px, background: #D9D9D9
```

**수직 스크롤바 (세로, rotate 90deg)**

```
width: 240px (회전 전), height: 24px
background: #FAFAFA
border-bottom: 1px solid #F1F1F1
트랙: width 59px, height 8px, background: #D9D9D9, border-radius: 4px
```

**테이블 내부 고정 수직 divider**

```
position: absolute
width: 1px, height: 314px
left: 718px
background: #B3B3B3
```

#### Bottom Action Bar (btn_Bottom)

```
height: 52px
padding: 8px 16px
background: #FFFFFF
border-top: 1px solid #F1F1F1
display: flex
justify-content: flex-end
```

**상태 텍스트**

```
KR/Body/14-medium, color: #929292
예시: "체크한 행 0개를"
```

**활성 버튼**

```
height: 36px
padding: 8px 24px
border: 1px solid #D9D9D9
border-radius: 6px
background: #FFFFFF
label: KR/Body/14-medium, color: #242424
```

**비활성 버튼 (Disabled 상태)**

```
background: #E6E6E6
border: 1px solid #D9D9D9
border-radius: 6px
label: KR/Body/14-medium, color: #B3B3B3
```

---

### 5-5. Resize Bar (테이블 간 구분 핸들)

```
width: 1768px, height: 24px
background: #F1F1F1
display: flex
align-items: center
justify-content: center
padding: 4px 10px

핸들 버튼:
  width: 56px, height: 16px
  background: #245EFF
  border-radius: 4px
  padding: 0px 4px
  아이콘(drag-h): 16×16px, color: #FFFFFF
```

---

### 5-6. 섹션 헤더 (Section Header)

> 테이블 내 상세 섹션(중·하단 테이블) 타이틀 영역

```
height: 48px
padding: 0px 16px
background: #FFFFFF
border-bottom: 1px solid #E6E6E6
border-radius: 8px 8px 0px 0px

아이콘(arrow-up-filled / arrow-down-filled): 24×24px, polygon: #242424
제목: KR/Headline/16-bold, color: #242424
```

---

### 5-7. Empty State

```
width: 280px
padding: 24px 10px
gap: 12px
display: flex
flex-direction: column
align-items: center

아이콘(search): 24×24px, color: #929292

메인 텍스트: KR/Body/14-medium, color: #7E7E7E
  예시: "선택된 항목 없음"

서브 텍스트: KR/Body/12-regular, color: #B3B3B3
  예시: "상세정보를 보기 위해 상단에서 항목을 선택해주세요."
```

---

### 5-8. 총계 배지 (Summary Badge)

```
position: absolute (테이블 우측 상단 플로팅)
left: 1877px, top: 633px

width: 278px, height: 28px
padding: 4px 12px
gap: 12px
background: #F1F1F1
border-radius: 4px

텍스트 3개 (gap: 12px):
  font: KR/Body/14-medium, color: #7E7E7E
  예시: "총예정 999,999" | "총완료 999" | "총잔여 999"
```

---

### 5-9. Summary (출고 현황) — 신규

```
width: 1768px, height: 176px
display: flex
flex-direction: column
gap: 4px
```

#### 타이틀 행

```
height: 32px
gap: 12px

제목: KR/Headline/16-bold, color: rgba(0,0,0,0.88)  예: "출고 현황"

기준 시각 (우측 정렬):
  날짜시간: EN/Body/12-regular, Noto Sans Mono, color: #7E7E7E  예: "2026-01-09 11:15:54"
  "기준" 라벨: KR/Body/12-regular, color: #7E7E7E
```

#### Filter Tag Group

```
width: 379px, height: 32px
background: #F1F1F1
border-radius: 8px
padding: 0px 2px
gap: 2px
display: flex
```

**filterTag (활성 — 선택됨)**

```
width: 49px, height: 28px
background: #FFFFFF
box-shadow: 0px 0px 2px rgba(0,0,0,0.08)
border-radius: 6px
padding: 4px 12px

라벨: Pretendard/text-m-medium, color: #245EFF
```

**filterTag (비활성 — 미선택)**

```
height: 32px
border-radius: 4px
padding: 8px 12px

라벨: Pretendard/text-m-medium, color: #8A8A8A
```

#### 현황 카드 Box

```
width: 1128px, height: 140px
display: flex
flex-direction: row
gap: 8px
```

**현황 카드 단위 (6개 반복)**

```
width: 180px ~ 185px (min-width: 180px)
height: 140px
background: #FFFFFF
border: 1px solid #E6E6E6
border-radius: 8px
padding: 20px
gap: 12px
display: flex
flex-direction: column
```

*카드 헤더*

```
height: 24px
gap: 12px

카드 제목: KR/Headline/16-bold, color: #242424

작업 상태 배지 (선택적):
  background: #F1F1F1
  border-radius: 4px
  padding: 1px 8px
  텍스트: KR/Body/12-regular, color: #7E7E7E  예: "시작 전"
```

*카드 수치 (count)*

```
gap: 4px

미완료(uncomplete) 행:
  라벨: KR/Body/12-regular, color: #7E7E7E  예: "미완료"
  수치: EN/Headline/24-bold, color: #242424  예: "50,711"

완료(complete) 행:
  라벨: KR/Body/12-regular, color: #7E7E7E  예: "완료"
  수치: EN/Headline/16-bold, color: #7E7E7E  예: "122,482"
```

---

### 5-10. StatusTag

> 항목의 현재 상태 또는 진행 상황을 시각적으로 표현하는 컴포넌트. Pretendard 폰트 사용.

#### 기본 구조

```
display: flex
flex-direction: row
align-items: center
gap: 4px
isolation: isolate   ← tinted overlay 사용 variant에 적용

height: 20px
border-radius: 4px
padding: 2px 6px     ← 기본 (default·progress-primary·warning·critical)
padding: 0px 6px     ← tinted overlay 사용 variant (progress-secondary·tertiary·success)
```

#### 내부 요소 레이어 순서 (z-index)

| order | 요소 | 설명 |
|---|---|---|
| 0 | `tinted` | `rgba(0,0,0,0.05)` 오버레이, 일부 variant에만 존재 |
| 1 | `badge` | 6×6px dot, `display:none` (기본값, 옵션) |
| 2 | `status` (label) | 라벨 텍스트 |
| 3 | `count` | 숫자, `display:none` (기본값, hasCount=true 시 표시) |
| 4 | `infoIcon` | 16×16px, `display:none` (기본값, 옵션) |

#### 라벨 타이포그래피

```
/* statusTag/label-xs */
font-family: 'Pretendard'
font-weight: 500
font-size: 12px
line-height: 150%   (= 18px)

/* statusTag/count-xs */
font-family: 'Pretendard'
font-weight: 600
font-size: 12px
line-height: 150%
color: #000000   ← count는 항상 검정
```

#### variant별 CSS 스펙

**default** (중립 상태)
```
background: #FFFFFF
+ tinted: rgba(0,0,0,0.05)  ← 실제 렌더 색상 ≈ #F2F2F2
color: #666666
badge: #666666
```

**progress / primary** (진행 — blue)
```
background: #E2F1FF
color: #245EFF
badge: #245EFF
※ tinted 없음
```

**progress / secondary** (진행 — teal)
```
background: #E6FFFB
+ tinted: rgba(0,0,0,0.05)
color: #08979C
badge: #08979C
padding: 0px 6px
```

**progress / tertiary** (진행 — purple)
```
background: #F9F0FF
+ tinted: rgba(0,0,0,0.05)
color: #722ED1
badge: #722ED1
padding: 0px 6px
```

**success** (완료)
```
background: #ECFFEC
+ tinted: rgba(0,0,0,0.05)
color: #1EA514
badge: #1EA514
```

**warning** (주의·경고)
```
background: #FFF4E5
color: #DB7F00
badge: #DB7F00
※ tinted 없음
```

**critical** (중단·즉시 조치)
```
background: #FFECEC
color: #D50F0E
badge: #D50F0E
※ tinted 없음
```

#### Props 정리

| Prop | 값 | 설명 |
|---|---|---|
| `variant` | `default` \| `progress` \| `success` \| `warning` \| `critical` | 상태 의미 |
| `progressType` | `primary` \| `secondary` \| `tertiary` | `variant="progress"` 일 때만 사용 |
| `emphasis` | `solid` \| `subtle` | solid: 배경 포함 / subtle: 텍스트 중심 |
| `size` | `xsmall` \| `small` \| `medium` | 컴포넌트 크기 |
| `hasCount` | `boolean` | 라벨 옆 숫자 표시 여부 |
| `count` | `number` | hasCount=true 일 때 표시할 값 |
| `badge` | `boolean` | dot 배지 표시 여부 |
| `infoIcon` | `boolean` | 우측 정보 아이콘 표시 여부 |

#### progressType 사용 지침

- `variant="progress"` 일 때만 사용
- 우선순위를 의미하지 않으며, 기본 사용 순서는 `primary → secondary → tertiary` 권장
- 도메인 맥락에 따라 일부 타입만 선택하거나 순서 변경 가능
- `primary` 없이 `secondary`/`tertiary`를 단독 사용하려면 의도가 명확한 맥락에서만 허용

---

## 6. 공통 UI 패턴

### 버튼 스펙 요약

| 유형 | 크기 | BG | Border | Text Color |
|---|---|---|---|---|
| Primary (검색) | 120×36px / 120×28px | `#242424` | none | `#FFFFFF` |
| Secondary | 120×36px / 113×28px | `#FFFFFF` | `1px #D9D9D9` | `#242424` |
| Disabled | — | `#E6E6E6` | `1px #D9D9D9` | `#B3B3B3` |

- 모든 버튼 `border-radius: 6px`
- 대형(36px high): `padding: 8px 24px`
- 소형(28px high): `padding: 4px 16px`

### 체크박스

```
16×16px
기본: background #FFFFFF, border #B3B3B3, border-radius: 4px
```

### 드롭다운 화살표

```
아이콘: icon/arrow-down-filled, 16×16px 또는 24×24px
polygon color:
  활성(선택됨): #242424
  비활성(미선택): #929292
transform: rotate(-180deg) [위 방향 표시]
```

### Divider

| 유형 | 크기 | 색상 |
|---|---|---|
| 수직 (컬럼 간) | 1px × 16px | `#D9D9D9` |
| 수직 (페이지 타이틀) | 2px × 16px | `#D9D9D9` |
| 수평 (행 구분) | full-width × 1px | `#F1F1F1` |
| 수평 (셀 하단) | full-width × 1px | `#E6E6E6` |

---

## 7. 아이콘 목록

| 아이콘 ID | 기본 색상 | 사용 위치 |
|---|---|---|
| `icon/chevrons-right` | `#7E7E7E` | LNB 로고 영역 |
| `icon/chevrons-down` | `#7E7E7E` | 필터 열기 버튼 |
| `icon/chevrons-up` | `#7E7E7E` | 필터 닫기 버튼 |
| `icon/user` | `#7E7E7E` / `#929292` | LNB 유저 영역 |
| `icon/home` | `#7E7E7E` | LNB 홈 메뉴 |
| `icon/master` | `#7E7E7E` | LNB 마스터 메뉴 |
| `icon/inbound` | `#649CFF` (활성) / `#7E7E7E` (비활성) | LNB 입고 메뉴 |
| `icon/putaway` | `#7E7E7E` | LNB 입고처리 메뉴 |
| `icon/outbound` | `#649CFF` (활성) / `#7E7E7E` (비활성) | LNB 출고 메뉴 |
| `icon/inbound-return` | `#7E7E7E` | LNB 반품입고 메뉴 |
| `icon/stock` | `#7E7E7E` | LNB 재고 메뉴 |
| `icon/manager` | `#7E7E7E` | LNB 관리 메뉴 |
| `icon/system` | `#7E7E7E` | LNB 시스템 메뉴 |
| `icon/download` | `#929292` / `#242424` | LNB 하단 / 다운로드 버튼 |
| `icon/download-all` | `#242424` | 전체 다운로드 버튼 |
| `icon/pin` | `#7E7E7E` | 센터 레이블 앞 |
| `icon/arrow-down-filled` | `#242424` / `#929292` | 드롭다운 화살표 |
| `icon/arrow-up-filled` | `#242424` | 섹션 헤더, 탭 헤더 |
| `icon/home-small` | `#929292` | 브레드크럼 홈 |
| `icon/calender` | `#929292` | 날짜 입력 |
| `icon/plus` | `#929292` | 텍스트 입력 우측 |
| `icon/setting` | `#7E7E7E` | 테이블 설정 |
| `icon/info` | `#7E7E7E` | 컬럼 헤더 정보 |
| `icon/search` | `#929292` | Empty State |
| `icon/drag-h` | `#FFFFFF` | 리사이즈 핸들 |
| `icon/download-template` | `#242424` | 엑셀 드롭다운 — 템플릿 다운로드 |
| `icon/upload` | `#242424` | 엑셀 드롭다운 — 엑셀 업로드 |

> 모든 아이콘 기본 컨테이너: `left/right/top/bottom: 0% (position absolute, fill parent)`

---

## 8. 간격 체계 (Spacing)

| 값 | 사용처 |
|---|---|
| 2px | Filter Tag 내부 gap |
| 4px | 셀 패딩(행), 아이콘-텍스트 간격, 현황 카드 수치 간격 |
| 6px | 필터 행 간 gap |
| 7px | 현황 카드 수치 행 내부 gap |
| 8px | 셀 패딩(헤더), 버튼 내부 gap, 스크롤바 상하, 체크박스-라벨 gap |
| 10px | 버튼 내부 gap (일반), 아이콘 컨테이너 gap |
| 12px | 브레드크럼 gap, 카운트 배지 gap, 버튼 그룹 gap, 현황 카드 패딩 내 gap |
| 16px | 필터 라벨-입력 gap, LNB 리스트 padding, 페이지 패딩 |
| 20px | 필터 행 좌우 padding, 현황 카드 padding |
| 24px | 페이지 상단 padding, 버튼 좌우 padding(대형), 현황 카드 padding |
| 32px | 페이지 우측 padding |
| 40px | 필터 컬럼 gap |

---

## 9. 반응형 / 크기 변수

| 항목 | 값 |
|---|---|
| 전체 캔버스 | 1920px |
| LNB | 88px (fixed) |
| Content Area | 1832px |
| 컨텐츠 내부 너비 | 1768px |
| 테이블 내 너비 | 1766px (border 1px × 2 제외) |
| 페이지 padding (상/좌) | 24px 32px |

---

## 10. 화면별 스펙 추가 (시스템_사용자 / 재고이동지시)

### 10-1. 시스템 › 사용자 화면 레이아웃

이 화면은 기존 LNB(88px) + 좌측 메인 테이블 + 우측 상세 패널의 2-column 구조입니다.

**우측 상세 패널 (센터 사용여부 수정)**

```
position: absolute
width: 416px
height: 818px
left: 1472px
top: 230px
background: #F1F1F1
border-radius: 8px
```

패널 내부 구성:
- 패널 타이틀: `KR/Headline/16-bold` / `#242424` — 위치 `top: 250px`
- 설명 텍스트: `KR/Body/14-regular` / `#242424` — 위치 `top: 278px`
- 내부 테이블: `width: 376px`, `border: 1px solid #E6E6E6`, `border-radius: 8px` — 위치 `top: 315px`

**우측 패널 내부 테이블 헤더 (3컬럼 구조)**

```
T_Head height: 34px
background: #F1F1F1
border-bottom: 1px solid #E6E6E6
컬럼 3개 균등 분할 (각 124px)
```

**Empty State (항목 미선택 시)**

```
display: flex
flex-direction: column
align-items: center
gap: 12px
padding: 24px 10px

아이콘: icon/search (24×24px, #929292)
주 텍스트: KR/Body/14-medium, #7E7E7E  ("선택된 항목 없음")
보조 텍스트: KR/Body/12-regular, #B3B3B3  ("상세정보를 보기 위해 좌측에서 항목을 선택해주세요.")
```

**엑셀 드롭다운 메뉴**

```
width: 175px
filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.05))
border-radius: 4px 4px 0px 0px (상단) / 0px 0px 4px 4px (하단)

아이템 행 height: 28px
padding: 4px 8px
background 활성: #F1F1F1
background 비활성: #FFFFFF

아이템 텍스트: KR/Body/14-regular, #242424
아이콘: 16×16px (icon/download-template, icon/upload)
```

---

### 10-2. 재고이동지시 화면 레이아웃

이 화면은 LNB(88px) + 전체 너비 1768px 단일 컬럼 구조입니다. 테이블이 상하 2단으로 resizing bar로 분리됩니다.

**전체 레이아웃**

```
content-area: left: 88px, padding: 24px 32px
content-width: 1768px
구성: page title → filter area → 상단 테이블 → resizing bar → 하단 테이블
```

**상단 테이블 (재고이동지시 목록)**

```
width: 1768px
height: 842px (가변)
border: 1px solid #E6E6E6
border-radius: 8px

List_Head: height 44px, gap: 20px (출고 Wave의 gap: 946px과 다름)
Btn_List: justify-content flex-end (우측 정렬)
```

컬럼 구조 예시:

| 컬럼 | 너비 | 비고 |
|---|---|---|
| checkbox | 32px | Disabled 상태: `#E6E6E6` + `#D9D9D9` |
| 상태 (StatusTag) | 101.38px | row height 28px |
| 코드 | 146px | |
| 위치/담당자 | 101.38px × n | flex-grow: 1 |
| 날짜 컬럼 | 204px / 196px | `#E6E6E6` 배경 (읽기전용 표시) |
| 수량 컬럼 | 72px × 2 | |

**행 높이**: 28px (재고이동지시) — 기존 출고 Wave의 40px, 입고 테이블의 26px과 구별

**Disabled 체크박스** (재고이동지시·시스템_사용자 공통)

```
/* 일반 체크박스와 다른 Disabled 상태 */
background: #E6E6E6   (기본은 #FFFFFF)
border-color: #D9D9D9  (기본은 #B3B3B3)
border-radius: 4px
```

**읽기전용 셀 (회색 배경)**

재고이동지시 테이블 일부 셀은 `background: #E6E6E6`으로 읽기전용 상태를 시각 표시합니다.

**하단 테이블 (이동 이력/상세)**

```
width: 1768px
height: 385px
border: 1px solid #E6E6E6
border-radius: 0px 0px 8px 8px   ← resizing bar 아래에 붙으므로 상단 radius 없음

header/title: height 48px, border-bottom: 1px solid #E6E6E6
  - icon/arrow-up-filled (24×24px) + 타이틀 텍스트 KR/Headline/16-bold
```

하단 테이블 컬럼 구조 (6컬럼 균등):

```
6컬럼 균등 분할 (각 293.83px = 1768 / 6)
T_Head: height 34px, background: #F1F1F1
데이터 행: height 26px
```

**btn_Bottom (하단 액션 바)**

재고이동지시 화면의 하단 액션 바 버튼 구성:

```
height: 52px
padding: 8px 16px

표시 버튼: 취소(100px, Secondary) — 기타 버튼 display:none
선택 카운트 텍스트: "체크한 행 n개를" — KR/Body/14-medium, #929292
```

---

### 10-3. 체크박스 상태 정리 (전체 화면 통합)

| 상태 | Rectangle 147 (배경) | Rectangle 148 (테두리) | border-radius |
|---|---|---|---|
| 기본 (default) | `#FFFFFF` | `#B3B3B3` | 4px (입고/시스템) / 2px (출고Wave) |
| 체크됨 (checked) | `#242424` | — | — |
| Disabled | `#E6E6E6` | `#D9D9D9` | 4px |

> Disabled 체크박스는 시스템_사용자, 재고이동지시 화면에서 확인됩니다.

