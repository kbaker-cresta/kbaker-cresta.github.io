function handleSearch(event) {
  if (event.key === 'Enter') {
    const val = event.target.value.toLowerCase();
    if (val.includes('784331')) {
      window.location.href = 'orders.html';
    } else {
      alert('For demo purposes, please search for PO: 784331');
    }
  }
}
