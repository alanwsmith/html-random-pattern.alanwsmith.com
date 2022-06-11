#!/usr/bin/env node

import fs from 'fs';

console.log("Building page and frames");

const indexPath = `/Users/alan/workshop/html-random-pattern.alanwsmith.com/site/pattern.html`;
const frameDir = `/Users/alan/workshop/html-random-pattern.alanwsmith.com/site/frames`;

const indexTemplate = fs.readFileSync(`index-template.html`, `utf-8`);
const frameTemplate = fs.readFileSync(`frame-template.html`, `utf-8`);

const frameOptions = 20;

for (let frameOption = 1; frameOption <= frameOptions; frameOption ++) {
    const framePath = `${frameDir}/${frameOption}.html`;
    const color = Math.floor(Math.random()*16777215).toString(16);
    const nextFrame = (frameOption + 1) === frameOptions ? 1 : (frameOption + 1);
    const timeout = (Math.random() *  8).toFixed(2) + 0.5;
    const framePage = frameTemplate
          .replace('COLOR', color)
          .replace('TIMEOUT', timeout)
          .replace('NEXTFRAME', nextFrame);
    fs.writeFileSync(framePath, framePage);
}

const frameCount = 102;
const frames = [];

for (let frameNum = 1; frameNum <= frameCount; frameNum ++) {
    const startFrame = Math.floor(Math.random() * frameOptions) + 1;
    frames.push(
        `<iframe width="40" height="40" frameborder="0" src="/frames/${startFrame}.html"></iframe>`
    );
}

fs.writeFileSync(indexPath, indexTemplate.replace('FRAMES', frames.join('')));












// const rows = [];
// for (let rowNum = 1; rowNum <= 10; rowNum ++) {
//     const cells = [];
//     for (let cellNum = 1; cellNum <= 20; cellNum ++) {
//         const frameNum = Math.floor(Math.random() * 100) + 1;
//         cells.push(`<td><font color="#222222">${frameNum}</font></td>`);
//     }
//     rows.push(`<tr>${cells.join('')}</td>`);
// }




// const frames = [];
// for (let frameNum = 1; frameNum <= 400; frameNum ++ ) {
//     const frameIndex = Math.floor(Math.random() * 100) + 1;
//     frames.push(
//         `<iframe width="40" height="40" frameborder="1" src="/frames/${frameIndex}.html"></iframe>`
//     );
// }
// const frameTags = frames.join('');



// fs.writeFileSync(filePath, page({ frameTags: frameTags }));
// console.log("Process complete");


// console.log("Building frames");
// const maxFrames = 1000;
// const outputDir = `/Users/alan/workshop/html-random-pattern.alanwsmith.com/site/frames`;

// const frame = (params) => {
//     return `<!DOCTYPE html><html lang="en"><head>` +
//         `<meta http-equiv="refresh" content="${params.timeout};url=/frames/${params.nextFrame}.html" />` +
//         `<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />` +
//         `</head><body bgcolor="#${params.color}">&nbsp;</body></html>`;
// };

// for (let i = 1; i <= maxFrames; i++) {
//     console.log(`- Frame: ${i}`);
//     const filePath = `${outputDir}/${i}.html`;
//     const color = Math.floor(Math.random()*16777215).toString(16);
//     const timeout = (Math.random() *  4).toFixed(2) + 0.5;
//     const nextFrame = (i === maxFrames ? 1 : i + 1);
//     fs.writeFileSync(filePath, frame({
//         color: color,
//         nextFrame: nextFrame,
//         timeout: timeout
//     }));
// }
