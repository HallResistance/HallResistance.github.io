// main.js – Used for product-detail.html to set dynamic content

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const material = params.get('material');

  if (!material) return;

  const title = document.querySelector('h1');
  if (title) title.textContent = `Material: ${material}`;

  const image = document.querySelector('.image-preview img');
  if (image) image.src = `images/${material.toLowerCase()}-sample.jpg`;
  image.alt = `${material} Powder Sample`;

  // Optional: You can update chemical composition dynamically using a lookup object
  // Example:
  const compositions = {
    SS316: [
      { element: 'Fe', percent: 'Balance' },
      { element: 'Cr', percent: '16.5 – 18.5' },
      { element: 'Ni', percent: '10.0 – 14.0' },
      { element: 'Mo', percent: '2.0 – 3.0' }
    ],
    Ti64: [
      { element: 'Ti', percent: 'Balance' },
      { element: 'Al', percent: '5.5 – 6.75' },
      { element: 'V', percent: '3.5 – 4.5' }
    ]
  };

  const tbody = document.querySelector("table tbody");
  if (tbody && compositions[material]) {
    tbody.innerHTML = "";
    compositions[material].forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${row.element}</td><td>${row.percent}</td>`;
      tbody.appendChild(tr);
    });
  }
});
