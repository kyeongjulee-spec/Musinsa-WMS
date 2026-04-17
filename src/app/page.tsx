'use client';

import React, { useState } from 'react';
import { BoxButton } from '@/components/BoxButton';
import type { ButtonIntent, ButtonVariant, ButtonSize } from '@/components/BoxButton';

const PlusIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" width="100%" height="100%">
    <path d="M8 3v10M3 8h10" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M3 8l3.5 3.5L13 5" />
  </svg>
);
const TrashIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M2 4h12M6 4V2h4v2M5 4l1 9h4l1-9" />
  </svg>
);

const COLOR_GROUPS = [
  {
    label: 'Foreground',
    tokens: [
      { name: 'fg',           cssVar: '--color-fg',            desc: 'Default' },
      { name: 'fg-low',       cssVar: '--color-fg-low',        desc: 'Low' },
      { name: 'fg-lower',     cssVar: '--color-fg-lower',      desc: 'Lower' },
      { name: 'fg-disabled',  cssVar: '--color-fg-disabled',   desc: 'Disabled' },
      { name: 'fg-critical',  cssVar: '--color-fg-critical',   desc: 'Critical' },
      { name: 'fg-warning',   cssVar: '--color-fg-warning',    desc: 'Warning' },
      { name: 'fg-success',   cssVar: '--color-fg-success',    desc: 'Success' },
      { name: 'fg-inverse',   cssVar: '--color-fg-inverse',    desc: 'Inverse', dark: true },
    ],
  },
  {
    label: 'Background',
    tokens: [
      { name: 'bg',              cssVar: '--color-bg',              desc: 'Default', bordered: true },
      { name: 'bg-low',          cssVar: '--color-bg-low',          desc: 'Low' },
      { name: 'bg-neutral-low',  cssVar: '--color-bg-neutral-low',  desc: 'Neutral Low' },
      { name: 'bg-disabled',     cssVar: '--color-bg-disabled',     desc: 'Disabled' },
      { name: 'bg-contrast',     cssVar: '--color-bg-contrast',     desc: 'Contrast' },
      { name: 'bg-critical-low', cssVar: '--color-bg-critical-low', desc: 'Critical Low' },
      { name: 'bg-warning-low',  cssVar: '--color-bg-warning-low',  desc: 'Warning Low' },
      { name: 'bg-success-low',  cssVar: '--color-bg-success-low',  desc: 'Success Low' },
    ],
  },
  {
    label: 'Accent',
    tokens: [
      { name: 'accent',       cssVar: '--color-accent',       desc: 'Default' },
      { name: 'accent-light', cssVar: '--color-accent-light', desc: 'Light' },
      { name: 'accent-dark',  cssVar: '--color-accent-dark',  desc: 'Dark' },
      { name: 'accent-low',   cssVar: '--color-accent-low',   desc: 'Low' },
      { name: 'accent-focus', cssVar: '--color-accent-focus', desc: 'Focus' },
    ],
  },
  {
    label: 'Stroke / Border',
    tokens: [
      { name: 'stroke-border',          cssVar: '--color-stroke-border',          desc: 'Border' },
      { name: 'stroke-border-strong',   cssVar: '--color-stroke-border-strong',   desc: 'Strong' },
      { name: 'stroke-border-critical', cssVar: '--color-stroke-border-critical', desc: 'Critical' },
      { name: 'stroke-border-success',  cssVar: '--color-stroke-border-success',  desc: 'Success' },
      { name: 'stroke-border-disabled', cssVar: '--color-stroke-border-disabled', desc: 'Disabled' },
      { name: 'stroke-divide',          cssVar: '--color-stroke-divide',          desc: 'Divide' },
    ],
  },
];

