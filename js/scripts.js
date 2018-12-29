/*===Drop Down Menu===*/
  jQuery(document).ready(function () {
	 jQuery('.navigation').meanmenu();
	});
/*===Top Fix Navi sticky-navigation===*/	
	 $(window).load(function(){
      $(".navbar-wrapper").sticky({ topSpacing: 0 });
    });
	
/*===animated===*/	
 var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false       // trigger animations on mobile devices (true is default)
  }
  );
  wow.init();
	
	
/*===Back to Top===*/  
  $(document).ready(function () {
     $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});