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

// Donation checkout — TODO: wire up Stripe
function checkout(amountInCents) {
  if (amountInCents === 0) {
    window.location.href = 'https://github.com/edgebric/edgebric/releases';
    return;
  }
  alert('Donation integration coming soon. Thank you for wanting to support Edgebric!');
}

function checkoutCustom() {
  var input = document.getElementById('custom-amount');
  var amount = parseInt(input.value, 10);
  if (isNaN(amount) || amount < 0) { input.style.borderColor = '#ef4444'; return; }
  input.style.borderColor = '';
  checkout(amount * 100);
}
