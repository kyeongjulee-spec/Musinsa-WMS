"use client";

import { useState } from "react";

type InboundStatusRow = {
  id: string;
  inboundNo: string;
  shipper: string;
  brand: string;
  productCode: string;
  productName: string;
  qty: number;
  receivedQty: number;
  inboundDate: string;
  status: string;
  warehouse: string;
};

const MOCK_DATA: InboundStatusRow[] = [
  { id: "1", inboundNo: "IB-2026-001", shipper: "신규", brand: "MUSINSA", productCode: "MS-001", productName: "무신사 스탠다드 후드", qty: 200, receivedQty: 200, inboundDate: "2026-03-01", status: "입고완료", warehouse: "신여주1" },
  { id: "2", inboundNo: "IB-2026-002", shipper: "신규", brand: "MUSINSA", productCode: "MS-002", productName: "무신사 스탠다드 티셔츠", qty: 300, receivedQty: 250, inboundDate: "2026-03-05", status: "입고중", warehouse: "신여주1" },
  { id: "3", inboundNo: "IB-2026-003", shipper: "신규", brand: "MUSINSA BRAND", productCode: "MB-001", productName: "무신사 브랜드 점퍼", qty: 150, receivedQty: 0, inboundDate: "2026-03-10", status: "입고예정", warehouse: "신여주3" },
  { id: "4", inboundNo: "IB-2026-004", shipper: "신규", brand: "MUSINSA GLOBAL", productCode: "MG-001", productName: "글로벌 셔츠", qty: 100, receivedQty: 100, inboundDate: "2026-03-12", status: "입고완료", warehouse: "신여주3" },
  { id: "5", inboundNo: "IB-2026-005", shipper: "신규", brand: "MUSINSA SNAP", productCode: "MN-001", productName: "스냅 패딩", qty: 80, receivedQty: 80, inboundDate: "2026-03-15", status: "입고완료", warehouse: "신여주1" },
];

const STATUS_BADGE: Record<string, string> = {
  "입고예정": "badge-gray",
  "입고중": "badge-blue",
  "입고완료": "badge-green",
  "입고취소": "badge-red",
};

export default function InboundStatusPage() {
  const [filters, setFilters] = useState({
    dateFrom: "2026-03-01",
    dateTo: "2026-03-31",
    inboundNo: "",
    brand: "",
    status: "전체",
    warehouse: "전체",
  });
  const [rows, setRows] = useState<InboundStatusRow[]>(MOCK_DATA);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function handleSearch() { setRows(MOCK_DATA); }
  function handleReset() {
    setFilters({ dateFrom: "", dateTo: "", inboundNo: "", brand: "", status: "전체", warehouse: "전체" });
    setRows([]);
  }

  function toggleRow(id: string) {
    setSelected((prev) => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white border border-gray-200 rounded p-3">
        <div className="grid gap-x-4 gap-y-2" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          <div className="flex items-center gap-2">
            <label className="filter-label w-20">입고일자</label>
            <div className="flex items-center gap-1 flex-1">
              <input type="date" className="form-input" value={filters.dateFrom} onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })} />
              <span className="text-gray-400 text-xs">~</span>
              <input type="date" className="form-input" value={filters.dateTo} onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-20">입고번호</label>
            <input className="form-input" placeholder="입고번호 입력" value={filters.inboundNo} onChange={(e) => setFilters({ ...filters, inboundNo: e.target.value })} />
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">브랜드</label>
            <input className="form-input" placeholder="브랜드명" value={filters.brand} onChange={(e) => setFilters({ ...filters, brand: e.target.value })} />
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">입고상태</label>
            <select className="form-select" value={filters.status} onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
              {["전체", "입고예정", "입고중", "입고완료", "입고취소"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-20">창고</label>
            <select className="form-select" value={filters.warehouse} onChange={(e) => setFilters({ ...filters, warehouse: e.target.value })}>
              {["전체", "신여주1", "신여주3"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="col-start-4 flex justify-end gap-2">
            <button onClick={handleReset} className="px-3 py-1 text-xs border border-gray-300 rounded text-gray-600 hover:bg-gray-50">초기화</button>
            <button onClick={handleSearch} className="px-4 py-1 text-xs rounded text-white" style={{ background: "#3b82f6" }}>검색</button>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded overflow-hidden">
        <div className="overflow-auto" style={{ maxHeight: "calc(100vh - 260px)" }}>
          <table className="data-grid">
            <thead>
              <tr>
                <th style={{ width: 32 }}><input type="checkbox" /></th>
                <th>입고번호</th>
                <th>화주</th>
                <th>브랜드</th>
                <th>상품코드</th>
                <th>상품명</th>
                <th className="numeric">입고예정수량</th>
                <th className="numeric">실입고수량</th>
                <th>입고일자</th>
                <th>입고상태</th>
                <th>창고</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr><td colSpan={11} className="text-center py-10 text-gray-400">조회결과 없음</td></tr>
              ) : (
                rows.map((row) => (
                  <tr key={row.id} className={selected.has(row.id) ? "selected" : ""} onClick={() => toggleRow(row.id)} style={{ cursor: "pointer" }}>
                    <td><input type="checkbox" checked={selected.has(row.id)} onChange={() => toggleRow(row.id)} onClick={(e) => e.stopPropagation()} /></td>
                    <td className="text-blue-600 hover:underline cursor-pointer">{row.inboundNo}</td>
                    <td>{row.shipper}</td>
                    <td>{row.brand}</td>
                    <td>{row.productCode}</td>
                    <td>{row.productName}</td>
                    <td className="numeric">{row.qty.toLocaleString()}</td>
                    <td className="numeric">{row.receivedQty.toLocaleString()}</td>
                    <td>{row.inboundDate}</td>
                    <td><span className={`badge ${STATUS_BADGE[row.status] ?? "badge-gray"}`}>{row.status}</span></td>
                    <td>{row.warehouse}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {rows.length > 0 && (
          <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
            <span className="text-xs text-gray-500">총 {rows.length}건</span>
            <div className="flex items-center gap-1">
              <button className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50">◀</button>
              <button className="px-2 py-1 text-xs border border-blue-400 rounded bg-blue-50 text-blue-600">1</button>
              <button className="px-2 py-1 text-xs border border-gray-200 rounded hover:bg-gray-50">▶</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
