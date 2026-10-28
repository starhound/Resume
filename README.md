# Wesley Reid's Resume

A responsive resume website built with Next.js and React, exported as static files
for Azure Static Web Apps.

## Local development

Use Node.js 24 LTS and npm:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Resume content lives in `src/components`, the page
order and summary in `src/app/page.js`, and screen/print styles in
`src/app/globals.css`.

## Validation and static export

```sh
npm run lint
npm run build
```

The production output is `out/`. Serve that directory with a static HTTP server;
`next start` does not serve this project's static export. The Azure workflow uses
Node.js 24, validates the source, and uploads the prebuilt output.

## Print / PDF

Select **Print / Save PDF**, then choose US Letter and disable browser headers and
footers. The print stylesheet defines margins, readable type, and page-break
behavior. All five roles appear online and in print. Supplemental skills remain
visible only on the website to keep the PDF concise.

Dates, education status, employers, and experience claims should be verified with
Wesley before factual changes. No graduation date or performance metrics have
been inferred.
