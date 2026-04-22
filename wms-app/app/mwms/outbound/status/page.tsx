"use client";

import { useState } from "react";

type OutboundRow = {
  id: string;
  outboundType: string;
  orderNo: string;
  orderQty: number;
  deliveryType: string;
  outboundStatus: string;
  pickingStatus: string;
  brand: string;
  waveNo: string;
  plannedDate: string;
  deliveryStatus: string;
};

const MOCK_DATA: OutboundRow[] = [
  { id: "1", outboundType: "출고", orderNo: "OD-2026-001234", orderQty: 3, deliveryType: "일반택배", outboundStatus: "피킹중", pickingStatus: "진행", brand: "MUSINSA", waveNo: "W-001", plannedDate: "2026-03-28", deliveryStatus: "미배송" },
  { id: "2", outboundType: "출고", orderNo: "OD-2026-001235", orderQty: 1, deliveryType: "일반택배", outboundStatus: "패킹완료", pickingStatus: "완료", brand: "MUSINSA", waveNo: "W-001", plannedDate: "2026-03-28", deliveryStatus: "배송중" },
  { id: "3", outboundType: "출고", orderNo: "OD-2026-001236", orderQty: 2, deliveryType: "특급", outboundStatus: "배송완료", pickingStatus: "완료", brand: "MUSINSA BRAND", waveNo: "W-002", plannedDate: "2026-03-27", deliveryStatus: "배송완료" },
  { id: "4", outboundType: "반품", orderNo: "OD-2026-001237", orderQty: 1, deliveryType: "반품택배", outboundStatus: "출고취소", pickingStatus: "-", brand: "MUSINSA SNAP", waveNo: "-", plannedDate: "2026-03-27", deliveryStatus: "취소" },
  { id: "5", outboundType: "출고", orderNo: "OD-2026-001238", orderQty: 5, deliveryType: "일반택배", outboundStatus: "출고예정", pickingStatus: "대기", brand: "MUSINSA GLOBAL", waveNo: "W-003", plannedDate: "2026-03-29", deliveryStatus: "미배송" },
];

const STATUS_BADGE: Record<string, string> = {
  "출고예정": "badge-gray",
  "피킹중": "badge-blue",
  "패킹완료": "badge-purple",
  "배송중": "badge-blue",
  "배송완료": "badge-green",
  "출고취소": "badge-red",
};

const DELIVERY_STATUS_BADGE: Record<string, string> = {
  "미배송": "badge-gray",
  "배송중": "badge-blue",
  "배송완료": "badge-green",
  "취소": "badge-red",
};

const PICKING_STATUS_BADGE: Record<string, string> = {
  "대기": "badge-gray",
  "진행": "badge-yellow",
  "완료": "badge-green",
  "-": "badge-gray",
};

