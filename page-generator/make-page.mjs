#!/usr/bin/env node

import fs from 'fs';

console.log("Building page");

const filePath = `/Users/alan/workshop/html-random-pattern.alanwsmith.com/site/index.html`;

const page = (params) => {
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>HTML Only "Random" Pattern - by alan w. smith</title>
    <meta property="og:title" content="HTML Only 'Random' Pattern - by alan w. smith" />
    <meta name="twitter:title" content="HTML Only 'Random' Pattern - by alan w. smith" />

    <meta property="og:url" content="https://html-random-pattern.alanwsmith.com/" />

    <meta name="description" content="An experiment in making a web page without css, javascript, or images" />
    <meta property="og:description" content="An experiment in making a web page without css, javascript, or images" />

    <meta
      property="og:image"
      content="https://html-random-pattern.alanwsmith.com/og-images/main.png"
    />
    <meta
      name="twitter:image"
      content="https://html-random-pattern.alanwsmith.com/og-images/main.png"
    />

    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@theidofalan" />

    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/16x16.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/favicons/96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="128x128"
      href="/favicons/128x128.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="196x196"
      href="/favicons/196x196.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="228x228"
      href="/favicons/228x228.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="152x152"
      href="/favicons/152x152.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="167x167"
      href="/favicons/167x167.png"
    />
    <link
      rel="apple-touch-icon-precomposed"
      sizes="180x180"
      href="/favicons/180x180.png"
    />
  </head>
  <body bgcolor="#bbbbbb">
${frameTags}
</body>
</html>
`;
};


// const rows = [];
// for (let rowNum = 1; rowNum <= 10; rowNum ++) {
//     const cells = [];
//     for (let cellNum = 1; cellNum <= 20; cellNum ++) {
//         const frameNum = Math.floor(Math.random() * 100) + 1;
//         cells.push(`<td><font color="#222222">${frameNum}</font></td>`);
//     }
//     rows.push(`<tr>${cells.join('')}</td>`);
// }




const frames = [];

for (let frameNum = 1; frameNum <= 400; frameNum ++ ) {
    const frameIndex = Math.floor(Math.random() * 100) + 1;
    frames.push(
        `<iframe width="40" height="40" frameborder="1" src="/frames/${frameIndex}.html"></iframe>`
    );
}

const frameTags = frames.join('');



fs.writeFileSync(filePath, page({ frameTags: frameTags }));

console.log("Process complete");