"use client";

import { useState } from "react";

type MoveRow = {
  id: string;
  no: number;
  brand: string;
  moveDate: string;
  moveNo: string;
  fromLocation: string;
  qty: number;
  productCode: string;
  barcode: string;
  targetQty: number;
};

const MOCK_DATA: MoveRow[] = [
  { id: "1", no: 1, brand: "MUSINSA", moveDate: "2026-04-01 (화)", moveNo: "A000004587", fromLocation: "출고창고", qty: 0, productCode: "00001", barcode: "", targetQty: 0 },
  { id: "2", no: 2, brand: "MUSINSA", moveDate: "2026-01-30 (화)", moveNo: "A000045M4", fromLocation: "출고창고", qty: 0, productCode: "00002", barcode: "", targetQty: 0 },
  { id: "3", no: 3, brand: "MUSINSA", moveDate: "2026-01-30 (화)", moveNo: "A000045M5", fromLocation: "출고창고", qty: 0, productCode: "00003", barcode: "", targetQty: 0 },
  { id: "4", no: 4, brand: "MUSINSA", moveDate: "2026-01-30 (화)", moveNo: "A000045M6", fromLocation: "출고창고", qty: 0, productCode: "00004", barcode: "", targetQty: 0 },
  { id: "5", no: 5, brand: "MUSINSA", moveDate: "2026-01-30 (화)", moveNo: "A000045M7", fromLocation: "출고창고", qty: 0, productCode: "00005", barcode: "", targetQty: 0 },
  { id: "6", no: 6, brand: "MUSINSA", moveDate: "2026-01-30 (화)", moveNo: "A000045M8", fromLocation: "출고창고", qty: 0, productCode: "00006", barcode: "", targetQty: 0 },
];

export default function InventoryConfirmPage() {
  const [filters, setFilters] = useState({
    brand: "MUSINSA",
    moveNo: "A000045M84",
    shipper: "",
    dateFrom: "",
    dateTo: "",
  });
  const [rows] = useState<MoveRow[]>(MOCK_DATA);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggleRow(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Filter + toolbar row */}
      <div className="bg-white border border-gray-200 rounded p-3">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <div className="flex items-center gap-2">
            <label className="filter-label w-16">화주명</label>
            <select className="form-select" style={{ width: 120 }}>
              <option>MUSINSA</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="filter-label w-16">이동지시번호</label>
            <input className="form-input" style={{ width: 140 }} value={filters.moveNo} onChange={(e) => setFilters({ ...filters, moveNo: e.target.value })} />
          </div>
          <div className="flex items-center gap-2">
            <label className="filter-label w-12">화주</label>
            <input className="form-input" style={{ width: 100 }} placeholder="" value={filters.shipper} onChange={(e) => setFilters({ ...filters, shipper: e.target.value })} />
          </div>
          <div className="ml-auto flex items-center gap-1">
            <button className="px-3 py-1 text-xs rounded text-white" style={{ background: "#6b7280" }}>조회</button>
            <button className="px-3 py-1 text-xs rounded text-white" style={{ background: "#10b981" }}>저장</button>
            <button className="px-3 py-1 text-xs rounded text-white" style={{ background: "#ef4444" }}>취소</button>
            <button className="px-3 py-1 text-xs rounded text-white" style={{ background: "#3b82f6" }}>확정</button>
          </div>
        </div>
      </div>

      {/* Top table: selected row detail */}
      <div className="bg-white border border-gray-200 rounded overflow-hidden">
        <div className="px-3 py-2 border-b border-gray-200" style={{ background: "#f8f9fa" }}>
          <span className="text-xs font-semibold text-gray-700">이동확정 목록</span>
        </div>
        <div className="overflow-auto">
          <table className="data-grid">
            <thead>
              <tr>
                <th style={{ width: 32 }}><input type="checkbox" /></th>
                <th>그룹</th>
                <th>No</th>
                <th>화주코드</th>
                <th style={{ color: "#dc2626" }}>이동지시일자</th>
                <th style={{ color: "#dc2626" }}>이동지시번호</th>
                <th>재고유형</th>
                <th>지시수량</th>
                <th>이동일자</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.id}
                  className={selected.has(row.id) ? "selected" : ""}
                  onClick={() => toggleRow(row.id)}
                  style={{ cursor: "pointer" }}
                >
                  <td><input type="checkbox" checked={selected.has(row.id)} onChange={() => toggleRow(row.id)} onClick={(e) => e.stopPropagation()} /></td>
                  <td>그룹{row.no}</td>
                  <td>{row.no}</td>
                  <td>{row.brand}</td>
                  <td className="text-blue-600">{row.moveDate}</td>
                  <td className="text-blue-600">{row.moveNo}</td>
                  <td>출고창고</td>
                  <td className="numeric">{row.qty.toLocaleString()}</td>
                  <td>{row.moveDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">다운로드</button>
            <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">이동확정</button>
          </div>
          <span className="text-xs text-gray-500">1 to {rows.length} of {rows.length} | Page 1 of 1</span>
        </div>
      </div>

      {/* Bottom table: move detail */}
      <div className="bg-white border border-gray-200 rounded overflow-hidden">
        <div className="px-3 py-2 border-b border-gray-200 flex items-center justify-between" style={{ background: "#f8f9fa" }}>
          <span className="text-xs font-semibold text-gray-700">이동상세</span>
          <span className="text-xs text-gray-400">1 to 2,837 of 2,837 | Page 1 of 1</span>
        </div>
        <div className="overflow-auto" style={{ maxHeight: 200 }}>
          <table className="data-grid">
            <thead>
              <tr>
                <th style={{ width: 32 }}><input type="checkbox" /></th>
                <th>그룹</th>
                <th>그룹순번</th>
                <th>No</th>
                <th>화주코드</th>
                <th>이동지시일자</th>
                <th>이동지시번호</th>
                <th>판매코드(Source)</th>
                <th>판매코드(Source)</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <tr key={i}>
                  <td><input type="checkbox" /></td>
                  <td>그룹{i}</td>
                  <td>{i}</td>
                  <td>{i}</td>
                  <td>MUSINSA</td>
                  <td>2026-01-30 (화)</td>
                  <td>A000045587</td>
                  <td>00001</td>
                  <td>00001</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