const TYPOGRAPHY = [
  { name: 'title-xxl',       cls: 'text-title-xxl font-semibold', meta: '38 / 46 · Semibold', sample: '제목 타이틀 XXL' },
  { name: 'title-xl',        cls: 'text-title-xl  font-semibold', meta: '32 / 40 · Semibold', sample: '제목 타이틀 XL' },
  { name: 'title-l',         cls: 'text-title-l   font-semibold', meta: '30 / 38 · Semibold', sample: '제목 타이틀 L' },
  { name: 'title-m',         cls: 'text-title-m   font-semibold', meta: '24 / 32 · Semibold', sample: '제목 타이틀 M' },
  { name: 'title-s',         cls: 'text-title-s   font-semibold', meta: '20 / 28 · Semibold', sample: '제목 타이틀 S' },
  { name: 'title-xs',        cls: 'text-title-xs  font-semibold', meta: '18 / 26 · Semibold', sample: '제목 타이틀 XS' },
  { name: 'text-l',          cls: 'text-l',                       meta: '16 / 24 · Regular',  sample: '본문 텍스트 L — 일반적인 콘텐츠 본문에 사용합니다.' },
  { name: 'text-l-medium',   cls: 'text-l font-medium',           meta: '16 / 24 · Medium',   sample: '본문 텍스트 L Medium' },
  { name: 'text-l-semibold', cls: 'text-l font-semibold',         meta: '16 / 24 · Semibold', sample: '본문 텍스트 L Semibold' },
  { name: 'text-m',          cls: 'text-m',                       meta: '14 / 22 · Regular',  sample: '본문 텍스트 M — UI 컴포넌트의 기본 텍스트 크기입니다.' },
  { name: 'text-m-medium',   cls: 'text-m font-medium',           meta: '14 / 22 · Medium',   sample: '본문 텍스트 M Medium' },
  { name: 'text-m-semibold', cls: 'text-m font-semibold',         meta: '14 / 22 · Semibold', sample: '본문 텍스트 M Semibold' },
  { name: 'text-s',          cls: 'text-s',                       meta: '12 / 20 · Regular',  sample: '본문 텍스트 S — 보조 정보, 레이블, 캡션.' },
  { name: 'text-s-medium',   cls: 'text-s font-medium',           meta: '12 / 20 · Medium',   sample: '본문 텍스트 S Medium' },
  { name: 'text-s-semibold', cls: 'text-s font-semibold',         meta: '12 / 20 · Semibold', sample: '본문 텍스트 S Semibold' },
];

const SPACING = [
  { name: '50',  cssVar: '--ds-spacing-50',  px: 2 },
  { name: '100', cssVar: '--ds-spacing-100', px: 4 },
  { name: '150', cssVar: '--ds-spacing-150', px: 6 },
  { name: '200', cssVar: '--ds-spacing-200', px: 8 },
  { name: '250', cssVar: '--ds-spacing-250', px: 10 },
  { name: '300', cssVar: '--ds-spacing-300', px: 12 },
  { name: '400', cssVar: '--ds-spacing-400', px: 16 },
  { name: '500', cssVar: '--ds-spacing-500', px: 20 },
  { name: '600', cssVar: '--ds-spacing-600', px: 24 },
  { name: '800', cssVar: '--ds-spacing-800', px: 32 },
];

const RADIUS = [
  { name: 'xxs',  cssVar: '--ds-radius-xxs',  px: 2 },
  { name: 'xs',   cssVar: '--ds-radius-xs',   px: 4 },
  { name: 'm',    cssVar: '--ds-radius-m',    px: 8 },
  { name: 'l',    cssVar: '--ds-radius-l',    px: 12 },
  { name: 'full', cssVar: '--ds-radius-full', px: 9999 },
];

function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-600">
      <h2 className="text-title-m font-semibold text-fg">{title}</h2>
      {sub && <p className="mt-100 text-m text-fg-low">{sub}</p>}
      <div className="mt-300 h-[2px] w-[64px] rounded-full bg-accent" />
    </div>
  );
}

