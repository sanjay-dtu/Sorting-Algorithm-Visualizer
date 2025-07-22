async function mergeSort(arr, l, r, bars) {
  if (l >= r) return;
  let mid = Math.floor((l + r) / 2);
  await mergeSort(arr, l, mid, bars);
  await mergeSort(arr, mid + 1, r, bars);
  await merge(arr, l, mid, r, bars);
}

async function merge(arr, l, m, r, bars) {
  let left = arr.slice(l, m + 1);
  let right = arr.slice(m + 1, r + 1);
  let i = 0, j = 0, k = l;
  while (i < left.length && j < right.length) {
    arr[k] = (left[i] < right[j]) ? left[i++] : right[j++];
    bars[k].style.height = `${arr[k]}px`;
    await sleep(101 - document.getElementById('speedSlider').value);
    k++;
  }
  while (i < left.length) {
    arr[k] = left[i++];
    bars[k].style.height = `${arr[k]}px`;
    await sleep(101 - document.getElementById('speedSlider').value);
    k++;
  }
  while (j < right.length) {
    arr[k] = right[j++];
    bars[k].style.height = `${arr[k]}px`;
    await sleep(101 - document.getElementById('speedSlider').value);
    k++;
  }
}