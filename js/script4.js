//SCROLL
//about
$(document)
// .ready('.page-scroll')
.on('click', '.page-scrolla', function (e) {
  var destination = $(this).attr('href');
  // eslint-disable-next-line no-undef
  var elemenDestination = $(destination);

  $('html,body').animate(
    {
      scrollTop: elemenDestination.offset().top -65,
    },
    800
  );
  e.preventDefault();
});

//medsos
$(document)
// .ready('.page-scroll')
.on('click', '.page-scrollm', function (e) {
  var destination = $(this).attr('href');
  // eslint-disable-next-line no-undef
  var elemenDestination = $(destination);

  $('html,body').animate(
    {
      scrollTop: elemenDestination.offset().top -125,
    },
    800
  );
  e.preventDefault();
});

//portfolio
$(document)
// .ready('.page-scroll')
.on('click', '.page-scrollp', function (e) {
  var destination = $(this).attr('href');
  // eslint-disable-next-line no-undef
  var elemenDestination = $(destination);

  $('html,body').animate(
    {
      scrollTop: elemenDestination.offset().top -85,
    },
    800
  );
  e.preventDefault();
});