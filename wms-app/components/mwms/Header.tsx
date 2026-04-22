"use client";

export default function MWMSHeader() {
  return (
    <header className="flex items-center justify-between h-11 bg-white border-b border-gray-200 px-4 flex-shrink-0">
      <div className="flex items-center gap-3">
        <span className="font-semibold text-sm text-gray-700">이혜원</span>
        <select className="form-select" style={{ width: "auto", minWidth: 120 }}>
          <option>신여주Global</option>
          <option>신여주1</option>
          <option>신여주3</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
          홈
        </button>
        <button className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
          입고관리
        </button>
      </div>
    </header>
  );
}
