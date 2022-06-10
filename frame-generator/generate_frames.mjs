#!/usr/bin/env node

import fs from 'fs';

console.log("Building frames");

const maxFrames = 1000;

const outputDir = `/Users/alan/workshop/html-random-pattern.alanwsmith.com/site/frames`;

const frame = (params) => {
    return `<!DOCTYPE html><html lang="en"><head>` +
        `<meta http-equiv="refresh" content="${params.timeout};url=/frames/${params.nextFrame}.html" />` +
          `<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />` +
          `</head><body bgcolor="#${params.color}">&nbsp;</body></html>`;
};

for (let i = 1; i <= maxFrames; i++) {
    console.log(`- Frame: ${i}`);
    const filePath = `${outputDir}/${i}.html`;
    const color = Math.floor(Math.random()*16777215).toString(16);
    const timeout = (Math.random() *  4).toFixed(2) + 0.5;
    const nextFrame = (i === maxFrames ? 1 : i + 1);
    fs.writeFileSync(filePath, frame({
        color: color,
        nextFrame: nextFrame,
        timeout: timeout
    }));
}

