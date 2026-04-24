/* Supply Core OS — Mobile sidebar toggle */
(function () {
  function init() {
    var sidebar  = document.getElementById('sidebar');
    var overlay  = document.getElementById('sidebar-overlay');
    var openBtn  = document.getElementById('hamburger-btn');

    if (!sidebar || !overlay || !openBtn) return;

    function open() {
      sidebar.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', open);
    overlay.addEventListener('click', close);

    // Close on nav-item tap (useful when navigating same page)
    sidebar.querySelectorAll('.nav-item').forEach(function (a) {
      a.addEventListener('click', close);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
