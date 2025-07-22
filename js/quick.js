async function quickSort(arr, low, high, bars) {
  if (low < high) {
    let pi = await partition(arr, low, high, bars);
    await quickSort(arr, low, pi - 1, bars);
    await quickSort(arr, pi + 1, high, bars);
  }
}

async function partition(arr, low, high, bars) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      await swap(i, j, bars);
    }
  }
  await swap(i + 1, high, bars);
  return i + 1;
}