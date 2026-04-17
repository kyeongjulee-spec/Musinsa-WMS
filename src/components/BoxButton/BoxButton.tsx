'use client';

import React from 'react';

export type ButtonIntent  = 'primary' | 'secondary' | 'negative';
export type ButtonVariant = 'filled'  | 'outlined'  | 'ghost';
export type ButtonSize    = 'large'   | 'medium'    | 'small';

export interface BoxButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  label: string;
  intent?:    ButtonIntent;
  variant?:   ButtonVariant;
  size?:      ButtonSize;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  loading?:   boolean;
}

// ── Spinner ───────────────────────────────────────────────────────────────────

function LoadingSpinner({ cls }: { cls: string }) {
  return (
    <svg className={`animate-spin ${cls}`} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
      <path d="M10 3a7 7 0 0 1 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Size styles ───────────────────────────────────────────────────────────────
// All values via CSS variables — no raw px/hex in this file.

const SIZE: Record<ButtonSize, { btn: string; icon: string }> = {
  large: {
    btn:  'h-[var(--ds-btn-height-l)] min-w-[var(--ds-btn-min-width-l)] px-400 gap-200 text-l',
    icon: 'w-[var(--ds-icon-m)] h-[var(--ds-icon-m)]',
  },
  medium: {
    btn:  'h-[var(--ds-btn-height-m)] min-w-[var(--ds-btn-min-width-m)] px-300 gap-100 text-m',
    icon: 'w-[var(--ds-icon-s)] h-[var(--ds-icon-s)]',
  },
  small: {
    btn:  'h-[var(--ds-btn-height-s)] min-w-[var(--ds-btn-min-width-s)] px-200 gap-100 text-s',
    icon: 'w-[var(--ds-icon-s)] h-[var(--ds-icon-s)]',
  },
};

// ── Color styles (intent × variant) ──────────────────────────────────────────
// Semantic tokens  → Tailwind class         (e.g. bg-accent, text-fg-inverse)
// Component tokens → CSS var arbitrary      (e.g. bg-[var(--btn-secondary-bg)])
// No hex codes appear here.

const FOCUS = [
  'focus-visible:outline focus-visible:outline-2',
  'focus-visible:outline-offset-2',
  'focus-visible:outline-accent-focus',
].join(' ');

const COLORS: Record<ButtonIntent, Record<ButtonVariant, string>> = {
  primary: {
    filled: [
      'bg-accent text-fg-inverse border border-transparent',
      'hover:enabled:bg-accent-light',
      'active:enabled:bg-accent-dark',
      FOCUS,
      'disabled:!bg-bg-neutral-low disabled:!text-[var(--btn-disabled-fg)] disabled:!border-transparent',
    ].join(' '),
    outlined: [
      'bg-bg text-accent border border-accent',
      'hover:enabled:text-accent-light hover:enabled:border-accent-light',
      'active:enabled:text-accent-dark active:enabled:border-accent-dark',
      FOCUS,
      'disabled:!text-fg-disabled disabled:!border-stroke-border-disabled',
    ].join(' '),
    ghost: [
      'bg-transparent text-accent border border-transparent',
      'hover:enabled:text-accent-light',
      'active:enabled:text-accent-dark',
      FOCUS,
      'disabled:!text-fg-disabled',
    ].join(' '),
  },

  secondary: {
    filled: [
      'bg-[var(--btn-secondary-bg)] text-fg border border-transparent',
      'hover:enabled:text-fg-low',
      'active:enabled:bg-[var(--btn-secondary-bg-pressed)] active:enabled:text-fg',
      FOCUS,
      'disabled:!bg-bg-neutral-low disabled:!text-[var(--btn-disabled-fg)]',
    ].join(' '),
    outlined: [
      'bg-bg text-fg border border-[var(--btn-secondary-outline-border)]',
      'hover:enabled:text-fg-low hover:enabled:border-stroke-border',
      'active:enabled:text-fg active:enabled:border-[var(--btn-secondary-outline-border)]',
      FOCUS,
      'disabled:!text-fg-disabled disabled:!border-stroke-border-disabled',
    ].join(' '),
    ghost: [
      'bg-transparent text-fg border border-transparent',
      'hover:enabled:text-fg-low hover:enabled:bg-[var(--btn-ghost-hover-bg)]',
      'active:enabled:text-fg',
      FOCUS,
      'disabled:!text-fg-disabled',
    ].join(' '),
  },

  negative: {
    filled: [
      'bg-fg-critical text-fg-inverse border border-transparent',
      'hover:enabled:bg-[var(--btn-negative-bg-hover)]',
      'active:enabled:bg-[var(--btn-negative-bg-pressed)]',
      FOCUS,
      'disabled:!bg-bg-neutral-low disabled:!text-[var(--btn-disabled-fg)]',
    ].join(' '),
    outlined: [
      'bg-bg text-fg-critical border border-fg-critical',
      'hover:enabled:text-[var(--btn-negative-bg-hover)] hover:enabled:border-[var(--btn-negative-bg-hover)]',
      'active:enabled:text-[var(--btn-negative-bg-pressed)] active:enabled:border-[var(--btn-negative-bg-pressed)]',
      FOCUS,
      'disabled:!text-fg-disabled disabled:!border-stroke-border-disabled',
    ].join(' '),
    ghost: [
      'bg-transparent text-fg-critical border border-transparent',
      'hover:enabled:text-[var(--btn-negative-bg-hover)]',
      'active:enabled:text-[var(--btn-negative-bg-pressed)]',
      FOCUS,
      'disabled:!text-fg-disabled',
    ].join(' '),
  },
};

// ── Component ─────────────────────────────────────────────────────────────────

export function BoxButton({
  label,
  intent   = 'primary',
  variant  = 'filled',
  size     = 'medium',
  prefixIcon,
  suffixIcon,
  loading  = false,
  disabled = false,
  className = '',
  ...rest
}: BoxButtonProps) {
  const isDisabled = disabled || loading;
  const { btn, icon } = SIZE[size];

  const cls = [
    'inline-flex items-center justify-center',
    'font-semibold',
    'rounded-xs',
    'cursor-pointer select-none',
    'transition-colors duration-150',
    'disabled:cursor-not-allowed',
    btn,
    COLORS[intent][variant],
    loading && 'cursor-wait',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      {...rest}
      type={rest.type ?? 'button'}
      disabled={isDisabled}
      className={cls}
      aria-busy={loading}
    >
      {loading ? (
        <LoadingSpinner cls={icon} />
      ) : (
        <>
          {prefixIcon && (
            <span className={`flex-shrink-0 flex items-center justify-center ${icon}`} aria-hidden="true">
              {prefixIcon}
            </span>
          )}
          <span>{label}</span>
          {suffixIcon && (
            <span className={`flex-shrink-0 flex items-center justify-center ${icon}`} aria-hidden="true">
              {suffixIcon}
            </span>
          )}
        </>
      )}
    </button>
  );
}
