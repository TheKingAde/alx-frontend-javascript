export default function hasValueFromArray(set, arr) {
  return arr.every((element) => set.has(element));
}
