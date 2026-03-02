# sample-cv

多語系履歷網站（繁中 / 简中 / English），使用 Next.js App Router 建置，支援靜態輸出與列印樣式。

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4

## Local Development

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)。

## Available Routes

- `/` -> 重新導向到 `/zh-hant`
- `/zh-hant` -> 繁體中文履歷
- `/zh-hans` -> 简体中文履歷
- `/en` -> English resume

## Build & Quality Check

```bash
npm run lint
npm run build
npm run start
```

## Project Structure

```text
app/
  page.tsx                # 首頁導向
  [locale]/page.tsx       # 多語系頁面與 metadata
components/
  cv/                     # 履歷模板（EN / 中文）
  layout/locale-nav.tsx   # 語系切換導覽
data/
  cv.en.ts
  cv.zh-hant.ts
  cv.zh-hans.ts
  cv.loader.ts            # 語系資料載入與驗證
  cv.types.ts             # 型別定義
```

## How To Update CV Content

- 基本資料、經歷、專案、技能：修改 `data/cv.*.ts`
- 語系標題（例如工作經歷、技能）：修改各語系的 `labels`
- 版型與排版：修改 `components/cv/*` 與 `app/globals.css`

## Notes

- 頁面包含 print CSS，可直接列印成 A4 履歷。
- 各語系頁面會輸出對應的 SEO metadata（title / description / OG / canonical）。

hello from Howard.