function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap(i, j, bars) {
  [array[i], array[j]] = [array[j], array[i]];
  bars[i].style.height = `${array[i]}px`;
  bars[j].style.height = `${array[j]}px`;
  bars[i].style.background = 'yellow';
  bars[j].style.background = 'yellow';
  await sleep(101 - document.getElementById('speedSlider').value);
  bars[i].style.background = 'cyan';
  bars[j].style.background = 'cyan';
}