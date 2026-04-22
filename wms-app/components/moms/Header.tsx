"use client";

import { useState } from "react";

export default function MOMSHeader() {
  const [activeTabs] = useState([
    { id: "1", label: "재고이동목록" },
    { id: "2", label: "출고조회(수주별)_신규", active: true },
    { id: "3", label: "일반입고(ERP)" },
  ]);

  return (
    <header className="flex-shrink-0 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 h-10 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <span className="font-bold text-base" style={{ color: "#1e293b" }}>MOMS</span>
          <span className="text-xs text-gray-400">Musinsa Order Management System</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">이혜원</span>
          <span className="text-sm font-medium" style={{ color: "#3b82f6" }}>MUSINSA</span>
          <button className="text-xs px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 text-gray-600">
            비밀번호 변경
          </button>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex items-center px-2 h-8 gap-0 overflow-x-auto">
        {activeTabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex items-center gap-1 px-3 py-1 text-xs border-r border-gray-200 cursor-pointer whitespace-nowrap ${
              tab.active ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            {tab.label}
            <button className="text-gray-400 hover:text-gray-600 ml-1">×</button>
          </div>
        ))}
      </div>
    </header>
  );
}
