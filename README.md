# Gairol - 共同工作空間網站版型

## 專案概述
這是一個現代化的共同工作空間（Coworking Space）網站版型，名為 "Gairol"。版型採用響應式設計，適合用於共同工作空間、創意工作室、商務中心等相關業務。

## 專案結構

### 📁 主要檔案
```
www/
├── index.html          # 首頁 (主要版本)
├── index-2.html        # 首頁變體 2
├── index-3.html        # 首頁變體 3
├── about.html          # 關於我們
├── services.html       # 服務頁面
├── contact.html        # 聯絡我們
├── booking.html        # 預約頁面
├── event.html          # 活動頁面 1
├── event-2.html        # 活動頁面 2
├── event-details.html  # 活動詳情
├── faq.html           # 常見問題
├── gallery.html       # 相簿
├── news.html          # 新聞
├── news-details.html  # 新聞詳情
├── our-offices.html   # 辦公室
├── pricing.html       # 價格方案
├── team.html          # 團隊
└── README.md          # 專案說明文件
```

### 📁 資源檔案 (assets/)
```
assets/
├── css/               # 樣式表
│   ├── style.css      # 主要樣式表
│   ├── bootstrap.min.css
│   ├── animate.css
│   └── ...
├── scss/              # SCSS 原始檔
│   ├── style.scss     # 主要 SCSS 檔案
│   ├── _variables.scss # 變數定義
│   ├── _header.scss   # 標題樣式
│   ├── _banner.scss   # 橫幅樣式
│   └── ...
├── js/                # JavaScript 檔案
│   ├── main.js        # 主要 JS 檔案
│   ├── jquery-1.12.4.min.js
│   └── ...
├── images/            # 圖片資源
│   ├── logo.png       # Logo
│   ├── banner-bg.jpg  # 橫幅背景
│   └── ...
└── fonts/             # 字體檔案
    ├── fa-brands-400.*
    └── ...
```

## 🎨 設計特色

### 色彩配置
- **主色調**: `#1a6f67` (藍綠色)
- **強調色**: `#e0a00b` (亮黃色)
- **標題色**: `#1a6f67` (藍綠色)
- **內文色**: `#28586b` (深灰藍色)
- **背景色**: `#f2faff` (淺藍灰色)
- **邊框色**: `#daecff` (淺藍色)

### 字體
- **主要字體**: Archivo (Google Fonts)
- **標題字體**: Oswald (Google Fonts)

## 📱 頁面功能

### 首頁 (index.html)
- 橫幅區域 (Banner)
- 服務特色 (Sub Area)
- 關於我們 (About Us)
- 空間導覽 (Tour)
- 數據統計 (Fun Facts)
- 優惠方案 (Benefits)
- 價格方案 (Pricing)
- 空間介紹 (Our Place)
- 最新消息 (News)
- 聯絡資訊 (Call)

### 其他頁面
- **關於我們**: 公司介紹、數據統計、設施介紹
- **服務頁面**: 服務項目、空間展示
- **聯絡頁面**: 聯絡表單、地圖、聯絡資訊
- **預約頁面**: 線上預約系統
- **活動頁面**: 活動列表和詳情
- **相簿**: 空間照片展示
- **團隊**: 團隊成員介紹
- **價格**: 方案價格表

## 🛠️ 技術規格

### 前端技術
- **HTML5**: 語義化標記
- **CSS3**: 響應式設計、動畫效果
- **SCSS**: 模組化樣式管理
- **Bootstrap 4**: 響應式框架
- **jQuery**: JavaScript 函式庫

### 外掛程式
- **Slick Slider**: 輪播功能
- **Magnific Popup**: 彈出視窗
- **WOW.js**: 滾動動畫
- **Counter Up**: 數字計數動畫
- **Circle Progress**: 圓形進度條

### 響應式斷點
- **Desktop**: 1200px+
- **Laptop**: 992px - 1200px
- **Tablet**: 768px - 991px
- **Mobile**: 767px 以下

## 🎯 客製化指南

### 1. 色彩修改
修改 `assets/scss/_variables.scss` 檔案中的色彩變數：
```scss
$theme-color: #1a6f67;       // 主色調 (藍綠色)
$accent-color: #e0a00b;        // 強調色 (亮黃色)
$heading-color: #1a6f67;      // 標題色 (藍綠色)
$body-color: #28586b;         // 內文色
```

### 2. Logo 更換
替換 `assets/images/logo.png` 檔案

### 3. 內容修改
- 文字內容：直接編輯各 HTML 檔案
- 圖片：替換 `assets/images/` 資料夾中的圖片
- 聯絡資訊：修改各頁面中的電話、地址、Email

### 4. 樣式調整
- 主要樣式：編輯 `assets/scss/` 資料夾中的 SCSS 檔案
- 編譯後：修改 `assets/css/style.css`

## 📋 修改清單

### 需要客製化的內容
1. **品牌資訊**
   - Logo 圖片
   - 公司名稱
   - 聯絡資訊

2. **內容文字**
   - 首頁標題和描述
   - 關於我們內容
   - 服務項目描述
   - 價格方案

3. **圖片資源**
   - 橫幅背景圖
   - 空間照片
   - 團隊照片
   - 活動照片

4. **聯絡資訊**
   - 電話號碼
   - 地址
   - Email
   - 社群媒體連結

## 🚀 部署說明

1. 將所有檔案上傳至網站伺服器
2. 確保所有路徑正確
3. 測試所有頁面功能
4. 檢查響應式設計

## 📞 技術支援

如需技術支援或客製化服務，請聯絡開發團隊。

---

**版本**: 1.0  
**最後更新**: 2024年  
**授權**: 商業使用
