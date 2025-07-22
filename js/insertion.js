async function insertionSort(bars) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      bars[j + 1].style.height = `${array[j + 1]}px`;
      j--;
      await sleep(101 - document.getElementById('speedSlider').value);
    }
    array[j + 1] = key;
    bars[j + 1].style.height = `${key}px`;
  }
}