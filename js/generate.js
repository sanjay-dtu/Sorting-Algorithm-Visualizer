const container = document.getElementById('bar-container');
let array = [];

function generateBars() {
  container.innerHTML = '';
  let size = document.getElementById('sizeSlider').value;
  array = Array.from({ length: size }, () => Math.floor(Math.random() * 300) + 10);
  array.forEach(val => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${val}px`;
    bar.style.width = `${100 / size}%`;
    container.appendChild(bar);
  });
 


}
generateBars();