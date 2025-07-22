function startSort(type) {
  const bars = Array.from(container.children);
  if (type === 'bubble') bubbleSort(bars);
  else if (type === 'selection') selectionSort(bars);
  else if (type === 'insertion') insertionSort(bars);
  else if (type === 'merge') mergeSort(array, 0, array.length - 1, bars);
  else if (type === 'quick') quickSort(array, 0, array.length - 1, bars);
}