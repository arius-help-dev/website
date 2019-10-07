$(".carousel-services-for-mobile").owlCarousel({
  loop: true,
  autoHeight: true,
  nav: true,
  navElement: 'a style="background-color: rgba(146, 85, 228 , 1); padding: 2px 8.22% 2px 8.22%; border-radius: 0px; border: solid 1px #fff; color: white; margin-left: 5px; margin-right: 5px"',
  navContainerClass: 'owl-nav justify-content-center d-flex mt-4',
  navText: [
    '<span aria-label="' + 'Previous' + '">&#x2039;&#x2039; Anterior</span>',
    '<span aria-label="' + 'Next' + '">Proximo &#x203a;&#x203a;</span>'
  ],
  navClass: [
    'owl-prev wow lightSpeedIn',
    'owl-next wow lightSpeedIn'
  ],
  margin: 40,
  responsive: {
    0: {
      items: 1
    },
    381: {
      items: 1.2
    },
    421: {
      items: 1.4
    },
    461: {
      items: 1.6
    },
    501: {
      items: 1.6
    },
    541: {
      items: 1.8
    },
    581: {
      items: 2
    },
  }
});