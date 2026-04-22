"use client";

import { useState } from "react";

type InboundRow = {
  id: string;
  status: string;
  shipper: string;
  productCode: string;
  productName: string;
  inboundType: string;
  inboundNo: string;
  warehouseCode: string;
  plannedDate: string;
  qty: number;
  receivedQty: number;
};

const MOCK_DATA: InboundRow[] = [
  { id: "1", status: "입고", shipper: "신규", productCode: "#1P", productName: "MUSINSA", inboundType: "일반", inboundNo: "268330-TTUDEMENT-2655-298T", warehouseCode: "KKW", plannedDate: "2026-03-18", qty: 120, receivedQty: 120 },
  { id: "2", status: "입고완료", shipper: "신규", productCode: "#1P", productName: "MUSINSA BRAND", inboundType: "일반", inboundNo: "268331-TTUDEMENT-2655-299T", warehouseCode: "KKW", plannedDate: "2026-03-18", qty: 85, receivedQty: 85 },
  { id: "3", status: "입고예정", shipper: "신규", productCode: "#2P", productName: "MUSINSA STORE", inboundType: "일반", inboundNo: "268332-TTUDEMENT-2655-300T", warehouseCode: "KKW", plannedDate: "2026-03-19", qty: 200, receivedQty: 0 },
  { id: "4", status: "입고중", shipper: "신규", productCode: "#3P", productName: "MUSINSA GLOBAL", inboundType: "B2B", inboundNo: "268333-TTUDEMENT-2655-301T", warehouseCode: "KKW", plannedDate: "2026-03-19", qty: 60, receivedQty: 30 },
  { id: "5", status: "입고완료", shipper: "신규", productCode: "#1P", productName: "MUSINSA SNAP", inboundType: "일반", inboundNo: "268334-TTUDEMENT-2655-302T", warehouseCode: "KKW", plannedDate: "2026-03-20", qty: 150, receivedQty: 150 },
  { id: "6", status: "입고예정", shipper: "신규", productCode: "#4P", productName: "MUSINSA KIDS", inboundType: "일반", inboundNo: "268335-TTUDEMENT-2655-303T", warehouseCode: "KKW", plannedDate: "2026-03-21", qty: 300, receivedQty: 0 },
];

const STATUS_BADGE: Record<string, string> = {
  "입고예정": "badge-gray",
  "입고중": "badge-blue",
  "입고": "badge-blue",
  "입고완료": "badge-green",
  "취소": "badge-red",
};

const INBOUND_TYPE_OPTIONS = ["전체", "일반", "B2B", "반품", "교환"];
const STATUS_OPTIONS = ["전체", "입고예정", "입고중", "입고완료", "취소"];

