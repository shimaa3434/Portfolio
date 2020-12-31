new Typewriter('#type', {
    strings: ['Web Designer', 'Web Developer', 'Typeist Arabic', 'Games Developer'],
    autoStart: true,
    loop: true,
  });

 

  $(document).ready(function(){
    $('#pagepiling').pagepiling({
      menu: null,
      direction: 'horizontal',
      sectionColor: ['#ffffff', '#cccccc', 'rgb(225, 107, 230)'],
      anchors: ['home', 'about', 'service', 'project', 'testimony', 'contact'],
      menu: '#mymenu',
      scrollingSpeed: 700,
      easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': 'rgb(225, 107, 230)',
            'bulletsColor': 'rgb(70, 1, 66)',
            'position': 'right',
            'tooltips': ['home', 'about', 'service', 'project', 'testimony', 'contact']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
    });
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    speed: 1000,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.burger').on('click', function(){
    $('.overlay').toggleClass('mob-active');
  });

  $('.filter-container').filterizr({
    animationDuration: 0.5,
  });

  });
  
  // new Filterizr('.filter-container', {
  //   animationDuration: 0.5,
  // });