# 模組化結構說明

## 📁 檔案結構

```
www/
├── includes/
│   ├── header.html          # Header 模組
│   └── footer.html          # Footer 模組
├── assets/
│   └── js/
│       └── modules.js       # 模組載入器
└── *.html                   # 各頁面檔案
```

## 🎯 模組化優點

### 1. **維護性提升**
- 修改 header 或 footer 只需更新一個檔案
- 所有頁面自動同步更新
- 減少重複代碼

### 2. **開發效率**
- 新增頁面時只需引用模組
- 統一的導航和頁腳結構
- 便於團隊協作

### 3. **錯誤減少**
- 避免各頁面 header/footer 不一致
- 統一管理連結和內容

## 🔧 使用方法

### 在 HTML 頁面中使用模組

#### 1. 添加載入位置
```html
<!-- Header 載入位置 -->
<div id="header-placeholder"></div>

<!-- Footer 載入位置 -->
<div id="footer-placeholder"></div>
```

#### 2. 引入模組載入器
```html
<!-- 在 </body> 標籤前添加 -->
<script src="assets/js/modules.js"></script>
```

### 完整範例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- 頁面 head 內容 -->
</head>
<body>
    <!-- Header 載入位置 -->
    <div id="header-placeholder"></div>
    
    <!-- 頁面主要內容 -->
    <main>
        <!-- 您的頁面內容 -->
    </main>
    
    <!-- Footer 載入位置 -->
    <div id="footer-placeholder"></div>
    
    <!-- JavaScript 檔案 -->
    <script src="assets/js/main.js"></script>
    <script src="assets/js/modules.js"></script>
</body>
</html>
```

## 📝 修改模組內容

### 修改 Header
編輯 `includes/header.html` 檔案：
- 導航選單
- Logo 圖片
- 社群媒體連結
- 聯絡資訊

### 修改 Footer
編輯 `includes/footer.html` 檔案：
- 公司資訊
- 頁面連結
- 聯絡方式
- 社群媒體

## 🚀 部署注意事項

### 1. **伺服器設定**
確保伺服器支援：
- HTML 檔案載入
- JavaScript fetch API
- 相對路徑解析

### 2. **瀏覽器相容性**
- 現代瀏覽器支援 fetch API
- 建議使用 HTTPS 避免 CORS 問題

### 3. **除錯技巧**
- 開啟瀏覽器開發者工具
- 檢查 Console 錯誤訊息
- 確認檔案路徑正確

## 🔍 故障排除

### 常見問題

#### 1. **模組載入失敗**
- 檢查檔案路徑是否正確
- 確認 includes 資料夾存在
- 檢查伺服器是否正常運行

#### 2. **樣式問題**
- 確認 CSS 檔案已載入
- 檢查 SCSS 編譯是否正常
- 驗證 class 名稱是否正確

#### 3. **JavaScript 錯誤**
- 檢查 modules.js 是否正確載入
- 確認 jQuery 已載入
- 驗證 DOM 元素是否存在

### 除錯步驟
1. 開啟瀏覽器開發者工具
2. 查看 Console 面板錯誤訊息
3. 檢查 Network 面板載入狀態
4. 驗證 HTML 結構是否正確

## 📋 更新清單

### 已完成的模組化
- ✅ Header 模組 (`includes/header.html`)
- ✅ Footer 模組 (`includes/footer.html`)
- ✅ 模組載入器 (`assets/js/modules.js`)
- ✅ index.html 更新

### 待更新的頁面
- [ ] about.html
- [ ] services.html
- [ ] contact.html
- [ ] booking.html
- [ ] event.html
- [ ] event-2.html
- [ ] event-details.html
- [ ] faq.html
- [ ] gallery.html
- [ ] news.html
- [ ] news-details.html
- [ ] our-offices.html
- [ ] pricing.html
- [ ] team.html
- [ ] index-2.html
- [ ] index-3.html

## 🎯 下一步建議

1. **測試模組化功能**
   - 在瀏覽器中測試 index.html
   - 確認 header 和 footer 正常載入

2. **更新其他頁面**
   - 按照相同模式更新其他 HTML 檔案
   - 保持一致的結構

3. **優化模組內容**
   - 根據需求調整 header 和 footer 內容
   - 更新連結和聯絡資訊

---
**注意**: 使用模組化結構時，請確保所有頁面都使用相同的載入方式，以保持一致性。
