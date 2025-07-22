async function bubbleSort(bars) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) await swap(j, j + 1, bars);
    }
  }
}