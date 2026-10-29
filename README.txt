Kotobox ファイル一式

【使い方】
このフォルダー内のファイルをそのままWebサーバーへアップロードしてください。
GitHub Pagesの場合も、このフォルダーの中身を公開対象のルートに置くだけで使えます。
ビルドやnpm installは不要です。

【スマートフォン】
iPhone：Safariで開く → 共有 → ホーム画面に追加。
Android：Chromeで開く → メニュー → ホーム画面に追加。
PWAにはHTTPSまたはlocalhostでの配信が必要です。
index.htmlのダブルクリックでは一部機能が動かないため、Webサーバーで開いてください。

【保存】
名前は保存せず、ページを開いている間だけ使います。
集めた言葉は利用中のブラウザに保存されます。
ブラウザのデータ削除で消えるためご注意ください。
別のURLにアップロードした場合、公開版で保存した言葉は自動では引き継がれません。

【ファイル】
index.html：入口
style.css：デザイン
app.js：動作（React等を含むビルド済みファイル）
art/：画像素材
source/：編集用のReact / TypeScriptソース
manifest.webmanifest、sw.js、アイコン：PWA用

sourceの変更はapp.jsに自動では反映されません。再ビルドが必要です。
