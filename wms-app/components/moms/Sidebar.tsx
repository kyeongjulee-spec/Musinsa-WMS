"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  key: string;
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { key: "master", label: "마스터" },
  {
    key: "inbound",
    label: "입고",
    children: [
      { label: "일반입고", href: "/moms/inbound" },
      { label: "입고조회", href: "/moms/inbound/query" },
      { label: "입고조회(전체)", href: "/moms/inbound/query-all" },
      { label: "일반입고(ERP)", href: "/moms/inbound/erp" },
    ],
  },
  { key: "bundle", label: "번들" },
  {
    key: "outbound",
    label: "출고",
    children: [
      { label: "재고이동", href: "/moms/outbound/inventory-move" },
      { label: "스토어별출고", href: "/moms/outbound/store" },
      { label: "출고조회(수동)", href: "/moms/outbound/manual" },
      { label: "출고조회", href: "/moms/outbound" },
      { label: "출고이동확정", href: "/moms/outbound/confirm" },
      { label: "출고조회2.0", href: "/moms/outbound/v2" },
      { label: "글로벌이동", href: "/moms/outbound/global" },
      { label: "출고이동현황", href: "/moms/outbound/status" },
    ],
  },
  {
    key: "inventory",
    label: "재고",
    children: [
      { label: "재고이동목표", href: "/moms/inventory/target" },
      { label: "재고이동현황", href: "/moms/inventory/status" },
      { label: "재고이동확정", href: "/moms/inventory/confirm" },
    ],
  },
  { key: "settlement", label: "정산" },
  { key: "report", label: "리포트" },
  { key: "history", label: "히스토리" },
  { key: "global", label: "글로벌" },
];

export default function MOMSSidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const open = new Set<string>();
    navItems.forEach((item) => {
      if (item.children?.some((c) => pathname.startsWith(c.href ?? ""))) {
        open.add(item.key);
      }
    });
    if (open.size === 0) open.add("inbound");
    return open;
  });

  function toggle(key: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  return (
    <aside className="flex flex-col w-[180px] min-h-screen flex-shrink-0" style={{ background: "#1e293b" }}>
      <div className="flex flex-col items-center justify-center h-14 border-b" style={{ borderColor: "#334155" }}>
        <span className="text-white font-bold text-base tracking-wide">MOMS</span>
        <span className="text-slate-400 text-xs">Musinsa Order Management</span>
      </div>

      <nav className="flex-1 overflow-y-auto py-2">
        {navItems.map((item) => {
          const isExpanded = expanded.has(item.key);
          const hasChildren = !!item.children?.length;
          const childActive = item.children?.some((c) => pathname === c.href || pathname.startsWith(c.href + "/"));

          if (!hasChildren) {
            return (
              <button
                key={item.key}
                className="w-full flex items-center px-4 py-2 text-sm text-left transition-colors"
                style={{ color: "#94a3b8" }}
              >
                {item.label}
              </button>
            );
          }

          return (
            <div key={item.key}>
              <button
                onClick={() => toggle(item.key)}
                className="w-full flex items-center justify-between px-4 py-[7px] text-sm transition-colors text-left"
                style={{ color: childActive ? "#fff" : "#94a3b8", fontWeight: childActive ? "600" : "normal" }}
              >
                <span>{item.label}</span>
                <span className="text-xs">{isExpanded ? "▾" : "▸"}</span>
              </button>

              {isExpanded && (
                <div style={{ background: "#0f172a" }}>
                  {item.children!.map((child) => {
                    const isActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center pl-8 pr-4 py-[5px] text-xs transition-colors"
                        style={{
                          color: isActive ? "#60a5fa" : "#64748b",
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
