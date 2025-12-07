#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import fm from 'front-matter';

const inputFolder = process.argv[2];

if (!inputFolder) {
    console.error('Usage: node transform-posts.js <folder>');
    process.exit(1);
}

const folderPath = path.resolve(inputFolder);

if (!fs.existsSync(folderPath)) {
    console.error(`Folder not found: ${folderPath}`);
    process.exit(1);
}

const mdFiles = fs.readdirSync(folderPath).filter(f => f.endsWith('.md'));

// Build mapping from old filename (without .md) to new filename (without .md)
const renameMap = new Map();

for (const file of mdFiles) {
    const filePath = path.join(folderPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { attributes } = fm(content);

    const title = attributes.title || path.basename(file, '.md');
    const rawDate = attributes.date || new Date().toISOString().split('T')[0];
    const date = new Date(rawDate).toISOString().split('T')[0]; // Ensure YYYY-MM-DD format

    const slugifiedTitle = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

    const newBaseName = `${date}-${slugifiedTitle}`;
    const oldBaseName = path.basename(file, '.md');

    renameMap.set(oldBaseName, newBaseName);
}

// Process each file
for (const file of mdFiles) {
    const filePath = path.join(folderPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { body, attributes } = fm(content);

    const title = attributes.title || path.basename(file, '.md');
    const rawDate = attributes.date || new Date().toISOString().split('T')[0];
    const date = new Date(rawDate).toISOString().split('T')[0]; // Ensure YYYY-MM-DD format

    // Update wiki-links in body
    let updatedBody = body.replace(/\[\[([^\]]+)\]\]/g, (match, linkName) => {
        const newName = renameMap.get(linkName);
        return newName ? `[[${newName}]]` : match;
    });

    // Build new content with clean frontmatter
    const newContent = `---
title: "${title}"
date: "${date}"
---
${updatedBody}`;

    // Write updated content
    fs.writeFileSync(filePath, newContent, 'utf-8');

    // Rename file
    const oldBaseName = path.basename(file, '.md');
    const newBaseName = renameMap.get(oldBaseName);
    const newFilePath = path.join(folderPath, `${newBaseName}.md`);

    if (filePath !== newFilePath) {
        fs.renameSync(filePath, newFilePath);
        console.log(`${file} -> ${newBaseName}.md`);
    } else {
        console.log(`${file} (unchanged)`);
    }
}

console.log('\nDone!');
