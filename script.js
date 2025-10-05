function calculateQuote() {
  const area = document.getElementById('area').value;
  const rate = document.getElementById('rate').value;
  const result = document.getElementById('result');

  if (area && rate) {
    const total = area * rate;
    result.textContent = `Estimated Cost: ₹${total.toLocaleString()}`;
  } else {
    result.textContent = 'Please enter both values.';
  }
}