export default function OutboundStatusPage() {
  const [filters, setFilters] = useState({
    dateFrom: "2026-03-28",
    dateTo: "2026-03-38",
    deliveryType: "전체",
    outboundStatus: "전체",
    productName: "",
    deliveryAddr: "",
    brand: "",
    waveNo: "",
    salesType: "전체",
    outboundType: "전체",
    pickingStatus: "전체",
    deliveryStatus: "전체",
    cod: "전체",
  });
  const [rows, setRows] = useState<OutboundRow[]>(MOCK_DATA);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [searched, setSearched] = useState(true);

  function handleSearch() {
    setSearched(true);
    setRows(MOCK_DATA);
  }

  function handleReset() {
    setFilters({
      dateFrom: "",
      dateTo: "",
      deliveryType: "전체",
      outboundStatus: "전체",
      productName: "",
      deliveryAddr: "",
      brand: "",
      waveNo: "",
      salesType: "전체",
      outboundType: "전체",
      pickingStatus: "전체",
      deliveryStatus: "전체",
      cod: "전체",
    });
    setRows([]);
    setSearched(false);
  }

  function toggleRow(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function toggleAll() {
    if (selected.size === rows.length) setSelected(new Set());
    else setSelected(new Set(rows.map((r) => r.id)));
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Filter Panel */}
      <div className="bg-white border border-gray-200 rounded p-3">
        <div className="grid gap-x-4 gap-y-2" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          <div className="flex items-center gap-2">
            <label className="filter-label w-24">출고등록일자</label>
            <div className="flex items-center gap-1 flex-1">
              <input type="date" className="form-input" value={filters.dateFrom} onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })} />
              <span className="text-gray-400 text-xs">~</span>
              <input type="date" className="form-input" value={filters.dateTo} onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">배송유형</label>
            <select className="form-select" value={filters.deliveryType} onChange={(e) => setFilters({ ...filters, deliveryType: e.target.value })}>
              {["전체", "일반택배", "특급", "반품택배"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">출고상태</label>
            <select className="form-select" value={filters.outboundStatus} onChange={(e) => setFilters({ ...filters, outboundStatus: e.target.value })}>
              {["전체", "출고예정", "피킹중", "패킹완료", "배송중", "배송완료", "출고취소"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">브랜드</label>
            <input className="form-input" placeholder="" value={filters.brand} onChange={(e) => setFilters({ ...filters, brand: e.target.value })} />
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-24">상품명</label>
            <input className="form-input" placeholder="상품명 입력" value={filters.productName} onChange={(e) => setFilters({ ...filters, productName: e.target.value })} />
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">Wave번호</label>
            <input className="form-input" placeholder="" value={filters.waveNo} onChange={(e) => setFilters({ ...filters, waveNo: e.target.value })} />
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">판매유형</label>
            <select className="form-select" value={filters.salesType} onChange={(e) => setFilters({ ...filters, salesType: e.target.value })}>
              {["전체", "일반", "B2B", "오프라인"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">출고유형</label>
            <select className="form-select" value={filters.outboundType} onChange={(e) => setFilters({ ...filters, outboundType: e.target.value })}>
              {["전체", "출고", "반품", "이동"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-24">배송주소</label>
            <input className="form-input" placeholder="배송주소 입력" value={filters.deliveryAddr} onChange={(e) => setFilters({ ...filters, deliveryAddr: e.target.value })} />
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">피킹상태</label>
            <select className="form-select" value={filters.pickingStatus} onChange={(e) => setFilters({ ...filters, pickingStatus: e.target.value })}>
              {["전체", "대기", "진행", "완료"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">배송상태</label>
            <select className="form-select" value={filters.deliveryStatus} onChange={(e) => setFilters({ ...filters, deliveryStatus: e.target.value })}>
              {["전체", "미배송", "배송중", "배송완료", "취소"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">착불여부</label>
            <select className="form-select" value={filters.cod} onChange={(e) => setFilters({ ...filters, cod: e.target.value })}>
              {["전체", "선불", "착불"].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="col-span-4 flex justify-end gap-2 pt-1 border-t border-gray-100">
            <button onClick={handleReset} className="px-3 py-1 text-xs border border-gray-300 rounded text-gray-600 hover:bg-gray-50 transition-colors">초기화</button>
            <button onClick={handleSearch} className="px-4 py-1 text-xs rounded text-white transition-colors" style={{ background: "#3b82f6" }}>검색</button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between bg-white border border-gray-200 rounded px-3 py-2">
        <div className="flex items-center gap-1">
          <select className="form-select" style={{ width: 120 }}>
            <option>행 · 열 · 좌 · 우 ↕</option>
          </select>
          <select className="form-select" style={{ width: 80 }}>
            <option>행 · 열</option>
          </select>
        </div>
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">출고취소</button>
          <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">다운로드</button>
          <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">출고생성</button>
        </div>
      </div>

      {/* Data Grid */}
      <div className="bg-white border border-gray-200 rounded overflow-hidden">
        <div className="overflow-auto" style={{ maxHeight: "calc(100vh - 320px)" }}>
          <table className="data-grid">
            <thead>
              <tr>
                <th style={{ width: 32 }}>
                  <input type="checkbox" checked={selected.size === rows.length && rows.length > 0} onChange={toggleAll} />
                </th>
                <th>주문유형</th>
                <th>주문번호</th>
                <th>주문수량</th>
                <th>물류유형코드</th>
                <th>출고상태</th>
                <th>피킹상태</th>
                <th>브랜드</th>
                <th>Wave번호</th>
                <th>출고예정일</th>
                <th>배송상태</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={11} className="text-center py-16 text-gray-400">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-2xl">📭</span>
                      <span>조회결과 없음</span>
                    </div>
                  </td>
                </tr>
              ) : (
                rows.map((row) => (
                  <tr
                    key={row.id}
                    className={selected.has(row.id) ? "selected" : ""}
                    onClick={() => toggleRow(row.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <td><input type="checkbox" checked={selected.has(row.id)} onChange={() => toggleRow(row.id)} onClick={(e) => e.stopPropagation()} /></td>
                    <td>{row.outboundType}</td>
                    <td className="text-blue-600 cursor-pointer hover:underline">{row.orderNo}</td>
                    <td className="numeric">{row.orderQty}</td>
                    <td>{row.deliveryType}</td>
                    <td><span className={`badge ${STATUS_BADGE[row.outboundStatus] ?? "badge-gray"}`}>{row.outboundStatus}</span></td>
                    <td><span className={`badge ${PICKING_STATUS_BADGE[row.pickingStatus] ?? "badge-gray"}`}>{row.pickingStatus}</span></td>
                    <td>{row.brand}</td>
                    <td>{row.waveNo}</td>
                    <td>{row.plannedDate}</td>
                    <td><span className={`badge ${DELIVERY_STATUS_BADGE[row.deliveryStatus] ?? "badge-gray"}`}>{row.deliveryStatus}</span></td>
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
