/**
 * 模組化載入器
 * 用於載入 header 和 footer 模組
 */

// 載入 Header 模組
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        fetch('includes/header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Header 載入失敗');
                }
                return response.text();
            })
            .then(data => {
                headerPlaceholder.innerHTML = data;
                console.log('Header 載入成功');
            })
            .catch(error => {
                console.error('Header 載入錯誤:', error);
                headerPlaceholder.innerHTML = '<p style="color: red;">Header 載入失敗</p>';
            });
    }
}

// 載入 Footer 模組
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('includes/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Footer 載入失敗');
                }
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
                console.log('Footer 載入成功');
            })
            .catch(error => {
                console.error('Footer 載入錯誤:', error);
                footerPlaceholder.innerHTML = '<p style="color: red;">Footer 載入失敗</p>';
            });
    }
}

// 載入所有模組
function loadModules() {
    loadHeader();
    loadFooter();
}

// 當 DOM 載入完成時執行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadModules);
} else {
    loadModules();
}