export default function InboundManagementPage() {
  const [filters, setFilters] = useState({
    dateFrom: "2026-02-28",
    dateTo: "2026-03-38",
    inboundNo: "",
    productCode: "",
    shipper: "",
    inboundType: "전체",
    productStatus: "",
    inboundStatus: "전체",
  });
  const [rows, setRows] = useState<InboundRow[]>(MOCK_DATA);
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
      inboundNo: "",
      productCode: "",
      shipper: "",
      inboundType: "전체",
      productStatus: "",
      inboundStatus: "전체",
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
    if (selected.size === rows.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(rows.map((r) => r.id)));
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Filter Panel */}
      <div className="bg-white border border-gray-200 rounded p-3">
        <div className="grid gap-x-4 gap-y-2" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {/* Row 1 */}
          <div className="flex items-center gap-2">
            <label className="filter-label w-24">입고예정일자</label>
            <div className="flex items-center gap-1 flex-1">
              <input
                type="date"
                className="form-input"
                value={filters.dateFrom}
                onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
              />
              <span className="text-gray-400 text-xs">~</span>
              <input
                type="date"
                className="form-input"
                value={filters.dateTo}
                onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-20">입고번호</label>
            <input
              className="form-input"
              placeholder="입고번호 입력"
              value={filters.inboundNo}
              onChange={(e) => setFilters({ ...filters, inboundNo: e.target.value })}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">화주</label>
            <input
              className="form-input"
              placeholder=""
              value={filters.shipper}
              onChange={(e) => setFilters({ ...filters, shipper: e.target.value })}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">입고유형</label>
            <select
              className="form-select"
              value={filters.inboundType}
              onChange={(e) => setFilters({ ...filters, inboundType: e.target.value })}
            >
              {INBOUND_TYPE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          {/* Row 2 */}
          <div className="flex items-center gap-2">
            <label className="filter-label w-24">상품코드</label>
            <input
              className="form-input"
              placeholder="상품코드 입력"
              value={filters.productCode}
              onChange={(e) => setFilters({ ...filters, productCode: e.target.value })}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-20">상품상태</label>
            <select className="form-select">
              <option>신규, 반품, 부분파손, 전파</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="filter-label w-16">입고상태</label>
            <select
              className="form-select"
              value={filters.inboundStatus}
              onChange={(e) => setFilters({ ...filters, inboundStatus: e.target.value })}
            >
              {STATUS_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              onClick={handleReset}
              className="px-3 py-1 text-xs border border-gray-300 rounded text-gray-600 hover:bg-gray-50 transition-colors"
            >
              초기화
            </button>
            <button
              onClick={handleSearch}
              className="px-4 py-1 text-xs rounded text-white transition-colors"
              style={{ background: "#3b82f6" }}
            >
              검색
            </button>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between bg-white border border-gray-200 rounded px-3 py-2">
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <span>일괄처리 이력</span>
          <span className="ml-4">└ 내역 다운로드</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">
            입고취소
          </button>
          <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">
            입고확정
          </button>
          <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">
            일괄삭제
          </button>
          <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">
            일괄등록
          </button>
          <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">
            내역 다운로드
          </button>
          <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">
            입고예정 등록
          </button>
        </div>
      </div>

      {/* Data Grid */}
      <div className="bg-white border border-gray-200 rounded overflow-hidden">
        <div className="overflow-auto" style={{ maxHeight: "calc(100vh - 340px)" }}>
          <table className="data-grid">
            <thead>
              <tr>
                <th style={{ width: 32 }}>
                  <input
                    type="checkbox"
                    checked={selected.size === rows.length && rows.length > 0}
                    onChange={toggleAll}
                  />
                </th>
                <th>입고상태</th>
                <th>하적상태</th>
                <th>화주명</th>
                <th>화주</th>
                <th>입고유형</th>
                <th>입고번호</th>
                <th>부산창고코드</th>
                <th>입고예정일</th>
                <th className="numeric">입고예정수량</th>
                <th className="numeric">실입고수량</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={11} className="text-center py-10 text-gray-400">
                    조회결과 없음
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
                    <td>
                      <input
                        type="checkbox"
                        checked={selected.has(row.id)}
                        onChange={() => toggleRow(row.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>
                    <td>
                      <span className={`badge ${STATUS_BADGE[row.status] ?? "badge-gray"}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>{row.status === "입고완료" ? "완료" : "-"}</td>
                    <td>{row.productName}</td>
                    <td>{row.shipper}</td>
                    <td>{row.inboundType}</td>
                    <td className="text-blue-600 cursor-pointer hover:underline">{row.inboundNo}</td>
                    <td>{row.warehouseCode}</td>
                    <td>{row.plannedDate}</td>
                    <td className="numeric">{row.qty.toLocaleString()}</td>
                    <td className="numeric">{row.receivedQty.toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
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

      {/* Detail Panel */}
      <div className="bg-white border border-gray-200 rounded">
        <div
          className="flex items-center justify-between px-3 py-2 border-b border-gray-200 cursor-pointer"
          style={{ background: "#f8f9fa" }}
        >
          <span className="text-xs font-semibold text-gray-700">▼ 입고청 아이템</span>
          <div className="flex gap-1">
            <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">
              입고취소
            </button>
            <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">
              입고완료확인
            </button>
          </div>
        </div>
        <div className="p-3 text-center text-xs text-gray-400">
          상위 목록에서 행을 선택하면 아이템 상세가 표시됩니다.
        </div>
      </div>
    </div>
  );
}
