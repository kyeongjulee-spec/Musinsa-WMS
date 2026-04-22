"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  key: string;
  label: string;
  icon: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { key: "home", label: "홈", icon: "⊞", href: "/mwms" },
  { key: "master", label: "기준정보", icon: "☰" },
  {
    key: "inbound",
    label: "입고",
    icon: "↓",
    children: [
      { label: "입고관리", href: "/mwms/inbound/management" },
      { label: "입고현황", href: "/mwms/inbound/status" },
    ],
  },
  {
    key: "outbound",
    label: "출고",
    icon: "↑",
    children: [
      { label: "출고현황", href: "/mwms/outbound/status" },
      { label: "Wave Config", href: "/mwms/outbound/wave-config" },
      { label: "Wave", href: "/mwms/outbound/wave" },
      { label: "패킹담당그룹", href: "/mwms/outbound/packing-group" },
      { label: "이적합감", href: "/mwms/outbound/transfer-confirm" },
      { label: "리진확인스", href: "/mwms/outbound/return-confirm" },
      { label: "스캔환경", href: "/mwms/outbound/scan-env" },
    ],
  },
  { key: "returns", label: "반품", icon: "↩" },
  { key: "inventory", label: "재고", icon: "▦" },
  { key: "location", label: "로케이션", icon: "📍" },
  { key: "settings", label: "다운로드설정", icon: "⚙" },
];

export default function MWMSSidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(["inbound", "outbound"])
  );

  function toggle(key: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  return (
    <aside
      className="flex flex-col w-[180px] min-h-screen flex-shrink-0"
      style={{ background: "#1a1a2e" }}
    >
      <div
        className="flex items-center justify-center h-12 border-b"
        style={{ borderColor: "#2d2d4e" }}
      >
        <span className="text-white font-bold text-lg tracking-wide">MWMS</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {navItems.map((item) => {
          const isExpanded = expanded.has(item.key);
          const hasChildren = !!item.children?.length;

          if (!hasChildren) {
            const isActive = item.href ? pathname === item.href : false;
            return (
              <Link
                key={item.key}
                href={item.href ?? "#"}
                className="flex items-center gap-2 px-4 py-2 text-sm transition-colors"
                style={{
                  color: isActive ? "#fff" : "#a0aec0",
                  background: isActive ? "#0f3460" : "transparent",
                }}
              >
                <span className="w-5 text-center text-xs">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          }

          const childActive = item.children?.some((c) => pathname === c.href);

          return (
            <div key={item.key}>
              <button
                onClick={() => toggle(item.key)}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors text-left"
                style={{
                  color: childActive ? "#fff" : "#a0aec0",
                  background: childActive && !isExpanded ? "#0f3460" : "transparent",
                }}
              >
                <span className="w-5 text-center text-xs">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
                <span className="text-xs">{isExpanded ? "▾" : "▸"}</span>
              </button>

              {isExpanded && (
                <div style={{ background: "#111827" }}>
                  {item.children!.map((child) => {
                    const isActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center pl-11 pr-4 py-[6px] text-xs transition-colors"
                        style={{
                          color: isActive ? "#93c5fd" : "#9ca3af",
                          background: isActive ? "#1e3a5f" : "transparent",
                          borderLeft: isActive ? "2px solid #3b82f6" : "2px solid transparent",
                        }}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
