"use client";

import { useState } from "react";

type OutboundRow = {
  id: string;
  no: number;
  orderType: string;
  brand: string;
  moveDate: string;
  orderNo: string;
  orderNoDetail: string;
  plusMinus: string;
  qty: number;
  baseQty: number;
  supplyQty: number;
  moveDate2: string;
};

const MOCK_DATA: OutboundRow[] = [
  { id: "1", no: 5, orderType: "일반", brand: "MUSINSA", moveDate: "2026-01-31 (화)", orderNo: "20260313M_MUSINSA_88831586", orderNoDetail: "하세", plusMinus: "1856", qty: 1890, baseQty: 1898, supplyQty: 5056, moveDate2: "2026-01-31 (화) 10:03:47" },
  { id: "2", no: 4, orderType: "일반", brand: "MUSINSA", moveDate: "2026-01-31 (화)", orderNo: "20260312M_MUSINSA_88831587", orderNoDetail: "하세", plusMinus: "518", qty: 890, baseQty: 1090, supplyQty: 7082, moveDate2: "2026-01-30 (화) 10:03:47" },
  { id: "3", no: 3, orderType: "일반", brand: "MUSINSA", moveDate: "2026-01-31 (화)", orderNo: "20260312M_MUSINSA_88831588", orderNoDetail: "하세", plusMinus: "13", qty: 26, baseQty: 1090, supplyQty: 5082, moveDate2: "2026-01-31 (화) 10:03:47" },
  { id: "4", no: 2, orderType: "일반", brand: "MUSINSA", moveDate: "2026-01-31 (화)", orderNo: "20260312M_MUSINSA_88831589", orderNoDetail: "하세", plusMinus: "1896", qty: 5054, baseQty: 5052, supplyQty: 5056, moveDate2: "2026-01-31 (화) 10:03:47" },
  { id: "5", no: 1, orderType: "일반", brand: "MUSINSA", moveDate: "2026-01-31 (화)", orderNo: "20260312M_MUSINSA_88831590", orderNoDetail: "PLUS_D...", plusMinus: "5611", qty: 5053, baseQty: 5053, supplyQty: 5056, moveDate2: "2026-01-30 (화) 10:38:41" },
];

export default function MOMSOutboundPage() {
  const [filters, setFilters] = useState({
    brand: "MUSINSA",
    orderNo: "",
    shipper: "",
    dateFrom: "",
    dateTo: "",
  });
  const [rows] = useState<OutboundRow[]>(MOCK_DATA);
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
      {/* Filter */}
      <div className="bg-white border border-gray-200 rounded p-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="filter-label w-12">화주명</label>
            <select className="form-select" style={{ width: 120 }}>
              <option>MUSINSA</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="filter-label w-12">출고번호</label>
            <input className="form-input" style={{ width: 140 }} value={filters.orderNo} onChange={(e) => setFilters({ ...filters, orderNo: e.target.value })} placeholder="출고번호 입력" />
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 text-xs rounded text-white" style={{ background: "#6b7280" }}>조회</button>
            <button className="px-3 py-1 text-xs rounded text-white" style={{ background: "#10b981" }}>저장</button>
            <button className="px-3 py-1 text-xs rounded text-white" style={{ background: "#ef4444" }}>취소</button>
            <button className="px-3 py-1 text-xs rounded text-white" style={{ background: "#3b82f6" }}>확정</button>
          </div>
        </div>
      </div>

      {/* Main table */}
      <div className="bg-white border border-gray-200 rounded overflow-hidden">
        <div className="px-3 py-2 border-b border-gray-200 flex items-center justify-between" style={{ background: "#f8f9fa" }}>
          <span className="text-xs font-semibold text-gray-700">출고조회 (수주별)_신규</span>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">다운로드</button>
          </div>
        </div>
        <div className="overflow-auto" style={{ maxHeight: "calc(100vh - 300px)" }}>
          <table className="data-grid">
            <thead>
              <tr>
                <th style={{ width: 32 }}><input type="checkbox" /></th>
                <th>No</th>
                <th>일반</th>
                <th>화주</th>
                <th>이동지시일자 (시)</th>
                <th>출고번호</th>
                <th>화주명</th>
                <th>차수</th>
                <th className="numeric">실제수량</th>
                <th className="numeric">출고수량</th>
                <th className="numeric">공급수량</th>
                <th>출고이동일자 (시)</th>
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
                  <td>{row.no}</td>
                  <td>{row.orderType}</td>
                  <td>{row.brand}</td>
                  <td className="text-blue-600">{row.moveDate}</td>
                  <td className="text-blue-600">{row.orderNo}</td>
                  <td>{row.orderNoDetail}</td>
                  <td>{row.plusMinus}</td>
                  <td className="numeric">{row.qty.toLocaleString()}</td>
                  <td className="numeric">{row.baseQty.toLocaleString()}</td>
                  <td className="numeric">{row.supplyQty.toLocaleString()}</td>
                  <td>{row.moveDate2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">다운로드</button>
          </div>
          <span className="text-xs text-gray-500">1 to 10 of 18 | Page 1 of 2</span>
        </div>
      </div>

      {/* Detail table */}
      <div className="bg-white border border-gray-200 rounded overflow-hidden">
        <div className="px-3 py-2 border-b border-gray-200 flex items-center justify-between" style={{ background: "#f8f9fa" }}>
          <span className="text-xs font-semibold text-gray-700">차수 상세</span>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">다운로드</button>
          </div>
        </div>
        <div className="overflow-auto" style={{ maxHeight: 180 }}>
          <table className="data-grid">
            <thead>
              <tr>
                <th style={{ width: 32 }}><input type="checkbox" /></th>
                <th>출고번호</th>
                <th>출고차수</th>
                <th>주문번호</th>
                <th>주문번호</th>
                <th>주문번호</th>
                <th>주문수량</th>
                <th>화주코드</th>
                <th>화주코드</th>
              </tr>
            </thead>
            <tbody>
              {[1,2,3,4,5,6,7,8].map((i) => (
                <tr key={i}>
                  <td><input type="checkbox" /></td>
                  <td>2026-03-38 (화)</td>
                  <td>2026-02-31 (화)</td>
                  <td className="text-blue-600">출고번호</td>
                  <td>A000044587</td>
                  <td>RSP</td>
                  <td>MU1364</td>
                  <td>MU1364</td>
                  <td>2026-{i.toString().padStart(2,"0")}-{(i+5).toString().padStart(2,"0")}...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
