///////////////////////////////////////////////////////////
//Mobile navigation
const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

//Closing NAV after clicking link

// const btnInMobile = document
//   .querySelector('.nav-open')
//   .querySelector('.main-nav-link');

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionONasEl = document.querySelector('.section-onas');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add('sticky');

    if (ent.isIntersecting) document.body.classList.remove('sticky');
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

obs.observe(sectionONasEl);

///////////////////////////////////////////////////////////
// Oferta TAB BOX

const ofertaButtons = document.querySelectorAll('.btn_inactive');
const ofertaBtnContainer = document.querySelector('.ofert_ul');
const ofertaContent = document.querySelectorAll('.oferta_content');

ofertaBtnContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.btn_inactive');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  ofertaButtons.forEach(t => t.classList.remove('btn_active'));
  ofertaContent.forEach(r => r.classList.remove('oferta_content_active'));

  // Activate tab
  clicked.classList.add('btn_active');

  // Activate content area
  document
    .querySelector(`.oferta_content_${clicked.dataset.tab}`)
    .classList.add('oferta_content_active');
});
