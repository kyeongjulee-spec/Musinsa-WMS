"use client";

import { useState } from "react";

type InboundRow = {
  id: string;
  uid: string;
  brand: string;
  orderNo: string;
  col1: string;
  status: string;
  qty: number;
  price: number;
  supplyPrice: number;
  date: string;
};

const MOCK_DATA: InboundRow[] = [
  { id: "1", uid: "TNA0B012", brand: "NAMED TC", orderNo: "NAMED TC", col1: "74", status: "신규", qty: 14350, price: 0, supplyPrice: 0, date: "0000000000" },
  { id: "2", uid: "TNA0B023", brand: "NAMED TC", orderNo: "NAMED TC", col1: "76", status: "신규", qty: 8300, price: 0, supplyPrice: 0, date: "0000000000" },
  { id: "3", uid: "TNA0B034", brand: "NEW BOOT", orderNo: "NEW BOOT", col1: "91", status: "신규", qty: 31500, price: 0, supplyPrice: 0, date: "0000000000" },
  { id: "4", uid: "TNA0B045", brand: "NEW BOOT", orderNo: "NEW BOOT", col1: "84", status: "신규", qty: 31500, price: 0, supplyPrice: 0, date: "0000000000" },
  { id: "5", uid: "TNA0B056", brand: "NEW BOOT", orderNo: "NEW BOOT", col1: "69", status: "신규", qty: 31500, price: 0, supplyPrice: 0, date: "0000000000" },
];

export default function MOMSInboundPage() {
  const [filters, setFilters] = useState({
    brand: "MUSINSA",
    status: "출고",
    dateFrom: "",
    dateTo: "",
  });
  const [rows] = useState<InboundRow[]>(MOCK_DATA);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);

  function toggleRow(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleSave() {
    if (selected.size === 0) return;
    setShowModal(true);
  }

  function handleConfirm() {
    setShowModal(false);
    setSelected(new Set());
    alert("입고 저장이 완료되었습니다.");
  }

  return (
    <div className="flex flex-col gap-2 relative">
      {/* Filter */}
      <div className="bg-white border border-gray-200 rounded p-3">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="filter-label w-12">화주명</label>
            <select className="form-select" style={{ width: 120 }}>
              <option>MUSINSA</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="filter-label w-12">상태</label>
            <select className="form-select" style={{ width: 80 }}>
              <option>출고</option>
              <option>입고</option>
            </select>
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

      {/* Grid */}
      <div className="bg-white border border-gray-200 rounded overflow-hidden">
        <div className="overflow-auto" style={{ maxHeight: "calc(100vh - 230px)" }}>
          <table className="data-grid">
            <thead>
              <tr>
                <th style={{ width: 32 }}><input type="checkbox" /></th>
                <th>바코드</th>
                <th>상품명</th>
                <th>옵션</th>
                <th>입고처리수량</th>
                <th>바코드</th>
                <th>상품명</th>
                <th>판매일자</th>
                <th className="numeric">실제수량</th>
                <th className="numeric">출고수량</th>
                <th>배송처</th>
                <th>결과</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className={selected.has(row.id) ? "selected" : ""} onClick={() => toggleRow(row.id)} style={{ cursor: "pointer" }}>
                  <td><input type="checkbox" checked={selected.has(row.id)} onChange={() => toggleRow(row.id)} onClick={(e) => e.stopPropagation()} /></td>
                  <td className="text-blue-600">{row.uid}</td>
                  <td>{row.brand}</td>
                  <td>{row.orderNo}</td>
                  <td>{row.col1}</td>
                  <td>신규</td>
                  <td>0000000000</td>
                  <td>0000000000</td>
                  <td className="numeric">{row.qty.toLocaleString()}</td>
                  <td className="numeric">{row.price.toLocaleString()}</td>
                  <td>{row.supplyPrice}</td>
                  <td><span className="badge badge-blue">신규</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-3 py-2 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 text-xs border border-gray-200 rounded text-gray-600 hover:bg-gray-50">다운로드</button>
            <button onClick={handleSave} className="px-2 py-1 text-xs rounded text-white" style={{ background: "#3b82f6" }}>입고 저장</button>
          </div>
          <span className="text-xs text-gray-500">1 to 6 of 6 | Page 1 of 1</span>
        </div>
      </div>

      {/* Save Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-xl p-6 w-80">
            <div className="text-center mb-4">
              <div className="text-sm text-gray-700 mb-1">moms.musinsalogistics.co.kr 내용</div>
              <div className="text-sm font-medium text-gray-900 mt-3">
                {selected.size}개의 항목<br />
                처음 가져갔습니까?
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleConfirm}
                className="px-6 py-2 rounded text-white text-sm font-medium"
                style={{ background: "#3b82f6" }}
              >
                확인
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 rounded text-sm font-medium border border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