function SubLabel({ text }: { text: string }) {
  return <p className="text-s font-semibold text-fg-lower uppercase tracking-widest mb-300">{text}</p>;
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-bg rounded-m border border-stroke-divide p-600 ${className}`}>
      {children}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <code className="text-s font-medium text-accent bg-accent-low px-100 py-50 rounded-xxs">
      {children}
    </code>
  );
}

function ColorsSection() {
  return (
    <section id="colors">
      <SectionHeading title="Colors" sub="Figma 변수 추출 시맨틱 컬러 토큰 — hex는 theme.css에만 존재." />
      <div className="space-y-400">
        {COLOR_GROUPS.map((g) => (
          <Card key={g.label}>
            <SubLabel text={g.label} />
            <div className="grid grid-cols-4 gap-300 sm:grid-cols-6 lg:grid-cols-8">
              {g.tokens.map((t) => (
                <div key={t.name}>
                  <div
                    className="h-[48px] rounded-xs border border-stroke-divide mb-200"
                    style={{ backgroundColor: `var(${t.cssVar})` }}
                  />
                  <p className="text-s font-semibold text-fg">{t.desc}</p>
                  <p className="text-s text-fg-lower truncate">{t.name}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function TypographySection() {
  return (
    <section id="typography">
      <SectionHeading title="Typography" sub="Pretendard 기반 타입 스케일 — size / lineHeight / weight 페어링." />
      <Card>
        <div className="divide-y divide-stroke-divide">
          {TYPOGRAPHY.map((t) => (
            <div key={t.name} className="flex items-baseline gap-500 py-300 first:pt-0 last:pb-0">
              <div className="w-[200px] flex-shrink-0">
                <Chip>{t.name}</Chip>
                <p className="mt-100 text-s text-fg-lower">{t.meta}</p>
              </div>
              <p className={`text-fg flex-1 ${t.cls}`}>{t.sample}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

function SpacingSection() {
  return (
    <section id="spacing">
      <SectionHeading title="Spacing" sub="Tailwind: gap-100 / px-400 / mt-200 …" />
      <Card>
        <div className="space-y-300">
          {SPACING.map((t) => (
            <div key={t.name} className="flex items-center gap-400">
              <div className="w-[72px] flex-shrink-0"><Chip>{t.name}</Chip></div>
              <div
                className="bg-accent-low border-l-[3px] border-accent h-400 rounded-xxs flex-shrink-0"
                style={{ width: `var(${t.cssVar})` }}
              />
              <span className="text-s text-fg-lower">{t.px}px</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

function RadiusSection() {
  return (
    <section id="radius">
      <SectionHeading title="Border Radius" sub="rounded-xxs / rounded-xs / rounded-m / rounded-l / rounded-full" />
      <Card>
        <div className="flex flex-wrap gap-600 items-end">
          {RADIUS.map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-200">
              <div
                className="w-[64px] h-[64px] bg-accent-low border-2 border-accent"
                style={{ borderRadius: `var(${t.cssVar})` }}
              />
              <Chip>{`rounded-${t.name}`}</Chip>
              <span className="text-s text-fg-lower">{t.px >= 9999 ? '∞' : `${t.px}px`}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

function BoxButtonSection() {
  const [loading, setLoading] = useState(false);
  const intents:  ButtonIntent[]  = ['primary', 'secondary', 'negative'];
  const variants: ButtonVariant[] = ['filled', 'outlined', 'ghost'];
  const sizes:    ButtonSize[]    = ['large', 'medium', 'small'];

  return (
    <section id="button">
      <SectionHeading title="BoxButton" sub="3 intent × 3 variant × 3 size · prefixIcon / suffixIcon / loading / disabled" />

      <Card className="mb-400">
        <SubLabel text="Variant × Intent" />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-s text-fg-lower font-semibold text-left pb-300 pr-500 w-[110px]" />
                {intents.map((i) => (
                  <th key={i} className="text-s text-fg-lower font-semibold text-left pb-300 pr-500">{i}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {variants.map((v) => (
                <tr key={v} className="border-t border-stroke-divide">
                  <td className="py-300 pr-500"><Chip>{v}</Chip></td>
                  {intents.map((i) => (
                    <td key={i} className="py-300 pr-500">
                      <BoxButton label="Label" intent={i} variant={v} size="medium" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="mb-400">
        <SubLabel text="Size" />
        <div className="flex flex-wrap items-end gap-400">
          {sizes.map((s) => (
            <div key={s} className="flex flex-col items-start gap-200">
              <BoxButton label="Label" intent="primary" variant="filled" size={s} />
              <Chip>{s}</Chip>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-400">
        <SubLabel text="With Icons" />
        <div className="flex flex-wrap gap-300">
          <BoxButton label="추가하기"    intent="primary"   variant="filled"   prefixIcon={<PlusIcon />} />
          <BoxButton label="다음으로"    intent="primary"   variant="outlined" suffixIcon={<ArrowRightIcon />} />
          <BoxButton label="확인"        intent="secondary" variant="filled"   prefixIcon={<CheckIcon />} />
          <BoxButton label="삭제하기"    intent="negative"  variant="outlined" prefixIcon={<TrashIcon />} />
          <BoxButton label="양쪽 아이콘" intent="secondary" variant="ghost"    prefixIcon={<PlusIcon />} suffixIcon={<ArrowRightIcon />} />
        </div>
      </Card>

      <Card className="mb-400">
        <SubLabel text="States" />
        <p className="text-s text-fg-lower mb-200">loading</p>
        <div className="flex flex-wrap gap-300 mb-500">
          <BoxButton label="저장 중..."  intent="primary"   variant="filled"   loading />
          <BoxButton label="처리 중..."  intent="secondary" variant="filled"   loading />
          <BoxButton label="삭제 중..."  intent="negative"  variant="outlined" loading />
        </div>
        <p className="text-s text-fg-lower mb-200">loading 인터랙션 데모</p>
        <div className="flex gap-300 mb-500">
          <BoxButton
            label={loading ? '처리 중...' : '클릭 → 로딩 테스트'}
            intent="primary"
            variant="filled"
            loading={loading}
            onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2500); }}
          />
        </div>
        <p className="text-s text-fg-lower mb-200">disabled</p>
        <div className="flex flex-wrap gap-300">
          {intents.map((i) => variants.map((v) => (
            <BoxButton key={`${i}-${v}`} label="Disabled" intent={i} variant={v} disabled />
          )))}
        </div>
      </Card>

      <Card>
        <SubLabel text="Full Matrix" />
        <div className="space-y-600">
          {intents.map((i) => (
            <div key={i}>
              <p className="text-s font-semibold text-fg-lower uppercase tracking-wider mb-300">{i}</p>
              <div className="grid grid-cols-1 gap-300 sm:grid-cols-3">
                {variants.map((v) => (
                  <div key={v}>
                    <Chip>{v}</Chip>
                    <div className="flex flex-wrap gap-200 mt-200">
                      {sizes.map((s) => (
                        <BoxButton key={s} label={s} intent={i} variant={v} size={s} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

const NAV = [
  { href: '#colors', label: 'Colors' },
  { href: '#typography', label: 'Typography' },
  { href: '#spacing', label: 'Spacing' },
  { href: '#radius', label: 'Radius' },
  { href: '#button', label: 'BoxButton' },
];

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-bg-low">
      <header className="sticky top-0 z-20 bg-bg border-b border-stroke-divide">
        <div className="max-w-[1200px] mx-auto px-600 h-[56px] flex items-center justify-between">
          <div className="flex items-center gap-300">
            <div className="w-[22px] h-[22px] bg-accent rounded-xxs" />
            <span className="text-m font-semibold text-fg">무물 AI DS</span>
          </div>
          <nav className="hidden sm:flex items-center gap-100">
            {NAV.map((n) => (
              <a key={n.href} href={n.href}
                className="text-s font-medium text-fg-low hover:text-fg px-200 py-100 rounded-xxs hover:bg-bg-low transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-150">
            <div className="w-[6px] h-[6px] rounded-full bg-fg-success" />
            <span className="text-s text-fg-success font-medium">Figma Synced</span>
          </div>
        </div>
      </header>

      <div className="bg-bg border-b border-stroke-divide">
        <div className="max-w-[1200px] mx-auto px-600 py-800">
          <div className="flex items-start justify-between gap-600 flex-wrap">
            <div>
              <span className="text-s font-semibold text-accent uppercase tracking-widest">Design System Guide</span>
              <h1 className="text-title-xxl font-semibold text-fg mt-200 mb-300">무물 AI 가이드</h1>
              <p className="text-l text-fg-low max-w-[540px]">
                Figma 디자인 토큰에서 추출된 Color · Typography · Spacing · Component 가이드.
                모든 값은 CSS 변수로 관리되며 hex 코드는{' '}
                <code className="text-s font-medium text-accent bg-accent-low px-100 py-50 rounded-xxs">
                  tokens/theme.css
                </code>
                에만 존재합니다.
              </p>
              <div className="flex flex-wrap gap-200 mt-400">
                {[['Source', 'Figma · PhaseDesktop'], ['Stack', 'Next.js 16 · Tailwind v4'], ['Font', 'Pretendard']].map(([k, v]) => (
                  <div key={k} className="inline-flex items-center gap-100 bg-bg-low border border-stroke-divide rounded-xs px-300 py-100">
                    <span className="text-s text-fg-lower">{k}</span>
                    <span className="text-s font-semibold text-fg">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-300">
              {[['32', 'Color Tokens'], ['15', 'Type Scales'], ['10', 'Spacing Steps'], ['1', 'Components']].map(([n, l]) => (
                <div key={l} className="bg-bg-low border border-stroke-divide rounded-m p-400 text-center min-w-[110px]">
                  <p className="text-title-m font-semibold text-accent">{n}</p>
                  <p className="text-s text-fg-lower mt-50">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-600 py-800 space-y-800">
        <ColorsSection />
        <TypographySection />
        <SpacingSection />
        <RadiusSection />
        <BoxButtonSection />
      </main>

      <footer className="border-t border-stroke-divide bg-bg">
        <div className="max-w-[1200px] mx-auto px-600 py-500 flex flex-wrap items-center justify-between gap-200">
          <p className="text-s text-fg-lower">무물 AI Design System · Figma → Code</p>
          <p className="text-s text-fg-lower">tokens/theme.css · globals.css · BoxButton</p>
        </div>
      </footer>
    </div>
  );
}
