#!/bin/bash
# GitHub Pages 部署腳本

echo "🚀 開始部署到 GitHub Pages..."

# 檢查是否已初始化 git
if [ ! -d ".git" ]; then
    echo "❌ 未找到 git 儲存庫，請先執行 git init"
    exit 1
fi

# 添加所有變更
echo "📝 添加檔案變更..."
git add -A

# 提交變更
echo "💾 提交變更..."
git commit -m "Update website for GitHub Pages deployment"

# 設定遠端（如果尚未設定）
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 設定遠端儲存庫..."
    git remote add origin https://github.com/oneeric/-jhencheng.git
fi

# 推送到 GitHub
echo "⬆️  推送到 GitHub..."
git push -u origin main

echo "✅ 程式碼已推送到 GitHub！"
echo ""
echo "📋 接下來請手動完成："
echo "1. 前往 https://github.com/oneeric/-jhencheng/settings/pages"
echo "2. 在 Source 選擇 'Deploy from a branch'"
echo "3. 選擇 'main' 分支和 '/ (root)' 資料夾"
echo "4. 點擊 'Save'"
echo ""
echo "🌐 網站將在 https://oneeric.github.io/-jhencheng/ 上線"
