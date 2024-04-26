export default function appendToEachArrayValue(array, appendString) {
  let newArray = [];
  for (let index of array.keys()) {
    newArray.push(appendString + array[index]);
  }

  return newArray;
}
