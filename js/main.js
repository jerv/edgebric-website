// Hero screenshot carousel
(function() {
  var slides = document.querySelectorAll('.hero-slide');
  if (slides.length <= 1) return;
  var visible = [];
  slides.forEach(function(s) { if (s.offsetWidth > 0 || s.tagName === 'IMG') visible.push(s); });
  if (visible.length <= 1) return;
  var current = 0;
  setInterval(function() {
    visible[current].classList.remove('active');
    current = (current + 1) % visible.length;
    visible[current].classList.add('active');
  }, 4000);
})();

// Use-case story nav
document.querySelectorAll('.uc-nav-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.uc-nav-btn').forEach(function(b) { b.classList.remove('active'); });
    document.querySelectorAll('.uc-story').forEach(function(s) { s.classList.remove('active'); });
    btn.classList.add('active');
    document.getElementById('story-' + btn.dataset.story).classList.add('active');
  });
});

// Architecture tabs
document.querySelectorAll('.arch-tab').forEach(function(tab) {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.arch-tab').forEach(function(t) { t.classList.remove('active'); });
    document.querySelectorAll('.arch-panel').forEach(function(p) { p.classList.remove('active'); });
    tab.classList.add('active');
    document.getElementById('arch-' + tab.dataset.arch).classList.add('active');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var item = btn.parentElement;
    var wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-i').forEach(function(el) { el.classList.remove('open'); });
    if (!wasOpen) item.classList.add('open');
  });
});

// Download / Donate
function setAmount(val) {
  document.getElementById('dl-amount').value = val;
  document.querySelectorAll('.dl-sug').forEach(function(b) { b.classList.remove('active'); });
  // highlight the clicked one
  document.querySelectorAll('.dl-sug').forEach(function(b) {
    if (b.textContent.trim() === '$' + val) b.classList.add('active');
  });
}

function handleDownload() {
  var input = document.getElementById('dl-amount');
  var amount = parseInt(input.value, 10);
  if (isNaN(amount) || amount < 0) { input.style.borderColor = '#ef4444'; return; }
  input.style.borderColor = '';
  if (amount === 0) {
    window.location.href = 'https://github.com/edgebric/edgebric/releases';
    return;
  }
  // TODO: redirect to Stripe Checkout with amount
  alert('Donation checkout coming soon — $' + amount + '. Thank you for supporting Edgebric!');
}

// Sync suggested buttons with manual input
(function() {
  var input = document.getElementById('dl-amount');
  if (!input) return;
  input.addEventListener('input', function() {
    document.querySelectorAll('.dl-sug').forEach(function(b) {
      b.classList.toggle('active', b.textContent.trim() === '$' + input.value);
    });
  });
})();
