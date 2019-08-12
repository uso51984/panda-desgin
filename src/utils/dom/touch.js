export default function getDirection(x, y) {
  const MIN_DISTANCE = 10;
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}
