# Supply Core OS — 系統示意原型

企業禮贈品供應營運中台的靜態 HTML 原型，用於提案展示與流程溝通。

---

## 頁面清單

| 檔案 | 功能 |
|---|---|
| `index.html` | Dashboard 總覽 |
| `todo.html` | 我的待辦 |
| `exceptions.html` | 異常中心 |
| `products.html` | 商品資料 |
| `suppliers.html` | 供應商資料 |
| `supplier-mapping.html` | Supplier Mapping（SKU × 廠商對照） |
| `quotes.html` | 報價管理 |
| `orders.html` | 訂單管理 |
| `purchase.html` | 採購管理（PO） |
| `receiving.html` | 收貨 / QC |
| `logistics.html` | 出貨物流 |
| `supply-performance.html` | 供應商績效 |
| `delivery-risk.html` | 交期風險 |
| `margin.html` | 毛利分析 |

---

## 目錄結構

```
PT/
├── index.html
├── todo.html
├── exceptions.html
├── products.html
├── suppliers.html
├── supplier-mapping.html
├── quotes.html
├── orders.html
├── purchase.html
├── receiving.html
├── logistics.html
├── supply-performance.html
├── delivery-risk.html
├── margin.html
├── README.md
└── assets/
    ├── style.css   # 共用樣式
    └── nav.js      # 手機側滑選單 toggle
```

---

## 使用方式

直接用瀏覽器開啟任一 `.html` 檔案，無需 server。

手機 / 平板尺寸下，點選左上角 `☰` 可展開側邊選單。

---

## 架構標記說明

- **`△Flow`** 標籤：代表此欄位或操作由 Delta Flow 規則控管（需符合條件才能放行）
- **阻擋規則卡片**：標示哪些狀態會觸發 Blocking，防止流程提前推進

---

## 產業背景

客戶為企業禮贈品貿易商，主要業務：
- 接受企業客戶的客製禮品訂單（含 Logo 印製、包裝設計）
- 向國內外供應商（印刷廠、製袋廠、電子禮品廠）下單採購
- 管理打樣版本確認流程、QC 及活動截止日交期風險
