// ==========================================
// すいすい堂 共通パーツ自動読み込みファイル
// ==========================================

document.addEventListener("DOMContentLoaded", function() {

    // 1. 共通ナビゲーションの自動挿入
    const navPlaceholder = document.getElementById("site-nav-placeholder");
    if (navPlaceholder) {
        navPlaceholder.innerHTML = `
        <nav class="site-nav">
            <div class="nav-container">
                <a href="index.html" class="nav-brand">
                    <span class="nav-logo-text">すいすい堂</span>
                </a>
                <ul class="nav-links">
                    <li><a href="news.html">お知らせ</a></li>
                    <li><a href="index.html#about">お店の紹介</a></li>
                    <li><a href="index.html#varieties">取扱品種</a></li>
                    <li><a href="index.html#access">営業案内</a></li>
                    <li><a href="tips.html">めだかすくいのコツ</a></li>
                    <li><a href="care.html">飼い方・水作り</a></li>
                    <li><a href="index.html#contact">お問い合わせ</a></li>
                </ul>
            </div>
        </nav>
        `;
    }

    // 2. 画面右下の共通キャラクター（スイちゃん）の自動挿入
    const floatPlaceholder = document.getElementById("floating-character-placeholder");
    if (floatPlaceholder) {
        floatPlaceholder.innerHTML = `
        <a href="index.html#contact" class="floating-character" title="お問い合わせへ">
            <div class="char-bubble">いらっしゃい！🐟</div>
            <div class="char-img-wrap">
                <img src="sui_icon.png" alt="スイちゃん">
            </div>
        </a>
        `;
    }

    // 3. 共通フッターの自動挿入
    const footerPlaceholder = document.getElementById("site-footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer>
            <p>&copy; 余瀬のめだか屋さん すいすい堂 All Rights Reserved.</p>
        </footer>
        `;
    }

});
