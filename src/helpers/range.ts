export default function range(end: number) {
  return Array.from(Array(end).keys(), (number) => number + 1)
}
