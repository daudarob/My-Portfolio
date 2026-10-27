(function () {
  var btn = document.getElementById('menuBtn');
  var links = document.getElementById('navLinks');
  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  var anchors = Array.prototype.slice.call(links.querySelectorAll('a[href^="#"]'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          anchors.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    anchors.forEach(function (a) {
      var s = document.querySelector(a.getAttribute('href'));
      if (s) io.observe(s);
    });
  }

  var copy = document.getElementById('copyEmail');
  var msg = document.getElementById('copied');
  copy.addEventListener('click', function () {
    var email = 'daudarob947@gmail.com';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(
        function () { msg.textContent = 'Email copied to clipboard.'; },
        function () { msg.textContent = 'Copy failed. Email me at ' + email; }
      );
    } else {
      msg.textContent = 'Email me at ' + email;
    }
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
