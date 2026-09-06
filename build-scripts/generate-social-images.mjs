// Generated using VScode copilot on Sept. 5th, 2026

import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import sharp from 'sharp';

const eventsDirectory = path.join(process.cwd(), 'events');
const publicDirectory = path.join(process.cwd(), 'public');
const overlayPath = path.join(process.cwd(), 'build-scripts', 'social-overlay.png');

const socialImagePath = (thumbnail) => thumbnail.replace(/\.[^.]+$/, '-social.jpg');

const eventFiles = await fs.readdir(eventsDirectory);

for (const eventFile of eventFiles) {
  if (!eventFile.endsWith('.md')) {
    continue;
  }

  const eventContents = await fs.readFile(path.join(eventsDirectory, eventFile), 'utf8');
  const { data } = matter(eventContents);
  const thumbnail = data.thumbnail;

  if (typeof thumbnail !== 'string' || !thumbnail.startsWith('/')) {
    continue;
  }

  const sourcePath = path.join(publicDirectory, thumbnail);
  const outputPath = path.join(publicDirectory, socialImagePath(thumbnail));

  await sharp(sourcePath)
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .composite([{ input: overlayPath, gravity: 'west' }])
    .jpeg({ quality: 85, progressive: true })
    .toFile(outputPath);

  console.log(`Generated ${path.relative(process.cwd(), outputPath)}`);
}