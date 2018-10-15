let nums = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B];
let index = 9;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(0);
  sevenSegment(nums[index+nums.length]);
  index = (index - 1) % nums.length;
}

function getColor(val, shift) {
  let r = 0;
  let g = 255;
  let b = 0;
  let a = 10 + 255 * ((val >> shift) & 1);
  return color(r, g, b, a);
}

function sevenSegment(val) {
  // A
  fill(getColor(val, 6))
  rect(160, 60, 78, 18, 10, 10);
  // B
  fill(getColor(val, 5))
  rect(240, 80, 18, 98, 10, 10);
  // C
  fill(getColor(val, 4))
  rect(240, 200, 18, 98, 10, 10);
  // D
  fill(getColor(val, 3));
  rect(160, 300, 78, 18, 10, 10);
  // E
  fill(getColor(val, 2));
  rect(140, 200, 18, 98, 10, 10);
  // F
  fill(getColor(val, 1));
  rect(140, 80, 18, 98, 10, 10);
  // G
  fill(getColor(val, 0));
  rect(160, 180, 78, 18, 10, 10);
}
