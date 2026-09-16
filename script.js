/* Progressive enhancement: content and links work without JavaScript. */
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
function closeMenu(returnFocus = false) {
  if (!menuButton || !navigation) return;
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  document.body.classList.remove('menu-open');
  if (returnFocus) menuButton.focus();
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
const toolbar = document.querySelector('.project-toolbar');
if (toolbar) {
  const cards = [...document.querySelectorAll('.projects-section .project-card')];
  const search = toolbar.querySelector('input[type="search"]');
  const filters = [...toolbar.querySelectorAll('[data-filter]')];
  const count = document.querySelector('.results-count');
  const empty = document.querySelector('.empty-state');
  let category = 'All projects';
  function filterProjects() {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matches = (category === 'All projects' || card.dataset.category === category) && card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}${query ? ` matching “${search.value.trim()}”` : ''}`;
    empty.hidden = visible !== 0;
  }
  filters.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    filters.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
    filterProjects();
  }));
  search.addEventListener('input', filterProjects);
}
const dialog = document.querySelector('.figure-dialog');
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('.figure-expand').forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const figure = dialog.querySelector('img');
    figure.src = link.href;
    figure.alt = link.querySelector('img').alt;
    dialog.querySelector('p').textContent = link.dataset.caption;
    dialog.showModal();
  }));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
}
document.querySelectorAll('.gif-player').forEach(player => {
  const toggle = player.querySelector('.animation-toggle');
  const figure = player.querySelector('img');
  function stop() {
    figure.src = player.dataset.poster;
    toggle.setAttribute('aria-pressed', 'false');
    toggle.textContent = 'Play animation';
  }
  toggle.addEventListener('click', () => {
    if (toggle.getAttribute('aria-pressed') === 'true') return stop();
    figure.src = player.dataset.animation;
    toggle.setAttribute('aria-pressed', 'true');
    toggle.textContent = 'Stop animation';
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stop(); });
});
