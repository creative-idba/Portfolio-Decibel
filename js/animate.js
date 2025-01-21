//lokasi scroll
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  console.log(scroll)
});

// Animate Navbar
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 550);
});

// Animate Back top
window.addEventListener('scroll', function () {
  var backTop = document.querySelector('.back-top');
  var faArrowCircleUp = document.querySelector('.fa-circle-up');

  backTop.classList.toggle('back-topp', window.scrollY > 550);
  faArrowCircleUp.classList.toggle('faArrowCircleUp', window.scrollY > 550);
});

// Animate About
window.addEventListener('scroll', function () {
  var about = document.querySelector('.abh3');
  var aboutH4 = document.querySelector('.about-h4');
  var aboutP = document.querySelector('.about-p');

  about.classList.toggle('animate-abh3', window.scrollY > 470);
  aboutH4.classList.toggle('typing-about-h4', window.scrollY > 470);
  aboutP.classList.toggle('animate-abp', window.scrollY > 470);
});

// Animate Medsos
window.addEventListener('scroll', function () {
  var medsos = document.querySelector('.meh3');
  var medpani = document.querySelector('.medpani');
  var medpany = document.querySelector('.medpany');
  var medpanf = document.querySelector('.medpanf');
  var medpang = document.querySelector('.medpang');
  var medii = document.querySelector('#medii');
  var mediy = document.querySelector('#mediy');
  var medif = document.querySelector('#medif');
  var medig = document.querySelector('#medig');

  medsos.classList.toggle('animate-meh3', window.scrollY > 680);
  medpani.classList.toggle('scale-medsos-span', window.scrollY > 700  );
  medpany.classList.toggle('scale-medsos-span', window.scrollY > 700  );
  medpanf.classList.toggle('scale-medsos-span', window.scrollY > 700  );
  medpang.classList.toggle('scale-medsos-span', window.scrollY > 700  );
  medii.classList.toggle('rotate-medsos-i', window.scrollY > 700  );
  mediy.classList.toggle('rotate-medsos-y', window.scrollY > 700  );
  medif.classList.toggle('rotate-medsos-f', window.scrollY > 700  );
  medig.classList.toggle('rotate-medsos-g', window.scrollY > 700  );
});

// Animate Service
window.addEventListener('scroll', function () {
  var service = document.querySelector('.seh3');
  var seCol1 = document.querySelector('.container-service');

  service.classList.toggle('animate-seh3', window.scrollY > 900);
  seCol1.classList.toggle('animate-container-service', window.scrollY > 1000);
});

// Animate Projects
window.addEventListener('scroll', function () {
  var projects = document.querySelector('.proh3');
  var proCol1 = document.querySelector('.pro-col1');
  var proCol2 = document.querySelector('.pro-col2');
  var proCol3 = document.querySelector('.pro-col3');
  var proCol4 = document.querySelector('.pro-col4');

  projects.classList.toggle('animate-proh3', window.scrollY > 1100);
  proCol1.classList.toggle('animate-col1', window.scrollY > 1100);
  proCol2.classList.toggle('animate-col2', window.scrollY > 1100);
  proCol3.classList.toggle('animate-col3', window.scrollY > 1100);
  proCol4.classList.toggle('animate-col4', window.scrollY > 1100);
});