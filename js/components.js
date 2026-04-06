// Shared header + footer for all pages
// Usage: <script src="/js/components.js"></script> (or ../js/components.js)
// Place <div id="site-header"></div> and <div id="site-footer"></div> where nav/footer should go.

(function () {
  // Resolve asset paths: root pages use "" prefix, subdir pages use "../"
  var depth = (location.pathname.match(/\//g) || []).length - 1;
  var isSubdir = depth > 1 || /\/use-cases\//.test(location.pathname);
  var base = isSubdir ? '..' : '.';

  var headerEl = document.getElementById('site-header');
  if (headerEl) {
    headerEl.outerHTML =
      '<nav id="nav">' +
        '<div class="wrap nav-inner">' +
          '<a href="' + base + '/index.html" class="brand">' +
            '<img src="' + base + '/assets/circle-logo-white.svg" alt="" width="28" height="28">' +
            '<span>Edgebric</span>' +
          '</a>' +
          '<ul class="nav-links">' +
            '<li><a href="' + base + '/index.html#use-cases">Use Cases</a></li>' +
            '<li><a href="' + base + '/index.html#features">Features</a></li>' +
            '<li><a href="' + base + '/index.html#tools">Tools</a></li>' +
            '<li><a href="' + base + '/index.html#faq">FAQ</a></li>' +
            '<li><a href="https://docs.edgebric.com">Docs</a></li>' +
            '<li class="nav-icons"><a href="https://github.com/jerv/edgebric" target="_blank" title="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg></a><a href="https://x.com/edgebric" target="_blank" title="X / Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a></li>' +
            '<li><a href="#" class="btn-sm" onclick="event.preventDefault();var m=document.getElementById(\'sponsor-modal\');if(m)m.classList.add(\'open\')">Download</a></li>' +
          '</ul>' +
          '<button class="nav-toggle" onclick="document.getElementById(\'nav-mobile\').classList.toggle(\'open\')" aria-label="Menu">' +
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
          '</button>' +
        '</div>' +
      '</nav>' +
      '<div class="nav-mobile" id="nav-mobile">' +
        '<a href="' + base + '/index.html#use-cases" onclick="this.parentElement.classList.remove(\'open\')">Use Cases</a>' +
        '<a href="' + base + '/index.html#features" onclick="this.parentElement.classList.remove(\'open\')">Features</a>' +
        '<a href="' + base + '/tools.html" onclick="this.parentElement.classList.remove(\'open\')">Tools</a>' +
        '<a href="' + base + '/index.html#faq" onclick="this.parentElement.classList.remove(\'open\')">FAQ</a>' +
        '<a href="https://docs.edgebric.com" onclick="this.parentElement.classList.remove(\'open\')">Docs</a>' +
        '<a href="https://github.com/jerv/edgebric" onclick="this.parentElement.classList.remove(\'open\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>GitHub</a>' +
        '<a href="https://x.com/edgebric" onclick="this.parentElement.classList.remove(\'open\')"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>X / Twitter</a>' +
        '<a href="#" class="btn-sm" onclick="event.preventDefault();this.parentElement.classList.remove(\'open\');var m=document.getElementById(\'sponsor-modal\');if(m)m.classList.add(\'open\')">Download</a>' +
      '</div>';
  }

  function renderFooter() {
    var footerEl = document.getElementById('site-footer');
    if (!footerEl) return;
    footerEl.outerHTML =
      '<footer class="dark-alt">' +
        '<div class="wrap">' +
          '<div class="foot-inner">' +
            '<div class="foot-col">' +
              '<div class="foot-brand">' +
                '<img src="' + base + '/assets/circle-logo-white.svg" alt="" width="24" height="24">' +
                '<span>Edgebric</span>' +
              '</div>' +
              '<p>Private AI that runs on your hardware. Free and open source.</p>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h4>Use Cases</h4>' +
              '<a href="' + base + '/use-cases/professionals.html">Solo Professionals</a>' +
              '<a href="' + base + '/use-cases/personal.html">Personal &amp; Home</a>' +
              '<a href="' + base + '/use-cases/teams.html">Teams</a>' +
              '<a href="' + base + '/use-cases/legal.html">Legal &amp; Finance</a>' +
              '<a href="' + base + '/use-cases/sales.html">Sales &amp; Product</a>' +
              '<a href="' + base + '/use-cases/multi-office.html">Multi-Office</a>' +
              '<a href="' + base + '/use-cases/agents.html">AI Agents</a>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h4>Community</h4>' +
              '<a href="https://docs.edgebric.com">Docs</a>' +
              '<a href="https://github.com/jerv/edgebric/issues">Report a Bug</a>' +
              '<a href="' + base + '/index.html#tools">Tools</a>' +
              '<a href="https://github.com/sponsors/jerv"><svg width="12" height="12" viewBox="0 0 24 24" fill="#db61a2" style="vertical-align:-1px;margin-right:4px"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>Sponsor</a>' +
              '<div class="foot-social">' +
                '<a href="https://github.com/jerv/edgebric" target="_blank" title="GitHub"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg></a>' +
                '<a href="https://x.com/edgebric" target="_blank" title="X / Twitter"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>' +
              '</div>' +
            '</div>' +
            '<div class="foot-col">' +
              '<h4>Legal</h4>' +
              '<a href="' + base + '/privacy.html">Privacy Policy</a>' +
              '<a href="' + base + '/terms.html">Terms of Service</a>' +
              '<a href="mailto:support@edgebric.com">support@edgebric.com</a>' +
            '</div>' +
          '</div>' +
          '<div class="foot-bottom">' +
            '<p>AGPL 3.0 &mdash; Free and open source. Created by <a href="https://jeremyvenegas.com" style="color:#94a3b8;text-decoration:underline">Jeremy Venegas</a>.</p>' +
            '<img src="' + base + '/assets/numbat-white.svg" alt="" class="foot-numbat">' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  // Header renders immediately (script is at top of body).
  // Footer defers since site-footer div is at the bottom.
  if (document.getElementById('site-footer')) {
    renderFooter();
  } else {
    document.addEventListener('DOMContentLoaded', renderFooter);
  }
})();
