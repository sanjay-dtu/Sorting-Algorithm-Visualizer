const complexities = [
  ['Bubble Sort', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)'],
  ['Selection Sort', 'O(n²)', 'O(n²)', 'O(n²)', 'O(1)'],
  ['Insertion Sort', 'O(n)', 'O(n²)', 'O(n²)', 'O(1)'],
  ['Merge Sort', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'O(n)'],
  ['Quick Sort', 'O(n log n)', 'O(n log n)', 'O(n²)', 'O(log n)']
];

window.onload = () => {
  const table = document.getElementById('complexity-table');
  complexities.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
};