# sample-cv
多語系履歷網站（繁中 / 简中 / English）
```bash
pnpm install
pnpm dev
```
執行後依終端機提示開啟網址
改內容：`data/cv.en.ts`、`data/cv.zh-hant.ts`、`data/cv.zh-hans.ts`
路由：`/zh-hant`、`/zh-hans`、`/en`（`/` 會轉到 `/zh-hant`）
建置：`pnpm lint && pnpm build && pnpm start`

## PDF 匯出建議
- 用瀏覽器列印（`Cmd/Ctrl + P`）另存 PDF
- 建議優先使用 Chrome 匯出，結果通常最穩定
- 紙張選 `A4`、邊界選「預設」或「最小」
- 背景圖形建議開啟，版面會更接近畫面
- 若發生分頁跑版，先把瀏覽器縮放設為 `100%`
- 不同瀏覽器的字型與分頁演算法略有差異，輸出前可先預覽一次
