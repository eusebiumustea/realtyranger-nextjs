export function replaceElementAtIndex<T>(
  array: T[],
  index: number,
  newElement: T
) {
  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      const newArray = [...array];
      newArray[i] = newElement;
      return newArray;
    }
  }
  return array;
}
