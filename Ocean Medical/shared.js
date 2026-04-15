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

document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.querySelector('.sap-shell-menu-btn');
  var sidebar = document.querySelector('.sidebar');
  if (!menuBtn || !sidebar) return;

  menuBtn.addEventListener('click', function () {
    sidebar.classList.toggle('sidebar--collapsed');
    var collapsed = sidebar.classList.contains('sidebar--collapsed');
    menuBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    menuBtn.setAttribute('aria-label', collapsed ? 'Expand navigation' : 'Collapse navigation');
  });

  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Expand navigation');
});
