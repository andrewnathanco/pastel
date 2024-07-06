import seedrandom, { PRNG } from "seedrandom";

export function hexToRgb(hex: string): RGBColor {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, "");

  // Parse the r, g, b values
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return { r, g, b };
}

export function rgbToHex(color: RGBColor = { r: 0, g: 0, b: 0 }): string {
  const { r, g, b } = color;
  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
}

export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export function randomColor(rng: PRNG, shrink: number): string {
  let rangetop = 255 - shrink;
  let rangebottom = 0 + shrink;
  let opts = rangetop - rangebottom;

  let colorIndex = Math.floor(rng() * 3);
  let r = Math.floor(rangebottom + rng() * opts);
  let b = Math.floor(rangebottom + rng() * opts);
  let g = Math.floor(rangebottom + rng() * opts);

  switch (colorIndex) {
    case 1:
      r = Math.floor(0 + rng() * 75);
      break;
    case 2:
      b = Math.floor(0 + rng() * 75);
      break;
    case 3:
      g = Math.floor(0 + rng() * 75);
      break;
  }

  return rgbToHex({
    r,
    g,
    b,
  });
}

export interface GameData {
  base: string;
  correct: string[];
  all: string[];
}

export function calculateDifference(color1: string, color2: string): RGBColor {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const rDiff = rgb1.r - rgb2.r;
  const gDiff = rgb1.g - rgb2.g;
  const bDiff = rgb1.b - rgb2.b;

  return { r: rDiff, g: gDiff, b: bDiff };
}
