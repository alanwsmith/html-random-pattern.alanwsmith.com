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
    const nextFrame = (frameOption + 1) >= frameOptions ? 1 : (frameOption + 1);
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



